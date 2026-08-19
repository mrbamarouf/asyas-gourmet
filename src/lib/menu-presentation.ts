import type { Locale, LocalizedText } from "@/data/menu";

export function localizeMenuSectionHeading(text: LocalizedText, locale: Locale) {
  const localized = text[locale] ?? "";

  if (localized === "⭐ NEW ITEMS ⭐" || localized === "⭐ أصناف جديدة ⭐") {
    return localized.replace(/^⭐\s*|\s*⭐$/gu, "").trim();
  }

  return localized;
}
