import { ArrowUpRight } from "lucide-react";

interface BakeryFeature2026Props {
  title: string;
  body: string;
  cta: string;
  image: string;
  imageAlt: string;
}

export function BakeryFeature2026({
  title,
  body,
  cta,
  image,
  imageAlt,
}: BakeryFeature2026Props) {
  return (
    <section className="home2026-section">
      <article className="home2026-feature home2026-feature-bakery">
        <div className="home2026-feature-copy">
          <h2>{title}</h2>
          <p>{body}</p>
          <a href="/menu" className="home2026-button home2026-button-primary">
            <span>{cta}</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
        <figure className="home2026-feature-media">
          <img src={image} alt={imageAlt} width={1400} height={980} loading="lazy" decoding="async" />
        </figure>
      </article>
    </section>
  );
}
