import type { Locale, LocalizedText } from "@/data/menu";

export function localizeMenuSectionHeading(text: LocalizedText, locale: Locale) {
  const localized = text[locale] ?? "";

  if (localized === "⭐ NEW ITEMS ⭐" || localized === "⭐ أصناف جديدة ⭐") {
    return localized.replace(/^⭐\s*|\s*⭐$/gu, "").trim();
  }

  return localized;
}

export function presentMenuTextForLocale(value: string, locale: Locale) {
  if (locale === "en" && /\p{Script=Arabic}/u.test(value)) return "";
  return value;
}

export function formatPresentationItemCount(count: number, locale: Locale) {
  if (locale === "en") return `${count} ${count === 1 ? "Item" : "Items"}`;
  if (count === 1) return "صنف واحد";
  if (count === 2) return "صنفان";
  if (count >= 3 && count <= 10) return `${count} أصناف`;
  return `${count} صنفًا`;
}

export function formatPresentationCategoryCount(count: number, locale: Locale) {
  if (locale === "en") return `${count} ${count === 1 ? "Subcategory" : "Subcategories"}`;
  if (count === 1) return "قسم فرعي واحد";
  if (count === 2) return "قسمان فرعيان";
  if (count >= 3 && count <= 10) return `${count} أقسام فرعية`;
  return `${count} قسمًا فرعيًا`;
}
