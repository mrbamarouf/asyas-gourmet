import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  CakeSlice,
  ChefHat,
  Clock,
  Coffee,
  CupSoda,
  ExternalLink,
  Flame,
  Home,
  Instagram,
  Languages,
  Leaf,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  Soup,
  Utensils,
  Wheat,
  X,
} from "lucide-react";
import {
  createContext,
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type ReactNode,
} from "react";

import {
  CATEGORIES,
  RESTAURANT,
  type Locale,
  type LocalizedText,
  type MenuCategory,
  type MenuItem,
} from "@/data/menu";
import { formatVisibleText, I18nContext, UI, useI18n, type UIKey } from "@/lib/i18n";

import desktopIntroVideo from "@/assets/asya-desktop-intro.mp4";
import mobileIntroVideo from "@/assets/asya-mobile-intro.mp4";
import logoImg from "@/assets/asyas-logo-transparent.png";
import placeholderImg from "@/assets/dish-placeholder.jpg";

export const softEase: [number, number, number, number] = [0.22, 1, 0.36, 1];
const LOCALE_STORAGE_KEY = "asyas-locale";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.18, ease: softEase },
  },
};

export const softScale: Variants = {
  hidden: { opacity: 0, scale: 0.985 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.18, ease: softEase },
  },
};

export const staggerChildren: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.03,
      staggerChildren: 0.03,
    },
  },
};

interface AsyaShellProps {
  children: ReactNode;
  current: "home" | "menu";
}

interface ItemDetailSelection {
  item: MenuItem;
  category: MenuCategory;
}

interface ItemDetailContextValue {
  openItemDetail: (selection: ItemDetailSelection) => void;
}

const ItemDetailContext = createContext<ItemDetailContextValue | null>(null);

const DESCRIPTION_DISPLAY_COPY: Record<string, LocalizedText> = {
  "e3c89499-bf61-4a1e-9191-3445228a9ee2": {
    ar: "مائدة فطور تركية تضم أجبانًا، فواكه موسمية، لبنة بالزعتر، جبنة سورك، زيتونًا، طحينة مع دبس، مربى، بيضًا مخفوقًا، خبزًا طازجًا وشايًا تركيًا.",
    en: "A Turkish breakfast spread with cheese, seasonal fruit, labneh with zaatar, surk cheese, olives, tahini with molasses, jams, scrambled eggs, fresh bread, and Turkish tea.",
  },
  "502b7bd2-2ad7-4a03-9d96-30fb92d74098": {
    ar: "مائدة فطور تجمع الأجبان، الطماطم، الخيار، الفواكه الموسمية، الزيتون، اللبنة، جبنة سورك، مينمين، بطاطس مقرمشة، محمرة، حمص، فول، مربى وشاي.",
    en: "A breakfast spread with cheese, tomatoes, cucumber, seasonal fruit, olives, labneh, surk cheese, menemen, crispy potatoes, muhammara, hummus, foul, jams, and tea.",
  },
  "33c12c3e-1de8-4d9a-833c-9770603f05aa": {
    ar: "فطور عائلي واسع مع أجبان، فواكه موسمية، خبز طازج، طماطم، زيتون، لبنة، جبنة سورك، مينمين، مقالي مشكلة، حمص، محمرة ومربيات.",
    en: "A generous family breakfast with cheeses, seasonal fruit, fresh bread, tomatoes, olives, labneh, surk cheese, menemen, mixed fried bites, hummus, muhammara, and jams.",
  },
  "54633c97-9b3d-44ce-a902-01f1430c260e": {
    ar: "ورق عنب ملفوف بحشوة أرز وأعشاب خفيفة، يقدم مع اللبن والليمون والتوابل العطرية.",
    en: "Rolled vine leaves filled with rice and herbs, served with yogurt, lemon, and aromatic spices.",
  },
  "04e64d7b-d691-48ee-9b7a-a2f978c3e09e": {
    ar: "مشروب شعير بارد بلون ذهبي ورغوة ناعمة، بنكهة مرارة خفيفة وقوام منعش.",
    en: "Chilled malt drink with a golden color, soft foam, light bitterness, and a crisp finish.",
  },
};

