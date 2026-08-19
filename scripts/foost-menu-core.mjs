import fs from "node:fs/promises";

export const FOOST_SOURCE_URL = "https://qr.thefoost.com/asyas/?qr_source=qr_code";
export const FOOST_TENANT_ID = "ff882b6a-dc20-462e-9760-9d03ad2bed16";
export const FOOST_API_URL = `https://qr.thefoost.com/api/v1/tenants/${FOOST_TENANT_ID}/menu?lang=en`;

const TAG_LABELS = {
  "ingredients.containsDairy": { ar: "يحتوي على ألبان", en: "Contains Dairy" },
  "ingredients.containsEggs": { ar: "يحتوي على بيض", en: "Contains Eggs" },
  "ingredients.containsGluten": { ar: "يحتوي على غلوتين", en: "Contains Gluten" },
  "ingredients.containsNuts": { ar: "يحتوي على مكسرات", en: "Contains Nuts" },
  "ingredients.dairyFree": { ar: "خالٍ من الألبان", en: "Dairy-Free" },
  "ingredients.glutenFree": { ar: "خالٍ من الغلوتين", en: "Gluten-Free" },
  "ingredients.halal": { ar: "حلال", en: "Halal" },
  "ingredients.highProtein": { ar: "عالي البروتين", en: "High Protein" },
  "ingredients.nutFree": { ar: "خالٍ من المكسرات", en: "Nut-Free" },
  "ingredients.shellfishFree": { ar: "خالٍ من المحار", en: "Shellfish-Free" },
  "ingredients.signatureDish": { ar: "طبق مميز", en: "Signature Dish" },
  "ingredients.vegan": { ar: "نباتي بالكامل", en: "Vegan" },
  "ingredients.vegetarian": { ar: "نباتي", en: "Vegetarian" },
  "nutritionalInfo.lowCalorie": { ar: "منخفض السعرات", en: "Low Calorie" },
  "nutritionalInfo.noAddedSugar": { ar: "بدون سكر مضاف", en: "No Added Sugar" },
  "spicinessLevels.mild": { ar: "خفيف الحرارة", en: "Mild" },
  "spicinessLevels.spicy": { ar: "حار", en: "Spicy" },
  "spicinessLevels.verySpicy": { ar: "حار جدًا", en: "Very Spicy" },
};

