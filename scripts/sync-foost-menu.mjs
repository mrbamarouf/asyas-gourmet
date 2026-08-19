import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { fetchFoostMenu, normalizeFoostMenu, readJson, writeJson } from "./foost-menu-core.mjs";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDirectory, "..");
const snapshotPath = path.join(root, "src/data/foost-menu.snapshot.json");
const reportPath = path.join(root, "reports/foost-menu-migration.json");

function extractLiteral(source, startMarker, endMarker) {
  const start = source.indexOf(startMarker);
  if (start < 0) return null;
  const valueStart = start + startMarker.length;
  const end = source.indexOf(endMarker, valueStart);
  if (end < 0) return null;
  return source.slice(valueStart, end + 1);
}

async function readLegacyDataset() {
  try {
    const menuSource = await fs.readFile(path.join(root, "src/data/menu.ts"), "utf8");
    const detailsSource = await fs.readFile(
      path.join(root, "src/data/officialFoostDetails.ts"),
      "utf8",
    );
    const itemLiteral = extractLiteral(menuSource, "const RAW_ITEMS = ", "] satisfies MenuItem[];");
    const categoryLiteral = extractLiteral(
      menuSource,
      "const RAW_CATEGORIES = ",
      '] satisfies Array<Omit<MenuCategory, "cover">>;',
    );
    const detailLiteral = extractLiteral(
      detailsSource,
      "export const OFFICIAL_ITEM_DETAILS = ",
      "} satisfies Record<string, OfficialFoostItemDetail>;",
    );
    if (!itemLiteral || !categoryLiteral || !detailLiteral) return null;

    const descriptions = new Proxy({}, { get: () => ({ ar: "", en: "" }) });
    const rawItems = Function(`"use strict"; return (${itemLiteral});`)();
    const rawCategories = Function(
      "CATEGORY_DESCRIPTIONS",
      `"use strict"; return (${categoryLiteral});`,
    )(descriptions);
    const details = Function(`"use strict"; return (${detailLiteral});`)();
    return {
      categories: rawCategories,
      products: rawItems.map((item) => ({ ...item, ...details[item.id] })),
    };
  } catch {
    try {
      return await readJson(snapshotPath);
    } catch {
      return null;
    }
  }
}

function mapById(values) {
  return new Map(values.map((value) => [value.id, value]));
}

function changedIds(before, after, selector) {
  const beforeMap = mapById(before);
  const afterMap = mapById(after);
  return [...afterMap.keys()].filter(
    (id) =>
      beforeMap.has(id) &&
      JSON.stringify(selector(beforeMap.get(id))) !== JSON.stringify(selector(afterMap.get(id))),
  );
}

function migrationReport(before, after) {
  const beforeCategories = before?.categories ?? [];
  const beforeProducts = before?.products ?? [];
  const afterCategoryIds = new Set(after.categories.map((category) => category.id));
  const beforeCategoryIds = new Set(beforeCategories.map((category) => category.id));
  const afterProductIds = new Set(after.products.map((product) => product.id));
  const beforeProductIds = new Set(beforeProducts.map((product) => product.id));

  return {
    generatedAt: new Date().toISOString(),
    before: { categoryCount: beforeCategories.length, productCount: beforeProducts.length },
    after: { categoryCount: after.categories.length, productCount: after.products.length },
    categoriesAdded: after.categories.filter((category) => !beforeCategoryIds.has(category.id)),
    categoriesRemoved: beforeCategories.filter((category) => !afterCategoryIds.has(category.id)),
    categoriesRenamed: changedIds(beforeCategories, after.categories, (category) => category.name),
    productsAdded: after.products.filter((product) => !beforeProductIds.has(product.id)),
    productsRemoved: beforeProducts.filter((product) => !afterProductIds.has(product.id)),
    productsRenamed: changedIds(beforeProducts, after.products, (product) => product.name),
    descriptionsChanged: changedIds(
      beforeProducts,
      after.products,
      (product) => product.description,
    ),
    pricesChanged: changedIds(beforeProducts, after.products, (product) => product.price),
    imagesChanged: changedIds(
      beforeProducts,
      after.products,
      (product) => product.sourceImageUrl ?? product.image ?? null,
    ),
    categoryAssignmentsChanged: changedIds(
      beforeProducts,
      after.products,
      (product) =>
        product.categoryAssignments ?? [{ categoryId: product.category, order: product.order }],
    ),
    missingOfficialFields: after.missingOfficialFields,
  };
}

const before = await readLegacyDataset();
const raw = await fetchFoostMenu();
const snapshot = normalizeFoostMenu(raw);
snapshot.syncedAt = new Date().toISOString();

await writeJson(reportPath, migrationReport(before, snapshot));
await writeJson(snapshotPath, snapshot);

console.log(`Foost snapshot written: ${path.relative(root, snapshotPath)}`);
console.log(
  `Categories: ${snapshot.categories.length} (${snapshot.topLevelCategoryIds.length} displayed)`,
);
console.log(`Products: ${snapshot.products.length}`);
console.log(`Missing official fields: ${snapshot.missingOfficialFields.length}`);