const ITEM_NAME_DISPLAY_COPY: Record<string, Partial<LocalizedText>> = {
  "38ec170c-750b-4fe4-a167-4cd1778648bc": { en: "Sunny Side Up" },
  "97c60f8a-309e-46fb-b100-da93a603410d": { en: "Farm-Style Scrambled Eggs" },
  "7f704c10-78c1-4697-90d0-162cd7ce1cdb": { en: "Boiled Eggs" },
  "a71b8968-9fff-47e1-8c1d-f74f500aa3c1": { en: "Boiled Eggs with Cheddar" },
  "aa0cfbca-91ae-4fb7-97ef-4fc420523a51": { en: "Hatay Katikli Bread" },
  "0a20ce3f-736d-4b27-bdcc-5aa86dcafad6": { en: "Tandir Bread" },
  "44ee2cb1-0808-4e9e-982d-66f24c1d45e9": { en: "Caesar Chicken Salad" },
  "c57fd7db-3ee3-4061-a470-dc6c19f9e2f5": { en: "Baba Ghanoush" },
  "9bdb2b3e-9591-4fd4-8860-a67c47440f04": { en: "Kibbeh" },
  "adcb8284-7343-44da-a287-e1582946148f": { en: "Mixed Grill for One" },
  "896932b6-dc0c-4ab5-913e-6ba142bfc030": { en: "Entrecote" },
  "bff7822d-ed45-48d6-bdee-524040ba5ee5": { en: "Beef Shashlik with Cheddar" },
  "744474c5-cf88-4c22-bf13-6e05e38ff5c6": { en: "Cold Baklava with Milk" },
  "c8c42df3-a6cf-4e2d-b900-0005fc67e07a": { en: "Fruit Plate" },
  "de24fecc-4ce3-484f-a34e-3a7d41b29137": { en: "Mastic Turkish Coffee" },
  "a55cdfa6-fee8-46c1-a474-c5ab8922066c": { en: "V60 Hot Drip Coffee" },
  "73af14bc-7343-4743-bcb1-776629f14d1b": { en: "Karak Tea for Two" },
  "c97ed7b7-c24c-4bf8-af71-6378bcbe56e3": { en: "Iced Spanish Latte" },
  "7df74560-803f-4170-9d26-8d254be2e1ac": { en: "Iced Latte" },
  "29ac4114-6af6-441f-b56b-d0ac4d34d758": { en: "Iced White Chocolate Mocha" },
  "fca2bd66-4d04-4631-8636-0186f5040191": { en: "Iced Americano" },
  "e3b8b4f5-d415-4ff7-bd2d-ee666c77193d": { en: "Iced Mocha" },
  "5303aeee-379d-423a-b655-7a2ce5a53340": { en: "Iced Drip Coffee" },
  "8dc252c0-789f-4024-9414-67faa20f33d8": { en: "Mixed Berry Mojito" },
  "a65088c9-ee60-43df-be57-1e77c7380923": { en: "Asya's Special" },
  "0e7f4325-c3a2-4f4d-bb92-0d2a98cc53fc": { en: "Passion Mango Frozen" },
  "b1268bb2-150f-4ca7-afb5-f2fa21507da5": { en: "Mixed Berry Lemonade" },
  "c3d5aaa1-b279-47a7-b745-dbf27c322d41": { en: "Ayran with Mint" },
  "dddaadc3-9bae-40fb-b7fd-54adcaa41017": { en: "Ayran with Basil" },
  "a1f1dab3-f336-4ab4-ad82-8122687ec772": { en: "Ayran with Soda" },
  "3139c3c3-4c00-4286-b4f1-01dab882d635": { en: "Ayran with Cucumber" },
  "10669c1f-596c-4f5f-80a5-d05811ffd71a": { en: "Red Bull" },
  "9f623f75-c40d-47fd-8c3f-eebdab56fa9a": { en: "Chocolate Milkshake" },
  "dddfd6aa-96f8-4067-b566-8509c8c74636": { en: "Strawberry Milkshake" },
  "728a1cd6-4c57-4509-ab09-aafc279d3947": { en: "Banana Milkshake" },
  "04e64d7b-d691-48ee-9b7a-a2f978c3e09e": { ar: "مشروب شعير", en: "Malt Drink" },
  "77a04025-581e-410b-b70b-bb2c4de5a648": { en: "Double Apple Fakher" },
  "66543356-1b79-497f-ab11-9fe41362d9c3": { en: "Double Apple Nakhla" },
  "4bc33733-c8cf-48a5-8ff7-f2ccdfd7cadf": { en: "Double Apple Mix" },
  "35a25c13-d0b9-46e7-a712-630cf9928e0d": { en: "Grape" },
  "e26bbf68-0d59-44de-b1b2-c447761acf20": { en: "Grape Berry" },
  "72cd40c5-5475-4d48-9e56-4d0ea5510c60": { en: "Grape Mint" },
  "2b92aa34-e5aa-4a63-971f-a18a610c746c": { en: "Mint" },
  "726653ff-c498-403e-bc48-8c4100ed7efd": { en: "Blueberry" },
  "7f1899d8-36b3-4250-9d32-7a1d0bd6f6d6": { en: "Lemon Mint" },
  "7375d7eb-72c4-40cc-99b5-b8ae81403424": { en: "Gum" },
  "975f95ee-5971-4e1b-9c0b-f0c4d484aa1a": { en: "Watermelon" },
  "3b1c0c76-0809-4459-92cf-adff4d03dff8": { en: "Love 66" },
  "86820d79-cb6d-4bca-8e52-c539bd47d7a9": { en: "Peach" },
  "7b6de15e-fa0e-4c9e-909d-f7432a09fdf4": { en: "Orange Mint" },
  "6565c206-6158-4af0-a778-591bafdef0b0": { en: "Gum Mint" },
  "00eeda4e-667c-45ac-8eea-dc5d2b5341a0": { en: "Mastic" },
  "ade9d7d4-01d5-4d52-9d1d-89e189d3fc70": { en: "Gum Cinnamon" },
  "25fedaab-c4ad-4005-9ce9-c5f5c6eb51a5": { en: "Ruby Crush" },
  "a103a19f-8c77-4c08-a9bf-e89a175412f3": { en: "By Charming Special" },
  "fea3edb5-2fb2-4898-973e-79dffee34090": { en: "Dubai" },
  "83979ed6-5b12-4aca-8a70-3f44ed9c61f5": { en: "Nol Gradus" },
  "aa2525eb-504a-4257-abbc-60a182e8e790": { en: "Marbella" },
  "3e08c664-b982-41e3-b325-ab68a12f01b5": { en: "Hattrick" },
  "defa0901-7a2a-467e-ba6a-af3e38979e22": { en: "Last Puff" },
  "db22797e-d091-466c-9684-128d3f23dec1": { en: "Kokaya" },
  "7920a33a-ab56-49af-8a0b-1528186ae540": { en: "Anima" },
};

export function useItemDetail(): ItemDetailContextValue {
  const context = useContext(ItemDetailContext);
  if (!context) {
    return { openItemDetail: () => undefined };
  }
  return context;
}

export function localizeMenuText(text: LocalizedText, locale: Locale) {
  return cleanLocalizedMenuText(text[locale], locale);
}

export function localizeMenuItemName(item: MenuItem, locale: Locale) {
  const override = ITEM_NAME_DISPLAY_COPY[item.id]?.[locale];
  return override ? formatVisibleText(override, locale) : localizeMenuText(item.name, locale);
}

export function localizeMenuDescription(item: MenuItem, category: MenuCategory, locale: Locale) {
  const rawDescription = cleanDescriptionCopy(
    cleanLocalizedMenuText(item.description[locale], locale),
    locale,
  );
  return polishMenuDescription(rawDescription, item, category, locale);
}

function cleanLocalizedMenuText(value: string | undefined, locale: Locale) {
  if (!value) return "";

  const cleaned = value
    .replace(/\r\n/g, "\n")
    .replace(/\s*\d+:T[0-9A-Za-z]+,[\s\S]*$/g, "")
    .replace(/\s*[$0-9A-Za-z]+:T[0-9A-Za-z]*\s*$/g, "")
    .trim();

  if (!cleaned || /^\$?[0-9A-Fa-f]{1,8}$/.test(cleaned)) return "";
  if (locale === "ar") {
    const arabicOnly = formatVisibleText(
      cleaned
        .replace(/\s*\([^)]*[\p{Script=Latin}][^)]*\)/gu, "")
        .replace(/[\p{Script=Latin}][\p{Script=Latin}\p{Number}\s.'’&+-]*/gu, "")
        .replace(/\s{2,}/g, " ")
        .replace(/\s+([،.])/g, "$1")
        .trim(),
      locale,
    );

    return /[\u0600-\u06FF]/.test(arabicOnly) ? arabicOnly : "";
  }
  return /[A-Za-z]/.test(cleaned) ? cleaned : "";
}

