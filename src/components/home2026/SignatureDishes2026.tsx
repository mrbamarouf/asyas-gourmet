import { Clock } from "lucide-react";
import { memo, useCallback } from "react";

import {
  DishImage,
  PriceTag,
  localizeMenuItemName,
  useItemDetail,
} from "@/components/asya/primitives";
import { useI18n } from "@/lib/i18n";

import type { HomeDishEntry } from "./Home2026";

interface SignatureDishes2026Props {
  eyebrow: string;
  title: string;
  dishCta: string;
  dishes: HomeDishEntry[];
}

export function SignatureDishes2026({
  eyebrow,
  title,
  dishCta,
  dishes,
}: SignatureDishes2026Props) {
  return (
    <section className="home2026-section home2026-signatures" aria-labelledby="home2026-signatures-title">
      <div className="home2026-section-head">
        <p className="home2026-eyebrow">{eyebrow}</p>
        <h2 id="home2026-signatures-title">{title}</h2>
      </div>
      <div className="home2026-dish-rail">
        {dishes.map((entry) => (
          <SignatureDishCard2026 key={entry.item.id} entry={entry} dishCta={dishCta} />
        ))}
      </div>
    </section>
  );
}

const SignatureDishCard2026 = memo(function SignatureDishCard2026({
  entry,
  dishCta,
}: {
  entry: HomeDishEntry;
  dishCta: string;
}) {
  const { locale } = useI18n();
  const { openItemDetail } = useItemDetail();
  const itemName = localizeMenuItemName(entry.item, locale);
  const prep = entry.item.prepTime
    ? locale === "ar"
      ? `${entry.item.prepTime} دقيقة`
      : `${entry.item.prepTime} min`
    : "";
  const handleOpen = useCallback(() => openItemDetail(entry), [entry, openItemDetail]);

  return (
    <button type="button" className="home2026-dish-card" onClick={handleOpen} aria-label={itemName}>
      <DishImage item={entry.item} alt={itemName} className="home2026-dish-image" />
      {prep ? (
        <span className="home2026-dish-time">
          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
          {prep}
        </span>
      ) : null}
      <strong>{itemName}</strong>
      <PriceTag item={entry.item} />
      <span className="home2026-dish-cta">{dishCta}</span>
    </button>
  );
});
