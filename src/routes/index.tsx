import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  CakeSlice,
  ChefHat,
  Coffee,
  Flame,
  Heart,
  MapPin,
  Navigation,
  Sparkles,
  Utensils,
} from "lucide-react";
import { memo, useCallback, useEffect, useMemo, useState } from "react";

import {
  CHEF_PICK_ITEMS,
  ITEMS,
  POPULAR_ITEMS,
  RESTAURANT,
  type MenuCategory,
  type MenuCategoryGroup,
  type MenuItem,
} from "@/data/menu";
import { REFERENCE_MENU_GROUPS } from "@/data/reference-menu-groups";
import {
  AsyaShell,
  DishImage,
  PriceTag,
  categoryById,
  compactOfficialDescription,
  getDishImage,
  isOfficialImage,
  localizeMenuDescription,
  useItemDetail,
} from "@/components/asya/primitives";
import { useI18n } from "@/lib/i18n";

import bakeryImg from "@/assets/bakery.jpg";
import mezzeImg from "@/assets/dish-mezze.jpg";
import heroImg from "@/assets/hero-turkish-table.jpg";
import interiorImg from "@/assets/interior.jpg";
import logoImg from "@/assets/asyas-logo-transparent.png";
import teaImg from "@/assets/tea.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Asya's Gourmet | Turkish Restaurant in Jeddah" },
      {
        name: "description",
        content:
          "Asya's Gourmet serves Turkish breakfast, pide, gozleme, grills, desserts, coffee, tea, and fresh drinks in Jeddah.",
      },
      { property: "og:title", content: "Asya's Gourmet | Turkish Restaurant in Jeddah" },
      {
        property: "og:description",
        content: "Turkish breakfast, bakery, grills, sweets, coffee, and tea from Asya's Gourmet.",
      },
      { property: "og:image", content: logoImg },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

interface DishEntry {
  item: MenuItem;
  category: MenuCategory;
}

interface HomeContent {
  categories: HomeCategory[];
  signatures: DishEntry[];
  gallery: DishEntry[];
}

interface HomeCategory {
  group: MenuCategoryGroup;
  image: string;
}

const itemCategoryIds = new Set(ITEMS.map((item) => item.category));
const HOME_MENU_GROUPS = REFERENCE_MENU_GROUPS.filter((group) =>
  group.categoryIds.some((categoryId) => itemCategoryIds.has(categoryId)),
);

const categoryMap = new Map<string, MenuCategory>();
const MOBILE_LAYOUT_QUERY = "(max-width: 767px)";

