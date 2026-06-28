import { CATEGORY_IDS, type MenuCategoryGroup } from "./menu";

export const REFERENCE_MENU_GROUPS: MenuCategoryGroup[] = [
  {
    id: "offers",
    name: { ar: "العروض", en: "Offers" },
    shortName: { ar: "العروض", en: "Offers" },
    blurb: {
      ar: "موائد فطور ومشاركة تجمع الأجبان، الزيتون، البيض، الخبز والشاي.",
      en: "Breakfast spreads with cheese, olives, eggs, bread, and tea.",
    },
    categoryIds: [CATEGORY_IDS.happySpreads],
    quickJump: true,
  },
  {
    id: "breakfast",
    name: { ar: "الفطور", en: "Breakfast" },
    shortName: { ar: "الفطور", en: "Breakfast" },
    blurb: {
      ar: "بيض بالمقلاة، بطاطس متبلة، وأطباق صباحية تركية.",
      en: "Skillet eggs, seasoned potatoes, and Turkish morning plates.",
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
      ar: "شوربات، سلطات، مزات باردة، وبدايات ساخنة للمشاركة.",
      en: "Soups, salads, cold meze, and hot starters for sharing.",
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
      ar: "بيدا، جوزلمة، باستا، بيتزا، وستيكات تقدم كطبق رئيسي.",
      en: "Pide, gozleme, pasta, pizza, and steaks served as main plates.",
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
      ar: "كباب، شيش، طواجن فخارية، وقطع لحم تشوى على الفحم.",
      en: "Kebabs, shish, clay casseroles, and charcoal-grilled cuts.",
    },
    categoryIds: [CATEGORY_IDS.grillAndCasserole],
    quickJump: true,
  },
  {
    id: "desserts",
    name: { ar: "الحلويات", en: "Desserts" },
    shortName: { ar: "الحلويات", en: "Desserts" },
    blurb: {
      ar: "بقلاوة، كنافة، تريليتشا، فواكه، وقشطة بالعسل.",
      en: "Baklava, kunefe, trilece, fruit, and cream with honey.",
    },
    categoryIds: [CATEGORY_IDS.aSweetMemory, CATEGORY_IDS.turkishDessert],
    quickJump: true,
  },
  {
    id: "drinks",
    name: { ar: "المشروبات", en: "Drinks" },
    shortName: { ar: "المشروبات", en: "Drinks" },
    blurb: {
      ar: "قهوة، شاي، عيران، عصائر، موهيتو، ومعسل بنكهات مختارة.",
      en: "Coffee, tea, ayran, juices, mojitos, and selected shisha flavors.",
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