function cleanDescriptionCopy(value: string, locale: Locale) {
  if (!value) return "";

  if (locale === "ar") {
    return formatVisibleText(
      value
        .replace(/[A-Za-z]+/g, "")
        .replace(/\s{2,}/g, " ")
        .trim(),
      locale,
    );
  }

  return value
    .replace(/[—_|]/g, ",")
    .replace(/::/g, ":")
    .replace(/…/g, ".")
    .replace(/\.{2,}/g, ".")
    .replace(/\s+/g, " ")
    .replace(/[\u0600-\u06FF]+/g, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function polishMenuDescription(
  value: string,
  item: MenuItem,
  category: MenuCategory,
  locale: Locale,
) {
  const override = DESCRIPTION_DISPLAY_COPY[item.id]?.[locale];
  if (override) return formatVisibleText(override, locale);

  const itemName = localizeMenuItemName(item, locale);
  const categoryName = cleanLocalizedMenuText(category.name[locale], locale);
  const fallback = fallbackMenuDescription(item, category, locale, itemName, categoryName);
  const normalized = stripMenuFiller(value, locale);
  if (!normalized || normalized.length < (locale === "ar" ? 18 : 24)) return fallback;

  const badSentence =
    locale === "ar"
      ? /(تجربة|رحلة|لحظة|الجماليات|الجوال|الصور|الأسعار|مصدر|رسمي|واجهة|تصفح|أفضل|واضح|مفعم|نابض|حيوية|ممتعة|لا يقاوم|لا تُقاوم)/
      : /(experience|journey|moment|aesthetic|website|mobile|image|price|source|official|interface|browse|scan|clear photos|best|vibrant|unforgettable)/i;

  const sentences = normalized
    .split(/(?<=[.!؟])\s+/u)
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length > 8 && !badSentence.test(sentence));

  if (!sentences.length) return fallback;

  const selected = sentences.slice(0, 2).join(" ").replace(/\s+/g, " ").trim();
  const limit = locale === "ar" ? 220 : 230;
  return clipDescription(selected, locale, limit);
}

function stripMenuFiller(value: string, locale: Locale) {
  let text = formatVisibleText(value.replace(/\s+/g, " ").trim(), locale);
  if (!text) return "";

  if (locale === "ar") {
    return formatVisibleText(
      text
        .replace(/ابدأ يومك[^.]*\./g, "")
        .replace(/هذه المائدة[^.]*\./g, "")
        .replace(/مستوحاة من[^.]*\./g, "")
        .replace(/بعناية فائقة/g, "")
        .replace(/بعناية/g, "")
        .replace(/مثالي(?:ة|ًا|ا)?/g, "متوازن")
        .replace(/نابضة بالحياة/g, "طازجة")
        .replace(/نابض بالحياة/g, "طازج")
        .replace(/نابضة بالحيوية/g, "غنية بالخضار")
        .replace(/نابض بالحيوية/g, "غني بالخضار")
        .replace(/مليء بالحيوية/g, "منعش")
        .replace(/مليئة بالحيوية/g, "منعشة")
        .replace(/لمسة ممتعة/g, "لمسة منعشة")
        .replace(/مصدر واحد/g, "منشأ واحد")
        .replace(/أفضل طعم/g, "طعم طازج")
        .replace(/تجربة إفطار كلاسيكية/g, "فطورًا كلاسيكيًا")
        .replace(/تجربة تحلية/g, "تحلية")
        .replace(/تجربة إفطار/g, "فطورًا")
        .replace(/تجربة غنية/g, "نكهة غنية")
        .replace(/تجربة شهية/g, "مائدة شهية")
        .replace(/للتجربة/g, "للنكهة")
        .replace(/لتجربة/g, "لنكهة")
        .replace(/مفعم(?:ة)?[^.،]*/g, "")
        .replace(/لا تُقاوم|لا تقاوم/g, "غنية")
        .replace(/تجربة/g, "نكهة")
        .replace(/رحلة/g, "مائدة")
        .replace(/لحظة/g, "لقمة")
        .replace(/الألوان/g, "المكونات")
        .replace(/ممتعة/g, "شهية")
        .replace(/ممتع/g, "غني")
        .replace(/طازجة وطازجة/g, "طازجة")
        .replace(/متوازنً بين/g, "متوازن بين")
        .replace(/الشرق الاوسط/g, "الشرق الأوسط")
        .replace(/\s+([،.])/g, "$1")
        .replace(/\s{2,}/g, " ")
        .trim(),
      locale,
    );
  }

  return text
    .replace(/Start your day not just with breakfast, but with[^.]*\./gi, "")
    .replace(/This special table from Asya's kitchen is designed to give you[^.]*\./gi, "")
    .replace(/^Inspired by[^.]*\./gi, "")
    .replace(/\b(carefully|perfectly|delicately|expertly|truly)\s+/gi, "")
    .replace(/\bfresh and vibrant\b/gi, "fresh")
    .replace(/\bA vibrant\b/g, "A fresh")
    .replace(/\bvibrant\b/gi, "fresh")
    .replace(/\bplayful\b/gi, "hearty")
    .replace(/the perfect balance of/gi, "a balanced mix of")
    .replace(/blended to perfection/gi, "blended with milk")
    .replace(/delightfully sweet/gi, "naturally sweet")
    .replace(/\b(irresistibly|beautifully)\s+/gi, "")
    .replace(/\bgill\b/gi, "garlic")
    .replace(/\bA fresh omelette filled with fresh\b/gi, "A vegetable omelette filled with")
    .replace(/single source/gi, "single-origin")
    .replace(/best flavor/gi, "fresh flavor")
    .replace(/\bcrafted\b/gi, "made")
    .replace(/\bdesigned\b/gi, "prepared")
    .replace(/dessert experience/gi, "dessert")
    .replace(/breakfast experience/gi, "breakfast")
    .replace(/flavor experience/gi, "flavor")
    .replace(/taste experience/gi, "flavor")
    .replace(/\bexperience\b/gi, "dish")
    .replace(/\bjourney\b/gi, "dish")
    .replace(/\bmoment\b/gi, "bite")
    .replace(/\sin every bite\b/gi, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function fallbackMenuDescription(
  item: MenuItem,
  category: MenuCategory,
  locale: Locale,
  itemName: string,
  categoryName: string,
) {
  const englishName = item.name.en.toLowerCase();
  const englishCategory = category.name.en.toLowerCase();

  if (locale === "ar") {
    if (/shisha/i.test(englishCategory)) {
      return `معسل ${itemName} بنكهة مركزة ودخان ناعم، يُحضّر للطلب ويُقدّم على الطاولة.`;
    }
    if (/rice/i.test(englishName)) return "أرز أبيض مطهو بالبخار، يُقدّم ساخنًا بجانب المشويات والطواجن.";
    if (/bulgur/i.test(englishName)) return "برغل مطهو بصلصة طماطم خفيفة، يُقدّم دافئًا بجانب المشويات.";
    if (/beyti/i.test(englishName)) return "لحم مفروم متبل يُشوى على الفحم، يلف بخبز رقيق ويُقدّم مع صلصة الطماطم واللبن.";
    if (/katikli/i.test(englishName)) return "خبز هاتاي رقيق يُخبز مع معجون الفلفل والأعشاب، ويُقدّم ساخنًا.";
    if (/tandir/i.test(englishName)) return "خبز تندور تركي بقوام طري وأطراف خفيفة القرمشة، يُقدّم مع الفطور والمقبلات.";
    if (/sparkling water/i.test(englishName)) return "مياه فوارة باردة بفقاعات ناعمة، تُقدّم لإنعاش المذاق بين الأطباق.";
    if (/water/i.test(englishName)) return "مياه باردة تُقدّم مع الوجبة.";
    if (/coffee|espresso|latte|mocha|cortado|americano|cappuccino/i.test(englishCategory + englishName)) {
      return `${itemName} تُحضّر من القهوة والحليب أو الماء حسب الصنف، وتُقدّم بنكهة متوازنة.`;
    }
    if (/tea/i.test(englishCategory + englishName)) {
      return `${itemName} يُحضّر من أوراق الشاي ويُقدّم ساخنًا أو باردًا حسب الصنف.`;
    }
    if (/drink|juice|mojito|lemonade|ayran|soft/i.test(englishCategory + englishName)) {
      return `${itemName} مشروب بارد بنكهة متوازنة، يُقدّم منعشًا مع الوجبة.`;
    }
    return `${itemName} من قسم ${categoryName}، يُحضّر في مطبخ أسيا ويُقدّم على المائدة.`;
  }

  if (/shisha/i.test(englishCategory)) {
    return `${itemName} shisha with a clean aroma and smooth smoke, prepared to order and served at the table.`;
  }
  if (/rice/i.test(englishName)) return "Steamed white rice served hot as a side for grills and casseroles.";
  if (/bulgur/i.test(englishName)) return "Bulgur cooked with light tomato sauce and served warm beside the grills.";
  if (/beyti/i.test(englishName)) return "Seasoned minced meat grilled over charcoal, wrapped in thin bread, and served with tomato sauce and yogurt.";
  if (/katikli/i.test(englishName)) return "Thin Hatay bread baked with pepper paste and herbs, served hot from the oven.";
  if (/tandir/i.test(englishName)) return "Turkish tandoor bread with a soft center and lightly crisp edges, served with breakfast and meze.";
  if (/sparkling water/i.test(englishName)) return "Chilled sparkling water with fine bubbles, served to refresh the palate between dishes.";
  if (/water/i.test(englishName)) return "Chilled water served with the meal.";
  if (/coffee|espresso|latte|mocha|cortado|americano|cappuccino/i.test(englishCategory + englishName)) {
    return `${itemName} prepared with coffee and milk or water, served with a balanced flavor.`;
  }
  if (/tea/i.test(englishCategory + englishName)) {
    return `${itemName} brewed with tea leaves and served hot or chilled according to the recipe.`;
  }
  if (/drink|juice|mojito|lemonade|ayran|soft/i.test(englishCategory + englishName)) {
    return `${itemName} served chilled with a balanced, refreshing flavor.`;
  }
  return `${itemName} from the ${categoryName} selection, prepared in Asya's kitchen and served at the table.`;
}

function ending(locale: Locale, value: string) {
  return /[.!؟]$/.test(value) ? "" : locale === "ar" ? "." : ".";
}

export function compactOfficialDescription(value: string, locale: Locale) {
  if (!value) return "";

  const limit = locale === "ar" ? 170 : 185;
  const normalized = formatVisibleText(value, locale).replace(/\s+/g, " ").trim();
  return clipDescription(normalized, locale, limit);
}

function clipDescription(value: string, locale: Locale, limit: number) {
  const normalized = formatVisibleText(value, locale).replace(/\.{2,}/g, ".").replace(/\s+/g, " ").trim();
  if (!normalized) return "";
  if (normalized.length <= limit) return normalized.replace(/[،,;:]$/g, "") + ending(locale, normalized);

  const firstSentence = normalized.match(/^.*?[.!؟](?:\s|$)/u)?.[0]?.trim();
  if (firstSentence && firstSentence.length <= limit) {
    return firstSentence.replace(/[،,;:]$/g, "") + ending(locale, firstSentence);
  }

  const clauses = normalized.split(/(?<=[،,;])\s+/u);
  let excerpt = "";
  for (const clause of clauses) {
    const next = `${excerpt}${excerpt ? " " : ""}${clause}`.trim();
    if (next.length > limit) break;
    excerpt = next;
  }

  if (!excerpt || excerpt.length < (locale === "ar" ? 60 : 70)) {
    const clipped = normalized.slice(0, limit);
    const lastSpace = clipped.lastIndexOf(" ");
    excerpt = (lastSpace > 70 ? clipped.slice(0, lastSpace) : clipped).trim();
  }

  const tidy = tidyExcerptEnd(excerpt, locale).replace(/[،,;:.]$/g, "").trim();
  return tidy + ending(locale, tidy);
}

function tidyExcerptEnd(value: string, locale: Locale) {
  if (locale === "ar") {
    return value
      .replace(/\s*\([^)]*[\p{Script=Latin}][^)]*\)/gu, "")
      .replace(/\s+(بينما|حيث|مما|والتي|والذي|التي|الذي|مع|ثم|كما|لإضافة|لإضفاء|لتقديم|لنكهة|ليمنحك|ليمنحكم|على الجانب)$/u, "")
      .replace(/\s+و$/u, "")
      .trim();
  }

  return value
    .replace(/\s+(while|where|with|and|then|that|which|for|to|served|finished)$/iu, "")
    .trim();
}

function localizeOptionName(name: string, locale: Locale) {
  const labels: Record<string, LocalizedText> = {
    small: { ar: "صغير", en: "Small" },
    medium: { ar: "وسط", en: "Medium" },
    big: { ar: "كبير", en: "Big" },
  };

  return formatVisibleText(labels[name.trim().toLowerCase()]?.[locale] ?? name, locale);
}

export function AsyaShell({ children, current }: AsyaShellProps) {
  const [locale, setLocale] = useState<Locale>("ar");
  const [detailSelection, setDetailSelection] = useState<ItemDetailSelection | null>(null);
  useScrollChromeVisibility();

  useEffect(() => {
    const storedLocale = readStoredLocale();
    if (storedLocale) setLocale(storedLocale);
  }, []);

  const value = useMemo(
    () => ({
      locale,
      setLocale: (nextLocale: Locale) => {
        setLocale(nextLocale);
        writeStoredLocale(nextLocale);
      },
      t: (key: UIKey) => formatVisibleText(UI[key][locale], locale),
      tx: (obj: Record<Locale, string>) => formatVisibleText(obj[locale], locale),
      dir: "ltr" as const,
    }),
    [locale],
  );
  const openItemDetail = useCallback(
    (selection: ItemDetailSelection) => setDetailSelection(selection),
    [],
  );
  const detailValue = useMemo(() => ({ openItemDetail }), [openItemDetail]);
  const closeItemDetail = useCallback(() => setDetailSelection(null), []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = "ltr";
  }, [locale]);

  return (
    <I18nContext.Provider value={value}>
      <ItemDetailContext.Provider value={detailValue}>
        <div data-locale={locale} className="asya-site site-shell">
          <TopNav current={current} />
          {children}
          <Footer />
          <FloatingContact current={current} />
          <MobileBottomNav current={current} />
          <AnimatePresence>
            {detailSelection ? (
              <ItemDetailView
                key={detailSelection.item.id}
                selection={detailSelection}
                current={current}
                onClose={closeItemDetail}
              />
            ) : null}
          </AnimatePresence>
        </div>
      </ItemDetailContext.Provider>
    </I18nContext.Provider>
  );
}

function readStoredLocale(): Locale | null {
  if (typeof window === "undefined") return null;

  const storedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  return storedLocale === "ar" || storedLocale === "en" ? storedLocale : null;
}

function writeStoredLocale(locale: Locale) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
}

