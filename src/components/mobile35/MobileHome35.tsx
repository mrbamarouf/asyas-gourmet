import {
  ArrowUpRight,
  Clock3,
  Compass,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  Star,
  Utensils,
} from "lucide-react";
import { useMemo } from "react";

import {
  DishImage,
  PriceTag,
  categoryById,
  getDishImage,
  isUsableImageUrl,
  localizeMenuItemName,
  localizeMenuText,
  useItemDetail,
} from "@/components/asya/primitives";
import { Phase3Media, type Phase3MediaAsset } from "@/components/phase3/Phase3Media";
import { ITEMS, POPULAR_ITEMS, RESTAURANT, type MenuCategory, type MenuItem } from "@/data/menu";
import { REFERENCE_MENU_GROUPS } from "@/data/reference-menu-groups";
import { useI18n } from "@/lib/i18n";

import visitInteriorImg from "@/assets/visit-interior.jpg";

const videoPath = (file: string) => `/media/home2026/videos/${file}`;
const posterPath = (file: string) => `/media/home2026/posters/${file}`;

const FEATURE_GROUP_IDS = [
  "61e69fe8-3255-49c0-ad94-517a04184cd5",
  "59ee4ca2-bb09-4a86-981b-fd40460331ea",
  "a6c1ce59-bed8-4049-b4c5-c1713025ce88",
  "8c4ad6c8-a1ea-446d-9f0e-3900fd39609d",
] as const;

