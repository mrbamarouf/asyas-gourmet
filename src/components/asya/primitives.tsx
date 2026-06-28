import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
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
  X,
} from "lucide-react";
import {
  createContext,
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type ReactNode,
} from "react";

import {
  CATEGORIES,
  RESTAURANT,
  type Locale,
  type LocalizedText,
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
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.18, ease: softEase },
  },
};

export const softScale: Variants = {
  hidden: { opacity: 0, scale: 0.985 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.18, ease: softEase },
  },
};

export const staggerChildren: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.03,
      staggerChildren: 0.03,
    },
  },
};

interface AsyaShellProps {
  children: ReactNode;
  current: "home" | "menu";
}

interface ItemDetailSelection {
  item: MenuItem;
  category: MenuCategory;
}

interface ItemDetailContextValue {
  openItemDetail: (selection: ItemDetailSelection) => void;
}

const ItemDetailContext = createContext<ItemDetailContextValue | null>(null);

export function useItemDetail(): ItemDetailContextValue {
  const context = useContext(ItemDetailContext);
  if (!context) {
    return { openItemDetail: () => undefined };
  }
  return context;
}

export function localizeMenuText(text: LocalizedText, locale: Locale) {
  return cleanLocalizedMenuText(text[locale], locale);
}

export function localizeMenuDescription(item: MenuItem, _category: MenuCategory, locale: Locale) {
  return cleanDescriptionCopy(
    cleanLocalizedMenuText(item.description[locale], locale),
    locale,
  );
}

function cleanLocalizedMenuText(value: string | undefined, locale: Locale) {
  if (!value) return "";

  const cleaned = value
    .replace(/\r\n/g, "\n")
    .replace(/\s*\d+:T[0-9A-Za-z]+,[\s\S]*$/g, "")
    .replace(/\s*[$0-9A-Za-z]+:T[0-9A-Za-z]*\s*$/g, "")
    .trim();

  if (!cleaned || /^\$?[0-9A-Fa-f]{1,8}$/.test(cleaned)) return "";
  if (locale === "ar") {
    const arabicOnly = cleaned
      .replace(/\s*\([^)]*[\p{Script=Latin}][^)]*\)/gu, "")
      .replace(/[\p{Script=Latin}][\p{Script=Latin}\p{Number}\s.'’&+-]*/gu, "")
      .replace(/\s{2,}/g, " ")
      .replace(/\s+([،.])/g, "$1")
      .trim();

    return /[\u0600-\u06FF]/.test(arabicOnly) ? arabicOnly : "";
  }
  return /[A-Za-z]/.test(cleaned) ? cleaned : "";
}

function cleanDescriptionCopy(value: string, locale: Locale) {
  if (!value) return "";

  const withoutSeparators = value
    .replace(/[—_|]/g, locale === "ar" ? "،" : ",")
    .replace(/::/g, ":")
    .replace(/…/g, ".")
    .replace(/\s+/g, " ")
    .trim();

  return locale === "ar"
    ? withoutSeparators
        .replace(/[A-Za-z]+/g, "")
        .replace(/\s{2,}/g, " ")
        .trim()
    : withoutSeparators
        .replace(/[\u0600-\u06FF]+/g, "")
        .replace(/\s{2,}/g, " ")
        .trim();
}

export function compactOfficialDescription(value: string, locale: Locale) {
  if (!value) return "";

  const limit = locale === "ar" ? 170 : 185;
  const normalized = value.replace(/\s+/g, " ").trim();
  if (normalized.length <= limit) return normalized;

  const clipped = normalized.slice(0, limit);
  const lastSpace = clipped.lastIndexOf(" ");
  const excerpt = (lastSpace > 80 ? clipped.slice(0, lastSpace) : clipped).trim();
  return excerpt.replace(/[،,;:.]$/g, "") + (locale === "ar" ? "." : ".");
}

function localizeOptionName(name: string, locale: Locale) {
  const labels: Record<string, LocalizedText> = {
    small: { ar: "صغير", en: "Small" },
    medium: { ar: "وسط", en: "Medium" },
    big: { ar: "كبير", en: "Big" },
  };

  return labels[name.trim().toLowerCase()]?.[locale] ?? name;
}