function useScrollChromeVisibility() {
  useEffect(() => {
    const hiddenClass = "asya-scroll-chrome-hidden";
    const topClass = "asya-scroll-at-top";
    const minDelta = 0.5;
    const hideAfter = 120;
    const hideIntent = 14;
    const desktopShowIntent = -10;
    const mobileShowIntent = -96;
    const topThreshold = 12;
    let previousY = Math.max(0, window.scrollY);
    let scrollIntent = 0;
    let frame = 0;

    const setHidden = (hidden: boolean) => {
      document.body.classList.toggle(hiddenClass, hidden);
    };

    const update = () => {
      frame = 0;
      const currentY = Math.max(0, window.scrollY);
      const delta = currentY - previousY;
      const isAtTop = currentY <= topThreshold;

      document.body.classList.toggle(topClass, isAtTop);

      if (isAtTop) {
        scrollIntent = 0;
        setHidden(false);
      } else if (delta > minDelta) {
        scrollIntent = scrollIntent < 0 ? delta : scrollIntent + delta;
        if (currentY > hideAfter && scrollIntent > hideIntent) {
          setHidden(true);
        }
      } else if (delta < -minDelta) {
        const showIntent = window.matchMedia("(max-width: 767px)").matches
          ? mobileShowIntent
          : desktopShowIntent;
        scrollIntent = scrollIntent > 0 ? delta : scrollIntent + delta;
        if (scrollIntent < showIntent) {
          setHidden(false);
        }
      }

      previousY = currentY;
    };

    const scheduleUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("pageshow", scheduleUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      document.body.classList.remove(hiddenClass, topClass);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("pageshow", scheduleUpdate);
    };
  }, []);
}