const COPY = {
  ar: {
    heroEyebrow: "مطعم ومخبز تركي",
    heroTitle: "مذاق تركي يليق بلحظاتك",
    heroBody: "فطور تركي، مخبوزات طازجة، وأطباق تُحضّر بروح المائدة التركية.",
    menu: "استعرض المنيو",
    directions: "الاتجاهات",
    whatsapp: "واتساب",
    reviews: "قيّمنا",
    quick: "وصول سريع",
    aboutEyebrow: "عن آسيا",
    aboutTitle: "مائدة تركية بروح آسيا",
    aboutBody:
      "آسيا جورميه تقدم تجربة مستوحاة من المطبخ التركي، تجمع الفطور التركي، المخبوزات الطازجة، الأطباق الدافئة وأجواء المطعم.",
    aboutAction: "اكتشف المنيو",
    aboutAlt: "أجواء المطعم في آسيا جورميه",
    signatureEyebrow: "مختارات آسيا",
    signatureTitle: "أطباق تستحق الاكتشاف",
    experienceTitle: "تجارب من آسيا",
    experienceBody: "اختر المشهد الأقرب إلى مائدتك.",
    breakfast: "الفطور التركي",
    breakfastBody: "أجبان وزيتون وخبز طازج مع الشاي التركي.",
    bakery: "المخبز الطازج",
    bakeryBody: "بيدا وجوزلمة وبوريك تُخبز وتُقدّم دافئة.",
    grills: "المشويات التركية",
    grillsBody: "أطباق مشوية على النار بطابع تركي.",
    desserts: "الحلويات التركية",
    dessertsBody: "بقلاوة وحلويات تركية لختام المائدة.",
    discoverEyebrow: "المنيو الرسمي",
    discoverTitle: "اختر ما تشتهيه بسهولة",
    discoverBody: "تصفح جميع الأقسام والأطباق بالترتيب الرسمي.",
    browse: "تصفح المنيو الكامل",
    momentsTitle: "لحظات من آسيا",
    momentsBody: "مشاهد من المطبخ والصالة والمائدة.",
    momentDining: "أجواء المطعم",
    momentChef: "الشيف في المطبخ",
    momentCraft: "الفرن التقليدي",
    momentTeam: "فريق آسيا",
    momentLounge: "تحضير اللاونج",
    visitTitle: "زيارتكم تبدأ من هنا",
    visitBody: "افتح الاتجاهات أو اتصل بنا قبل الوصول.",
    call: "اتصال",
    map: "موقع آسيا جورميه",
    mapOpen: "افتح في خرائط Google",
    connectTitle: "تواصل مع آسيا",
    connectBody: "تابع جديدنا، راسلنا، أو شاركنا رأيك.",
    instagram: "إنستغرام",
    tiktok: "تيك توك",
    reviewTitle: "شاركنا تجربتك",
    reviewAction: "اكتب تقييمًا على Google",
    finalTitle: "مائدتك القادمة تبدأ من المنيو",
    finalAction: "اكتشف جميع الأطباق",
    viewDish: "عرض الطبق",
    minute: "دقيقة",
    heroAlt: "مشهد شواء من مطبخ آسيا جورميه",
    breakfastAlt: "تفاصيل الفطور التركي في آسيا جورميه",
    bakeryAlt: "تحضير المخبوزات في آسيا جورميه",
    momentAlt: "لحظة من آسيا جورميه",
    visitAlt: "صالة آسيا جورميه",
  },
  en: {
    heroEyebrow: "Turkish Restaurant & Bakery",
    heroTitle: "A Turkish Taste for Every Moment",
    heroBody: "Turkish breakfast, fresh bakery, and dishes prepared for a generous table.",
    menu: "View Menu",
    directions: "Directions",
    whatsapp: "WhatsApp",
    reviews: "Review Us",
    quick: "Quick Actions",
    aboutEyebrow: "About Asya",
    aboutTitle: "A Turkish Table, the Asya Way",
    aboutBody:
      "Asya’s Gourmet offers a Turkish-inspired dining experience bringing together Turkish breakfast, fresh bakery, warm dishes, and the restaurant atmosphere.",
    aboutAction: "Explore the Menu",
    aboutAlt: "The restaurant atmosphere at Asya's Gourmet",
    signatureEyebrow: "Asya’s Selection",
    signatureTitle: "Dishes Worth Discovering",
    experienceTitle: "Experiences at Asya’s",
    experienceBody: "Choose the scene that belongs at your table.",
    breakfast: "Turkish Breakfast",
    breakfastBody: "Cheeses, olives, fresh bread, and Turkish tea.",
    bakery: "Fresh Bakery",
    bakeryBody: "Pide, gözleme, and börek baked and served warm.",
    grills: "Turkish Grills",
    grillsBody: "Fire-grilled dishes prepared in the Turkish tradition.",
    desserts: "Turkish Desserts",
    dessertsBody: "Baklava and Turkish sweets to complete the table.",
    discoverEyebrow: "The Official Menu",
    discoverTitle: "Find What You’re Craving",
    discoverBody: "Browse every category and dish in the official order.",
    browse: "Browse the Full Menu",
    momentsTitle: "Moments at Asya’s",
    momentsBody: "Scenes from the kitchen, dining room, and table.",
    momentDining: "Restaurant Atmosphere",
    momentChef: "Chef at Work",
    momentCraft: "The Traditional Oven",
    momentTeam: "The Asya Team",
    momentLounge: "Lounge Preparation",
    visitTitle: "Your Visit Starts Here",
    visitBody: "Open directions or call us before you arrive.",
    call: "Call",
    map: "Asya’s Gourmet Location",
    mapOpen: "Open in Google Maps",
    connectTitle: "Connect with Asya’s",
    connectBody: "Follow our latest moments, message us, or share your visit.",
    instagram: "Instagram",
    tiktok: "TikTok",
    reviewTitle: "Share Your Experience",
    reviewAction: "Write a Google Review",
    finalTitle: "Your Next Table Starts with the Menu",
    finalAction: "Explore Every Dish",
    viewDish: "View dish",
    minute: "min",
    heroAlt: "A grill scene from Asya's Gourmet kitchen",
    breakfastAlt: "Turkish breakfast details at Asya's Gourmet",
    bakeryAlt: "Fresh bakery preparation at Asya's Gourmet",
    momentAlt: "A moment at Asya's Gourmet",
    visitAlt: "Asya's Gourmet dining room",
  },
} as const;

