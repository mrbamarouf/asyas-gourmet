import {
  Home,
  Info,
  Instagram,
  Languages,
  MapPin,
  MessageCircle,
  Phone,
  Utensils,
} from "lucide-react";

import { RESTAURANT } from "@/data/menu";
import { useI18n } from "@/lib/i18n";

import logoImg from "@/assets/asyas-logo-transparent.png";

export function MobileHeader35({ current }: { current: "home" | "menu" }) {
  const { locale, setLocale, t, tx } = useI18n();

  return (
    <header className="mobile35-header" dir={locale === "ar" ? "rtl" : "ltr"}>
      <a href={current === "home" ? "#top" : "/"} className="mobile35-brand">
        <span className="mobile35-brand-mark">
          <img src={logoImg} alt="Asya's Gourmet" width={44} height={44} />
        </span>
        <span>
          <strong>{tx(RESTAURANT.name)}</strong>
          <small>{tx(RESTAURANT.kicker)}</small>
        </span>
      </a>
      <nav aria-label={locale === "ar" ? "التنقل السريع" : "Quick navigation"}>
        <a href="/#about-asya" className="mobile35-about-link" aria-label={t("nav_about")}>
          <Info aria-hidden="true" />
          <span>{t("nav_about")}</span>
        </a>
        <a
          href="/menu"
          className={current === "menu" ? "is-current" : ""}
          aria-label={t("nav_menu")}
        >
          <Utensils aria-hidden="true" />
        </a>
        <button
          type="button"
          onClick={() => setLocale(locale === "ar" ? "en" : "ar")}
          aria-label={locale === "ar" ? "تغيير اللغة إلى الإنجليزية" : "Switch language to Arabic"}
        >
          <Languages aria-hidden="true" />
          <span>{locale === "ar" ? "EN" : "AR"}</span>
        </button>
      </nav>
    </header>
  );
}

export function MobileFooter35() {
  const { locale, t, tx } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="mobile35-footer" dir={locale === "ar" ? "rtl" : "ltr"}>
      <img src={logoImg} alt="Asya's Gourmet" width={64} height={64} loading="lazy" />
      <strong>{tx(RESTAURANT.name)}</strong>
      <small>{tx(RESTAURANT.kicker)}</small>
      <nav aria-label={locale === "ar" ? "روابط التواصل" : "Contact links"}>
        <a href="/">
          <Home aria-hidden="true" />
          <span>{t("nav_home")}</span>
        </a>
        <a href="/menu">
          <Utensils aria-hidden="true" />
          <span>{t("nav_menu")}</span>
        </a>
        <a href="/#about-asya">
          <Info aria-hidden="true" />
          <span>{t("nav_about")}</span>
        </a>
        <a href={RESTAURANT.instagramUrl} target="_blank" rel="noopener noreferrer">
          <Instagram aria-hidden="true" />
          <span>{t("instagram")}</span>
        </a>
        <a href={RESTAURANT.whatsappUrl} target="_blank" rel="noopener noreferrer">
          <MessageCircle aria-hidden="true" />
          <span>{t("whatsapp")}</span>
        </a>
        <a href={`tel:${RESTAURANT.phone}`}>
          <Phone aria-hidden="true" />
          <span>{t("call")}</span>
        </a>
        <a href={RESTAURANT.mapsUrl} target="_blank" rel="noopener noreferrer">
          <MapPin aria-hidden="true" />
          <span>{t("directions")}</span>
        </a>
      </nav>
      <p>
        © {year} {tx(RESTAURANT.name)}. {t("footer_rights")}
      </p>
    </footer>
  );
}