export function AsyaIntroOverlay() {
  const [hasPlayedIntroInThisPageLoad, setHasPlayedIntroInThisPageLoad] = useState(false);

  const handleComplete = useCallback(() => {
    setHasPlayedIntroInThisPageLoad(true);
  }, []);

  if (hasPlayedIntroInThisPageLoad) return null;

  return (
    <>
      <MobileIntroOverlay onComplete={handleComplete} />
      <DesktopIntroOverlay onComplete={handleComplete} />
    </>
  );
}

function DesktopIntroOverlay({ onComplete }: { onComplete: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fadeTimerRef = useRef<number | null>(null);
  const finishedRef = useRef(false);
  const [shouldRender, setShouldRender] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [lockPage, setLockPage] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    if (!media.matches) {
      setShouldRender(false);
      return;
    }

    setLockPage(true);
    const video = videoRef.current;
    video?.load();
    video?.play().catch(() => undefined);

    return () => {
      if (fadeTimerRef.current) window.clearTimeout(fadeTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!lockPage || !shouldRender) return;

    const preventDefault = (event: Event) => event.preventDefault();
    const preventScrollKeys = (event: KeyboardEvent) => {
      if ([" ", "ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End"].includes(event.key)) {
        event.preventDefault();
      }
    };
    document.documentElement.classList.add("asya-desktop-intro-lock");
    document.body.classList.add("asya-desktop-intro-lock");
    window.addEventListener("touchmove", preventDefault, { passive: false });
    window.addEventListener("wheel", preventDefault, { passive: false });
    window.addEventListener("keydown", preventScrollKeys);

    return () => {
      document.documentElement.classList.remove("asya-desktop-intro-lock");
      document.body.classList.remove("asya-desktop-intro-lock");
      window.removeEventListener("touchmove", preventDefault);
      window.removeEventListener("wheel", preventDefault);
      window.removeEventListener("keydown", preventScrollKeys);
    };
  }, [lockPage, shouldRender]);

  const finishIntro = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    setIsFading(true);
    fadeTimerRef.current = window.setTimeout(() => {
      setShouldRender(false);
      setLockPage(false);
      onComplete();
    }, 500);
  }, [onComplete]);

  if (!shouldRender) return null;

  return (
    <div
      className={`desktop-intro-overlay ${isReady ? "is-ready" : ""} ${isFading ? "is-fading" : ""}`}
      aria-hidden="true"
    >
      <video
        ref={videoRef}
        className="desktop-intro-video"
        autoPlay
        muted
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        onLoadedData={() => setIsReady(true)}
        onCanPlay={() => videoRef.current?.play().catch(() => undefined)}
        onEnded={finishIntro}
        onError={finishIntro}
      >
        <source src={desktopIntroVideo} type="video/mp4" media="(min-width: 768px)" />
      </video>
    </div>
  );
}

