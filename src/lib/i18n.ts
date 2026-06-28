import { createContext, useContext } from "react";
import type { Locale } from "@/data/menu";

export const UI = {
  nav_home: { ar: "الرئيسية", en: "Home" },
  nav_menu: { ar: "المنيو", en: "Menu" },
  nav_about: { ar: "عن أسيا", en: "About" },
  nav_visit: { ar: "الزيارة", en: "Visit" },
  nav_contact: { ar: "تواصل", en: "Contact" },

  hero_title: { ar: "مذاق المطبخ التركي الأصيل", en: "A Taste of Authentic Turkish Cuisine" },
  hero_sub: {
    ar: "تجربة طعام راقية تجمع فطورًا تركيًا غنيًا، مخبوزات دافئة، مشويات، وحلويات بروح ضيافة هادئة.",
    en: "A refined dining experience with Turkish breakfasts, warm bakery, grills, desserts, and calm hospitality.",
  },
  hero_note: { ar: "تجربة مصممة للجوال من أول لمسة.", en: "Designed for mobile-first discovery." },
  exploreMenu: { ar: "استكشف المنيو", en: "Explore Menu" },
  exploreFullMenu: { ar: "استكشف المنيو الكامل", en: "Explore Full Menu" },
  contactUs: { ar: "احجز أو تواصل معنا", en: "Reserve or Contact" },
  viewSource: { ar: "مصدر المنيو", en: "Menu Source" },

  home_story: { ar: "الحكاية", en: "Story" },
  home_story_title: { ar: "قصة من القلب", en: "A story from the table" },
  home_story_body: {
    ar: "من مطبخ صغير بدأت الحكاية، ومنه خرجت مائدة تركية تجمع الخبز الدافئ، الشاي، والمشاركة الهادئة حول كل طبق.",
    en: "Asya's Gourmet began with the feeling of a warm kitchen: fresh bread, Turkish tea, and dishes made to be shared slowly.",
  },
  home_signature_title: { ar: "تذوّق الأفضل لدينا", en: "Taste our signatures" },
  home_signature_body: {
    ar: "اختيارات مختصرة من بيانات المنيو الحقيقية، مناسبة لمن يريد بداية فاخرة وسريعة.",
    en: "A focused selection from the real menu for guests who want a polished first choice.",
  },
  home_breakfast_title: { ar: "فطور تركي للمشاركة", en: "Turkish Breakfast" },
  home_breakfast_body: {
    ar: "ألوان، بيض، مخبوزات، وأطباق تُفتح على مائدة صباحية طويلة.",
    en: "Color, eggs, bakery, and generous plates made for a long morning table.",
  },
  home_bakery_title: { ar: "مخبوزات طازجة", en: "Fresh Bakery" },
  home_bakery_body: {
    ar: "بيدا، جوزلمة، بوريك، وخبز تركي دافئ بطابع المخبز.",
    en: "Pide, gozleme, borek, and warm Turkish bread with bakery character.",
  },
  home_mains_title: { ar: "أطباق رئيسية", en: "Main Dishes" },
  home_mains_body: {
    ar: "أطباق مشبعة للغداء والعشاء، تظهر بعد الفطور والمخبوزات وقبل الحلويات.",
    en: "Lunch and dinner plates placed after breakfast and bakery, before dessert.",
  },
  home_drinks_title: { ar: "طقوس القهوة والشاي", en: "Coffee & Tea Ritual" },
  home_drinks_body: {
    ar: "شاي تركي، قهوة، ومشروبات باردة تكمل إيقاع المائدة.",
    en: "Turkish tea, coffee, and chilled drinks that complete the table.",
  },
  home_desserts_title: { ar: "حلويات دافئة", en: "Desserts" },
  home_desserts_body: {
    ar: "نهاية أنيقة بين البقلاوة، الكنافة، والحلوى التركية.",
    en: "An elegant finish with baklava, kunafa, and Turkish sweets.",
  },
  home_gallery_title: { ar: "معرض المطعم", en: "Restaurant Gallery" },
  home_gallery_body: {
    ar: "ضوء دافئ، أطباق خزفية، خبز طازج، وشاي تركي في حضور هادئ.",
    en: "Warm light, ceramic plates, fresh bread, and Turkish tea in a calm setting.",
  },
  home_menu_preview_title: { ar: "استكشف المنيو", en: "Explore Our Menu" },
  home_quality_title: { ar: "جودة يمكنك تذوقها", en: "Quality You Can Taste" },
  home_quality_body: {
    ar: "نجمع وصفات تركية أصيلة، مكونات واضحة، وصورًا قوية لتبقى تجربة قراءة المنيو سريعة وفاخرة.",
    en: "Authentic Turkish recipes, clear ingredients, and strong food photography make the menu quick to scan and refined to browse.",
  },

  sec_popular: { ar: "الأكثر طلبًا", en: "Popular" },
  sec_chef: { ar: "اختيارات الشيف", en: "Chef Picks" },
  sec_bakery: { ar: "مخبوزات طازجة", en: "Fresh Bakery" },
  sec_mains: { ar: "الأطباق الرئيسية", en: "Main Dishes" },
  sec_drinks: { ar: "المشروبات التركية", en: "Turkish Drinks" },
  sec_menu: { ar: "المنيو الكامل", en: "Full Menu" },
  sec_about: { ar: "عن أسيا جورميه", en: "About Asya's Gourmet" },
  sec_visit: { ar: "الزيارة والتواصل", en: "Visit & Contact" },
  full_menu_title: { ar: "المنيو", en: "Our Menu" },
  full_menu_body: {
    ar: "كل أصناف أسيا جورميه كما تظهر في المصدر الرسمي، مرتبة في سبع مجموعات واضحة وسهلة التصفح.",
    en: "Every Asya's Gourmet item as listed in the official Foost source, organized into seven clear browsing groups.",
  },
  menu_page_eyebrow: { ar: "منيو مطابق للمصدر الرسمي", en: "Foost-matched menu" },

  popular_body: {
    ar: "اختيارات بارزة من بيانات المنيو الحالية، مناسبة للبداية السريعة.",
    en: "A quick pass through the current menu's most highlighted choices.",
  },
  chef_body: {
    ar: "أطباق تحمل توقيع المطبخ التركي: غنية، دافئة، ومناسبة للمشاركة.",
    en: "Turkish kitchen signatures: generous, warm, and made for sharing.",
  },
  bakery_body: {
    ar: "بيدا، جوزلمة، وبوريك بروح المخبز التركي الطازج.",
    en: "Pide, gozleme, and borek with fresh Turkish bakery character.",
  },
  drinks_body: {
    ar: "شاي تركي، قهوة، ومشروبات باردة تكمل التجربة.",
    en: "Turkish tea, coffee, and cold drinks to complete the table.",
  },

  filter_all: { ar: "الكل", en: "All" },
  menuCount: { ar: "صنف", en: "items" },
  categoryCount: { ar: "قسم", en: "categories" },
  viewSection: { ar: "استعرض القسم", en: "View section" },

  about_p1: {
    ar: "أسيا جورميه يجمع روح المائدة التركية مع تفاصيل هادئة وفاخرة: فطور للمشاركة، مخبوزات دافئة، أطباق مشوية، ومشروبات تركية تُقدّم بتوازن وكرم.",
    en: "Asya's Gourmet brings Turkish table culture into a warmer, more polished menu: sharing breakfasts, fresh bakery, grilled plates, and Turkish drinks served with care.",
  },
  about_p2: {
    ar: "المنيو هنا مصمم ليكون سريع القراءة من الجوال، واضح السعر والصورة، وسهل الوصول للأقسام من أول لمسة.",
    en: "The menu is designed for mobile QR browsing: quick to scan, clear in price and imagery, and easy to filter from the first tap.",
  },
  visit_title: { ar: "زرنا في المطعم", en: "Visit Us" },
  visit_body: {
    ar: "اختر المنيو، تواصل معنا، أو افتح الموقع مباشرة. التفاصيل العملية واضحة، والتجربة تبقى دافئة.",
    en: "Open the menu, reach us, or get directions. The practical details stay clear while the experience stays warm.",
  },

  call: { ar: "اتصال", en: "Call" },
  whatsapp: { ar: "واتساب", en: "WhatsApp" },
  instagram: { ar: "إنستغرام", en: "Instagram" },
  directions: { ar: "الموقع", en: "Location" },
  order: { ar: "اطلب أو اسأل", en: "Order or Ask" },
  hours: { ar: "ساعات العمل", en: "Opening Hours" },
  address: { ar: "العنوان", en: "Address" },
  source: { ar: "مصدر المنيو", en: "Foost" },

  footer_rights: { ar: "جميع الحقوق محفوظة", en: "All rights reserved" },
  footer_tagline: {
    ar: "مائدة تركية دافئة، ومنيو رسمي مطابق للمصدر.",
    en: "A warm Turkish table with a Foost-matched official menu.",
  },
} as const;

export type UIKey = keyof typeof UI;

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
  t: (key) => UI[key].ar,
  tx: (obj) => obj.ar,
  dir: "ltr",
});

export const useI18n = () => useContext(I18nContext);
