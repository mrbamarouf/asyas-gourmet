import { CATEGORY_IDS, type MenuCategoryGroup } from "./menu";

export const REFERENCE_MENU_GROUPS: MenuCategoryGroup[] = [
  {
    id: "offers",
    name: { ar: "العروض", en: "Offers" },
    shortName: { ar: "العروض", en: "Offers" },
    blurb: {
      ar: "تشكيلات مشاركة مميزة من منيو أسيا.",
      en: "Signature sharing spreads from Asya's menu.",
    },
    categoryIds: [CATEGORY_IDS.happySpreads],
    quickJump: true,
  },
  {
    id: "breakfast",
    name: { ar: "الفطور", en: "Breakfast" },
    shortName: { ar: "الفطور", en: "Breakfast" },
    blurb: {
      ar: "بيض، بطاطس، وأطباق صباحية تركية.",
      en: "Eggs, potatoes, and Turkish morning plates.",
    },
    categoryIds: [
      CATEGORY_IDS.eggs,
      CATEGORY_IDS.flavoursOfAsyaS,
      CATEGORY_IDS.mrPotatoes,
    ],
    quickJump: true,
  },
  {
    id: "appetizers",
    name: { ar: "المقبلات", en: "Appetizers" },
    shortName: { ar: "المقبلات", en: "Appetizers" },
    blurb: {
      ar: "شوربات، سلطات، وأطباق خفيفة للمشاركة.",
      en: "Soups, salads, and small plates for the table.",
    },
    categoryIds: [
      CATEGORY_IDS.deliciousSoups,
      CATEGORY_IDS.greensAndFriends,
      CATEGORY_IDS.flavoursOfTheTable,
      CATEGORY_IDS.warmAndDeliciousStarts,
    ],
    quickJump: true,
  },
  {
    id: "mains",
    name: { ar: "الرئيسية", en: "Main Courses" },
    shortName: { ar: "الرئيسية", en: "Main Courses" },
    blurb: {
      ar: "معجنات تركية، بيتزا، باستا، وأطباق رئيسية مشبعة.",
      en: "Turkish breads, pizza, pasta, and satisfying main plates.",
    },
    categoryIds: [
      CATEGORY_IDS.ablaSHandmadeGozlemeAndBorek,
      CATEGORY_IDS.asyaSPremiumPideS,
      CATEGORY_IDS.pasta,
      CATEGORY_IDS.pizza,
      CATEGORY_IDS.mrToroSteakhouse,
    ],
    quickJump: true,
  },
  {
    id: "grills",
    name: { ar: "المشويات", en: "Grills" },
    shortName: { ar: "المشويات", en: "Grills" },
    blurb: {
      ar: "مشويات وطواجن تقدم ساخنة من المطبخ.",
      en: "Grills and casseroles served hot from the kitchen.",
    },
    categoryIds: [CATEGORY_IDS.grillAndCasserole],
    quickJump: true,
  },
  {
    id: "desserts",
    name: { ar: "الحلويات", en: "Desserts" },
    shortName: { ar: "الحلويات", en: "Desserts" },
    blurb: {
      ar: "حلويات تركية واختيارات حلوة من أسيا.",
      en: "Turkish sweets and house desserts.",
    },
    categoryIds: [CATEGORY_IDS.aSweetMemory, CATEGORY_IDS.turkishDessert],
    quickJump: true,
  },
  {
    id: "drinks",
    name: { ar: "المشروبات", en: "Drinks" },
    shortName: { ar: "المشروبات", en: "Drinks" },
    blurb: {
      ar: "قهوة، شاي، مشروبات باردة، واختيارات المعسل.",
      en: "Coffee, tea, cold drinks, and shisha selections.",
    },
    categoryIds: [
      CATEGORY_IDS.worldSCoffees,
      CATEGORY_IDS.tea,
      CATEGORY_IDS.coldCoffees,
      CATEGORY_IDS.specialIcedMatchas,
      CATEGORY_IDS.ourSignatures,
      CATEGORY_IDS.fromOurGarden,
      CATEGORY_IDS.homemadeIceTeasAndLemonades,
      CATEGORY_IDS.turkishTraditionalDrinks,
      CATEGORY_IDS.softDrinks,
      CATEGORY_IDS.milkshake,
      CATEGORY_IDS.shishaByCharming,
      CATEGORY_IDS.signatureShisha,
      CATEGORY_IDS.vipShisha,
    ],
    quickJump: true,
  },
];