function MobileIntroOverlay({ onComplete }: { onComplete: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fadeTimerRef = useRef<number | null>(null);
  const finishedRef = useRef(false);
  const [shouldRender, setShouldRender] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [lockPage, setLockPage] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    if (!media.matches) {
      setShouldRender(false);
      return;
    }

    setLockPage(true);
    const video = videoRef.current;
    video?.load();
    video?.play().catch(() => undefined);

    return () => {
      if (fadeTimerRef.current) window.clearTimeout(fadeTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!lockPage || !shouldRender) return;

    const preventDefault = (event: Event) => event.preventDefault();
    document.documentElement.classList.add("asya-mobile-intro-lock");
    document.body.classList.add("asya-mobile-intro-lock");
    window.addEventListener("touchmove", preventDefault, { passive: false });
    window.addEventListener("wheel", preventDefault, { passive: false });

    return () => {
      document.documentElement.classList.remove("asya-mobile-intro-lock");
      document.body.classList.remove("asya-mobile-intro-lock");
      window.removeEventListener("touchmove", preventDefault);
      window.removeEventListener("wheel", preventDefault);
    };
  }, [lockPage, shouldRender]);

  const finishIntro = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    setIsFading(true);
    fadeTimerRef.current = window.setTimeout(() => {
      setShouldRender(false);
      setLockPage(false);
      onComplete();
    }, 500);
  }, [onComplete]);

  if (!shouldRender) return null;

  return (
    <div
      className={`mobile-intro-overlay ${isReady ? "is-ready" : ""} ${isFading ? "is-fading" : ""}`}
      aria-hidden="true"
    >
      <video
        ref={videoRef}
        className="mobile-intro-video"
        autoPlay
        muted
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        onLoadedData={() => setIsReady(true)}
        onCanPlay={() => videoRef.current?.play().catch(() => undefined)}
        onEnded={finishIntro}
        onError={finishIntro}
      >
        <source src={mobileIntroVideo} type="video/mp4" media="(max-width: 767px)" />
      </video>
    </div>
  );
}

