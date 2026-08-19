import {
  ArrowUpRight,
  ChefHat,
  Clock3,
  Compass,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  Play,
  Star,
  Utensils,
} from "lucide-react";
import { useMemo } from "react";

import {
  AsyaShell,
  DishImage,
  PriceTag,
  categoryById,
  getDishImage,
  isUsableImageUrl,
  localizeMenuDescription,
  localizeMenuItemName,
  localizeMenuText,
  useItemDetail,
} from "@/components/asya/primitives";
import { ITEMS, POPULAR_ITEMS, RESTAURANT, type MenuCategory, type MenuItem } from "@/data/menu";
import { REFERENCE_MENU_GROUPS } from "@/data/reference-menu-groups";
import { useI18n } from "@/lib/i18n";

import visitInteriorImg from "@/assets/visit-interior.jpg";

import { Phase3Media, type Phase3MediaAsset } from "./Phase3Media";

const videoPath = (file: string) => `/media/home2026/videos/${file}`;
const posterPath = (file: string) => `/media/home2026/posters/${file}`;

const CATEGORY_FEATURE_IDS = [
  "61e69fe8-3255-49c0-ad94-517a04184cd5",
  "e74e388c-048d-47e4-afec-acf25fac4650",
  "59ee4ca2-bb09-4a86-981b-fd40460331ea",
  "641057a2-0237-4c4b-ab55-bf923ae06cc8",
  "a6c1ce59-bed8-4049-b4c5-c1713025ce88",
  "8c4ad6c8-a1ea-446d-9f0e-3900fd39609d",
];

