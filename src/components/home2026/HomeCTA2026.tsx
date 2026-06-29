import { ArrowUpRight } from "lucide-react";

interface HomeCTA2026Props {
  title: string;
  body: string;
  cta: string;
  image: string;
  imageAlt: string;
}

export function HomeCTA2026({ title, body, cta, image, imageAlt }: HomeCTA2026Props) {
  return (
    <section className="home2026-final" aria-labelledby="home2026-final-title">
      <img src={image} alt={imageAlt} width={1400} height={960} loading="lazy" decoding="async" />
      <div className="home2026-final-copy">
        <h2 id="home2026-final-title">{title}</h2>
        <p>{body}</p>
        <a href="/menu" className="home2026-button home2026-button-primary">
          <span>{cta}</span>
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