function TopNav({ current }: { current: "home" | "menu" }) {
  const { locale, setLocale, t, tx } = useI18n();

  return (
    <header className="site-nav site-nav-solid">
      <div className="site-nav-shell">
        <a
          href={current === "home" ? "#top" : "/"}
          className="nav-brand"
          aria-label="Asya's Gourmet"
        >
          <span className="nav-logo-frame">
            <img src={logoImg} alt="Asya's Gourmet" width={42} height={42} />
          </span>
          <span className="nav-brand-copy">
            <strong>{tx(RESTAURANT.name)}</strong>
            <small>{tx(RESTAURANT.kicker)}</small>
          </span>
        </a>

        <nav
          className="nav-links"
          aria-label="Primary navigation"
          dir={locale === "ar" ? "rtl" : "ltr"}
        >
          <a className={current === "home" ? "is-current" : ""} href="/">
            <Home className="nav-icon" />
            <span>{t("nav_home")}</span>
          </a>
          <a className={current === "menu" ? "is-current" : ""} href="/menu">
            <Utensils className="nav-icon" />
            <span>{t("nav_menu")}</span>
          </a>
          <a href="/#about">{t("nav_about")}</a>
          <a href="/#visit">{t("nav_visit")}</a>
          <a href={whatsappHref()} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="nav-icon" />
            <span>{t("nav_contact")}</span>
          </a>
        </nav>

        <div className="nav-actions">
          <a
            className={current === "menu" ? "mobile-menu-button is-current" : "mobile-menu-button"}
            href="/menu"
          >
            <Utensils className="h-4 w-4" />
            <span>{t("nav_menu")}</span>
          </a>
          <button
            type="button"
            onClick={() => setLocale(locale === "ar" ? "en" : "ar")}
            className="language-button"
            aria-label={locale === "ar" ? "تغيير اللغة" : "Change language"}
          >
            <Languages className="h-4 w-4" />
            <span>{locale === "ar" ? "اللغة" : "Language"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export const SectionIntro = memo(function SectionIntro({
  eyebrow,
  title,
  body,
  icon,
  tone = "dark",
}: {
  eyebrow: string;
  title: string;
  body?: string;
  icon?: ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <motion.div className={`section-intro section-intro-${tone}`} variants={fadeUp}>
      <p className="section-kicker">
        {icon}
        <span>{eyebrow}</span>
      </p>
      <h2>{title}</h2>
      {body ? <p className="section-copy">{body}</p> : null}
    </motion.div>
  );
});

export const DishImage = memo(function DishImage({
  item,
  alt,
  eager = false,
  className = "",
}: {
  item: MenuItem;
  alt: string;
  eager?: boolean;
  className?: string;
}) {
  const { locale } = useI18n();
  const shellRef = useRef<HTMLSpanElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const sourceSrc = getDishImage(item);
  const [src, setSrc] = useState(sourceSrc);
  const isPlaceholder = src === placeholderImg;
  const placeholderText = locale === "ar" ? "من مطبخ أسيا" : "From Asya's Kitchen";

  useEffect(() => {
    setSrc(sourceSrc);
  }, [sourceSrc]);

  useEffect(() => {
    const image = imageRef.current;
    const shell = shellRef.current;
    if (!shell) return;

    if (isPlaceholder || (image?.complete && image.naturalWidth > 0)) {
      shell.dataset.loaded = "true";
    } else {
      delete shell.dataset.loaded;
    }
  }, [src]);

  const markLoaded = useCallback(() => {
    if (shellRef.current) shellRef.current.dataset.loaded = "true";
  }, []);

  const handleImageError = useCallback(() => {
    setSrc(placeholderImg);
    markLoaded();
  }, [markLoaded]);

  return (
    <span
      ref={shellRef}
      className={`dish-image-shell ${isPlaceholder ? "is-placeholder" : ""} ${className}`}
      data-loaded={isPlaceholder ? "true" : undefined}
    >
      {!isPlaceholder ? <span className="image-skeleton" aria-hidden="true" /> : null}
      {isPlaceholder ? (
        <span className="placeholder-mark" aria-hidden="true">
          <img src={logoImg} alt="" width={78} height={78} />
          <small>{placeholderText}</small>
        </span>
      ) : null}
      <img
        ref={imageRef}
        src={src}
        alt={isPlaceholder ? "" : alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        width={640}
        height={640}
        sizes={
          eager
            ? "(max-width: 767px) 100vw, 42vw"
            : "(max-width: 767px) 7rem, (max-width: 1120px) 33vw, 24vw"
        }
        onLoad={markLoaded}
        onError={handleImageError}
      />
    </span>
  );
});

interface MenuCardProps {
  item: MenuItem;
  category: MenuCategory;
  variant?: "menu" | "feature" | "wide";
  motionEnabled?: boolean;
}

export const MenuCard = memo(function MenuCard({
  item,
  category,
  variant = "menu",
  motionEnabled = true,
}: MenuCardProps) {
  const { locale } = useI18n();
  const { openItemDetail } = useItemDetail();
  const itemName = localizeMenuItemName(item, locale);
  const categoryName = localizeMenuText(category.name, locale);
  const description = compactOfficialDescription(
    localizeMenuDescription(item, category, locale),
    locale,
  );
  const className = `menu-card menu-card-${variant}`;
  const handleOpen = useCallback(
    () => openItemDetail({ item, category }),
    [category, item, openItemDetail],
  );
  const handleKeyDown = useCallback(
    (event: ReactKeyboardEvent<HTMLElement>) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        handleOpen();
      }
    },
    [handleOpen],
  );
  const content = (
    <>
      <DishImage item={item} alt={itemName} className="menu-card-image" />
      <div className="menu-card-copy">
        <div className="menu-card-meta">
          <span>{categoryName}</span>
          <PriceTag item={item} />
        </div>
        <h3>{itemName}</h3>
        {description ? <p>{description}</p> : null}
        {item.options?.length ? <MenuOptions item={item} /> : null}
        <span className="menu-card-more" aria-hidden="true">
          {locale === "ar" ? "عرض الطبق" : "View Dish"}
        </span>
      </div>
    </>
  );

  if (!motionEnabled) {
    return (
      <article
        role="button"
        tabIndex={0}
        className={className}
        aria-label={itemName}
        onClick={handleOpen}
        onKeyDown={handleKeyDown}
      >
        {content}
      </article>
    );
  }

  return (
    <motion.article
      role="button"
      tabIndex={0}
      className={className}
      aria-label={itemName}
      onClick={handleOpen}
      onKeyDown={handleKeyDown}
      variants={fadeUp}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
    >
      {content}
    </motion.article>
  );
});

function ItemDetailView({
  selection,
  current,
  onClose,
}: {
  selection: ItemDetailSelection | null;
  current: "home" | "menu";
  onClose: () => void;
}) {
  const { locale } = useI18n();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const previousScrollYRef = useRef(0);
  const isMobileSheet = useMediaQuery("(max-width: 767px)");
  const prefersReducedMotion = useReducedMotion();
  const item = selection?.item;
  const category = selection?.category;
  const labels = {
    close: locale === "ar" ? "إغلاق" : "Close",
    back: locale === "ar" ? "العودة إلى المنيو" : "Back to Menu",
    category: locale === "ar" ? "القسم" : "Category",
    options: locale === "ar" ? "الاختيارات" : "Choices",
    description: locale === "ar" ? "المكونات والطريقة" : "Ingredients and Preparation",
    imageComing: locale === "ar" ? "من مطبخ أسيا" : "From Asya's Kitchen",
  };

  useEffect(() => {
    if (!selection) return;

    previousFocusRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    previousScrollYRef.current = window.scrollY;
    document.documentElement.classList.add("asya-item-detail-lock");
    document.body.classList.add("asya-item-detail-lock");
    closeButtonRef.current?.focus({ preventScroll: true });
    window.setTimeout(() => closeButtonRef.current?.focus({ preventScroll: true }), 40);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") return;
      const dialog = dialogRef.current;
      if (!dialog) return;

      const focusable = Array.from(
        dialog.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => !element.hasAttribute("disabled") && element.offsetParent !== null);

      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.documentElement.classList.remove("asya-item-detail-lock");
      document.body.classList.remove("asya-item-detail-lock");
      window.removeEventListener("keydown", handleKeyDown);
      previousFocusRef.current?.focus({ preventScroll: true });
      window.scrollTo({ top: previousScrollYRef.current, behavior: "auto" });
    };
  }, [selection, onClose]);

  if (!item || !category) return null;

  const imageSrc = getDishImage(item);
  const isPlaceholder = imageSrc === placeholderImg;
  const itemName = localizeMenuItemName(item, locale);
  const categoryName = localizeMenuText(category.name, locale);
  const description = localizeMenuDescription(item, category, locale);
  const dialogMotion = prefersReducedMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.16, ease: "easeOut" },
      }
    : isMobileSheet
      ? {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: 12 },
          transition: { duration: 0.18, ease: softEase },
        }
      : {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: 8 },
          transition: { duration: 0.18, ease: softEase },
        };

  return (
    <motion.div
      className="item-detail-layer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      role="presentation"
      onPointerDown={(event) => {
        if (typeof window === "undefined") return;
        if (
          window.matchMedia("(min-width: 1024px)").matches &&
          event.target === event.currentTarget
        )
          onClose();
      }}
    >
      <motion.div
        ref={dialogRef}
        className="item-detail-dialog"
        role="dialog"
        aria-modal="true"
        aria-label={itemName}
        dir="ltr"
        {...dialogMotion}
      >
        <button
          ref={closeButtonRef}
          type="button"
          className="item-detail-close"
          onClick={onClose}
          aria-label={labels.close}
        >
          <X className="h-5 w-5" />
        </button>

        <div
          className={`item-detail-media mobile-item-detail-media ${isPlaceholder ? "is-placeholder" : ""}`}
        >
          {isPlaceholder ? (
            <span className="item-detail-placeholder" aria-hidden="true">
              <img src={logoImg} alt="" width={92} height={92} />
              <small>{labels.imageComing}</small>
            </span>
          ) : null}
          <img
            className="mobile-item-detail-image"
            src={imageSrc}
            alt={isPlaceholder ? "" : itemName}
            width={920}
            height={920}
            loading="lazy"
            decoding="async"
            onError={(event) => {
              event.currentTarget.src = placeholderImg;
            }}
          />
        </div>

        <div className="item-detail-copy mobile-item-detail-content">
          <div className="item-detail-meta">
            <span>
              {labels.category}: {categoryName}
            </span>
            <PriceTag item={item} />
          </div>
          <h2>{itemName}</h2>
          <span className="item-detail-divider" aria-hidden="true" />
          <div className="item-detail-scroll">
            {description ? (
              <div className="item-detail-description">
                <strong>{labels.description}</strong>
                <p>{description}</p>
              </div>
            ) : null}
            {item.options?.length ? (
              <div className="item-detail-options">
                <strong>{labels.options}</strong>
                <MenuOptions item={item} />
              </div>
            ) : null}
          </div>
          {current === "menu" ? (
            <button type="button" className="item-detail-back" onClick={onClose}>
              {labels.back}
            </button>
          ) : (
            <a href="/menu" className="item-detail-back" onClick={onClose}>
              {labels.back}
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const media = window.matchMedia(query);
    const handleChange = () => setMatches(media.matches);

    handleChange();
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, [query]);

  return matches;
}

export const PriceTag = memo(function PriceTag({ item }: { item: MenuItem }) {
  const { locale, tx } = useI18n();
  const price = formatPrice(item.price, locale);

  return (
    <span className="price-tag">
      <strong>{price}</strong>
      {!/[A-Za-z\u0600-\u06FF]/.test(price) ? <small>{tx(RESTAURANT.currency)}</small> : null}
    </span>
  );
});

const MenuOptions = memo(function MenuOptions({ item }: { item: MenuItem }) {
  const { locale } = useI18n();
  const itemName = localizeMenuItemName(item, locale);

  return (
    <div
      className="menu-options"
      aria-label={`${itemName} ${locale === "ar" ? "اختيارات" : "choices"}`}
    >
      {item.options?.map((option) => (
        <span key={`${item.id}-${option.name}-${option.price}`}>
          <strong>{localizeOptionName(option.name, locale)}</strong>
          <em>{formatPrice(option.price, locale)}</em>
        </span>
      ))}
    </div>
  );
});

export const CategoryGlyph = memo(function CategoryGlyph({ category }: { category: MenuCategory }) {
  const label = `${category.id} ${category.name.en}`.toLowerCase();
  const Icon = /coffee/.test(label)
    ? Coffee
    : /tea|drink|juice|beverage|lemonade|matcha/.test(label)
      ? CupSoda
      : /dessert|sweet|baklava|cake|kunafa|rice pudding/.test(label)
        ? CakeSlice
        : /soup/.test(label)
          ? Soup
          : /grill|casserole|kebab|meat|chicken|beef|lamb/.test(label)
            ? Flame
            : /salad|garden|greens|olive|friends/.test(label)
              ? Leaf
              : /bread|bakery|pastry|pide|borek|simit|lahmacun|pie|pizza|gozleme/.test(label)
                ? Wheat
                : /signature|chef/.test(label)
                  ? ChefHat
                  : Utensils;

  return <Icon className="h-4 w-4" aria-hidden="true" />;
});

export function categoryById(id: string) {
  return CATEGORIES.find((category) => category.id === id);
}

export function getDishImage(item: MenuItem) {
  return item.image ?? item.sourceImageUrl ?? placeholderImg;
}

export function isOfficialImage(item: MenuItem) {
  return Boolean(item.image || item.sourceImageUrl);
}

export function isUsableImageUrl(url?: string) {
  return Boolean(url && /\.(avif|webp|png|jpe?g)(\?|$)/i.test(url));
}

export function whatsappHref() {
  const digits = RESTAURANT.whatsapp.replace(/[^\d]/g, "");
  return `https://wa.me/${digits}`;
}

function formatPrice(price: string, locale: Locale) {
  if (locale === "ar" && /Small/i.test(price) && /Big/i.test(price)) {
    return price.replace(/Small/gi, "صغير").replace(/Big/gi, "كبير");
  }
  return price;
}

const ContactCard = memo(function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="contact-icon">{icon}</span>
      <span className="contact-label">{label}</span>
      <strong>{value}</strong>
      {href ? <ArrowUpRight className="h-4 w-4" /> : null}
    </>
  );

  return href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="contact-card"
    >
      {content}
    </a>
  ) : (
    <div className="contact-card">{content}</div>
  );
});

