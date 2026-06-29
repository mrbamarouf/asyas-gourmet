import { Play } from "lucide-react";

import { CinematicVideo2026, type CinematicVideoAsset2026 } from "./CinematicVideo2026";

interface MomentsGallery2026Props {
  eyebrow: string;
  title: string;
  moments: CinematicVideoAsset2026[];
}

export function MomentsGallery2026({ eyebrow, title, moments }: MomentsGallery2026Props) {
  return (
    <section className="home2026-section home2026-gallery" aria-labelledby="home2026-gallery-title">
      <div className="home2026-section-head">
        <p className="home2026-eyebrow">{eyebrow}</p>
        <h2 id="home2026-gallery-title">{title}</h2>
      </div>
      <div className="home2026-gallery-rail">
        {moments.map((moment) => (
          <figure className="home2026-gallery-card" key={moment.src}>
            <CinematicVideo2026 asset={moment} className="home2026-gallery-media" />
            <span className="home2026-gallery-play" aria-hidden="true">
              <Play className="h-4 w-4" fill="currentColor" />
            </span>
            <figcaption>{moment.label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
