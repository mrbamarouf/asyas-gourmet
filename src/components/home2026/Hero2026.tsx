import { ArrowUpRight, Heart, Leaf, MapPin, Sparkles } from "lucide-react";

import { RESTAURANT } from "@/data/menu";

interface Hero2026Props {
  eyebrow: string;
  title: string;
  subtitle: string;
  cta: string;
  directions: string;
  image: string;
  imageAlt: string;
  trust: string[];
}

export function Hero2026({
  eyebrow,
  title,
  subtitle,
  cta,
  directions,
  image,
  imageAlt,
  trust,
}: Hero2026Props) {
  const icons = [Leaf, Sparkles, Heart];

  return (
    <section className="home2026-hero" aria-labelledby="home2026-hero-title">
      <figure className="home2026-hero-media">
        <img
          src={image}
          alt={imageAlt}
          width={1600}
          height={1067}
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </figure>
      <div className="home2026-hero-copy">
        <p className="home2026-eyebrow">{eyebrow}</p>
        <h1 id="home2026-hero-title">{title}</h1>
        <p>{subtitle}</p>
        <div className="home2026-actions">
          <a href="/menu" className="home2026-button home2026-button-primary">
            <span>{cta}</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={RESTAURANT.mapsUrl}
            className="home2026-button home2026-button-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPin className="h-4 w-4" aria-hidden="true" />
            <span>{directions}</span>
          </a>
        </div>
      </div>
      <div className="home2026-trust" aria-label={eyebrow}>
        {trust.map((label, index) => {
          const Icon = icons[index] ?? Sparkles;
          return (
            <span key={label}>
              <Icon className="h-4 w-4" aria-hidden="true" />
              {label}
            </span>
          );
        })}
      </div>
    </section>
  );
}
