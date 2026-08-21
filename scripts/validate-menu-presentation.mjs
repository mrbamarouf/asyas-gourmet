import path from "node:path";
import { fileURLToPath } from "node:url";

import { readJson } from "./foost-menu-core.mjs";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDirectory, "..");
const snapshot = await readJson(path.join(root, "src/data/foost-menu.snapshot.json"));
const config = await readJson(path.join(root, "src/data/menu-presentation.config.json"));

const errors = [];
const productIds = new Set(snapshot.products.map((product) => product.id));
const sourceCategoryIds = new Set(snapshot.categories.map((category) => category.id));
const ignoredSourceIds = new Set(config.ignoredSourceCategoryIds);
const groupById = new Map(config.groups.map((group) => [group.id, group]));
const categoryById = new Map(config.categories.map((category) => [category.id, category]));
const categoryBySourceId = new Map();
const categoryMemberships = new Map();

if (groupById.size !== config.groups.length) errors.push("Duplicate main group ID");
if (categoryById.size !== config.categories.length)
  errors.push("Duplicate presentation category ID");
for (const sourceCategoryId of ignoredSourceIds) {
  if (!sourceCategoryIds.has(sourceCategoryId)) {
    errors.push(`Ignored Foost category ${sourceCategoryId} does not exist`);
  }
}

for (const category of config.categories) {
  if (!groupById.has(category.groupId)) {
    errors.push(`Category ${category.id} references missing group ${category.groupId}`);
  }
  if (!sourceCategoryIds.has(category.sourceCategoryId)) {
    errors.push(
      `Category ${category.id} references missing Foost category ${category.sourceCategoryId}`,
    );
  }
  if (categoryBySourceId.has(category.sourceCategoryId) && !category.includeProductIds?.length) {
    errors.push(`Foost category ${category.sourceCategoryId} has ambiguous presentation mappings`);
  }
  if (!category.includeProductIds?.length)
    categoryBySourceId.set(category.sourceCategoryId, category.id);
  for (const productId of category.includeProductIds ?? []) {
    if (!productIds.has(productId))
      errors.push(`Category ${category.id} includes missing product ${productId}`);
    if (config.productOverrides[productId] !== category.id) {
      errors.push(`Included product ${productId} does not override to ${category.id}`);
    }
  }
}

for (const group of config.groups) {
  if (!group.categoryIds.length) errors.push(`Group ${group.id} is empty`);
  for (const categoryId of group.categoryIds) {
    categoryMemberships.set(categoryId, (categoryMemberships.get(categoryId) ?? 0) + 1);
    const category = categoryById.get(categoryId);
    if (!category) errors.push(`Group ${group.id} references missing category ${categoryId}`);
    else if (category.groupId !== group.id) {
      errors.push(`Category ${categoryId} belongs to ${category.groupId}, not ${group.id}`);
    }
  }
}

for (const category of config.categories) {
  const membershipCount = categoryMemberships.get(category.id) ?? 0;
  if (membershipCount !== 1) {
    errors.push(
      `Category ${category.id} belongs to ${membershipCount} main group entries instead of 1`,
    );
  }
}

const assigned = new Map();
for (const product of snapshot.products) {
  const override = config.productOverrides[product.id];
  let categoryId = override;
  if (!categoryId) {
    for (const assignment of product.categoryAssignments) {
      if (ignoredSourceIds.has(assignment.categoryId)) continue;
      const candidate = categoryBySourceId.get(assignment.categoryId);
      if (candidate) {
        categoryId = candidate;
        break;
      }
    }
  }

  if (!categoryId || !categoryById.has(categoryId)) continue;
  const entries = assigned.get(product.id) ?? [];
  entries.push(categoryId);
  assigned.set(product.id, entries);
}

for (const [productId, categoryId] of Object.entries(config.productOverrides)) {
  if (!productIds.has(productId)) errors.push(`Override references missing product ${productId}`);
  if (!categoryById.has(categoryId))
    errors.push(`Override references missing category ${categoryId}`);
}

const orphanProducts = snapshot.products.filter((product) => !assigned.has(product.id));
const duplicateProducts = [...assigned.entries()].filter(
  ([, categoryIds]) => categoryIds.length !== 1,
);
const targetIds = [
  ...config.groups.map((group) => `menu-group-${group.id}`),
  ...config.categories.map((category) => `menu-category-${category.id}`),
];
const brokenTargets = targetIds.length - new Set(targetIds).size;

if (orphanProducts.length) errors.push(`${orphanProducts.length} orphan product(s)`);
if (duplicateProducts.length)
  errors.push(`${duplicateProducts.length} duplicate primary assignment(s)`);
if (brokenTargets) errors.push(`${brokenTargets} duplicate navigation target(s)`);
if (assigned.size !== snapshot.products.length) {
  errors.push(`Assigned ${assigned.size}/${snapshot.products.length} products`);
}

for (const category of config.categories) {
  const itemCount = [...assigned.values()].filter((categoryIds) =>
    categoryIds.includes(category.id),
  ).length;
  if (!itemCount) errors.push(`Presentation category ${category.id} has no products`);
}

if (errors.length) {
  console.error("PRESENTATION TAXONOMY VALIDATION FAILED");
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log("PRESENTATION TAXONOMY: PASS");
  console.log(`Products accounted for: ${assigned.size}/${snapshot.products.length}`);
  console.log(`Main groups: ${config.groups.length}`);
  console.log(`Presentation categories: ${config.categories.length}`);
  console.log("Orphan products: 0");
  console.log("Duplicate primary assignments: 0");
  console.log("Broken category targets: 0");
}
