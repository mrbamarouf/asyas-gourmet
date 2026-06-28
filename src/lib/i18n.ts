import { createContext, useContext } from "react";
import type { Locale } from "@/data/menu";

export const UI = {
  nav_home: { ar: "الرئيسية", en: "Home" },
  nav_menu: { ar: "المنيو", en: "Menu" },
  nav_about: { ar: "عن أسيا", en: "About Asya" },
  nav_visit: { ar: "الزيارة", en: "Visit" },
  nav_contact: { ar: "تواصل", en: "Contact" },

  hero_title: { ar: "مائدة تركية بطابع أسيا", en: "A Turkish Table, The Asya Way" },
  hero_sub: {
    ar: "فطور للمشاركة، بيدا من الفرن، مشويات على الفحم، وحلويات تركية تقدم بسخاء.",
    en: "Sharing breakfasts, oven-baked pide, charcoal grills, and Turkish sweets served generously.",
  },
  hero_note: { ar: "أطباق بارزة من أسيا جورميه.", en: "House highlights from Asya's Gourmet." },
  exploreMenu: { ar: "عرض المنيو", en: "View Menu" },
  exploreFullMenu: { ar: "المنيو الكامل", en: "Full Menu" },
  contactUs: { ar: "تواصل مع المطعم", en: "Contact the Restaurant" },
  viewSource: { ar: "فتح القائمة الرقمية", en: "Open Digital Menu" },

  home_story: { ar: "الحكاية", en: "Story" },
  home_story_title: { ar: "قصة من القلب", en: "A Story From the Heart" },
  home_story_body: {
    ar: "نخبز عجيننا يوميًا، ونقدّم فطورًا تركيًا ومشويات وحلويات تصل إلى المائدة كما نحب أن نستقبل ضيوفنا.",
    en: "We bake our dough daily and serve Turkish breakfasts, charcoal grills, and sweets with the warmth we bring to every table.",
  },
  home_signature_title: { ar: "أطباق يطلبها ضيوفنا", en: "Guest Favorites" },
  home_signature_body: {
    ar: "اختيارات من الفطور، البيدا، والمشويات لمن يريد بداية غنية من منيو أسيا.",
    en: "Breakfast plates, pide, and grills chosen for a generous first order.",
  },
  home_breakfast_title: { ar: "فطور تركي للمشاركة", en: "Turkish Breakfast" },
  home_breakfast_body: {
    ar: "بيض، أجبان، زيتون، مربى، وخبز طازج على مائدة صباحية سخية.",
    en: "Eggs, cheeses, olives, jams, and fresh bread served as a generous morning table.",
  },
  home_bakery_title: { ar: "مخبوزات طازجة", en: "Fresh Bakery" },
  home_bakery_body: {
    ar: "بيدا، جوزلمة، بوريك، وخبز تركي يخبز ويقدم ساخنًا.",
    en: "Pide, gozleme, borek, and Turkish bread baked and served hot.",
  },
  home_mains_title: { ar: "أطباق رئيسية", en: "Main Dishes" },
  home_mains_body: {
    ar: "لحوم، دجاج، صلصات طماطم وفلفل، وأطباق تشبع الغداء والعشاء.",
    en: "Meat, chicken, tomato and pepper sauces, and plates built for lunch and dinner.",
  },
  home_drinks_title: { ar: "قهوة وشاي ومشروبات باردة", en: "Coffee, Tea, and Cold Drinks" },
  home_drinks_body: {
    ar: "شاي تركي، قهوة، عيران، عصائر طازجة، وموهيتو بارد.",
    en: "Turkish tea, coffee, ayran, fresh juices, and chilled mojitos.",
  },
  home_desserts_title: { ar: "حلويات تركية", en: "Turkish Sweets" },
  home_desserts_body: {
    ar: "بقلاوة، كنافة، تريليتشا، وقشطة مع عسل لمن يحب الخاتمة الحلوة.",
    en: "Baklava, kunefe, trilece, and cream with honey for a sweet finish.",
  },
  home_gallery_title: { ar: "من مائدة أسيا", en: "From Asya's Table" },
  home_gallery_body: {
    ar: "خبز، شاي، أطباق مشاركة، ومذاق تركي يظهر في التفاصيل.",
    en: "Bread, tea, sharing plates, and Turkish flavor in the details.",
  },
  home_menu_preview_title: { ar: "أقسام المنيو", en: "Menu Sections" },
  home_quality_title: { ar: "من فرن الصاج إلى الفحم", en: "From the Griddle to the Charcoal" },
  home_quality_body: {
    ar: "نحضّر العجين، نسوّي البيض، ونشوي اللحوم كما تليق بمائدة تركية سخية.",
    en: "We prepare the dough, cook the eggs, and grill the meat with the generosity of a Turkish table.",
  },

  sec_popular: { ar: "الأكثر طلبًا", en: "Popular" },
  sec_chef: { ar: "اختيارات الشيف", en: "Chef Picks" },
  sec_bakery: { ar: "مخبوزات طازجة", en: "Fresh Bakery" },
  sec_mains: { ar: "الأطباق الرئيسية", en: "Main Dishes" },
  sec_drinks: { ar: "المشروبات التركية", en: "Turkish Drinks" },
  sec_menu: { ar: "المنيو الكامل", en: "Full Menu" },
  sec_about: { ar: "عن أسيا جورميه", en: "About Asya's Gourmet" },
  sec_visit: { ar: "الزيارة والتواصل", en: "Visit & Contact" },
  full_menu_title: { ar: "المنيو", en: "The Menu" },
  full_menu_body: {
    ar: "فطور، مقبلات، بيدا، مشويات، حلويات ومشروبات مرتبة كما يختارها الضيف على المائدة.",
    en: "Breakfast, meze, pide, grills, sweets, and drinks arranged for the way guests order at the table.",
  },
  menu_page_eyebrow: { ar: "اختيارات أسيا", en: "Asya's Selection" },

  popular_body: {
    ar: "أطباق محبوبة من الفطور، المخبوزات، والمشويات.",
    en: "Favorites from breakfast, bakery, and grills.",
  },
  chef_body: {
    ar: "أطباق يختارها المطبخ لمن يريد نكهة تركية واضحة.",
    en: "Kitchen picks for guests who want a clear Turkish flavor.",
  },
  bakery_body: {
    ar: "بيدا، جوزلمة، وبوريك يخرج من الصاج والفرن.",
    en: "Pide, gozleme, and borek from the griddle and oven.",
  },
  drinks_body: {
    ar: "شاي تركي، قهوة، عيران، وعصائر باردة.",
    en: "Turkish tea, coffee, ayran, and cold juices.",
  },

  filter_all: { ar: "الكل", en: "All" },
  menuCount: { ar: "أصناف", en: "Items" },
  categoryCount: { ar: "قسم", en: "categories" },
  viewSection: { ar: "استعرض القسم", en: "View section" },

  about_p1: {
    ar: "أسيا جورميه يقدم مائدة تركية تبدأ بالفطور والمخبوزات، وتمتد إلى المشويات، الطواجن، الحلويات، والقهوة.",
    en: "Asya's Gourmet serves a Turkish table that begins with breakfast and bakery, then moves into grills, casseroles, sweets, and coffee.",
  },
  about_p2: {
    ar: "كل طبق مكتوب بما يهم الضيف: المكونات، طريقة التحضير، والنكهة على المائدة.",
    en: "Every dish is written around what matters: ingredients, preparation, and flavor at the table.",
  },
  visit_title: { ar: "الحجز والموقع", en: "Reservations and Location" },
  visit_body: {
    ar: "للحجز أو معرفة الموقع وساعات العمل، تواصل معنا مباشرة.",
    en: "For reservations, directions, or hours, contact us directly.",
  },

  call: { ar: "اتصال", en: "Call" },
  whatsapp: { ar: "واتساب", en: "WhatsApp" },
  instagram: { ar: "إنستغرام", en: "Instagram" },
  directions: { ar: "الموقع", en: "Location" },
  order: { ar: "راسلنا على واتساب", en: "Message on WhatsApp" },
  hours: { ar: "ساعات العمل", en: "Opening Hours" },
  address: { ar: "العنوان", en: "Address" },
  source: { ar: "فتح القائمة الرقمية", en: "Open Digital Menu" },

  footer_rights: { ar: "جميع الحقوق محفوظة", en: "All rights reserved" },
  footer_tagline: {
    ar: "فطور تركي، مخبوزات، مشويات، وحلويات تقدم بروح أسيا.",
    en: "Turkish breakfast, bakery, grills, and sweets served with Asya's hospitality.",
  },
} as const;

