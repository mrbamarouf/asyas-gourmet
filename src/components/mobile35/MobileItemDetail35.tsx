import { ArrowUpRight, X } from "lucide-react";
import { motion } from "framer-motion";
import type { ReactNode, RefObject } from "react";

export interface MobileDetailFact35 {
  label: string;
  value: string;
}

export interface MobileDetailRecommendation35 {
  id: string;
  name: string;
  imageSrc?: string;
  price: ReactNode;
  reason: string;
  onSelect: () => void;
}

export interface MobileItemDetail35Props {
  locale: "ar" | "en";
  current: "home" | "menu";
  name: string;
  categoryName: string;
  description: string;
  imageSrc?: string;
  price: ReactNode;
  facts: MobileDetailFact35[];
  allergens: string[];
  dietaryLabels: string[];
  recommendations: MobileDetailRecommendation35[];
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

export function MobileItemDetail35({
  locale,
  current,
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
}: MobileItemDetail35Props) {
  return (
    <motion.div
      className="mobile35-detail-layer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.16, ease: "easeOut" }}
      role="presentation"
    >
      <motion.div
        ref={dialogRef}
        className="mobile35-detail-sheet"
        role="dialog"
        aria-modal="true"
        aria-label={name}
        dir={locale === "ar" ? "rtl" : "ltr"}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 12 }}
        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      >
        <header className="mobile35-detail-toolbar">
          <span>{categoryName}</span>
          <button ref={closeButtonRef} type="button" onClick={onClose} aria-label={labels.close}>
            <X aria-hidden="true" />
            <span>{labels.close}</span>
          </button>
        </header>

        {imageSrc ? (
          <figure className="mobile35-detail-media">
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

        <div className="mobile35-detail-content">
          <section className="mobile35-detail-heading">
            <small>{categoryName}</small>
            <h2>{name}</h2>
            <div>{price}</div>
          </section>

          {description ? (
            <section className="mobile35-detail-description">
              <h3>{labels.description}</h3>
              <p>{description}</p>
            </section>
          ) : null}

          {facts.length ? (
            <MobileDetailSection title={labels.quickFacts}>
              <div className="mobile35-detail-facts">
                {facts.map((fact) => (
                  <span key={fact.label}>
                    <small>{fact.label}</small>
                    <strong>{fact.value}</strong>
                  </span>
                ))}
              </div>
            </MobileDetailSection>
          ) : null}

          {allergens.length ? (
            <MobileDetailSection title={labels.allergens}>
              <div className="mobile35-detail-tags">
                {allergens.map((label) => (
                  <span key={label}>{label}</span>
                ))}
              </div>
            </MobileDetailSection>
          ) : null}

          {dietaryLabels.length ? (
            <MobileDetailSection title={labels.dietary}>
              <div className="mobile35-detail-tags">
                {dietaryLabels.map((label) => (
                  <span key={label}>{label}</span>
                ))}
              </div>
            </MobileDetailSection>
          ) : null}

          {recommendations.length ? (
            <MobileDetailSection title={labels.recommendedWith}>
              <div className="mobile35-recommendation-rail">
                {recommendations.map((recommendation) => (
                  <button key={recommendation.id} type="button" onClick={recommendation.onSelect}>
                    {recommendation.imageSrc ? (
                      <span className="mobile35-recommendation-image">
                        <img
                          src={recommendation.imageSrc}
                          alt={recommendation.name}
                          width={240}
                          height={240}
                          loading="lazy"
                          decoding="async"
                        />
                      </span>
                    ) : null}
                    <span className="mobile35-recommendation-copy">
                      <strong>{recommendation.name}</strong>
                      {recommendation.price}
                      {recommendation.reason ? <small>{recommendation.reason}</small> : null}
                    </span>
                    <ArrowUpRight aria-hidden="true" />
                  </button>
                ))}
              </div>
            </MobileDetailSection>
          ) : null}

          {current === "menu" ? (
            <button type="button" className="mobile35-detail-back" onClick={onClose}>
              {labels.back}
            </button>
          ) : (
            <a href="/menu" className="mobile35-detail-back" onClick={onClose}>
              {labels.back}
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function MobileDetailSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mobile35-detail-section">
      <span aria-hidden="true" />
      <h3>{title}</h3>
      {children}
    </section>
  );
}
