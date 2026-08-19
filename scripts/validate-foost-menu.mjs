import path from "node:path";
import { fileURLToPath } from "node:url";

import {
  compareDatasets,
  fetchFoostMenu,
  normalizeFoostMenu,
  readJson,
  verifyImageUrls,
} from "./foost-menu-core.mjs";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDirectory, "..");
const snapshot = await readJson(path.join(root, "src/data/foost-menu.snapshot.json"));
const official = normalizeFoostMenu(await fetchFoostMenu());
const mismatches = compareDatasets(official, snapshot);

if (mismatches.length) {
  console.error(`FOOST VALIDATION FAILED: ${mismatches.length} mismatch(es)`);
  console.error(JSON.stringify(mismatches.slice(0, 200), null, 2));
  process.exitCode = 1;
} else {
  const skipImages = process.argv.includes("--skip-images");
  const imageResult = skipImages ? { checked: 0, failures: [] } : await verifyImageUrls(official);
  if (imageResult.failures.length) {
    console.error(
      `FOOST IMAGE VALIDATION FAILED: ${imageResult.failures.length} inaccessible image(s)`,
    );
    console.error(JSON.stringify(imageResult.failures, null, 2));
    process.exitCode = 1;
  } else {
    console.log("FOOST VALIDATION: ZERO MISMATCHES");
    console.log(
      `Categories: ${official.categories.length} (${official.topLevelCategoryIds.length} displayed)`,
    );
    console.log(`Products: ${official.products.length}`);
    console.log(
      `Category assignments: ${official.products.reduce((count, product) => count + product.categoryAssignments.length, 0)}`,
    );
    console.log(`Images verified: ${imageResult.checked}`);
    console.log(`Missing official fields: ${official.missingOfficialFields.length}`);
  }
}