export type UIKey = keyof typeof UI;

export function formatVisibleText(value: string, locale: Locale) {
  return locale === "ar" ? normalizeArabicTypography(value) : value;
}

export function normalizeArabicTypography(value: string) {
  if (!value || !/[\u0600-\u06FF]/u.test(value)) return value;

  return value
    .replace(/\r\n/g, "\n")
    .replace(/\*/g, "")
    .replace(/\s*\n+\s*/g, " ")
    .replace(/\.{3,}|…/g, "،")
    .replace(/[—–]/g, "،")
    .replace(/\s+-\s+/g, "، ")
    .replace(/[_|]/g, " ")
    .replace(/::+/g, ":")
    .replace(/,/g, "،")
    .replace(/\s+([،.؟!:؛])/g, "$1")
    .replace(/([،:؛؟!])\s*/g, "$1 ")
    .replace(/،\s*[.،]+/g, ".")
    .replace(/\.\s*[.،]+/g, ".")
    .replace(/([؟!])\s*[؟!]+/g, "$1")
    .replace(/([،:؛])\s*$/g, ".")
    .replace(/\s{2,}/g, " ")
    .trim();
}

interface I18nCtx {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: UIKey) => string;
  tx: (obj: Record<Locale, string>) => string;
  dir: "ltr";
}

export const I18nContext = createContext<I18nCtx>({
  locale: "ar",
  setLocale: () => {},
  t: (key) => formatVisibleText(UI[key].ar, "ar"),
  tx: (obj) => formatVisibleText(obj.ar, "ar"),
  dir: "ltr",
});

export const useI18n = () => useContext(I18nContext);