const HOME_COPY = {
  ar: {
    heroEyebrow: "مطعم ومخبز تركي",
    heroTitle: "مذاق تركي يليق بلحظاتك",
    heroBody: "فطور تركي، مخبوزات طازجة، وأطباق تُحضّر بروح المائدة التركية.",
    menu: "استعرض المنيو",
    directions: "الاتجاهات",
    whatsapp: "واتساب",
    reviews: "التقييمات",
    quickLabel: "اختر وجهتك",
    signatureEyebrow: "من مطبخ آسيا",
    signatureTitle: "أطباق تبدأ بها الحكاية",
    dishAction: "عرض الطبق",
    experiencesTitle: "تجارب آسيا",
    breakfast: "الفطور التركي",
    breakfastBody: "سفرة صباحية تجمع الأجبان، الزيتون، الخبز والشاي التركي.",
    bakery: "المخبز",
    bakeryBody: "بيدا وجوزلمة وبوريك تُخبز وتُقدّم دافئة.",
    grills: "المشويات",
    grillsBody: "لحوم ومشاوي تركية تُحضّر على النار.",
    desserts: "الحلويات التركية",
    dessertsBody: "بقلاوة وحلويات تركية تُختتم بها المائدة.",
    discoverTitle: "منيو كامل، واختيار أسهل",
    discoverBody: "انتقل إلى القسم الذي ترغب به، أو ابدأ رحلتك من أول طبق.",
    browseCategories: "اكتشف الأقسام",
    categoryAction: "عرض القسم",
    momentsTitle: "لحظات من آسيا",
    momentsBody: "من المطبخ إلى الطاولة، مشاهد تحكي أجواء آسيا.",
    visitTitle: "وجهتكم لمذاق تركي في جدة",
    visitBody: "تفضلوا بزيارتنا، واحصلوا على الاتجاهات أو تواصلوا معنا مباشرة.",
    call: "اتصال",
    mapLabel: "موقع آسيا جورميه",
    connectTitle: "ابقَ قريبًا من آسيا",
    connectBody: "تابع جديدنا، تواصل معنا، أو شاركنا رأيك.",
    instagram: "إنستغرام",
    tiktok: "تيك توك",
    rateTitle: "استمتعت بزيارتك؟",
    rateAction: "قيّم تجربتك",
    finalTitle: "اختر طبقك القادم",
    finalBody: "تصفح المنيو الرسمي الكامل بكل أقسامه وأطباقه.",
    finalAction: "اكتشف المنيو الكامل",
    heroAlt: "مشهد من مطبخ آسيا جورميه",
    breakfastAlt: "تفاصيل الفطور التركي في آسيا جورميه",
    bakeryAlt: "تحضير المخبوزات في آسيا جورميه",
    momentAlt: "لحظة من آسيا جورميه",
    visitAlt: "صالة آسيا جورميه",
  },
  en: {
    heroEyebrow: "Turkish Restaurant & Bakery",
    heroTitle: "A Turkish Taste for Every Moment",
    heroBody:
      "Turkish breakfast, fresh bakery, and dishes prepared in the spirit of a generous table.",
    menu: "View the Menu",
    directions: "Directions",
    whatsapp: "WhatsApp",
    reviews: "Reviews",
    quickLabel: "Choose Your Next Step",
    signatureEyebrow: "From Asya’s Kitchen",
    signatureTitle: "Dishes That Start the Story",
    dishAction: "View Dish",
    experiencesTitle: "The Asya Experience",
    breakfast: "Turkish Breakfast",
    breakfastBody: "A morning table of cheeses, olives, fresh bread, and Turkish tea.",
    bakery: "Fresh Bakery",
    bakeryBody: "Pide, gözleme, and börek baked and served warm.",
    grills: "Turkish Grills",
    grillsBody: "Turkish meats and grills prepared over the flame.",
    desserts: "Turkish Desserts",
    dessertsBody: "Baklava and Turkish sweets to complete the table.",
    discoverTitle: "A Full Menu, Made Easier to Explore",
    discoverBody: "Jump to what you are craving, or begin your journey with the first dish.",
    browseCategories: "Explore Categories",
    categoryAction: "View Category",
    momentsTitle: "Moments at Asya’s",
    momentsBody: "From the kitchen to the table, a closer look at the atmosphere of Asya’s.",
    visitTitle: "Your Turkish Table in Jeddah",
    visitBody: "Plan your visit, open directions, or call us directly.",
    call: "Call",
    mapLabel: "Asya’s Gourmet Location",
    connectTitle: "Stay Connected with Asya’s",
    connectBody: "Follow our latest moments, message us, or share your experience.",
    instagram: "Instagram",
    tiktok: "TikTok",
    rateTitle: "Enjoyed Your Visit?",
    rateAction: "Rate Your Experience",
    finalTitle: "Choose Your Next Dish",
    finalBody: "Explore the complete official menu, with every category and dish.",
    finalAction: "Explore the Full Menu",
    heroAlt: "A scene from Asya's Gourmet kitchen",
    breakfastAlt: "Turkish breakfast details at Asya's Gourmet",
    bakeryAlt: "Fresh bakery preparation at Asya's Gourmet",
    momentAlt: "A moment at Asya's Gourmet",
    visitAlt: "Asya's Gourmet dining room",
  },
} as const;

function mediaAsset(file: string, poster: string, label: string): Phase3MediaAsset {
  return { src: videoPath(file), poster: posterPath(poster), alt: label, label };
}

export function HomePhase3() {
  return (
    <AsyaShell current="home">
      <HomePhase3Content />
    </AsyaShell>
  );
}

