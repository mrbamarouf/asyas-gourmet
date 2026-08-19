// Generated from the official Foost menu snapshot. Run `npm run sync:foost` to refresh it.

import foostSnapshotJson from "./foost-menu.snapshot.json";

export type Locale = "ar" | "en";
export type LocalizedText = Record<Locale, string>;

export interface MenuOption {
  name: string;
  price: string;
  pricingType?: string;
  order?: number;
}

export interface MenuTag {
  key: string;
  label: LocalizedText;
}

export interface MenuRecommendation {
  id?: string;
  itemId: string;
  reason?: LocalizedText;
}

export interface MenuCategoryAssignment {
  categoryId: string;
  order: number;
}

export interface MenuItem {
  id: string;
  category: string;
  categoryAssignments: MenuCategoryAssignment[];
  name: LocalizedText;
  description: LocalizedText;
  price: string;
  priceValue?: number;
  currency?: string;
  image?: string;
  sourceImageUrl?: string;
  options?: MenuOption[];
  popular?: boolean;
  chef?: boolean;
  bakery?: boolean;
  turkishDrink?: boolean;
  order?: number;
  prepTime?: string;
  calories?: string;
  weight?: string;
  allergens?: MenuTag[];
  dietaryLabels?: MenuTag[];
  recommendations?: MenuRecommendation[];
}

export interface MenuCategory {
  id: string;
  name: LocalizedText;
  cover?: string;
  blurb?: LocalizedText;
  sourceImageUrl?: string;
  parentCategoryId?: string;
  subcategoryIds?: string[];
  order?: number;
}

export type MenuGroupId = string;

export interface MenuCategoryGroup {
  id: MenuGroupId;
  name: LocalizedText;
  shortName: LocalizedText;
  blurb: LocalizedText;
  categoryIds: string[];
  quickJump?: boolean;
  featuredOnly?: boolean;
}

interface FoostSnapshot {
  topLevelCategoryIds: string[];
  categories: Array<{
    id: string;
    parentCategoryId: string | null;
    subcategoryIds: string[];
    order: number;
    name: LocalizedText;
    description: LocalizedText;
    sourceImageUrl: string | null;
  }>;
  products: Array<{
    id: string;
    name: LocalizedText;
    description: LocalizedText;
    price: string;
    priceValue: number | null;
    sourceImageUrl: string | null;
    categoryAssignments: MenuCategoryAssignment[];
    options: Array<{
      name: string;
      price: string;
      pricingType: string | null;
      order: number;
    }>;
    prepTime: string;
    calories: string;
    weight: string;
    allergens: MenuTag[];
    dietaryLabels: MenuTag[];
    recommendations: Array<{
      id: string;
      itemId: string;
      reason: LocalizedText;
    }>;
    officialFlags: {
      isHighlight: boolean;
      newItemTag: boolean;
    };
  }>;
}

const FOOST_SNAPSHOT = foostSnapshotJson as FoostSnapshot;

export const RESTAURANT = {
  name: { ar: "أسيا جورميه", en: "Asya's Gourmet" },
  kicker: { ar: "مطعم ومخبز تركي", en: "Turkish Restaurant & Bakery" },
  tagline: { ar: "فطور تركي ومخبوزات ومشويات", en: "Turkish Breakfast, Bakery, and Grills" },
  phone: "+966536251814",
  whatsapp: "+966536251814",
  instagramUrl: "https://www.instagram.com/asyas.gourmet",
  menuSourceUrl: "https://qr.thefoost.com/asyas/?qr_source=qr_code",
  mapsUrl: "https://maps.app.goo.gl/QUcPv2DQpb89Wr4fA?g_st=ic",
  address: { ar: "الموقع على الخريطة", en: "Location on Maps" },
  hours: { ar: "تواصل معنا لمعرفة ساعات اليوم", en: "Contact us for today's hours" },
  currency: { ar: "ر.س", en: "SAR" },
};

export const CATEGORIES: MenuCategory[] = FOOST_SNAPSHOT.categories.map((category) => ({
  id: category.id,
  name: category.name,
  blurb: category.description,
  sourceImageUrl: category.sourceImageUrl ?? undefined,
  cover: category.sourceImageUrl ?? undefined,
  parentCategoryId: category.parentCategoryId ?? undefined,
  subcategoryIds: category.subcategoryIds,
  order: category.order,
}));

const CATEGORY_BY_ID = new Map(CATEGORIES.map((category) => [category.id, category]));

