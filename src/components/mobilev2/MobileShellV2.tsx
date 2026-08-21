import {
  ArrowLeft,
  Clock3,
  HandPlatter,
  Home,
  Instagram,
  Languages,
  MapPin,
  MessageCircle,
  Music2,
  Minus,
  Phone,
  Plus,
  Trash2,
  Utensils,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import logoImg from "@/assets/asyas-logo-transparent.png";
import { RESTAURANT } from "@/data/menu";
import { useI18n } from "@/lib/i18n";

import { useTrayV2 } from "./TrayContextV2";

const COPY = {
  ar: {
    home: "الرئيسية",
    menu: "المنيو",
    backHome: "العودة إلى الرئيسية",
    language: "تغيير اللغة إلى الإنجليزية",
    tray: "سلتي",
    openTray: "فتح سلتي",
    closeTray: "إغلاق سلتي",
    emptyTitle: "سلّتك فارغة",
    emptyBody: "استكشف المنيو وأضف الأصناف التي ترغب بطلبها.",
    explore: "استعرض المنيو",
    itemPrice: "سعر الصنف",
    itemTotal: "المجموع",
    decrease: "تقليل الكمية",
    increase: "زيادة الكمية",
    remove: "إزالة الصنف",
    total: "الإجمالي",
    unavailable: "بعض الأسعار غير متاحة للحساب.",
    unavailableValue: "غير متاح",
    note: "هذه السلة لمساعدتك في اختيار طلبك. اعرضها على موظف المطعم عند الطلب.",
    continue: "متابعة التصفح",
    clear: "إفراغ السلة",
    waiterAction: "اعرض سلتي للموظف",
    waiterTitle: "سلتي للموظف",
    waiterMessage: "يرجى تأكيد الأصناف والكميات مع موظف المطعم قبل تسجيل الطلب.",
    backToTray: "العودة إلى سلتي",
    quantity: "الكمية",
    whatsapp: "واتساب",
    location: "الموقع",
    instagram: "إنستغرام",
    tiktok: "تيك توك",
    review: "تقييم Google",
    call: "اتصال",
    rights: "جميع الحقوق محفوظة",
  },
  en: {
    home: "Home",
    menu: "Menu",
    backHome: "Back to Home",
    language: "Switch language to Arabic",
    tray: "My Tray",
    openTray: "Open My Tray",
    closeTray: "Close My Tray",
    emptyTitle: "Your tray is empty",
    emptyBody: "Explore the menu and add the dishes you’d like to order.",
    explore: "Explore Menu",
    itemPrice: "Item price",
    itemTotal: "Item total",
    decrease: "Decrease quantity",
    increase: "Increase quantity",
    remove: "Remove item",
    total: "Total",
    unavailable: "Some prices are unavailable for calculation.",
    unavailableValue: "Unavailable",
    note: "Use My Tray to keep track of your selections, then show it to your waiter when you’re ready to order.",
    continue: "Continue Browsing",
    clear: "Clear Tray",
    waiterAction: "Show My Tray to Waiter",
    waiterTitle: "My Tray for the Waiter",
    waiterMessage:
      "Please confirm the items and quantities with your waiter before the order is entered.",
    backToTray: "Back to My Tray",
    quantity: "Quantity",
    whatsapp: "WhatsApp",
    location: "Location",
    instagram: "Instagram",
    tiktok: "TikTok",
    review: "Google Review",
    call: "Call",
    rights: "All rights reserved",
  },
} as const;

export function MobileHeaderV2({ current }: { current: "home" | "menu" }) {
  const { locale, setLocale, tx } = useI18n();
  const { totalQuantity, openTray } = useTrayV2();
  const copy = COPY[locale];

  return (
    <header className="mobilev2-header" dir={locale === "ar" ? "rtl" : "ltr"}>
      <a href="/" className="mobilev2-header-brand" aria-label={copy.backHome}>
        {current === "menu" ? <ArrowLeft aria-hidden="true" /> : null}
        <img src={logoImg} alt="Asya's Gourmet" width={52} height={52} />
        <span>
          <strong>{tx(RESTAURANT.name)}</strong>
          <small>{tx(RESTAURANT.kicker)}</small>
        </span>
      </a>

      <nav aria-label={locale === "ar" ? "أدوات الصفحة" : "Page tools"}>
        <button
          type="button"
          className="mobilev2-icon-button"
          onClick={() => setLocale(locale === "ar" ? "en" : "ar")}
          aria-label={copy.language}
        >
          <Languages aria-hidden="true" />
          <span>{locale === "ar" ? "EN" : "AR"}</span>
        </button>
        <button
          type="button"
          className="mobilev2-tray-button"
          onClick={openTray}
          aria-label={`${copy.openTray}${totalQuantity ? `، ${totalQuantity}` : ""}`}
        >
          <HandPlatter aria-hidden="true" />
          {totalQuantity ? <strong>{totalQuantity}</strong> : null}
        </button>
      </nav>
    </header>
  );
}

export function MobileBottomDockV2({ current }: { current: "home" | "menu" }) {
  const { locale } = useI18n();
  const [isMounted, setIsMounted] = useState(false);
  const copy = COPY[locale];

  useEffect(() => setIsMounted(true), []);
  if (!isMounted || typeof document === "undefined") return null;

  return createPortal(
    <nav
      className="mobilev2-dock"
      aria-label={locale === "ar" ? "التنقل الرئيسي" : "Primary navigation"}
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <a href="/" className={current === "home" ? "is-active" : ""}>
        <Home aria-hidden="true" />
        <span>{copy.home}</span>
      </a>
      <a href="/menu" className={current === "menu" ? "is-active" : ""}>
        <Utensils aria-hidden="true" />
        <span>{copy.menu}</span>
      </a>
      <a href={RESTAURANT.whatsappUrl} target="_blank" rel="noopener noreferrer">
        <MessageCircle aria-hidden="true" />
        <span>{copy.whatsapp}</span>
      </a>
      <a href={RESTAURANT.mapsUrl} target="_blank" rel="noopener noreferrer">
        <MapPin aria-hidden="true" />
        <span>{copy.location}</span>
      </a>
    </nav>,
    document.body,
  );
}

export function MobileTraySheetV2() {
  const { locale } = useI18n();
  const {
    lines,
    totalQuantity,
    totalPrice,
    hasUnavailablePrice,
    isOpen,
    isWaiterViewOpen,
    incrementItem,
    decrementItem,
    removeItem,
    clearTray,
    closeTray,
    openWaiterView,
    closeWaiterView,
  } = useTrayV2();
  const copy = COPY[locale];

  useEffect(() => {
    if (!isOpen) return;
    document.documentElement.classList.add("mobilev2-tray-lock");
    document.body.classList.add("mobilev2-tray-lock");

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (isWaiterViewOpen) closeWaiterView();
      else closeTray();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.documentElement.classList.remove("mobilev2-tray-lock");
      document.body.classList.remove("mobilev2-tray-lock");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [closeTray, closeWaiterView, isOpen, isWaiterViewOpen]);

  if (!isOpen || typeof document === "undefined") return null;

  return createPortal(
    <div
      className="mobilev2-tray-layer"
      role="presentation"
      onMouseDown={isWaiterViewOpen ? closeWaiterView : closeTray}
    >
      {isWaiterViewOpen ? (
        <section
          className="mobilev2-waiter-view"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobilev2-waiter-title"
          dir={locale === "ar" ? "rtl" : "ltr"}
          onMouseDown={(event) => event.stopPropagation()}
        >
          <header>
            <img src={logoImg} alt="Asya's Gourmet" width={72} height={72} />
            <div>
              <small>{copy.tray}</small>
              <h2 id="mobilev2-waiter-title">{copy.waiterTitle}</h2>
            </div>
          </header>
          <div className="mobilev2-waiter-lines">
            {lines.map(({ item, quantity, lineTotal }) => (
              <article key={item.id}>
                <div>
                  <strong>{item.name[locale]}</strong>
                  <small>
                    {copy.itemPrice}: {formatMoney(item.priceValue, item.price, locale)}
                  </small>
                </div>
                <span>
                  <small>{copy.quantity}</small>
                  <strong>{quantity}</strong>
                </span>
                <span>
                  <small>{copy.itemTotal}</small>
                  <strong>
                    {formatMoney(lineTotal ?? undefined, copy.unavailableValue, locale)}
                  </strong>
                </span>
              </article>
            ))}
          </div>
          <footer>
            <div>
              <span>{copy.total}</span>
              <strong>
                {hasUnavailablePrice
                  ? copy.unavailableValue
                  : formatMoney(totalPrice, String(totalPrice), locale)}
              </strong>
            </div>
            <p>{copy.waiterMessage}</p>
            <button type="button" onClick={closeWaiterView} autoFocus>
              <ArrowLeft aria-hidden="true" />
              {copy.backToTray}
            </button>
          </footer>
        </section>
      ) : (
        <section
          className="mobilev2-tray-sheet"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobilev2-tray-title"
          dir={locale === "ar" ? "rtl" : "ltr"}
          onMouseDown={(event) => event.stopPropagation()}
        >
          <header>
            <div>
              <small>{totalQuantity ? `${totalQuantity}` : "0"}</small>
              <h2 id="mobilev2-tray-title">{copy.tray}</h2>
            </div>
            <button type="button" onClick={closeTray} aria-label={copy.closeTray} autoFocus>
              <X aria-hidden="true" />
            </button>
          </header>

          {!lines.length ? (
            <div className="mobilev2-tray-empty">
              <span aria-hidden="true">
                <HandPlatter />
              </span>
              <h3>{copy.emptyTitle}</h3>
              <p>{copy.emptyBody}</p>
              <a href="/menu" onClick={closeTray}>
                {copy.explore}
              </a>
            </div>
          ) : (
            <>
              <div className="mobilev2-tray-lines">
                {lines.map(({ item, quantity, lineTotal }) => (
                  <article key={item.id} className="mobilev2-tray-line">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name[locale]}
                        width={160}
                        height={160}
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <span className="mobilev2-tray-image-fallback" aria-hidden="true" />
                    )}
                    <div className="mobilev2-tray-line-copy">
                      <strong>{item.name[locale]}</strong>
                      <small>
                        {copy.itemPrice}: {formatMoney(item.priceValue, item.price, locale)}
                      </small>
                      <span>
                        {copy.itemTotal}:{" "}
                        {formatMoney(lineTotal ?? undefined, copy.unavailableValue, locale)}
                      </span>
                    </div>
                    <div className="mobilev2-quantity-control" dir="ltr">
                      <button
                        type="button"
                        onClick={() => decrementItem(item.id)}
                        aria-label={copy.decrease}
                      >
                        <Minus aria-hidden="true" />
                      </button>
                      <strong aria-live="polite">{quantity}</strong>
                      <button
                        type="button"
                        onClick={() => incrementItem(item.id)}
                        aria-label={copy.increase}
                      >
                        <Plus aria-hidden="true" />
                      </button>
                    </div>
                    <button
                      type="button"
                      className="mobilev2-remove-line"
                      onClick={() => removeItem(item.id)}
                      aria-label={`${copy.remove}: ${item.name[locale]}`}
                    >
                      <Trash2 aria-hidden="true" />
                    </button>
                  </article>
                ))}
              </div>

              <div className="mobilev2-tray-summary">
                <p>{copy.note}</p>
                <div>
                  <span>{copy.total}</span>
                  <strong>
                    {hasUnavailablePrice
                      ? copy.unavailableValue
                      : formatMoney(totalPrice, String(totalPrice), locale)}
                  </strong>
                </div>
                {hasUnavailablePrice ? <small>{copy.unavailable}</small> : null}
                <button type="button" className="mobilev2-tray-waiter" onClick={openWaiterView}>
                  <HandPlatter aria-hidden="true" />
                  {copy.waiterAction}
                </button>
                <button type="button" className="mobilev2-tray-continue" onClick={closeTray}>
                  {copy.continue}
                </button>
                <button type="button" className="mobilev2-tray-clear" onClick={clearTray}>
                  <Trash2 aria-hidden="true" />
                  {copy.clear}
                </button>
              </div>
            </>
          )}
        </section>
      )}
    </div>,
    document.body,
  );
}