const HOME_PAGE_COPY = {
  ar: {
    heroEyebrow: "مذاق من تركيا",
    heroTitle: "مذاق تركي يليق بلحظاتك",
    heroBody: "أطباق تركية أصيلة، مخبوزات طازجة، وتجربة دافئة تبدأ من أول لقمة.",
    heroCta: "استعرض المنيو",
    heroAlt: "مائدة تركية من أسيا جورميه",
    heroDirections: "الاتجاهات",
    heroBook: "احجز طاولة",
    trustOne: "وصفات تركية أصيلة",
    trustTwo: "مكونات طازجة يوميًا",
    trustThree: "صنع بحب",
    signatureLabel: "مختارات مميزة",
    signatureTitle: "مختارات محبوبة",
    signatureBody: "أطباق بارزة من منيو أسيا، مختارة لمن يريد بداية غنية وواضحة.",
    dishCta: "عرض الطبق",
    breakfastLabel: "الفطور التركي",
    breakfastTitle: "الفطور التركي",
    breakfastBody: "سفرة صباحية غنية تجمع الخبز الطازج، الأجبان، الزيتون، الشاي، وأطباق آسيا المميزة.",
    breakfastCta: "اكتشف الفطور",
    breakfastAlt: "فطور تركي ومشويات من أسيا جورميه",
    bakeryLabel: "المخبز الطازج",
    bakeryTitle: "المخبز الطازج",
    bakeryBody: "مخبوزات يومية تُحضّر بعناية لتصل إلى الطاولة بدفئها ورائحتها.",
    bakeryCta: "استكشف المخبز",
    bakeryAlt: "خبز تركي طازج من مخبز أسيا",
    momentsLabel: "لحظات من آسيا",
    momentsTitle: "لحظات من آسيا",
    momentsBody: "صور من أجوائنا، مخبوزاتنا، وأطباقنا التركية على الطاولة.",
    visitLabel: "الزيارة",
    visitTitle: "يسعدنا زيارتكم",
    visitBody: "تفضلوا إلى أسيا جورميه لتجربة فطور تركي، مخبوزات طازجة، وأطباق دافئة.",
    visitMap: "موقع أسيا جورميه",
    directionsCta: "الاتجاهات",
    contactCta: "تواصل معنا",
    menuLabel: "المنيو الكامل",
    menuTitle: "جاهز لاختيار طبقك؟",
    menuBody: "تصفح المنيو الكامل واختر من الفطور التركي، المخبوزات، المشويات، الحلويات والمشروبات.",
    menuCta: "اكتشف المنيو الكامل",
    menuAlt: "أجواء مطعم أسيا جورميه",
  },
  en: {
    heroEyebrow: "A Taste of Turkey",
    heroTitle: "A Turkish Taste for Every Moment",
    heroBody: "Authentic Turkish dishes, fresh bakery, and a warm dining experience from the first bite.",
    heroCta: "View Menu",
    heroAlt: "A Turkish table from Asya's Gourmet",
    heroDirections: "Directions",
    heroBook: "Book a Table",
    trustOne: "Authentic Turkish Recipes",
    trustTwo: "Fresh Ingredients Daily",
    trustThree: "Made with Love",
    signatureLabel: "Signature Dishes",
    signatureTitle: "Most Loved Dishes",
    signatureBody: "A focused selection from Asya’s menu for a generous first order.",
    dishCta: "View Dish",
    breakfastLabel: "Turkish Breakfast",
    breakfastTitle: "Turkish Breakfast",
    breakfastBody: "A generous morning table with fresh bread, cheeses, olives, tea, and Asya’s signature dishes.",
    breakfastCta: "Discover Breakfast",
    breakfastAlt: "Turkish breakfast and grills from Asya's Gourmet",
    bakeryLabel: "Fresh Bakery",
    bakeryTitle: "Fresh Bakery",
    bakeryBody: "Daily baked favorites prepared with care, warmth, and a comforting aroma.",
    bakeryCta: "Explore Bakery",
    bakeryAlt: "Fresh Turkish bread from Asya's bakery",
    momentsLabel: "Moments at Asya’s",
    momentsTitle: "Moments at Asya’s",
    momentsBody: "A glimpse of our table, bakery, and Turkish dishes served with care.",
    visitLabel: "Visit Us",
    visitTitle: "We’d Love to See You",
    visitBody: "Visit Asya’s Gourmet for Turkish breakfast, fresh bakery, and warm dishes from the kitchen.",
    visitMap: "Asya’s Gourmet Location",
    directionsCta: "Directions",
    contactCta: "Contact Us",
    menuLabel: "Full Menu",
    menuTitle: "Ready to choose?",
    menuBody: "Explore the full menu, from Turkish breakfast and bakery to grills, desserts, and drinks.",
    menuCta: "Explore the Full Menu",
    menuAlt: "Asya's Gourmet dining room",
  },
} as const;

