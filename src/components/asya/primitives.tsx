import { motion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  CakeSlice,
  ChefHat,
  Clock,
  Coffee,
  CupSoda,
  ExternalLink,
  Flame,
  Home,
  Instagram,
  Languages,
  Leaf,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  Soup,
  Utensils,
  Wheat,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";

import {
  CATEGORIES,
  RESTAURANT,
  type Locale,
  type MenuCategory,
  type MenuItem,
} from "@/data/menu";
import { I18nContext, UI, useI18n, type UIKey } from "@/lib/i18n";

import desktopIntroVideo from "@/assets/asya-desktop-intro.mp4";
import mobileIntroVideo from "@/assets/asya-mobile-intro.mp4";
import logoImg from "@/assets/asyas-logo-transparent.png";
import placeholderImg from "@/assets/dish-placeholder.jpg";

export const softEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.72, ease: softEase },
  },
};

export const softScale: Variants = {
  hidden: { opacity: 0, scale: 0.96, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.82, ease: softEase },
  },
};

export const staggerChildren: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.08,
    },
  },
};

interface AsyaShellProps {
  children: ReactNode;
  current: "home" | "menu";
}

export function AsyaShell({ children, current }: AsyaShellProps) {
  const [locale, setLocale] = useState<Locale>("ar");

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: (key: UIKey) => UI[key][locale],
      tx: (obj: Record<Locale, string>) => obj[locale],
      dir: "ltr" as const,
    }),
    [locale],
  );

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = "ltr";
  }, [locale]);

  return (
    <I18nContext.Provider value={value}>
      <div data-locale={locale} className="asya-site">
        <MobileIntroOverlay />
        <DesktopIntroOverlay />
        <TopNav current={current} />
        {children}
        <Footer />
        <FloatingContact current={current} />
      </div>
    </I18nContext.Provider>
  );
}

function DesktopIntroOverlay() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldRender, setShouldRender] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [lockPage, setLockPage] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    if (!media.matches) {
      setShouldRender(false);
      return;
    }

    setLockPage(true);
    const video = videoRef.current;
    video?.load();
    video?.play().catch(() => undefined);
  }, []);

  useEffect(() => {
    if (!lockPage || !shouldRender) return;

    const preventDefault = (event: Event) => event.preventDefault();
    const preventScrollKeys = (event: KeyboardEvent) => {
      if ([" ", "ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End"].includes(event.key)) {
        event.preventDefault();
      }
    };
    document.documentElement.classList.add("asya-desktop-intro-lock");
    document.body.classList.add("asya-desktop-intro-lock");
    window.addEventListener("touchmove", preventDefault, { passive: false });
    window.addEventListener("wheel", preventDefault, { passive: false });
    window.addEventListener("keydown", preventScrollKeys);

    return () => {
      document.documentElement.classList.remove("asya-desktop-intro-lock");
      document.body.classList.remove("asya-desktop-intro-lock");
      window.removeEventListener("touchmove", preventDefault);
      window.removeEventListener("wheel", preventDefault);
      window.removeEventListener("keydown", preventScrollKeys);
    };
  }, [lockPage, shouldRender]);

  const finishIntro = () => {
    setIsFading(true);
    window.setTimeout(() => {
      setShouldRender(false);
      setLockPage(false);
    }, 500);
  };

  if (!shouldRender) return null;

  return (
    <div
      className={`desktop-intro-overlay ${isReady ? "is-ready" : ""} ${isFading ? "is-fading" : ""}`}
      aria-hidden="true"
    >
      <video
        ref={videoRef}
        className="desktop-intro-video"
        autoPlay
        muted
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        onLoadedData={() => setIsReady(true)}
        onCanPlay={() => videoRef.current?.play().catch(() => undefined)}
        onEnded={finishIntro}
        onError={finishIntro}
      >
        <source src={desktopIntroVideo} type="video/mp4" media="(min-width: 768px)" />
      </video>
    </div>
  );
}

