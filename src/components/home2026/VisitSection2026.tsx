import { MapPin, Navigation, Phone } from "lucide-react";

import { RESTAURANT } from "@/data/menu";

interface VisitSection2026Props {
  title: string;
  body: string;
  directions: string;
  call: string;
  mapLabel: string;
  address: string;
  image: string;
  imageAlt: string;
}

export function VisitSection2026({
  title,
  body,
  directions,
  call,
  mapLabel,
  address,
  image,
  imageAlt,
}: VisitSection2026Props) {
  return (
    <section id="visit" className="home2026-section home2026-visit" aria-labelledby="home2026-visit-title">
      <article className="home2026-visit-card home2026-visit-intro-card">
        <div className="home2026-visit-copy">
          <h2 id="home2026-visit-title">{title}</h2>
          <p>{body}</p>
          <address>
            <MapPin className="h-4 w-4" aria-hidden="true" />
            <span>{address}</span>
          </address>
          <div className="home2026-actions">
            <a
              href={RESTAURANT.mapsUrl}
              className="home2026-button home2026-button-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Navigation className="h-4 w-4" aria-hidden="true" />
              <span>{directions}</span>
            </a>
            <a href={`tel:${RESTAURANT.phone}`} className="home2026-button home2026-button-secondary">
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>{call}</span>
            </a>
          </div>
        </div>
      </article>
      <figure className="home2026-visit-media home2026-visit-image-card">
        <img src={image} alt={imageAlt} width={1200} height={900} loading="lazy" decoding="async" />
      </figure>
      <a
        href={RESTAURANT.mapsUrl}
        className="home2026-map home2026-map-card"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={mapLabel}
      >
        <span className="home2026-map-road road-one" />
        <span className="home2026-map-road road-two" />
        <span className="home2026-map-road road-three" />
        <span className="home2026-map-pin">
          <MapPin className="h-5 w-5" aria-hidden="true" />
        </span>
        <strong>{mapLabel}</strong>
      </a>
    </section>
  );
}