function HomePhase3Content() {
  const { locale } = useI18n();
  const copy = HOME_COPY[locale];
  const signatureEntries = useMemo(
    () =>
      POPULAR_ITEMS.filter((item) => isUsableImageUrl(getDishImage(item)))
        .slice(0, 4)
        .map((item) => ({ item, category: categoryById(item.category) }))
        .filter((entry): entry is { item: MenuItem; category: MenuCategory } =>
          Boolean(entry.category),
        ),
    [],
  );
  const categoryFeatures = useMemo(
    () =>
      CATEGORY_FEATURE_IDS.map((id) => {
        const group = REFERENCE_MENU_GROUPS.find((entry) => entry.id === id);
        const item = ITEMS.find((entry) =>
          entry.categoryAssignments.some((assignment) =>
            group?.categoryIds.includes(assignment.categoryId),
          ),
        );
        return group && item ? { group, item } : null;
      }).filter(Boolean) as Array<{
        group: (typeof REFERENCE_MENU_GROUPS)[number];
        item: MenuItem;
      }>,
    [],
  );

  const hero = mediaAsset("asya-hero-grill.mp4", "asya-hero-grill.png", copy.heroAlt);
  const breakfast = mediaAsset("asya-breakfast.mp4", "asya-breakfast.png", copy.breakfastAlt);
  const bakery = mediaAsset("asya-bakery-pide.mp4", "asya-bakery-pide.png", copy.bakeryAlt);
  const moments = [
    mediaAsset("asya-moment-dining-room.mp4", "asya-moment-dining-room.png", copy.momentAlt),
    mediaAsset("asya-moment-chef.mp4", "asya-moment-chef.png", copy.momentAlt),
    mediaAsset("asya-moment-craft.mp4", "asya-moment-craft.png", copy.momentAlt),
    mediaAsset("asya-moment-team.mp4", "asya-moment-team.png", copy.momentAlt),
    mediaAsset("asya-moment-lounge.mp4", "asya-moment-lounge.png", copy.momentAlt),
  ];

  return (
    <main id="top" className="phase3-home" dir={locale === "ar" ? "rtl" : "ltr"}>
      <section className="phase3-hero" aria-labelledby="phase3-hero-title">
        <Phase3Media asset={hero} className="phase3-hero-media" eager />
        <div className="phase3-hero-shade" aria-hidden="true" />
        <div className="phase3-hero-copy">
          <p>{copy.heroEyebrow}</p>
          <h1 id="phase3-hero-title">{copy.heroTitle}</h1>
          <span>{copy.heroBody}</span>
          <div className="phase3-hero-actions">
            <a href="/menu" className="phase3-button phase3-button-light">
              <Utensils aria-hidden="true" />
              {copy.menu}
            </a>
            <a
              href={RESTAURANT.mapsUrl}
              className="phase3-text-action"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin aria-hidden="true" />
              {copy.directions}
            </a>
          </div>
        </div>
        <span className="phase3-hero-index" aria-hidden="true">
          01
        </span>
      </section>

      <QuickActions copy={copy} />

      <section
        className="phase3-signatures phase3-section"
        aria-labelledby="phase3-signatures-title"
      >
        <SectionHeading eyebrow={copy.signatureEyebrow} title={copy.signatureTitle} />
        <div className="phase3-signature-rail">
          {signatureEntries.map(({ item, category }, index) => (
            <SignatureCard
              key={item.id}
              item={item}
              category={category}
              action={copy.dishAction}
              priority={index === 0}
            />
          ))}
        </div>
      </section>

      <section
        className="phase3-experiences phase3-section"
        aria-labelledby="phase3-experiences-title"
      >
        <SectionHeading title={copy.experiencesTitle} />
        <div className="phase3-experience-grid">
          <ExperienceVideoCard
            className="phase3-experience-breakfast"
            asset={breakfast}
            title={copy.breakfast}
            body={copy.breakfastBody}
            href={`/menu#group-${CATEGORY_FEATURE_IDS[0]}`}
          />
          <ExperienceVideoCard
            className="phase3-experience-bakery"
            asset={bakery}
            title={copy.bakery}
            body={copy.bakeryBody}
            href={`/menu#group-${CATEGORY_FEATURE_IDS[2]}`}
          />
          <ExperienceImageCard
            className="phase3-experience-grills"
            item={
              categoryFeatures.find((entry) => entry.group.id === CATEGORY_FEATURE_IDS[4])?.item
            }
            title={copy.grills}
            body={copy.grillsBody}
            href={`/menu#group-${CATEGORY_FEATURE_IDS[4]}`}
          />
          <ExperienceImageCard
            className="phase3-experience-desserts"
            item={
              categoryFeatures.find((entry) => entry.group.id === CATEGORY_FEATURE_IDS[5])?.item
            }
            title={copy.desserts}
            body={copy.dessertsBody}
            href={`/menu#group-${CATEGORY_FEATURE_IDS[5]}`}
          />
        </div>
      </section>

      <section className="phase3-discovery" aria-labelledby="phase3-discovery-title">
        <div className="phase3-discovery-copy">
          <span className="phase3-section-number" aria-hidden="true">
            02
          </span>
          <h2 id="phase3-discovery-title">{copy.discoverTitle}</h2>
          <p>{copy.discoverBody}</p>
          <a href="/menu" className="phase3-button phase3-button-olive">
            {copy.browseCategories}
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <div className="phase3-category-rail">
          {categoryFeatures.map(({ group, item }) => (
            <a key={group.id} href={`/menu#group-${group.id}`} className="phase3-category-card">
              <DishImage item={item} alt={localizeMenuItemName(item, locale)} />
              <span>
                <strong>{localizeMenuText(group.shortName, locale)}</strong>
                <small>{copy.categoryAction}</small>
              </span>
              <ArrowUpRight aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>

      <section className="phase3-moments phase3-section" aria-labelledby="phase3-moments-title">
        <SectionHeading title={copy.momentsTitle} body={copy.momentsBody} />
        <div className="phase3-moments-rail">
          {moments.map((asset, index) => (
            <article key={asset.src} className="phase3-moment-card">
              <Phase3Media asset={asset} />
              <span className="phase3-moment-play" aria-hidden="true">
                <Play />
              </span>
              <small>{String(index + 1).padStart(2, "0")}</small>
            </article>
          ))}
        </div>
      </section>

      <EngagementHub copy={copy} />
      <VisitStory copy={copy} locale={locale} />

      <section className="phase3-final-cta">
        <span className="phase3-section-number" aria-hidden="true">
          03
        </span>
        <h2>{copy.finalTitle}</h2>
        <p>{copy.finalBody}</p>
        <a href="/menu" className="phase3-button phase3-button-light">
          {copy.finalAction}
          <ArrowUpRight aria-hidden="true" />
        </a>
      </section>
    </main>
  );
}

function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
}) {
  return (
    <header className="phase3-section-heading">
      {eyebrow ? <p>{eyebrow}</p> : null}
      <h2>{title}</h2>
      {body ? <span>{body}</span> : null}
    </header>
  );
}

function QuickActions({ copy }: { copy: (typeof HOME_COPY)["ar"] | (typeof HOME_COPY)["en"] }) {
  const actions = [
    { label: copy.menu, href: "/menu", Icon: Utensils },
    { label: copy.directions, href: RESTAURANT.mapsUrl, Icon: Compass },
    { label: copy.whatsapp, href: RESTAURANT.whatsappUrl, Icon: MessageCircle },
    { label: copy.reviews, href: RESTAURANT.googleReviewUrl, Icon: Star },
  ];

  return (
    <nav className="phase3-quick-actions" aria-label={copy.quickLabel}>
      {actions.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("/") ? undefined : "_blank"}
          rel={href.startsWith("/") ? undefined : "noopener noreferrer"}
        >
          <Icon aria-hidden="true" />
          <span>{label}</span>
        </a>
      ))}
    </nav>
  );
}

