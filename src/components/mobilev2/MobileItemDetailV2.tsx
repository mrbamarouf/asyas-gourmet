import { ArrowUpRight, HandPlatter, Minus, Plus, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState, type ReactNode, type RefObject } from "react";

import { useTrayActionsV2 } from "./TrayContextV2";

export interface MobileDetailFactV2 {
  label: string;
  value: string;
}

export interface MobileDetailRecommendationV2 {
  id: string;
  name: string;
  imageSrc?: string;
  price: ReactNode;
  reason: string;
  onSelect: () => void;
}

export interface MobileItemDetailV2Props {
  locale: "ar" | "en";
  current: "home" | "menu";
  itemId: string;
  name: string;
  categoryName: string;
  description: string;
  imageSrc?: string;
  price: ReactNode;
  facts: MobileDetailFactV2[];
  allergens: string[];
  dietaryLabels: string[];
  recommendations: MobileDetailRecommendationV2[];
  labels: {
    close: string;
    back: string;
    description: string;
    quickFacts: string;
    allergens: string;
    dietary: string;
    recommendedWith: string;
  };
  dialogRef: RefObject<HTMLDivElement | null>;
  closeButtonRef: RefObject<HTMLButtonElement | null>;
  onClose: () => void;
}

const TRAY_COPY = {
  ar: {
    quantity: "الكمية",
    decrease: "تقليل الكمية",
    increase: "زيادة الكمية",
    add: "أضف إلى سلتي",
    added: "تمت الإضافة إلى سلتي",
    viewTray: "عرض سلتي",
    quickAdd: "أضف إلى سلتي",
  },
  en: {
    quantity: "Quantity",
    decrease: "Decrease quantity",
    increase: "Increase quantity",
    add: "Add to My Tray",
    added: "Added to My Tray",
    viewTray: "View My Tray",
    quickAdd: "Add to My Tray",
  },
} as const;

export function MobileItemDetailV2({
  locale,
  current,
  itemId,
  name,
  categoryName,
  description,
  imageSrc,
  price,
  facts,
  allergens,
  dietaryLabels,
  recommendations,
  labels,
  dialogRef,
  closeButtonRef,
  onClose,
}: MobileItemDetailV2Props) {
  const { addItem, openTray } = useTrayActionsV2();
  const copy = TRAY_COPY[locale];
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(itemId, quantity);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1500);
  };

  return (
    <motion.div
      className="mobilev2-detail-layer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.16, ease: "easeOut" }}
      role="presentation"
    >
      <motion.div
        ref={dialogRef}
        className="mobilev2-detail-sheet"
        role="dialog"
        aria-modal="true"
        aria-label={name}
        dir={locale === "ar" ? "rtl" : "ltr"}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 14 }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <header className="mobilev2-detail-toolbar">
          <span>{categoryName}</span>
          <button ref={closeButtonRef} type="button" onClick={onClose} aria-label={labels.close}>
            <X aria-hidden="true" />
          </button>
        </header>

        {imageSrc ? (
          <figure className="mobilev2-detail-media">
            <img
              src={imageSrc}
              alt={name}
              width={920}
              height={920}
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </figure>
        ) : null}

        <div className="mobilev2-detail-content">
          <section className="mobilev2-detail-heading">
            <small>{categoryName}</small>
            <h2>{name}</h2>
            <div>{price}</div>
          </section>

          {description ? (
            <DetailSectionV2 title={labels.description} className="mobilev2-detail-description">
              <p>{description}</p>
            </DetailSectionV2>
          ) : null}

          {facts.length ? (
            <DetailSectionV2 title={labels.quickFacts}>
              <div className="mobilev2-detail-facts">
                {facts.map((fact) => (
                  <span key={fact.label}>
                    <small>{fact.label}</small>
                    <strong>{fact.value}</strong>
                  </span>
                ))}
              </div>
            </DetailSectionV2>
          ) : null}

          {allergens.length ? (
            <DetailSectionV2 title={labels.allergens}>
              <div className="mobilev2-detail-tags">
                {allergens.map((label) => (
                  <span key={label}>{label}</span>
                ))}
              </div>
            </DetailSectionV2>
          ) : null}

          {dietaryLabels.length ? (
            <DetailSectionV2 title={labels.dietary}>
              <div className="mobilev2-detail-tags">
                {dietaryLabels.map((label) => (
                  <span key={label}>{label}</span>
                ))}
              </div>
            </DetailSectionV2>
          ) : null}

          {recommendations.length ? (
            <DetailSectionV2 title={labels.recommendedWith}>
              <div className="mobilev2-recommendation-rail">
                {recommendations.map((recommendation) => (
                  <article key={recommendation.id} className="mobilev2-recommendation-card">
                    <button
                      type="button"
                      className="mobilev2-recommendation-open"
                      onClick={recommendation.onSelect}
                    >
                      {recommendation.imageSrc ? (
                        <img
                          src={recommendation.imageSrc}
                          alt={recommendation.name}
                          width={220}
                          height={220}
                          loading="lazy"
                          decoding="async"
                        />
                      ) : null}
                      <span>
                        <strong>{recommendation.name}</strong>
                        {recommendation.price}
                        {recommendation.reason ? <small>{recommendation.reason}</small> : null}
                      </span>
                      <ArrowUpRight aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      className="mobilev2-recommendation-add"
                      onClick={() => addItem(recommendation.id)}
                      aria-label={`${copy.quickAdd}: ${recommendation.name}`}
                    >
                      <Plus aria-hidden="true" />
                    </button>
                  </article>
                ))}
              </div>
            </DetailSectionV2>
          ) : null}

          <section className="mobilev2-detail-add" aria-labelledby="mobilev2-detail-quantity">
            <small id="mobilev2-detail-quantity">{copy.quantity}</small>
            <div className="mobilev2-quantity-control" dir="ltr">
              <button
                type="button"
                onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                aria-label={copy.decrease}
              >
                <Minus aria-hidden="true" />
              </button>
              <strong>{quantity}</strong>
              <button
                type="button"
                onClick={() => setQuantity((value) => Math.min(99, value + 1))}
                aria-label={copy.increase}
              >
                <Plus aria-hidden="true" />
              </button>
            </div>
            <button type="button" className="mobilev2-detail-add-button" onClick={handleAdd}>
              <HandPlatter aria-hidden="true" />
              {copy.add}
            </button>
            <span aria-live="polite">{added ? copy.added : ""}</span>
            <button type="button" className="mobilev2-detail-view-tray" onClick={openTray}>
              {copy.viewTray}
            </button>
          </section>

          {current === "menu" ? (
            <button type="button" className="mobilev2-detail-back" onClick={onClose}>
              {labels.back}
            </button>
          ) : (
            <a href="/menu" className="mobilev2-detail-back" onClick={onClose}>
              {labels.back}
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function DetailSectionV2({
  title,
  className = "",
  children,
}: {
  title: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section className={`mobilev2-detail-section ${className}`.trim()}>
      <h3>{title}</h3>
      {children}
    </section>
  );
}