export function VisitContact() {
  const { locale, t, tx } = useI18n();

  return (
    <section id="visit" className="visit-section soft-botanical-bg">
      <div className="section-wrap">
        <SectionIntro
          eyebrow={t("sec_visit")}
          title={t("visit_title")}
          body={t("visit_body")}
          icon={<MapPin className="h-4 w-4" />}
        />

        <div id="contact" className="contact-grid">
          <ContactCard
            icon={<MessageCircle />}
            label={t("whatsapp")}
            value={RESTAURANT.whatsapp}
            href={whatsappHref()}
          />
          <ContactCard
            icon={<Instagram />}
            label={t("instagram")}
            value={locale === "ar" ? "حساب أسيا على إنستغرام" : "@asyas.gourmet"}
            href={RESTAURANT.instagramUrl}
          />
          <ContactCard
            icon={<MapPin />}
            label={t("address")}
            value={tx(RESTAURANT.address)}
            href={RESTAURANT.mapsUrl}
          />
          <ContactCard icon={<Clock />} label={t("hours")} value={tx(RESTAURANT.hours)} />
        </div>

        <div className="contact-actions">
          <a href={`tel:${RESTAURANT.phone}`}>
            <Phone className="h-4 w-4" />
            {t("call")}
          </a>
          <a href={RESTAURANT.menuSourceUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4" />
            {t("source")}
          </a>
        </div>
      </div>
    </section>
  );
}

function FloatingContact({ current }: { current: "home" | "menu" }) {
  const { t } = useI18n();

  return (
    <div className="floating-contact">
      <a
        href={current === "home" ? "/menu" : "#menu-top"}
        className="floating-link floating-link-menu"
      >
        <Utensils className="h-4 w-4" />
        <span>{current === "home" ? t("exploreFullMenu") : t("nav_menu")}</span>
      </a>
      <a
        href={whatsappHref()}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-link floating-link-main"
      >
        <MessageCircle className="h-5 w-5" />
        <span>{t("order")}</span>
      </a>
      <a
        href={RESTAURANT.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-link floating-link-menu"
      >
        <Instagram className="h-4 w-4" />
        <span>{t("instagram")}</span>
      </a>
    </div>
  );
}

function MobileBottomNav({ current }: { current: "home" | "menu" }) {
  const { locale, t } = useI18n();

  return (
    <nav
      className="mobile-bottom-nav"
      aria-label="Mobile navigation"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <a href="/" className={current === "home" ? "is-active" : ""}>
        <Home className="h-5 w-5" />
        <span>{t("nav_home")}</span>
      </a>
      <a href="/menu" className={current === "menu" ? "is-active" : ""}>
        <Utensils className="h-5 w-5" />
        <span>{t("nav_menu")}</span>
      </a>
      <a href={RESTAURANT.mapsUrl} target="_blank" rel="noopener noreferrer">
        <MapPin className="h-5 w-5" />
        <span>{t("directions")}</span>
      </a>
      <a href={RESTAURANT.instagramUrl} target="_blank" rel="noopener noreferrer">
        <Instagram className="h-5 w-5" />
        <span>{t("instagram")}</span>
      </a>
    </nav>
  );
}

function Footer() {
  const { locale, t, tx } = useI18n();

  return (
    <footer className="footer-premium" dir={locale === "ar" ? "rtl" : "ltr"}>
      <div className="footer-grid">
        <div className="footer-brand">
          <img src={logoImg} alt="Asya's Gourmet" width={80} height={80} />
          <h2>{tx(RESTAURANT.name)}</h2>
          <p>{t("footer_tagline")}</p>
        </div>

        <div className="footer-links">
          <a href={RESTAURANT.instagramUrl} target="_blank" rel="noopener noreferrer">
            <Instagram className="h-4 w-4" />
            <span>{t("instagram")}</span>
          </a>
          <a href={whatsappHref()} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-4 w-4" />
            <span>{t("whatsapp")}</span>
          </a>
          <a href={RESTAURANT.mapsUrl} target="_blank" rel="noopener noreferrer">
            <MapPin className="h-4 w-4" />
            <span>{t("directions")}</span>
          </a>
        </div>

        <div className="footer-hours">
          <span>{t("hours")}</span>
          <strong>{tx(RESTAURANT.hours)}</strong>
          <small>
            © {new Date().getFullYear()} {tx(RESTAURANT.name)}. {t("footer_rights")}
          </small>
        </div>
      </div>
    </footer>
  );
}