function MobileIntroOverlay() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldRender, setShouldRender] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [lockPage, setLockPage] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    if (!media.matches) {
      setShouldRender(false);
      return;
    }

    setLockPage(true);
    const video = videoRef.current;
    video?.load();
    video?.play().catch(() => undefined);
  }, []);

  useEffect(() => {
    if (!lockPage || !shouldRender) return;

    const preventDefault = (event: Event) => event.preventDefault();
    document.documentElement.classList.add("asya-mobile-intro-lock");
    document.body.classList.add("asya-mobile-intro-lock");
    window.addEventListener("touchmove", preventDefault, { passive: false });
    window.addEventListener("wheel", preventDefault, { passive: false });

    return () => {
      document.documentElement.classList.remove("asya-mobile-intro-lock");
      document.body.classList.remove("asya-mobile-intro-lock");
      window.removeEventListener("touchmove", preventDefault);
      window.removeEventListener("wheel", preventDefault);
    };
  }, [lockPage, shouldRender]);

  const finishIntro = () => {
    setIsFading(true);
    window.setTimeout(() => {
      setShouldRender(false);
      setLockPage(false);
    }, 500);
  };

  if (!shouldRender) return null;

  return (
    <div
      className={`mobile-intro-overlay ${isReady ? "is-ready" : ""} ${isFading ? "is-fading" : ""}`}
      aria-hidden="true"
    >
      <video
        ref={videoRef}
        className="mobile-intro-video"
        autoPlay
        muted
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        onLoadedData={() => setIsReady(true)}
        onCanPlay={() => videoRef.current?.play().catch(() => undefined)}
        onEnded={finishIntro}
        onError={finishIntro}
      >
        <source src={mobileIntroVideo} type="video/mp4" media="(max-width: 767px)" />
      </video>
    </div>
  );
}

function TopNav({ current }: { current: "home" | "menu" }) {
  const { locale, setLocale, t, tx } = useI18n();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 20);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className={`site-nav ${scrolled ? "site-nav-solid" : ""}`}>
      <div className="site-nav-shell">
        <a href={current === "home" ? "#top" : "/"} className="nav-brand" aria-label="Asya's Gourmet">
          <span className="nav-logo-frame">
            <img src={logoImg} alt="Asya's Gourmet" width={42} height={42} />
          </span>
          <span className="nav-brand-copy">
            <strong>{tx(RESTAURANT.name)}</strong>
            <small>{tx(RESTAURANT.kicker)}</small>
          </span>
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          <a className={current === "home" ? "is-current" : ""} href="/">
            <Home className="nav-icon" />
            <span>{t("nav_home")}</span>
          </a>
          <a className={current === "menu" ? "is-current" : ""} href="/menu">
            <Utensils className="nav-icon" />
            <span>{t("nav_menu")}</span>
          </a>
          <a href="/#about">{t("nav_about")}</a>
          <a href="/#visit">{t("nav_visit")}</a>
        </nav>

        <div className="nav-actions">
          <a className={current === "menu" ? "mobile-menu-button is-current" : "mobile-menu-button"} href="/menu">
            <Utensils className="h-4 w-4" />
            <span>{t("nav_menu")}</span>
          </a>
          <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="nav-contact">
            <MessageCircle className="h-4 w-4" />
            <span>{t("nav_contact")}</span>
          </a>
          <button
            type="button"
            onClick={() => setLocale(locale === "ar" ? "en" : "ar")}
            className="language-button"
            aria-label="Toggle language"
          >
            <Languages className="h-4 w-4" />
            <span>{locale === "ar" ? "EN" : "عربي"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  body,
  icon,
  tone = "dark",
}: {
  eyebrow: string;
  title: string;
  body?: string;
  icon?: ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <motion.div className={`section-intro section-intro-${tone}`} variants={fadeUp}>
      <p className="section-kicker">
        {icon}
        <span>{eyebrow}</span>
      </p>
      <h2>{title}</h2>
      {body ? <p className="section-copy">{body}</p> : null}
    </motion.div>
  );
}