export async function fetchFoostMenu() {
  const response = await fetch(FOOST_API_URL, {
    headers: { accept: "application/json" },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Foost API returned ${response.status} ${response.statusText}`);
  }

  return response.json();
}

function text(value) {
  return typeof value === "string" ? value : "";
}

function translationKey(entityType, entity) {
  return `${entity.parentCategoryId ? "subcategory" : entityType}-${entity.id}`;
}

function translatedText(raw, entityType, entity, fieldName, languageCode) {
  const records = raw.translations?.[translationKey(entityType, entity)] ?? [];
  const matches = records.filter(
    (record) => record.languageCode === languageCode && record.fieldName === fieldName,
  );
  return (
    text(matches.find((record) => record.translationMethod === "manual")?.translatedText) ||
    text(matches[0]?.translatedText)
  );
}

function localizedEntityText(raw, entityType, entity, fieldName, englishValue, missingFields) {
  const arabicValue = translatedText(raw, entityType, entity, fieldName, "ar");
  if (!arabicValue && englishValue) {
    missingFields.push({
      entityType,
      id: entity.id,
      name: text(entity.name),
      field: fieldName,
      locale: "ar",
    });
  }

  return { en: text(englishValue), ar: arabicValue };
}

function itemImage(product) {
  return (
    text(
      product.medias?.find((media) => media.productMediaType === "item_image" && media.fileUrl)
        ?.fileUrl,
    ) || null
  );
}

function categoryMedia(category) {
  return text(category.medias?.find((media) => media.fileUrl)?.fileUrl) || null;
}

function splitKeys(...values) {
  return [
    ...new Set(
      values
        .flatMap((value) => text(value).split(","))
        .map((value) => value.trim())
        .filter(Boolean),
    ),
  ];
}

function tags(keys) {
  return keys.map((key) => {
    const label = TAG_LABELS[key];
    if (!label) throw new Error(`Unsupported Foost metadata key: ${key}`);
    return { key, label };
  });
}

function categoryDisplayOrder(menu) {
  const ids = [];
  for (const block of menu?.display ?? []) {
    for (const entry of block.value ?? []) {
      if (entry.categoryId && !ids.includes(entry.categoryId)) ids.push(entry.categoryId);
    }
  }
  return ids;
}

function categoryAssignments(raw, productId, categoryIds) {
  return raw.productCategoryAssociations
    .filter(
      (association) =>
        association.productId === productId && categoryIds.has(association.categoryId),
    )
    .map((association) => ({
      categoryId: association.categoryId,
      order: Number.isFinite(association.order) ? association.order : 9999,
    }))
    .sort(
      (left, right) => left.order - right.order || left.categoryId.localeCompare(right.categoryId),
    );
}

function recommendationReason(raw, recommendation, missingFields) {
  const english = text(recommendation.description);
  const arabic = translatedText(raw, "recommendation", recommendation, "description", "ar");
  if (!arabic && english) {
    missingFields.push({
      entityType: "recommendation",
      id: recommendation.id,
      name: recommendation.recommendation?.name ?? recommendation.recommendationProductId,
      field: "description",
      locale: "ar",
      productId: recommendation.productId,
    });
  }
  return { en: english, ar: arabic };
}

export function normalizeFoostMenu(raw) {
  const defaultMenu = raw.menus?.find((menu) => menu.isDefault) ?? raw.menus?.[0];
  if (!defaultMenu) throw new Error("Foost response has no menu definition");

  const allCategories = raw.categories.filter((category) => !category.isArchived);
  const categoryIds = new Set(allCategories.map((category) => category.id));
  const topLevelCategoryIds = categoryDisplayOrder(defaultMenu);
  const missingFields = [];

  for (const categoryId of topLevelCategoryIds) {
    if (!categoryIds.has(categoryId)) {
      throw new Error(
        `Displayed Foost category is missing from the category payload: ${categoryId}`,
      );
    }
  }

  const displayIndex = new Map(topLevelCategoryIds.map((id, index) => [id, index + 1]));
  const categories = allCategories
    .map((category) => {
      const entityType = category.parentCategoryId ? "subcategory" : "category";
      return {
        id: category.id,
        parentCategoryId: category.parentCategoryId ?? null,
        subcategoryIds: (category.subCategories ?? []).map((subcategory) => subcategory.id),
        order: displayIndex.get(category.id) ?? Number(category.order ?? 9999),
        name: localizedEntityText(raw, entityType, category, "name", category.name, missingFields),
        description: localizedEntityText(
          raw,
          entityType,
          category,
          "description",
          category.description,
          missingFields,
        ),
        sourceImageUrl: categoryMedia(category),
      };
    })
    .sort((left, right) => {
      const leftTop = displayIndex.get(left.id) ?? Number.MAX_SAFE_INTEGER;
      const rightTop = displayIndex.get(right.id) ?? Number.MAX_SAFE_INTEGER;
      return leftTop - rightTop || left.order - right.order || left.id.localeCompare(right.id);
    });

  const recommendationsByProduct = new Map();
  for (const recommendation of raw.recommendations ?? []) {
    const entries = recommendationsByProduct.get(recommendation.productId) ?? [];
    entries.push({
      id: recommendation.id,
      itemId: recommendation.recommendationProductId,
      reason: recommendationReason(raw, recommendation, missingFields),
    });
    recommendationsByProduct.set(recommendation.productId, entries);
  }

  const products = raw.products
    .filter((product) => product.isActive && !product.isArchived)
    .map((product) => {
      const assignments = categoryAssignments(raw, product.id, categoryIds);
      const image = itemImage(product);
      const name = localizedEntityText(
        raw,
        "product",
        product,
        "name",
        product.name,
        missingFields,
      );
      const description = localizedEntityText(
        raw,
        "product",
        product,
        "fullDescription",
        product.fullDescription,
        missingFields,
      );

      if (!image) {
        missingFields.push({
          entityType: "product",
          id: product.id,
          name: text(product.name),
          field: "image",
          locale: null,
        });
      }
      if (!assignments.length) {
        missingFields.push({
          entityType: "product",
          id: product.id,
          name: text(product.name),
          field: "categoryAssignment",
          locale: null,
        });
      }

      const numericPrice = Number(product.price);
      return {
        id: product.id,
        name,
        description,
        price: text(product.price),
        priceValue: Number.isFinite(numericPrice) ? numericPrice : null,
        sourceImageUrl: image,
        categoryAssignments: assignments,
        options: (product.customOptions ?? [])
          .filter((option) => option.isActive)
          .map((option) => ({
            name: text(option.name),
            price: text(option.price),
            pricingType: text(option.pricingType) || null,
            order: Number.isFinite(option.order) ? option.order : 9999,
          }))
          .sort((left, right) => left.order - right.order),
        prepTime: text(product.servingTime),
        calories: text(product.calorie),
        weight: text(product.gram),
        allergens: tags(splitKeys(product.allergyWarnings)),
        dietaryLabels: tags(
          splitKeys(
            product.dietaryRestrictions,
            product.lifestyleChoices,
            product.spicinessLevels,
            product.nutritionalInformation,
            product.specialFeatures,
          ),
        ),
        recommendations: recommendationsByProduct.get(product.id) ?? [],
        officialFlags: {
          isHighlight: Boolean(product.isHighlight),
          newItemTag: Boolean(product.newItemTag),
        },
      };
    })
    .sort((left, right) => left.id.localeCompare(right.id));

  return {
    schemaVersion: 1,
    sourceUrl: FOOST_SOURCE_URL,
    apiUrl: FOOST_API_URL,
    tenantId: FOOST_TENANT_ID,
    mainLanguage: raw.tenantLanguages?.mainLanguage ?? "en",
    supportedLanguages: raw.tenantLanguages?.supportedMenuLanguages ?? ["en", "ar"],
    topLevelCategoryIds,
    categories,
    products,
    missingOfficialFields: missingFields.sort((left, right) =>
      `${left.entityType}:${left.id}:${left.field}:${left.locale ?? ""}`.localeCompare(
        `${right.entityType}:${right.id}:${right.field}:${right.locale ?? ""}`,
      ),
    ),
  };
}

export function comparableDataset(dataset) {
  return {
    schemaVersion: dataset.schemaVersion,
    tenantId: dataset.tenantId,
    mainLanguage: dataset.mainLanguage,
    supportedLanguages: dataset.supportedLanguages,
    topLevelCategoryIds: dataset.topLevelCategoryIds,
    categories: dataset.categories,
    products: dataset.products,
    missingOfficialFields: dataset.missingOfficialFields,
  };
}

function collectMismatches(expected, actual, path = "menu", output = []) {
  if (Object.is(expected, actual)) return output;

  if (Array.isArray(expected) || Array.isArray(actual)) {
    if (!Array.isArray(expected) || !Array.isArray(actual)) {
      output.push({ path, expected, actual });
      return output;
    }
    if (expected.length !== actual.length) {
      output.push({ path: `${path}.length`, expected: expected.length, actual: actual.length });
    }
    const length = Math.max(expected.length, actual.length);
    for (let index = 0; index < length; index += 1) {
      collectMismatches(expected[index], actual[index], `${path}[${index}]`, output);
    }
    return output;
  }

  if (expected && actual && typeof expected === "object" && typeof actual === "object") {
    const keys = [...new Set([...Object.keys(expected), ...Object.keys(actual)])].sort();
    for (const key of keys) {
      collectMismatches(expected[key], actual[key], `${path}.${key}`, output);
    }
    return output;
  }

  output.push({ path, expected, actual });
  return output;
}

export function compareDatasets(expected, actual) {
  return collectMismatches(comparableDataset(expected), comparableDataset(actual));
}

export async function readJson(path) {
  return JSON.parse(await fs.readFile(path, "utf8"));
}

export async function writeJson(path, value) {
  await fs.writeFile(path, `${JSON.stringify(value, null, 2)}\n`);
}

export async function verifyImageUrls(dataset) {
  const urls = [
    ...new Set(dataset.products.map((product) => product.sourceImageUrl).filter(Boolean)),
  ];
  const failures = [];
  let cursor = 0;

  async function worker() {
    while (cursor < urls.length) {
      const index = cursor;
      cursor += 1;
      const url = urls[index];
      try {
        let response = await fetch(url, { method: "HEAD", redirect: "follow" });
        if (!response.ok) {
          response = await fetch(url, {
            headers: { range: "bytes=0-0" },
            redirect: "follow",
          });
        }
        if (!response.ok) failures.push({ url, status: response.status });
      } catch (error) {
        failures.push({ url, error: error instanceof Error ? error.message : String(error) });
      }
    }
  }

  await Promise.all(Array.from({ length: Math.min(12, urls.length) }, () => worker()));
  return { checked: urls.length, failures };
}