export function AsyaShell({ children, current }: AsyaShellProps) {
  const [locale, setLocale] = useState<Locale>("ar");
  const [detailSelection, setDetailSelection] = useState<ItemDetailSelection | null>(null);

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
  const openItemDetail = useCallback(
    (selection: ItemDetailSelection) => setDetailSelection(selection),
    [],
  );
  const detailValue = useMemo(() => ({ openItemDetail }), [openItemDetail]);
  const closeItemDetail = useCallback(() => setDetailSelection(null), []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = "ltr";
  }, [locale]);

  return (
    <I18nContext.Provider value={value}>
      <ItemDetailContext.Provider value={detailValue}>
        <div data-locale={locale} className="asya-site site-shell">
          <TopNav current={current} />
          {children}
          <Footer />
          <FloatingContact current={current} />
          <MobileBottomNav current={current} />
          <AnimatePresence>
            {detailSelection ? (
              <ItemDetailView
                key={detailSelection.item.id}
                selection={detailSelection}
                current={current}
                onClose={closeItemDetail}
              />
            ) : null}
          </AnimatePresence>
        </div>
      </ItemDetailContext.Provider>
    </I18nContext.Provider>
  );
}

export function AsyaIntroOverlay() {
  const [hasPlayedIntroInThisPageLoad, setHasPlayedIntroInThisPageLoad] = useState(false);

  const handleComplete = useCallback(() => {
    setHasPlayedIntroInThisPageLoad(true);
  }, []);

  if (hasPlayedIntroInThisPageLoad) return null;

  return (
    <>
      <MobileIntroOverlay onComplete={handleComplete} />
      <DesktopIntroOverlay onComplete={handleComplete} />
    </>
  );
}

function DesktopIntroOverlay({ onComplete }: { onComplete: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fadeTimerRef = useRef<number | null>(null);
  const finishedRef = useRef(false);
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

    return () => {
      if (fadeTimerRef.current) window.clearTimeout(fadeTimerRef.current);
    };
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

  const finishIntro = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    setIsFading(true);
    fadeTimerRef.current = window.setTimeout(() => {
      setShouldRender(false);
      setLockPage(false);
      onComplete();
    }, 500);
  }, [onComplete]);

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