function HomePage() {
  const homeContent = useMemo(() => buildHomeContent(), []);

  return (
    <AsyaShell current="home">
      <main className="home-premium-page home-2026-page">
        <HomeHero />
        <SignatureSection items={homeContent.signatures} />
        <HomeVisualFeature
          labelKey="breakfastLabel"
          titleKey="breakfastTitle"
          bodyKey="breakfastBody"
          ctaKey="breakfastCta"
          altKey="breakfastAlt"
          image={mezzeImg}
          imagePosition="center"
        />
        <HomeVisualFeature
          labelKey="bakeryLabel"
          titleKey="bakeryTitle"
          bodyKey="bakeryBody"
          ctaKey="bakeryCta"
          altKey="bakeryAlt"
          image={bakeryImg}
          imagePosition="center"
          reverse
        />
        <HomeMomentsSection items={homeContent.gallery} />
        <HomeVisitSection />
        <HomeMenuCta />
      </main>
    </AsyaShell>
  );
}

function useDesktopGallery() {
  const [shouldRenderGallery, setShouldRenderGallery] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(MOBILE_LAYOUT_QUERY);
    const updateLayout = () => setShouldRenderGallery(!media.matches);

    updateLayout();
    media.addEventListener("change", updateLayout);
    return () => media.removeEventListener("change", updateLayout);
  }, []);

  return shouldRenderGallery;
}

function HomeHero() {
  const { locale } = useI18n();
  const copy = HOME_PAGE_COPY[locale];

  return (
    <section id="top" className="home-2026-hero" aria-labelledby="home-hero-title">
      <div className="home-2026-hero-media">
        <img
          src={heroImg}
          alt={copy.heroAlt}
          width={1600}
          height={1067}
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </div>
      <div className="home-2026-hero-copy">
        <p className="home-premium-eyebrow">{copy.heroEyebrow}</p>
        <h1 id="home-hero-title">{copy.heroTitle}</h1>
        <p>{copy.heroBody}</p>
        <div className="home-2026-actions">
          <a href="/menu" className="primary-cta home-premium-cta">
            <span>{copy.heroCta}</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a href={RESTAURANT.mapsUrl} className="home-2026-secondary-cta" target="_blank" rel="noopener noreferrer">
            <MapPin className="h-4 w-4" />
            <span>{copy.heroDirections}</span>
          </a>
        </div>
      </div>
      <div className="home-2026-trust-strip" aria-label={copy.heroBook}>
        <span>
          <ChefHat className="h-4 w-4" />
          {copy.trustOne}
        </span>
        <span>
          <Sparkles className="h-4 w-4" />
          {copy.trustTwo}
        </span>
        <span>
          <Heart className="h-4 w-4" />
          {copy.trustThree}
        </span>
      </div>
    </section>
  );
}

function HomeCategories({ categories }: { categories: HomeCategory[] }) {
  const { t } = useI18n();

  return (
    <section id="menu-preview" className="reference-section">
      <div className="section-wrap reference-section-heading">
        <h2>{t("home_menu_preview_title")}</h2>
        <a href="/menu" className="text-link">
          <span>{t("exploreFullMenu")}</span>
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
      <div className="section-wrap reference-category-grid">
        {categories.map((category) => (
          <HomeCategoryCard key={category.group.id} category={category} />
        ))}
      </div>
    </section>
  );
}

const HomeCategoryCard = memo(function HomeCategoryCard({ category }: { category: HomeCategory }) {
  const { tx } = useI18n();

  return (
    <a href={`/menu#group-${category.group.id}`} className="reference-category-card">
      <span>{tx(category.group.shortName)}</span>
      <img
        src={category.image}
        alt={tx(category.group.name)}
        width={360}
        height={260}
        loading="lazy"
        decoding="async"
      />
    </a>
  );
});

