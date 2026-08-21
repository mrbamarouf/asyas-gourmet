import { ArrowUpRight, Instagram, MapPin, MessageCircle, Star } from "lucide-react";

import { RESTAURANT, type Locale } from "@/data/menu";

interface ConnectSection2026Props {
  locale: Locale;
  title: string;
  body: string;
  labels: {
    instagram: string;
    tiktok: string;
    whatsapp: string;
    review: string;
    directions: string;
  };
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14 3v11.25a4.75 4.75 0 1 1-4-4.69" />
      <path d="M14 3c.8 2.8 2.6 4.5 5 5" />
    </svg>
  );
}

export function ConnectSection2026({ locale, title, body, labels }: ConnectSection2026Props) {
  const actions = [
    {
      label: labels.instagram,
      href: RESTAURANT.instagramUrl,
      Icon: Instagram,
    },
    {
      label: labels.tiktok,
      href: RESTAURANT.tiktokUrl,
      Icon: TikTokIcon,
    },
    {
      label: labels.whatsapp,
      href: RESTAURANT.whatsappUrl,
      Icon: MessageCircle,
    },
    {
      label: labels.review,
      href: RESTAURANT.googleReviewUrl,
      Icon: Star,
    },
    {
      label: labels.directions,
      href: RESTAURANT.mapsUrl,
      Icon: MapPin,
    },
  ];

  return (
    <section
      className="home2026-section home2026-connect"
      aria-labelledby="home2026-connect-title"
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <header className="home2026-connect-head">
        <h2 id="home2026-connect-title">{title}</h2>
        <p>{body}</p>
      </header>

      <div className="home2026-connect-grid">
        {actions.map(({ label, href, Icon }) => (
          <a
            key={label}
            className="home2026-connect-action"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            dir={locale === "ar" ? "rtl" : "ltr"}
          >
            <span className="home2026-connect-icon">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <strong>{label}</strong>
            <ArrowUpRight className="home2026-connect-arrow h-4 w-4" aria-hidden="true" />
          </a>
        ))}
      </div>
    </section>
  );
}
