import { Clock } from "lucide-react";
import { memo, useCallback, useEffect, useRef, useState } from "react";

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
  const railRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveCard = useCallback(() => {
    frameRef.current = null;

    const rail = railRef.current;
    if (!rail || !window.matchMedia("(max-width: 767px)").matches) return;

    const railBox = rail.getBoundingClientRect();
    const railCenter = railBox.left + railBox.width / 2;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    Array.from(rail.children).forEach((child, index) => {
      const cardBox = child.getBoundingClientRect();
      const cardCenter = cardBox.left + cardBox.width / 2;
      const distance = Math.abs(cardCenter - railCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex((current) => (current === closestIndex ? current : closestIndex));
  }, []);

  const handleRailScroll = useCallback(() => {
    if (frameRef.current !== null) return;
    frameRef.current = window.requestAnimationFrame(updateActiveCard);
  }, [updateActiveCard]);

  useEffect(() => {
    updateActiveCard();

    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [updateActiveCard]);

  return (
    <section className="home2026-section home2026-signatures" aria-labelledby="home2026-signatures-title">
      <div className="home2026-section-head">
        <p className="home2026-eyebrow">{eyebrow}</p>
        <h2 id="home2026-signatures-title">{title}</h2>
      </div>
      <div className="home2026-dish-rail" ref={railRef} onScroll={handleRailScroll}>
        {dishes.map((entry, index) => (
          <SignatureDishCard2026
            key={entry.item.id}
            entry={entry}
            dishCta={dishCta}
            isActive={index === activeIndex}
          />
        ))}
      </div>
    </section>
  );
}

const SignatureDishCard2026 = memo(function SignatureDishCard2026({
  entry,
  dishCta,
  isActive,
}: {
  entry: HomeDishEntry;
  dishCta: string;
  isActive: boolean;
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
    <button
      type="button"
      className={`home2026-dish-card${isActive ? " is-active" : ""}`}
      onClick={handleOpen}
      aria-label={itemName}
      aria-current={isActive ? "true" : undefined}
    >
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
