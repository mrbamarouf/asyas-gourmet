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
