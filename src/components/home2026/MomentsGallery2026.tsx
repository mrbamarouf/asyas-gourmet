interface MomentPhoto2026 {
  src: string;
  alt: string;
}

interface MomentsGallery2026Props {
  eyebrow: string;
  title: string;
  photos: MomentPhoto2026[];
}

export function MomentsGallery2026({ eyebrow, title, photos }: MomentsGallery2026Props) {
  return (
    <section className="home2026-section home2026-gallery" aria-labelledby="home2026-gallery-title">
      <div className="home2026-section-head">
        <p className="home2026-eyebrow">{eyebrow}</p>
        <h2 id="home2026-gallery-title">{title}</h2>
      </div>
      <div className="home2026-gallery-rail">
        {photos.map((photo, index) => (
          <figure className="home2026-gallery-card" key={`${photo.src}-${index}`}>
            <img src={photo.src} alt={photo.alt} width={520} height={420} loading="lazy" decoding="async" />
          </figure>
        ))}
      </div>
    </section>
  );
}
