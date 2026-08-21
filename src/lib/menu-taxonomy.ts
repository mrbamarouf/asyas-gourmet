import presentationConfigJson from "@/data/menu-presentation.config.json";
import {
  CATEGORIES,
  ITEMS,
  type LocalizedText,
  type MenuCategory,
  type MenuItem,
} from "@/data/menu";

interface PresentationCategoryConfig {
  id: string;
  groupId: string;
  sourceCategoryId: string;
  name: LocalizedText;
  description: LocalizedText;
  includeProductIds?: string[];
}

interface PresentationGroupConfig {
  id: string;
  name: LocalizedText;
  allLabel: LocalizedText;
  description: LocalizedText;
  categoryIds: string[];
}

interface PresentationConfig {
  version: number;
  ignoredSourceCategoryIds: string[];
  groups: PresentationGroupConfig[];
  categories: PresentationCategoryConfig[];
  productOverrides: Record<string, string>;
}

export interface PresentationMenuItem {
  item: MenuItem;
  sourceCategory: MenuCategory;
  order: number;
}

export interface PresentationMenuCategory extends PresentationCategoryConfig {
  items: PresentationMenuItem[];
}

export interface PresentationMenuGroup extends PresentationGroupConfig {
  categories: PresentationMenuCategory[];
  itemCount: number;
}

const config = presentationConfigJson as PresentationConfig;
const sourceCategoryById = new Map(CATEGORIES.map((category) => [category.id, category]));
const categoryConfigById = new Map(config.categories.map((category) => [category.id, category]));
const presentationCategoryBySourceId = new Map(
  config.categories
    .filter((category) => !category.includeProductIds?.length)
    .map((category) => [category.sourceCategoryId, category.id]),
);
const ignoredSourceCategoryIds = new Set(config.ignoredSourceCategoryIds);

function resolvePresentationCategoryId(item: MenuItem) {
  const override = config.productOverrides[item.id];
  if (override) return override;

  for (const assignment of item.categoryAssignments) {
    if (ignoredSourceCategoryIds.has(assignment.categoryId)) continue;
    const categoryId = presentationCategoryBySourceId.get(assignment.categoryId);
    if (!categoryId) continue;
    return categoryId;
  }

  return undefined;
}

function itemOrderForCategory(item: MenuItem, category: PresentationCategoryConfig) {
  return (
    item.categoryAssignments.find(
      (assignment) => assignment.categoryId === category.sourceCategoryId,
    )?.order ?? Number.MAX_SAFE_INTEGER
  );
}

const itemsByPresentationCategory = new Map<string, PresentationMenuItem[]>();

for (const item of ITEMS) {
  const categoryId = resolvePresentationCategoryId(item);
  const category = categoryId ? categoryConfigById.get(categoryId) : undefined;
  if (!category) continue;
  const sourceCategory = sourceCategoryById.get(category.sourceCategoryId);
  if (!sourceCategory) continue;

  const entries = itemsByPresentationCategory.get(category.id) ?? [];
  entries.push({
    item,
    sourceCategory,
    order: itemOrderForCategory(item, category),
  });
  itemsByPresentationCategory.set(category.id, entries);
}

export const PRESENTATION_MENU: PresentationMenuGroup[] = config.groups.map((group) => {
  const categories = group.categoryIds.map((categoryId) => {
    const category = categoryConfigById.get(categoryId);
    if (!category) throw new Error(`Missing presentation category: ${categoryId}`);

    const items = [...(itemsByPresentationCategory.get(categoryId) ?? [])].sort(
      (left, right) => left.order - right.order || left.item.id.localeCompare(right.item.id),
    );
    return { ...category, items };
  });

  return {
    ...group,
    categories,
    itemCount: categories.reduce((count, category) => count + category.items.length, 0),
  };
});

export const PRESENTATION_CATEGORY_COUNT = PRESENTATION_MENU.reduce(
  (count, group) => count + group.categories.length,
  0,
);

export const PRESENTATION_PRODUCT_COUNT = PRESENTATION_MENU.reduce(
  (count, group) => count + group.itemCount,
  0,
);

export function presentationGroupTargetId(groupId: string) {
  return `menu-group-${groupId}`;
}

export function presentationCategoryTargetId(categoryId: string) {
  return `menu-category-${categoryId}`;
}

export function resolveLegacyMenuTarget(hash: string) {
  const value = decodeURIComponent(hash.replace(/^#/, ""));
  if (!value) return undefined;
  if (value.startsWith("menu-group-") || value.startsWith("menu-category-")) return value;

  const sourceCategoryId = value.startsWith("group-") ? value.slice(6) : value;
  const categoryId = presentationCategoryBySourceId.get(sourceCategoryId);
  if (!categoryId) return undefined;
  return presentationCategoryTargetId(categoryId);
}

export function presentationGroupForCategory(categoryId: string) {
  return PRESENTATION_MENU.find((group) =>
    group.categories.some((category) => category.id === categoryId),
  );
}

export function presentationCategoryFromTarget(targetId: string) {
  const categoryId = targetId.replace(/^menu-category-/, "");
  return PRESENTATION_MENU.flatMap((group) => group.categories).find(
    (category) => category.id === categoryId,
  );
}