export function DishImage({
  item,
  alt,
  eager = false,
  className = "",
}: {
  item: MenuItem;
  alt: string;
  eager?: boolean;
  className?: string;
}) {
  const { locale } = useI18n();
  const [loaded, setLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const src = getDishImage(item);
  const isPlaceholder = src === placeholderImg;
  const placeholderText = locale === "ar" ? "الصورة قريبًا" : "Image Coming Soon";

  useEffect(() => {
    const image = imageRef.current;
    setLoaded(Boolean(image?.complete && image.naturalWidth > 0));
  }, [src]);

  return (
    <span
      className={`dish-image-shell ${loaded ? "is-loaded" : ""} ${isPlaceholder ? "is-placeholder" : ""} ${className}`}
    >
      {!loaded && !isPlaceholder ? <span className="image-skeleton" aria-hidden="true" /> : null}
      {isPlaceholder ? (
        <span className="placeholder-mark" aria-hidden="true">
          <img src={logoImg} alt="" width={78} height={78} />
          <small>{placeholderText}</small>
        </span>
      ) : null}
      <img
        ref={imageRef}
        src={src}
        alt={isPlaceholder ? "" : alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        width={640}
        height={640}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
      />
    </span>
  );
}

export function MenuCard({
  item,
  category,
  variant = "menu",
}: {
  item: MenuItem;
  category: MenuCategory;
  variant?: "menu" | "feature" | "wide";
}) {
  const { tx } = useI18n();

  return (
    <motion.article
      className={`menu-card menu-card-${variant}`}
      variants={fadeUp}
      whileHover={{ y: -5, scale: variant === "menu" ? 1.006 : 1.012 }}
      transition={{ duration: 0.24, ease: "easeOut" }}
    >
      <DishImage item={item} alt={tx(item.name)} className="menu-card-image" />
      <div className="menu-card-copy">
        <div className="menu-card-meta">
          <span>{tx(category.name)}</span>
          <PriceTag item={item} />
        </div>
        <h3>{tx(item.name)}</h3>
        {tx(item.description) ? <p>{tx(item.description)}</p> : null}
        {item.options?.length ? <MenuOptions item={item} /> : null}
      </div>
    </motion.article>
  );
}

export function PriceTag({ item }: { item: MenuItem }) {
  const { locale, tx } = useI18n();
  const price = formatPrice(item.price, locale);

  return (
    <span className="price-tag">
      <strong>{price}</strong>
      {!/[A-Za-z\u0600-\u06FF]/.test(price) ? <small>{tx(RESTAURANT.currency)}</small> : null}
    </span>
  );
}

function MenuOptions({ item }: { item: MenuItem }) {
  const { tx } = useI18n();

  return (
    <div className="menu-options" aria-label={`${tx(item.name)} options`}>
      {item.options?.map((option) => (
        <span key={`${item.id}-${option.name}-${option.price}`}>
          <strong>{option.name}</strong>
          <em>{option.price}</em>
        </span>
      ))}
    </div>
  );
}

export function CategoryGlyph({ category }: { category: MenuCategory }) {
  const label = `${category.id} ${category.name.en}`.toLowerCase();
  const Icon =
    /coffee/.test(label)
      ? Coffee
      : /tea|drink|juice|beverage|lemonade|matcha/.test(label)
        ? CupSoda
        : /dessert|sweet|baklava|cake|kunafa|rice pudding/.test(label)
          ? CakeSlice
          : /soup/.test(label)
            ? Soup
            : /grill|casserole|kebab|meat|chicken|beef|lamb/.test(label)
              ? Flame
              : /salad|garden|greens|olive|friends/.test(label)
                ? Leaf
                : /bread|bakery|pastry|pide|borek|simit|lahmacun|pie|pizza|gozleme/.test(label)
                  ? Wheat
                  : /signature|chef/.test(label)
                    ? ChefHat
                    : Utensils;

  return <Icon className="h-4 w-4" aria-hidden="true" />;
}

export function categoryById(id: string) {
  return CATEGORIES.find((category) => category.id === id);
}

export function getDishImage(item: MenuItem) {
  return item.image ?? item.sourceImageUrl ?? placeholderImg;
}

export function isOfficialImage(item: MenuItem) {
  return Boolean(item.image || item.sourceImageUrl);
}

export function isUsableImageUrl(url?: string) {
  return Boolean(url && /\.(avif|webp|png|jpe?g)(\?|$)/i.test(url));
}

export function whatsappHref() {
  const digits = RESTAURANT.whatsapp.replace(/[^\d]/g, "");
  return `https://wa.me/${digits}`;
}

function formatPrice(price: string, locale: Locale) {
  if (locale === "ar" && /Small/i.test(price) && /Big/i.test(price)) {
    return price.replace(/Small/gi, "صغير").replace(/Big/gi, "كبير");
  }
  return price;
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="contact-icon">{icon}</span>
      <span className="contact-label">{label}</span>
      <strong>{value}</strong>
      {href ? <ArrowUpRight className="h-4 w-4" /> : null}
    </>
  );

  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="contact-card">
      {content}
    </a>
  ) : (
    <div className="contact-card">{content}</div>
  );
}