export const CATEGORY_ORDER: MenuCategoryGroup[] = FOOST_SNAPSHOT.topLevelCategoryIds.map(
  (categoryId) => {
    const category = CATEGORY_BY_ID.get(categoryId);
    if (!category) throw new Error(`Missing Foost category ${categoryId}`);

    return {
      id: category.id,
      name: category.name,
      shortName: category.name,
      blurb: category.blurb ?? { ar: "", en: "" },
      categoryIds: [category.id, ...(category.subcategoryIds ?? [])],
      quickJump: true,
    };
  },
);

export const CATEGORY_QUICK_JUMPS = CATEGORY_ORDER.filter((group) => group.quickJump);

export const ITEMS: MenuItem[] = FOOST_SNAPSHOT.products.map((product) => {
  const primaryAssignment = product.categoryAssignments[0];
  const sourceImageUrl = product.sourceImageUrl ?? undefined;

  return {
    id: product.id,
    category: primaryAssignment?.categoryId ?? "",
    categoryAssignments: product.categoryAssignments,
    name: product.name,
    description: product.description,
    price: product.price,
    priceValue: product.priceValue ?? undefined,
    sourceImageUrl,
    image: sourceImageUrl,
    options: product.options.map((option) => ({
      name: option.name,
      price: option.price,
      pricingType: option.pricingType ?? undefined,
      order: option.order,
    })),
    popular: product.officialFlags.isHighlight,
    chef: product.officialFlags.isHighlight,
    order: primaryAssignment?.order,
    prepTime: product.prepTime || undefined,
    calories: product.calories || undefined,
    weight: product.weight || undefined,
    allergens: product.allergens,
    dietaryLabels: product.dietaryLabels,
    recommendations: product.recommendations,
  };
});

const ITEM_BY_ID = new Map(ITEMS.map((item) => [item.id, item]));

const HOME_POPULAR_ITEM_IDS = [
  "e3c89499-bf61-4a1e-9191-3445228a9ee2",
  "502b7bd2-2ad7-4a03-9d96-30fb92d74098",
  "33c12c3e-1de8-4d9a-833c-9770603f05aa",
  "1ae0277d-4110-4b2b-ad0f-ebf2c6bbeaeb",
  "5e586ecb-4451-4e10-852d-96ec5a32f46e",
  "755a894d-bcec-4035-9aac-a5a4575a4670",
  "1bdacdb7-3add-4dad-bc1e-1bcc8b60a715",
  "bef4cfaf-a1da-4d59-a2e0-f53a99d3cf2f",
  "8f0dd89f-a75a-4c8b-a000-c96060303d3e",
  "38ec170c-750b-4fe4-a167-4cd1778648bc",
  "97c60f8a-309e-46fb-b100-da93a603410d",
  "7f704c10-78c1-4697-90d0-162cd7ce1cdb",
];

const HOME_BAKERY_ITEM_IDS = [
  "cf8b74da-b6fe-40f1-9a00-639a4de60168",
  "d44063ac-c32b-457a-b474-ced546d36818",
  "ead80465-de52-4268-ad38-30e2db704684",
  "6969f27d-684c-4725-9257-5e69733bc382",
  "1e6a71bd-c035-4e38-a510-413af41596e3",
  "7244ddca-2718-40e0-90bf-287718182154",
  "8507dfb1-80d8-4294-a8a6-0efa00e89e86",
  "345500b8-328d-4a72-9269-93c25bf75c1e",
  "c6e8da58-5274-42e3-9cfd-b2dda9ec1b57",
  "9e2677e4-b7fa-476a-8a1b-8996bce6c734",
];

function selectItems(ids: string[]) {
  return ids.map((id) => ITEM_BY_ID.get(id)).filter((item): item is MenuItem => Boolean(item));
}

export const POPULAR_ITEMS = selectItems(HOME_POPULAR_ITEM_IDS);
export const CHEF_PICK_ITEMS = POPULAR_ITEMS;
export const BAKERY_ITEMS = selectItems(HOME_BAKERY_ITEM_IDS);
export const TURKISH_DRINK_ITEMS = ITEMS.filter((item) =>
  item.categoryAssignments.some((assignment) =>
    [
      "503260fe-058c-4b7a-9dac-6035eb79d781",
      "8fc09a90-b4db-4681-8506-f430b7c1360d",
      "05d02beb-e1f6-4908-9b12-e2b69b1fafc1",
      "927fc8d2-117e-44b9-8ab5-08522f536d0f",
      "5c90c4d7-8c7b-4c07-86c0-531eea82ef0a",
      "99cd0bc2-d9cc-4ae5-be3a-ff6316b646b9",
      "cafb1cd7-1c37-430f-80a6-48cd5f213c4a",
      "634c84dd-5cf6-4e20-8270-3e2fbd61e850",
    ].includes(assignment.categoryId),
  ),
).slice(0, 10);