function QualitySection() {
  const { locale, t } = useI18n();
  const qualities =
    locale === "ar"
	      ? [
	          {
	            icon: <ChefHat />,
	            title: "عجين يومي",
	            body: "بيدا، جوزلمة، وبوريك تُحضّر من عجين طري وتقدم ساخنة.",
	          },
	          {
	            icon: <Sparkles />,
	            title: "فطور للمشاركة",
	            body: "أجبان، زيتون، بيض، مربى، وخبز على مائدة واحدة.",
	          },
	          { icon: <Flame />, title: "فحم وطواجن", body: "كباب، شيش، وطواجن فخارية بصلصات الطماطم والفلفل." },
	          {
	            icon: <Heart />,
	            title: "خاتمة حلوة",
	            body: "بقلاوة، كنافة، قشطة، وشاي تركي بعد الطبق الرئيسي.",
	          },
	        ]
	      : [
	          {
	            icon: <ChefHat />,
	            title: "Daily Dough",
	            body: "Pide, gozleme, and borek made with soft dough and served hot.",
	          },
	          {
	            icon: <Sparkles />,
	            title: "Breakfast to Share",
	            body: "Cheese, olives, eggs, jams, and bread gathered on one table.",
	          },
	          {
	            icon: <Flame />,
	            title: "Charcoal and Clay",
	            body: "Kebabs, shish, and clay casseroles with tomato and pepper sauces.",
	          },
	          {
	            icon: <Heart />,
	            title: "Sweet Finish",
	            body: "Baklava, kunefe, cream, and Turkish tea after the main plate.",
	          },
        ];

  return (
    <section id="about" className="quality-section">
      <div className="section-wrap quality-grid">
        <div className="quality-copy">
          <p className="section-kicker">{t("home_story")}</p>
          <h2>{t("home_story_title")}</h2>
          <p>{t("home_story_body")}</p>
        </div>
        <div className="quality-list">
          {qualities.map((item) => (
            <article key={item.title}>
              <span aria-hidden="true">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SignatureSection({ items }: { items: DishEntry[] }) {
  const { locale } = useI18n();
  const copy = HOME_PAGE_COPY[locale];

  return (
    <section className="home-2026-section home-2026-signatures" aria-labelledby="home-signature-title">
      <div className="section-wrap home-section-heading">
        <p className="home-premium-eyebrow">{copy.signatureLabel}</p>
        <h2 id="home-signature-title">{copy.signatureTitle}</h2>
        <p>{copy.signatureBody}</p>
      </div>
      <div className="section-wrap home-2026-dish-row">
        {items.slice(0, 4).map((entry) => (
          <HomeDishCard key={entry.item.id} entry={entry} />
        ))}
      </div>
    </section>
  );
}

const HomeDishCard = memo(function HomeDishCard({ entry }: { entry: DishEntry }) {
  const { locale, tx } = useI18n();
  const { openItemDetail } = useItemDetail();
  const itemName = localizeMenuItemName(entry.item, locale);
  const prepLabel = entry.item.prepTime
    ? locale === "ar"
      ? `${entry.item.prepTime} دقيقة`
      : `${entry.item.prepTime} min`
    : "";
  const handleOpen = useCallback(() => openItemDetail(entry), [entry, openItemDetail]);

  return (
    <button type="button" className="home-2026-dish-card" onClick={handleOpen} aria-label={itemName}>
      <DishImage item={entry.item} alt={itemName} className="home-2026-dish-image" />
      <span className="home-2026-dish-meta">
        {prepLabel ? <em>{prepLabel}</em> : <em>{tx(entry.category.name)}</em>}
      </span>
      <strong>{itemName}</strong>
      <PriceTag item={entry.item} />
      <span className="home-2026-dish-more">{HOME_PAGE_COPY[locale].dishCta}</span>
    </button>
  );
});

type HomeCopyKey = keyof (typeof HOME_PAGE_COPY)["en"];

function HomeVisualFeature({
  labelKey,
  titleKey,
  bodyKey,
  ctaKey,
  altKey,
  image,
  imagePosition = "center",
  reverse = false,
}: {
  labelKey: HomeCopyKey;
  titleKey: HomeCopyKey;
  bodyKey: HomeCopyKey;
  ctaKey: HomeCopyKey;
  altKey: HomeCopyKey;
  image: string;
  imagePosition?: string;
  reverse?: boolean;
}) {
  const { locale } = useI18n();
  const copy = HOME_PAGE_COPY[locale];

  return (
    <section className="home-2026-section">
      <div className={`section-wrap home-2026-feature ${reverse ? "is-reverse" : ""}`}>
        <figure className="home-2026-feature-media">
          <img
            src={image}
            alt={copy[altKey]}
            width={1400}
            height={980}
            loading="lazy"
            decoding="async"
            style={{ objectPosition: imagePosition }}
          />
        </figure>
        <div className="home-2026-feature-copy">
          <p className="home-premium-eyebrow">{copy[labelKey]}</p>
          <h2>{copy[titleKey]}</h2>
          <p>{copy[bodyKey]}</p>
          <a href="/menu" className="primary-cta home-premium-cta">
            <span>{copy[ctaKey]}</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function HomeMomentsSection({ items }: { items: DishEntry[] }) {
  const { locale, tx } = useI18n();
  const copy = HOME_PAGE_COPY[locale];
  const photos = [
    { src: interiorImg, alt: copy.momentsTitle },
    { src: teaImg, alt: locale === "ar" ? "قهوة تركية من أسيا" : "Turkish coffee at Asya's" },
    { src: bakeryImg, alt: copy.bakeryAlt },
    ...items.slice(0, 2).map((entry) => ({ src: getDishImage(entry.item), alt: tx(entry.item.name) })),
  ].slice(0, 5);

  return (
    <section className="home-2026-section home-2026-moments" aria-labelledby="home-moments-title">
      <div className="section-wrap home-section-heading">
        <p className="home-premium-eyebrow">{copy.momentsLabel}</p>
        <h2 id="home-moments-title">{copy.momentsTitle}</h2>
        <p>{copy.momentsBody}</p>
      </div>
      <div className="section-wrap home-2026-moment-row">
        {photos.map((photo, index) => (
          <figure key={`${photo.src}-${index}`} className="home-2026-moment-card">
            <img src={photo.src} alt={photo.alt} width={520} height={420} loading="lazy" decoding="async" />
          </figure>
        ))}
      </div>
    </section>
  );
}

function HomeVisitSection() {
  const { locale, tx } = useI18n();
  const copy = HOME_PAGE_COPY[locale];

  return (
    <section id="visit" className="home-2026-section home-2026-visit" aria-labelledby="home-visit-title">
      <div className="section-wrap home-2026-visit-card">
        <div className="home-2026-visit-copy">
          <p className="home-premium-eyebrow">{copy.visitLabel}</p>
          <h2 id="home-visit-title">{copy.visitTitle}</h2>
          <p>{copy.visitBody}</p>
          <address>
            <MapPin className="h-4 w-4" />
            <span>{tx(RESTAURANT.address)}</span>
          </address>
          <div className="home-2026-actions">
            <a href={RESTAURANT.mapsUrl} className="primary-cta home-premium-cta" target="_blank" rel="noopener noreferrer">
              <Navigation className="h-4 w-4" />
              <span>{copy.directionsCta}</span>
            </a>
            <a href={`tel:${RESTAURANT.phone}`} className="home-2026-secondary-cta">
              <span>{copy.contactCta}</span>
            </a>
          </div>
        </div>
        <a href={RESTAURANT.mapsUrl} className="home-2026-map" target="_blank" rel="noopener noreferrer" aria-label={copy.visitMap}>
          <span className="home-2026-map-line line-one" />
          <span className="home-2026-map-line line-two" />
          <span className="home-2026-map-line line-three" />
          <span className="home-2026-map-marker">
            <MapPin className="h-5 w-5" />
          </span>
          <strong>{copy.visitMap}</strong>
        </a>
      </div>
    </section>
  );
}

function HomeMenuCta() {
  const { locale } = useI18n();
  const copy = HOME_PAGE_COPY[locale];

  return (
    <section className="home-2026-final-cta" aria-labelledby="home-menu-cta-title">
      <img src={interiorImg} alt={copy.menuAlt} width={1400} height={960} loading="lazy" decoding="async" />
      <div className="home-2026-final-copy">
        <p className="home-premium-eyebrow">{copy.menuLabel}</p>
        <h2 id="home-menu-cta-title">{copy.menuTitle}</h2>
        <p>{copy.menuBody}</p>
        <a href="/menu" className="primary-cta home-premium-cta">
          <span>{copy.menuCta}</span>
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

function PhotoStrip({ items }: { items: DishEntry[] }) {
  const { t, tx } = useI18n();
  const photos = [
    { src: interiorImg, alt: t("home_gallery_title") },
    { src: bakeryImg, alt: t("home_bakery_title") },
    { src: teaImg, alt: t("home_drinks_title") },
    ...items
      .slice(0, 3)
      .map((entry) => ({ src: getDishImage(entry.item), alt: tx(entry.item.name) })),
  ];

  return (
    <section className="photo-strip" aria-label={t("home_gallery_title")}>
      {photos.map((photo, index) => (
        <img
          key={`${photo.src}-${index}`}
          src={photo.src}
          alt={photo.alt}
          width={520}
          height={420}
          loading="lazy"
          decoding="async"
        />
      ))}
    </section>
  );
}

const SpotlightDish = memo(function SpotlightDish({ entry }: { entry: DishEntry }) {
  const { locale, tx } = useI18n();
  const { openItemDetail } = useItemDetail();
  const description = compactOfficialDescription(
    localizeMenuDescription(entry.item, entry.category, locale),
    locale,
  );
  const handleOpen = useCallback(() => openItemDetail(entry), [entry, openItemDetail]);

  return (
    <button
      type="button"
      className="spotlight-dish"
      aria-label={tx(entry.item.name)}
      onClick={handleOpen}
    >
      <DishImage item={entry.item} alt={tx(entry.item.name)} eager className="spotlight-image" />
      <div>
        <span>{tx(entry.category.name)}</span>
        <h3>{tx(entry.item.name)}</h3>
        {description ? <p>{description}</p> : null}
        <PriceTag item={entry.item} />
      </div>
    </button>
  );
});

function buildHomeContent(): HomeContent {
  hydrateCategoryMap();

  const categories = HOME_MENU_GROUPS.map((group) => ({
    group,
    image: imageForGroup(group),
  }));

  const signatures = toEntries(uniqueItems([...CHEF_PICK_ITEMS, ...POPULAR_ITEMS]).slice(0, 6));
  const gallery = toEntries(
    uniqueItems([
      ...signatures.map((entry) => entry.item),
      ...ITEMS.filter(isOfficialImage),
    ]).filter(isOfficialImage),
  );

  return { categories, signatures, gallery };
}

function hydrateCategoryMap() {
  if (categoryMap.size) return;
  REFERENCE_MENU_GROUPS.flatMap((group) => group.categoryIds).forEach((categoryId) => {
    const category = categoryById(categoryId);
    if (category) categoryMap.set(categoryId, category);
  });
}

function imageForGroup(group: MenuCategoryGroup) {
  const item = ITEMS.find(
    (candidate) => group.categoryIds.includes(candidate.category) && isOfficialImage(candidate),
  );
  if (item) return getDishImage(item);

  const category = group.categoryIds
    .map((id) => categoryById(id))
    .find((candidate) => candidate?.cover || candidate?.sourceImageUrl);
  return category?.cover ?? category?.sourceImageUrl ?? heroImg;
}

function uniqueItems(items: MenuItem[]) {
  const seen = new Set<string>();
  return items.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

function toEntries(items: MenuItem[]): DishEntry[] {
  return items
    .map((item) => ({ item, category: categoryById(item.category) }))
    .filter((entry): entry is DishEntry => Boolean(entry.category));
}
