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
    ar: "فطور تركي غني، مخبوزات دافئة، مشويات، وحلويات تقدم بروح ضيافة هادئة.",
    en: "Rich Turkish breakfasts, warm bakery, grills, and desserts served with calm hospitality.",
  },
  hero_note: { ar: "منيو واضح وسريع على الجوال.", en: "A clear menu for quick mobile browsing." },
  exploreMenu: { ar: "استكشف المنيو", en: "Explore Menu" },
  exploreFullMenu: { ar: "استكشف المنيو الكامل", en: "Explore Full Menu" },
  contactUs: { ar: "احجز أو تواصل معنا", en: "Reserve or Contact" },
  viewSource: { ar: "مصدر المنيو", en: "Menu Source" },

  home_story: { ar: "الحكاية", en: "Story" },
  home_story_title: { ar: "قصة من القلب", en: "A story from the table" },
  home_story_body: {
    ar: "تبدأ مائدة أسيا جورميه بخبز دافئ، شاي تركي، وأطباق تقدم للمشاركة بهدوء.",
    en: "Asya's Gourmet brings warm bread, Turkish tea, and shareable plates to the table.",
  },
  home_signature_title: { ar: "تذوّق الأفضل لدينا", en: "Taste our signatures" },
  home_signature_body: {
    ar: "أطباق مختارة من المنيو لمن يريد بداية سهلة مع نكهات تركية واضحة.",
    en: "Selected dishes from the menu for an easy first order with clear Turkish flavor.",
  },
  home_breakfast_title: { ar: "فطور تركي للمشاركة", en: "Turkish Breakfast" },
  home_breakfast_body: {
    ar: "بيض، أجبان، مخبوزات، وأطباق صباحية تقدم للمشاركة.",
    en: "Eggs, cheeses, bakery, and morning plates made for sharing.",
  },
  home_bakery_title: { ar: "مخبوزات طازجة", en: "Fresh Bakery" },
  home_bakery_body: {
    ar: "بيدا، جوزلمة، بوريك، وخبز تركي دافئ بطابع المخبز.",
    en: "Pide, gozleme, borek, and warm Turkish bread with bakery character.",
  },
  home_mains_title: { ar: "أطباق رئيسية", en: "Main Dishes" },
  home_mains_body: {
    ar: "أطباق غنية للغداء والعشاء مع لحوم، دجاج، وصلصات تركية.",
    en: "Generous lunch and dinner plates with meat, chicken, and Turkish sauces.",
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
    ar: "وصفات تركية، صور واضحة، وأسعار ظاهرة تساعد الضيف على الاختيار بسرعة.",
    en: "Turkish recipes, clear photography, and visible prices help every guest choose with ease.",
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
    ar: "كل أصناف أسيا جورميه مرتبة حسب أقسام المنيو الرسمية كما تظهر في مصدر فوست.",
    en: "Every Asya's Gourmet item is organized by the official Foost menu sections.",
  },
  menu_page_eyebrow: { ar: "منيو أسيا الرسمي", en: "Official Asya's Menu" },

  popular_body: {
    ar: "اختيارات محبوبة من الفطور، المخبوزات، والمشويات.",
    en: "Guest favorites from breakfast, bakery, and grills.",
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
    ar: "المنيو واضح من الجوال: الصور بارزة، الأسعار ظاهرة، والأقسام سهلة الوصول.",
    en: "The menu is clear on mobile: strong photos, visible prices, and easy section access.",
  },
  visit_title: { ar: "زرنا في المطعم", en: "Visit Us" },
  visit_body: {
    ar: "افتح المنيو، تواصل معنا، أو احصل على الموقع مباشرة.",
    en: "Open the menu, contact us, or get directions directly.",
  },

  call: { ar: "اتصال", en: "Call" },
  whatsapp: { ar: "واتساب", en: "WhatsApp" },
  instagram: { ar: "إنستغرام", en: "Instagram" },
  directions: { ar: "الموقع", en: "Location" },
  order: { ar: "اطلب أو اسأل", en: "Order or Ask" },
  hours: { ar: "ساعات العمل", en: "Opening Hours" },
  address: { ar: "العنوان", en: "Address" },
  source: { ar: "مصدر المنيو", en: "Menu Source" },

  footer_rights: { ar: "جميع الحقوق محفوظة", en: "All rights reserved" },
  footer_tagline: {
    ar: "مائدة تركية دافئة ومنيو رسمي واضح.",
    en: "A warm Turkish table with a clear official menu.",
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