function SignatureCard({
  item,
  category,
  action,
  priority,
}: {
  item: MenuItem;
  category: MenuCategory;
  action: string;
  priority: boolean;
}) {
  const { locale } = useI18n();
  const { openItemDetail } = useItemDetail();
  const name = localizeMenuItemName(item, locale);
  const description = localizeMenuDescription(item, category, locale);

  return (
    <button
      type="button"
      className="phase3-signature-card"
      onClick={() => openItemDetail({ item, category })}
      aria-label={`${action}: ${name}`}
    >
      <DishImage item={item} alt={name} eager={priority} />
      <span className="phase3-signature-shade" aria-hidden="true" />
      <span className="phase3-signature-copy">
        <small>
          <Clock3 aria-hidden="true" />
          {item.prepTime
            ? `${item.prepTime} ${locale === "ar" ? "دقيقة" : "min"}`
            : localizeMenuText(category.name, locale)}
        </small>
        <strong>{name}</strong>
        {description ? <em>{description}</em> : null}
        <PriceTag item={item} />
      </span>
    </button>
  );
}

function ExperienceVideoCard({
  className,
  asset,
  title,
  body,
  href,
}: {
  className: string;
  asset: Phase3MediaAsset;
  title: string;
  body: string;
  href: string;
}) {
  return (
    <article className={`phase3-experience-card ${className}`}>
      <Phase3Media asset={asset} />
      <div className="phase3-experience-shade" aria-hidden="true" />
      <div className="phase3-experience-copy">
        <h3>{title}</h3>
        <p>{body}</p>
        <a href={href} aria-label={title}>
          <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

function ExperienceImageCard({
  className,
  item,
  title,
  body,
  href,
}: {
  className: string;
  item?: MenuItem;
  title: string;
  body: string;
  href: string;
}) {
  if (!item) return null;
  return (
    <article className={`phase3-experience-card ${className}`}>
      <DishImage item={item} alt={title} />
      <div className="phase3-experience-shade" aria-hidden="true" />
      <div className="phase3-experience-copy">
        <h3>{title}</h3>
        <p>{body}</p>
        <a href={href} aria-label={title}>
          <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

function EngagementHub({ copy }: { copy: (typeof HOME_COPY)["ar"] | (typeof HOME_COPY)["en"] }) {
  return (
    <section className="phase3-engagement phase3-section" aria-labelledby="phase3-connect-title">
      <div className="phase3-engagement-intro">
        <ChefHat aria-hidden="true" />
        <h2 id="phase3-connect-title">{copy.connectTitle}</h2>
        <p>{copy.connectBody}</p>
      </div>
      <a
        href={RESTAURANT.googleReviewUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="phase3-review-card"
      >
        <Star aria-hidden="true" />
        <span>
          <small>{copy.rateTitle}</small>
          <strong>{copy.rateAction}</strong>
        </span>
        <ArrowUpRight aria-hidden="true" />
      </a>
      <div className="phase3-social-actions">
        <a href={RESTAURANT.instagramUrl} target="_blank" rel="noopener noreferrer">
          <Instagram aria-hidden="true" />
          <span>{copy.instagram}</span>
        </a>
        <a href={RESTAURANT.tiktokUrl} target="_blank" rel="noopener noreferrer">
          <TikTokMark />
          <span>{copy.tiktok}</span>
        </a>
        <a href={RESTAURANT.whatsappUrl} target="_blank" rel="noopener noreferrer">
          <MessageCircle aria-hidden="true" />
          <span>{copy.whatsapp}</span>
        </a>
      </div>
    </section>
  );
}

function VisitStory({
  copy,
  locale,
}: {
  copy: (typeof HOME_COPY)["ar"] | (typeof HOME_COPY)["en"];
  locale: "ar" | "en";
}) {
  return (
    <section
      id="visit"
      className="phase3-visit phase3-section"
      aria-labelledby="phase3-visit-title"
    >
      <figure className="phase3-visit-image">
        <img src={visitInteriorImg} alt={copy.visitAlt} loading="lazy" decoding="async" />
        <figcaption>{copy.visitTitle}</figcaption>
      </figure>
      <div className="phase3-visit-copy">
        <span className="phase3-section-number" aria-hidden="true">
          VISIT
        </span>
        <h2 id="phase3-visit-title">{copy.visitTitle}</h2>
        <p>{copy.visitBody}</p>
        <div>
          <a
            href={RESTAURANT.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="phase3-button phase3-button-olive"
          >
            <Compass aria-hidden="true" />
            {copy.directions}
          </a>
          <a href={`tel:${RESTAURANT.phone}`} className="phase3-button phase3-button-outline">
            <Phone aria-hidden="true" />
            {copy.call}
          </a>
        </div>
      </div>
      <a
        href={RESTAURANT.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="phase3-map-card"
        aria-label={copy.mapLabel}
      >
        <span className="phase3-map-road phase3-map-road-one" />
        <span className="phase3-map-road phase3-map-road-two" />
        <span className="phase3-map-road phase3-map-road-three" />
        <span className="phase3-map-pin">
          <MapPin aria-hidden="true" />
        </span>
        <strong>{copy.mapLabel}</strong>
        <small>{locale === "ar" ? "افتح في خرائط Google" : "Open in Google Maps"}</small>
      </a>
    </section>
  );
}

function TikTokMark() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M14 3v11.25a4.75 4.75 0 1 1-4-4.69" />
      <path d="M14 3c.8 2.8 2.6 4.5 5 5" />
    </svg>
  );
}