function MobileIntroOverlay({ onComplete }: { onComplete: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fadeTimerRef = useRef<number | null>(null);
  const finishedRef = useRef(false);
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

    return () => {
      if (fadeTimerRef.current) window.clearTimeout(fadeTimerRef.current);
    };
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

  const finishIntro = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    setIsFading(true);
    fadeTimerRef.current = window.setTimeout(() => {
      setShouldRender(false);
      setLockPage(false);
      onComplete();
    }, 500);
  }, [onComplete]);

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

  return (
    <header className="site-nav site-nav-solid">
      <div className="site-nav-shell">
        <a
          href={current === "home" ? "#top" : "/"}
          className="nav-brand"
          aria-label="Asya's Gourmet"
        >
          <span className="nav-logo-frame">
            <img src={logoImg} alt="Asya's Gourmet" width={42} height={42} />
          </span>
          <span className="nav-brand-copy">
            <strong>{tx(RESTAURANT.name)}</strong>
            <small>{tx(RESTAURANT.kicker)}</small>
          </span>
        </a>

        <nav
          className="nav-links"
          aria-label="Primary navigation"
          dir={locale === "ar" ? "rtl" : "ltr"}
        >
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
          <a href={whatsappHref()} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="nav-icon" />
            <span>{t("nav_contact")}</span>
          </a>
        </nav>

        <div className="nav-actions">
          <a
            className={current === "menu" ? "mobile-menu-button is-current" : "mobile-menu-button"}
            href="/menu"
          >
            <Utensils className="h-4 w-4" />
            <span>{t("nav_menu")}</span>
          </a>
          <button
            type="button"
            onClick={() => setLocale(locale === "ar" ? "en" : "ar")}
            className="language-button"
            aria-label={locale === "ar" ? "تغيير اللغة" : "Change language"}
          >
            <Languages className="h-4 w-4" />
            <span>{locale === "ar" ? "اللغة" : "Language"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export const SectionIntro = memo(function SectionIntro({
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
});

export const DishImage = memo(function DishImage({
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
  const shellRef = useRef<HTMLSpanElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const sourceSrc = getDishImage(item);
  const [src, setSrc] = useState(sourceSrc);
  const isPlaceholder = src === placeholderImg;
  const placeholderText = locale === "ar" ? "الصورة قريبًا" : "Image Coming Soon";

  useEffect(() => {
    setSrc(sourceSrc);
  }, [sourceSrc]);

  useEffect(() => {
    const image = imageRef.current;
    const shell = shellRef.current;
    if (!shell) return;

    if (isPlaceholder || (image?.complete && image.naturalWidth > 0)) {
      shell.dataset.loaded = "true";
    } else {
      delete shell.dataset.loaded;
    }
  }, [src]);

  const markLoaded = useCallback(() => {
    if (shellRef.current) shellRef.current.dataset.loaded = "true";
  }, []);

  const handleImageError = useCallback(() => {
    setSrc(placeholderImg);
    markLoaded();
  }, [markLoaded]);

  return (
    <span
      ref={shellRef}
      className={`dish-image-shell ${isPlaceholder ? "is-placeholder" : ""} ${className}`}
      data-loaded={isPlaceholder ? "true" : undefined}
    >
      {!isPlaceholder ? <span className="image-skeleton" aria-hidden="true" /> : null}
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
        sizes={
          eager
            ? "(max-width: 767px) 100vw, 42vw"
            : "(max-width: 767px) 7rem, (max-width: 1120px) 33vw, 24vw"
        }
        onLoad={markLoaded}
        onError={handleImageError}
      />
    </span>
  );
});

interface MenuCardProps {
  item: MenuItem;
  category: MenuCategory;
  variant?: "menu" | "feature" | "wide";
  motionEnabled?: boolean;
}

export const MenuCard = memo(function MenuCard({
  item,
  category,
  variant = "menu",
  motionEnabled = true,
}: MenuCardProps) {
  const { locale } = useI18n();
  const { openItemDetail } = useItemDetail();
  const itemName = localizeMenuText(item.name, locale);
  const categoryName = localizeMenuText(category.name, locale);
  const description = compactOfficialDescription(
    localizeMenuDescription(item, category, locale),
    locale,
  );
  const className = `menu-card menu-card-${variant}`;
  const handleOpen = useCallback(
    () => openItemDetail({ item, category }),
    [category, item, openItemDetail],
  );
  const handleKeyDown = useCallback(
    (event: ReactKeyboardEvent<HTMLElement>) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        handleOpen();
      }
    },
    [handleOpen],
  );
  const content = (
    <>
      <DishImage item={item} alt={itemName} className="menu-card-image" />
      <div className="menu-card-copy">
        <div className="menu-card-meta">
          <span>{categoryName}</span>
          <PriceTag item={item} />
        </div>
        <h3>{itemName}</h3>
        {description ? <p>{description}</p> : null}
        {item.options?.length ? <MenuOptions item={item} /> : null}
        <span className="menu-card-more" aria-hidden="true">
          {locale === "ar" ? "المزيد ←" : "More →"}
        </span>
      </div>
    </>
  );

  if (!motionEnabled) {
    return (
      <article
        role="button"
        tabIndex={0}
        className={className}
        aria-label={itemName}
        onClick={handleOpen}
        onKeyDown={handleKeyDown}
      >
        {content}
      </article>
    );
  }

  return (
    <motion.article
      role="button"
      tabIndex={0}
      className={className}
      aria-label={itemName}
      onClick={handleOpen}
      onKeyDown={handleKeyDown}
      variants={fadeUp}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
    >
      {content}
    </motion.article>
  );
});

function ItemDetailView({
  selection,
  current,
  onClose,
}: {
  selection: ItemDetailSelection | null;
  current: "home" | "menu";
  onClose: () => void;
}) {
  const { locale } = useI18n();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const previousScrollYRef = useRef(0);
  const isMobileSheet = useMediaQuery("(max-width: 767px)");
  const prefersReducedMotion = useReducedMotion();
  const item = selection?.item;
  const category = selection?.category;
  const labels = {
    close: locale === "ar" ? "إغلاق" : "Close",
    back: locale === "ar" ? "العودة للمنيو" : "Back to menu",
    category: locale === "ar" ? "القسم" : "Category",
    options: locale === "ar" ? "خيارات إضافية" : "Options",
    description: locale === "ar" ? "الوصف" : "Description",
    imageComing: locale === "ar" ? "الصورة قريبًا" : "Image Coming Soon",
  };

  useEffect(() => {
    if (!selection) return;

    previousFocusRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    previousScrollYRef.current = window.scrollY;
    document.documentElement.classList.add("asya-item-detail-lock");
    document.body.classList.add("asya-item-detail-lock");
    closeButtonRef.current?.focus({ preventScroll: true });
    window.setTimeout(() => closeButtonRef.current?.focus({ preventScroll: true }), 40);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") return;
      const dialog = dialogRef.current;
      if (!dialog) return;

      const focusable = Array.from(
        dialog.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => !element.hasAttribute("disabled") && element.offsetParent !== null);

      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.documentElement.classList.remove("asya-item-detail-lock");
      document.body.classList.remove("asya-item-detail-lock");
      window.removeEventListener("keydown", handleKeyDown);
      previousFocusRef.current?.focus({ preventScroll: true });
      window.scrollTo({ top: previousScrollYRef.current, behavior: "auto" });
    };
  }, [selection, onClose]);

  if (!item || !category) return null;

  const imageSrc = getDishImage(item);
  const isPlaceholder = imageSrc === placeholderImg;
  const itemName = localizeMenuText(item.name, locale);
  const categoryName = localizeMenuText(category.name, locale);
  const description = localizeMenuDescription(item, category, locale);
  const dialogMotion = prefersReducedMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.16, ease: "easeOut" },
      }
    : isMobileSheet
      ? {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: 12 },
          transition: { duration: 0.18, ease: softEase },
        }
      : {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: 8 },
          transition: { duration: 0.18, ease: softEase },
        };

  return (
    <motion.div
      className="item-detail-layer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      role="presentation"
      onPointerDown={(event) => {
        if (typeof window === "undefined") return;
        if (
          window.matchMedia("(min-width: 1024px)").matches &&
          event.target === event.currentTarget
        )
          onClose();
      }}
    >
      <motion.div
        ref={dialogRef}
        className="item-detail-dialog"
        role="dialog"
        aria-modal="true"
        aria-label={itemName}
        dir="ltr"
        {...dialogMotion}
      >
        <button
          ref={closeButtonRef}
          type="button"
          className="item-detail-close"
          onClick={onClose}
          aria-label={labels.close}
        >
          <X className="h-5 w-5" />
        </button>

        <div
          className={`item-detail-media mobile-item-detail-media ${isPlaceholder ? "is-placeholder" : ""}`}
        >
          {isPlaceholder ? (
            <span className="item-detail-placeholder" aria-hidden="true">
              <img src={logoImg} alt="" width={92} height={92} />
              <small>{labels.imageComing}</small>
            </span>
          ) : null}
          <img
            className="mobile-item-detail-image"
            src={imageSrc}
            alt={isPlaceholder ? "" : itemName}
            width={920}
            height={920}
            loading="lazy"
            decoding="async"
            onError={(event) => {
              event.currentTarget.src = placeholderImg;
            }}
          />
        </div>

        <div className="item-detail-copy mobile-item-detail-content">
          <div className="item-detail-meta">
            <span>
              {labels.category}: {categoryName}
            </span>
            <PriceTag item={item} />
          </div>
          <h2>{itemName}</h2>
          <span className="item-detail-divider" aria-hidden="true" />
          <div className="item-detail-scroll">
            {description ? (
              <div className="item-detail-description">
                <strong>{labels.description}</strong>
                <p>{description}</p>
              </div>
            ) : null}
            {item.options?.length ? (
              <div className="item-detail-options">
                <strong>{labels.options}</strong>
                <MenuOptions item={item} />
              </div>
            ) : null}
          </div>
          {current === "menu" ? (
            <button type="button" className="item-detail-back" onClick={onClose}>
              {labels.back}
            </button>
          ) : (
            <a href="/menu" className="item-detail-back" onClick={onClose}>
              {labels.back}
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const media = window.matchMedia(query);
    const handleChange = () => setMatches(media.matches);

    handleChange();
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, [query]);

  return matches;
}

export const PriceTag = memo(function PriceTag({ item }: { item: MenuItem }) {
  const { locale, tx } = useI18n();
  const price = formatPrice(item.price, locale);

  return (
    <span className="price-tag">
      <strong>{price}</strong>
      {!/[A-Za-z\u0600-\u06FF]/.test(price) ? <small>{tx(RESTAURANT.currency)}</small> : null}
    </span>
  );
});

const MenuOptions = memo(function MenuOptions({ item }: { item: MenuItem }) {
  const { locale } = useI18n();
  const itemName = localizeMenuText(item.name, locale);

  return (
    <div className="menu-options" aria-label={`${itemName} options`}>
      {item.options?.map((option) => (
        <span key={`${item.id}-${option.name}-${option.price}`}>
          <strong>{localizeOptionName(option.name, locale)}</strong>
          <em>{option.price}</em>
        </span>
      ))}
    </div>
  );
});

export const CategoryGlyph = memo(function CategoryGlyph({ category }: { category: MenuCategory }) {
  const label = `${category.id} ${category.name.en}`.toLowerCase();
  const Icon = /coffee/.test(label)
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
});

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

const ContactCard = memo(function ContactCard({
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
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="contact-card"
    >
      {content}
    </a>
  ) : (
    <div className="contact-card">{content}</div>
  );
});

export function VisitContact() {
  const { t, tx } = useI18n();

  return (
    <section id="visit" className="visit-section soft-botanical-bg">
      <div className="section-wrap">
        <SectionIntro
          eyebrow={t("sec_visit")}
          title={t("visit_title")}
          body={t("visit_body")}
          icon={<MapPin className="h-4 w-4" />}
        />

        <div id="contact" className="contact-grid">
          <ContactCard
            icon={<MessageCircle />}
            label={t("whatsapp")}
            value={RESTAURANT.whatsapp}
            href={whatsappHref()}
          />
          <ContactCard
            icon={<Instagram />}
            label={t("instagram")}
            value="@asyas.gourmet"
            href={RESTAURANT.instagramUrl}
          />
          <ContactCard
            icon={<MapPin />}
            label={t("address")}
            value={tx(RESTAURANT.address)}
            href={RESTAURANT.mapsUrl}
          />
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
      <a
        href={current === "home" ? "/menu" : "#menu-top"}
        className="floating-link floating-link-menu"
      >
        <Utensils className="h-4 w-4" />
        <span>{current === "home" ? t("exploreFullMenu") : t("nav_menu")}</span>
      </a>
      <a
        href={whatsappHref()}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-link floating-link-main"
      >
        <MessageCircle className="h-5 w-5" />
        <span>{t("order")}</span>
      </a>
      <a
        href={RESTAURANT.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-link floating-link-menu"
      >
        <Instagram className="h-4 w-4" />
        <span>{t("instagram")}</span>
      </a>
    </div>
  );
}

function MobileBottomNav({ current }: { current: "home" | "menu" }) {
  const { locale, t } = useI18n();

  return (
    <nav
      className="mobile-bottom-nav"
      aria-label="Mobile navigation"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <a href="/" className={current === "home" ? "is-active" : ""}>
        <Home className="h-5 w-5" />
        <span>{t("nav_home")}</span>
      </a>
      <a href="/menu" className={current === "menu" ? "is-active" : ""}>
        <Utensils className="h-5 w-5" />
        <span>{t("nav_menu")}</span>
      </a>
      <a href={RESTAURANT.mapsUrl} target="_blank" rel="noopener noreferrer">
        <MapPin className="h-5 w-5" />
        <span>{t("directions")}</span>
      </a>
      <a href={RESTAURANT.instagramUrl} target="_blank" rel="noopener noreferrer">
        <Instagram className="h-5 w-5" />
        <span>{t("instagram")}</span>
      </a>
    </nav>
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