export function MobileFooterV2() {
  const { locale, tx } = useI18n();
  const copy = COPY[locale];
  const year = new Date().getFullYear();
  const links = [
    { label: copy.instagram, href: RESTAURANT.instagramUrl, Icon: Instagram },
    { label: copy.tiktok, href: RESTAURANT.tiktokUrl, Icon: Music2 },
    { label: copy.whatsapp, href: RESTAURANT.whatsappUrl, Icon: MessageCircle },
    { label: copy.location, href: RESTAURANT.mapsUrl, Icon: MapPin },
    { label: copy.call, href: `tel:${RESTAURANT.phone}`, Icon: Phone },
  ];

  return (
    <footer className="mobilev2-footer" dir={locale === "ar" ? "rtl" : "ltr"}>
      <img src={logoImg} alt="Asya's Gourmet" width={72} height={72} loading="lazy" />
      <strong>{tx(RESTAURANT.name)}</strong>
      <small>{tx(RESTAURANT.kicker)}</small>
      <span className="mobilev2-footer-hours">
        <Clock3 aria-hidden="true" />
        <span>{tx(RESTAURANT.hours)}</span>
      </span>
      <nav aria-label={locale === "ar" ? "روابط التواصل" : "Contact links"}>
        {links.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            <Icon aria-hidden="true" />
            <span>{label}</span>
          </a>
        ))}
      </nav>
      <p>
        © {year} {tx(RESTAURANT.name)}. {copy.rights}
      </p>
    </footer>
  );
}

function formatMoney(value: number | undefined, fallback: string, locale: "ar" | "en") {
  if (typeof value !== "number" || !Number.isFinite(value)) return fallback;
  return locale === "ar"
    ? `${value.toLocaleString("ar-SA")} ر.س`
    : `${value.toLocaleString("en-US")} SAR`;
}