export function VisitContact() {
  const { t, tx } = useI18n();

  return (
    <section id="visit" className="visit-section">
      <div className="section-wrap">
        <SectionIntro
          eyebrow={t("sec_visit")}
          title={t("visit_title")}
          body={t("visit_body")}
          icon={<MapPin className="h-4 w-4" />}
        />

        <div id="contact" className="contact-grid">
          <ContactCard icon={<MessageCircle />} label={t("whatsapp")} value={RESTAURANT.whatsapp} href={whatsappHref()} />
          <ContactCard icon={<Instagram />} label={t("instagram")} value="@asyas.gourmet" href={RESTAURANT.instagramUrl} />
          <ContactCard icon={<MapPin />} label={t("address")} value={tx(RESTAURANT.address)} href={RESTAURANT.mapsUrl} />
          <ContactCard icon={<Clock />} label={t("hours")} value={tx(RESTAURANT.hours)} />
        </div>

        <div className="contact-actions">
          <a href={`tel:${RESTAURANT.phone}`}>
            <Phone className="h-4 w-4" />
            {t("call")}
          </a>
          <a href={RESTAURANT.menuSourceUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4" />
            {t("source")}
          </a>
        </div>
      </div>
    </section>
  );
}

function FloatingContact({ current }: { current: "home" | "menu" }) {
  const { t } = useI18n();

  return (
    <div className="floating-contact">
      <a href={current === "home" ? "/menu" : "#menu-top"} className="floating-link floating-link-menu">
        <Utensils className="h-4 w-4" />
        <span>{current === "home" ? t("exploreFullMenu") : t("nav_menu")}</span>
      </a>
      <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="floating-link floating-link-main">
        <MessageCircle className="h-5 w-5" />
        <span>{t("order")}</span>
      </a>
      <a href={RESTAURANT.instagramUrl} target="_blank" rel="noopener noreferrer" className="floating-link floating-link-menu">
        <Instagram className="h-4 w-4" />
        <span>{t("instagram")}</span>
      </a>
    </div>
  );
}

function Footer() {
  const { t, tx } = useI18n();

  return (
    <footer className="footer-premium">
      <div className="footer-grid">
        <div className="footer-brand">
          <img src={logoImg} alt="Asya's Gourmet" width={80} height={80} />
          <h2>{tx(RESTAURANT.name)}</h2>
          <p>{t("footer_tagline")}</p>
        </div>

        <div className="footer-links">
          <a href={RESTAURANT.instagramUrl} target="_blank" rel="noopener noreferrer">
            <Instagram className="h-4 w-4" />
            <span>{t("instagram")}</span>
          </a>
          <a href={whatsappHref()} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-4 w-4" />
            <span>{t("whatsapp")}</span>
          </a>
          <a href={RESTAURANT.mapsUrl} target="_blank" rel="noopener noreferrer">
            <MapPin className="h-4 w-4" />
            <span>{t("directions")}</span>
          </a>
        </div>

        <div className="footer-hours">
          <span>{t("hours")}</span>
          <strong>{tx(RESTAURANT.hours)}</strong>
          <small>
            © {new Date().getFullYear()} {tx(RESTAURANT.name)}. {t("footer_rights")}
          </small>
        </div>
      </div>
    </footer>
  );
}
