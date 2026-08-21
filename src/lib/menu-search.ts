import type { MenuCategory, MenuItem } from "@/data/menu";
import {
  PRESENTATION_MENU,
  type PresentationMenuCategory,
  type PresentationMenuGroup,
} from "@/lib/menu-taxonomy";

export interface MenuSearchEntry {
  item: MenuItem;
  sourceCategory: MenuCategory;
  presentationCategory: PresentationMenuCategory;
  group: PresentationMenuGroup;
}

interface IndexedMenuSearchEntry extends MenuSearchEntry {
  normalizedName: string;
  normalizedDescription: string;
  normalizedTaxonomy: string;
  order: number;
}

const ARABIC_DIACRITICS = /[\u0610-\u061a\u064b-\u065f\u0670\u06d6-\u06ed]/g;
const PUNCTUATION = /[\p{P}\p{S}]+/gu;

export function normalizeMenuSearch(value: string) {
  return value
    .normalize("NFKD")
    .replace(ARABIC_DIACRITICS, "")
    .replace(/ـ/g, "")
    .replace(/[أإآٱ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ؤ/g, "و")
    .replace(/ئ/g, "ي")
    .replace(/ة/g, "ه")
    .toLocaleLowerCase("en")
    .replace(PUNCTUATION, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const SEARCH_INDEX: IndexedMenuSearchEntry[] = PRESENTATION_MENU.flatMap((group, groupIndex) =>
  group.categories.flatMap((presentationCategory, categoryIndex) =>
    presentationCategory.items.map(({ item, sourceCategory }, itemIndex) => ({
      item,
      sourceCategory,
      presentationCategory,
      group,
      normalizedName: normalizeMenuSearch(`${item.name.ar} ${item.name.en}`),
      normalizedDescription: normalizeMenuSearch(`${item.description.ar} ${item.description.en}`),
      normalizedTaxonomy: normalizeMenuSearch(
        `${group.name.ar} ${group.name.en} ${presentationCategory.name.ar} ${presentationCategory.name.en}`,
      ),
      order: groupIndex * 10000 + categoryIndex * 1000 + itemIndex,
    })),
  ),
);

const SEARCH_ENTRY_BY_ITEM_ID = new Map(SEARCH_INDEX.map((entry) => [entry.item.id, entry]));

export function searchMenu(query: string): MenuSearchEntry[] {
  const normalizedQuery = normalizeMenuSearch(query);
  if (!normalizedQuery) return [];

  const tokens = normalizedQuery.split(" ");
  return SEARCH_INDEX.filter((entry) => {
    const haystack = `${entry.normalizedName} ${entry.normalizedDescription} ${entry.normalizedTaxonomy}`;
    return tokens.every((token) => haystack.includes(token));
  })
    .sort((left, right) => searchScore(left, normalizedQuery) - searchScore(right, normalizedQuery))
    .map(
      ({
        normalizedName: _name,
        normalizedDescription: _description,
        normalizedTaxonomy: _taxonomy,
        order: _order,
        ...entry
      }) => entry,
    );
}

export function menuSearchEntryForItem(itemId: string): MenuSearchEntry | undefined {
  const entry = SEARCH_ENTRY_BY_ITEM_ID.get(itemId);
  if (!entry) return undefined;
  const {
    normalizedName: _name,
    normalizedDescription: _description,
    normalizedTaxonomy: _taxonomy,
    order: _order,
    ...publicEntry
  } = entry;
  return publicEntry;
}

export function menuSearchIndexProductIds() {
  return SEARCH_INDEX.map((entry) => entry.item.id);
}

function searchScore(entry: IndexedMenuSearchEntry, query: string) {
  if (entry.normalizedName === query) return entry.order;
  if (entry.normalizedName.startsWith(query)) return 100000 + entry.order;
  if (entry.normalizedName.includes(query)) return 200000 + entry.order;
  if (entry.normalizedTaxonomy.includes(query)) return 300000 + entry.order;
  return 400000 + entry.order;
}