function mediaAsset(file: string, poster: string, label: string): Phase3MediaAsset {
  return { src: videoPath(file), poster: posterPath(poster), alt: label, label };
}

export function MobileHome35() {
  const { locale } = useI18n();
  const copy = COPY[locale];
  const signatures = useMemo(
    () =>
      POPULAR_ITEMS.filter((item) => isUsableImageUrl(getDishImage(item)))
        .slice(0, 4)
        .map((item) => ({ item, category: categoryById(item.category) }))
        .filter((entry): entry is { item: MenuItem; category: MenuCategory } =>
          Boolean(entry.category),
        ),
    [],
  );
  const featureItems = useMemo(
    () =>
      FEATURE_GROUP_IDS.map((id) => {
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
    mediaAsset("asya-moment-dining-room.mp4", "asya-moment-dining-room.png", copy.momentDining),
    mediaAsset("asya-moment-chef.mp4", "asya-moment-chef.png", copy.momentChef),
    mediaAsset("asya-moment-craft.mp4", "asya-moment-craft.png", copy.momentCraft),
    mediaAsset("asya-moment-team.mp4", "asya-moment-team.png", copy.momentTeam),
    mediaAsset("asya-moment-lounge.mp4", "asya-moment-lounge.png", copy.momentLounge),
  ];

  return (
    <main id="top" className="mobile35-home" dir={locale === "ar" ? "rtl" : "ltr"}>
      <section className="mobile35-hero" aria-labelledby="mobile35-hero-title">
        <Phase3Media asset={hero} className="mobile35-hero-media" eager />
        <span className="mobile35-hero-shade" aria-hidden="true" />
        <div className="mobile35-hero-copy">
          <p>{copy.heroEyebrow}</p>
          <h1 id="mobile35-hero-title">{copy.heroTitle}</h1>
          <span>{copy.heroBody}</span>
          <div>
            <a href="/menu" className="mobile35-primary-button">
              <Utensils aria-hidden="true" />
              {copy.menu}
            </a>
            <a
              href={RESTAURANT.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mobile35-secondary-link"
            >
              <MapPin aria-hidden="true" />
              {copy.directions}
            </a>
          </div>
        </div>
      </section>

      <MobileQuickActions copy={copy} />
      <MobileAbout copy={copy} />

      <section
        className="mobile35-section mobile35-signatures"
        aria-labelledby="mobile35-signature-title"
      >
        <MobileSectionHeading
          eyebrow={copy.signatureEyebrow}
          title={copy.signatureTitle}
          id="mobile35-signature-title"
        />
        <div className="mobile35-signature-rail">
          {signatures.map(({ item, category }, index) => (
            <MobileSignatureCard
              key={item.id}
              item={item}
              category={category}
              action={copy.viewDish}
              minute={copy.minute}
              priority={index === 0}
            />
          ))}
        </div>
      </section>

      <section
        className="mobile35-section mobile35-experiences"
        aria-labelledby="mobile35-experience-title"
      >
        <MobileSectionHeading
          title={copy.experienceTitle}
          body={copy.experienceBody}
          id="mobile35-experience-title"
        />
        <div className="mobile35-experience-stack">
          <MobileExperienceCard
            asset={breakfast}
            title={copy.breakfast}
            body={copy.breakfastBody}
            href={`/menu#group-${FEATURE_GROUP_IDS[0]}`}
          />
          <MobileExperienceCard
            asset={bakery}
            title={copy.bakery}
            body={copy.bakeryBody}
            href={`/menu#group-${FEATURE_GROUP_IDS[1]}`}
          />
          {featureItems.slice(2).map(({ group, item }, index) => (
            <MobileExperienceCard
              key={group.id}
              item={item}
              title={index === 0 ? copy.grills : copy.desserts}
              body={index === 0 ? copy.grillsBody : copy.dessertsBody}
              href={`/menu#group-${group.id}`}
            />
          ))}
        </div>
      </section>

      <section className="mobile35-menu-entry" aria-labelledby="mobile35-menu-entry-title">
        <p>{copy.discoverEyebrow}</p>
        <h2 id="mobile35-menu-entry-title">{copy.discoverTitle}</h2>
        <span>{copy.discoverBody}</span>
        <a href="/menu" className="mobile35-primary-button">
          {copy.browse}
          <ArrowUpRight aria-hidden="true" />
        </a>
        <div className="mobile35-menu-preview" aria-label={copy.discoverTitle}>
          {featureItems.slice(0, 4).map(({ group, item }) => (
            <a key={group.id} href={`/menu#group-${group.id}`}>
              <DishImage item={item} alt={localizeMenuItemName(item, locale)} />
              <span>{localizeMenuText(group.shortName, locale)}</span>
            </a>
          ))}
        </div>
      </section>

      <section
        className="mobile35-section mobile35-moments"
        aria-labelledby="mobile35-moments-title"
      >
        <MobileSectionHeading
          title={copy.momentsTitle}
          body={copy.momentsBody}
          id="mobile35-moments-title"
        />
        <div className="mobile35-moments-rail">
          {moments.map((asset, index) => (
            <article key={asset.src} className="mobile35-moment-card">
              <Phase3Media asset={asset} playback="visible" />
              <div className="mobile35-moment-caption">
                <strong>{asset.label}</strong>
                <small aria-hidden="true">{String(index + 1).padStart(2, "0")}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <MobileVisit copy={copy} />
      <MobileConnect copy={copy} />

      <section className="mobile35-final-cta">
        <h2>{copy.finalTitle}</h2>
        <a href="/menu" className="mobile35-primary-button">
          {copy.finalAction}
          <ArrowUpRight aria-hidden="true" />
        </a>
      </section>
    </main>
  );
}

function MobileAbout({ copy }: { copy: (typeof COPY)["ar"] | (typeof COPY)["en"] }) {
  return (
    <section
      id="about-asya"
      className="mobile35-section mobile35-about"
      aria-labelledby="mobile35-about-title"
    >
      <figure>
        <img
          src={posterPath("asya-moment-interior-lights.png")}
          alt={copy.aboutAlt}
          width={720}
          height={1280}
          loading="lazy"
          decoding="async"
        />
      </figure>
      <div>
        <p>{copy.aboutEyebrow}</p>
        <h2 id="mobile35-about-title">{copy.aboutTitle}</h2>
        <span>{copy.aboutBody}</span>
        <a href="/menu" className="mobile35-primary-button">
          {copy.aboutAction}
          <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

function MobileSectionHeading({
  eyebrow,
  title,
  body,
  id,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  id: string;
}) {
  return (
    <header className="mobile35-section-heading">
      {eyebrow ? <p>{eyebrow}</p> : null}
      <h2 id={id}>{title}</h2>
      {body ? <span>{body}</span> : null}
    </header>
  );
}

function MobileQuickActions({ copy }: { copy: (typeof COPY)["ar"] | (typeof COPY)["en"] }) {
  const actions = [
    { label: copy.menu, href: "/menu", Icon: Utensils },
    { label: copy.directions, href: RESTAURANT.mapsUrl, Icon: Compass },
    { label: copy.whatsapp, href: RESTAURANT.whatsappUrl, Icon: MessageCircle },
    { label: copy.reviews, href: RESTAURANT.googleReviewUrl, Icon: Star },
  ];

  return (
    <nav className="mobile35-quick-actions" aria-label={copy.quick}>
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

function MobileSignatureCard({
  item,
  category,
  action,
  minute,
  priority,
}: {
  item: MenuItem;
  category: MenuCategory;
  action: string;
  minute: string;
  priority: boolean;
}) {
  const { locale } = useI18n();
  const { openItemDetail } = useItemDetail();
  const name = localizeMenuItemName(item, locale);

  return (
    <button
      type="button"
      className="mobile35-signature-card"
      onClick={() => openItemDetail({ item, category })}
      aria-label={`${action}: ${name}`}
    >
      <DishImage item={item} alt={name} eager={priority} />
      <span className="mobile35-signature-card-copy">
        <small>
          <Clock3 aria-hidden="true" />
          {item.prepTime ? `${item.prepTime} ${minute}` : localizeMenuText(category.name, locale)}
        </small>
        <strong>{name}</strong>
        <PriceTag item={item} />
      </span>
    </button>
  );
}

function MobileExperienceCard({
  asset,
  item,
  title,
  body,
  href,
}: {
  asset?: Phase3MediaAsset;
  item?: MenuItem;
  title: string;
  body: string;
  href: string;
}) {
  return (
    <a href={href} className="mobile35-experience-card">
      {asset ? <Phase3Media asset={asset} /> : item ? <DishImage item={item} alt={title} /> : null}
      <span className="mobile35-experience-shade" aria-hidden="true" />
      <span className="mobile35-experience-copy">
        <strong>{title}</strong>
        <small>{body}</small>
        <i>
          <ArrowUpRight aria-hidden="true" />
        </i>
      </span>
    </a>
  );
}

function MobileVisit({ copy }: { copy: (typeof COPY)["ar"] | (typeof COPY)["en"] }) {
  return (
    <section
      id="visit"
      className="mobile35-section mobile35-visit"
      aria-labelledby="mobile35-visit-title"
    >
      <figure>
        <img src={visitInteriorImg} alt={copy.visitAlt} loading="lazy" decoding="async" />
        <figcaption>
          <h2 id="mobile35-visit-title">{copy.visitTitle}</h2>
          <p>{copy.visitBody}</p>
          <div>
            <a href={RESTAURANT.mapsUrl} target="_blank" rel="noopener noreferrer">
              <Compass aria-hidden="true" />
              {copy.directions}
            </a>
            <a href={`tel:${RESTAURANT.phone}`}>
              <Phone aria-hidden="true" />
              {copy.call}
            </a>
          </div>
        </figcaption>
      </figure>
      <a
        href={RESTAURANT.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mobile35-map-card"
      >
        <span>
          <MapPin aria-hidden="true" />
        </span>
        <strong>{copy.map}</strong>
        <small>{copy.mapOpen}</small>
        <ArrowUpRight aria-hidden="true" />
      </a>
    </section>
  );
}

function MobileConnect({ copy }: { copy: (typeof COPY)["ar"] | (typeof COPY)["en"] }) {
  return (
    <section className="mobile35-section mobile35-connect" aria-labelledby="mobile35-connect-title">
      <MobileSectionHeading
        title={copy.connectTitle}
        body={copy.connectBody}
        id="mobile35-connect-title"
      />
      <a
        href={RESTAURANT.googleReviewUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mobile35-review"
      >
        <Star aria-hidden="true" />
        <span>
          <small>{copy.reviewTitle}</small>
          <strong>{copy.reviewAction}</strong>
        </span>
        <ArrowUpRight aria-hidden="true" />
      </a>
      <div className="mobile35-connect-grid">
        <a href={RESTAURANT.instagramUrl} target="_blank" rel="noopener noreferrer">
          <Instagram aria-hidden="true" />
          {copy.instagram}
        </a>
        <a href={RESTAURANT.tiktokUrl} target="_blank" rel="noopener noreferrer">
          <TikTokMark />
          {copy.tiktok}
        </a>
        <a href={RESTAURANT.whatsappUrl} target="_blank" rel="noopener noreferrer">
          <MessageCircle aria-hidden="true" />
          {copy.whatsapp}
        </a>
      </div>
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
