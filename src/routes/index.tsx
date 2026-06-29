import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  CakeSlice,
  ChefHat,
  Coffee,
  Flame,
  Heart,
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
  MenuCard,
  PriceTag,
  VisitContact,
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
    heroEyebrow: "أسيا جورميه",
    heroTitle: "فطور ومخبوزات ومشويات تركية",
    heroBody: "ابدأ بالفطور التركي، ثم اختر من البيدا الساخنة، المشويات، الحلويات والشاي.",
    heroCta: "استعرض المنيو",
    heroAlt: "مائدة تركية من أسيا جورميه",
    signatureLabel: "مختارات مميزة",
    signatureTitle: "أطباق يطلبها ضيوفنا",
    signatureBody: "اختيارات من الفطور، المخبوزات والمشويات لمن يريد بداية غنية من منيو أسيا.",
    breakfastLabel: "الفطور التركي",
    breakfastTitle: "مائدة صباحية للمشاركة",
    breakfastBody: "بيض، أجبان، زيتون، لبنة، مربى وخبز تركي ساخن على مائدة واحدة.",
    breakfastCta: "استعرض الفطور",
    breakfastAlt: "فطور تركي ومشويات من أسيا جورميه",
    bakeryLabel: "المخبز",
    bakeryTitle: "خبز وبيدا من الفرن",
    bakeryBody: "بيدا، جوزلمة، بوريك وسميت بعجين طري وحشوات تركية تقدم ساخنة.",
    bakeryCta: "استعرض المخبز",
    bakeryAlt: "خبز تركي طازج من مخبز أسيا",
    menuLabel: "المنيو الكامل",
    menuTitle: "اختر طبقك الآن",
    menuBody: "الفطور، المقبلات، المشويات، الحلويات والمشروبات في قائمة واحدة واضحة.",
    menuCta: "استعرض المنيو",
    menuAlt: "أجواء مطعم أسيا جورميه",
  },
  en: {
    heroEyebrow: "Asya's Gourmet",
    heroTitle: "Turkish breakfast, bakery, and grills",
    heroBody: "Start with Turkish breakfast, then choose hot pide, charcoal grills, sweets, and tea.",
    heroCta: "View Menu",
    heroAlt: "A Turkish table from Asya's Gourmet",
    signatureLabel: "Signature Dishes",
    signatureTitle: "Guest Favorites",
    signatureBody: "Favorites from breakfast, bakery, and charcoal grills for a generous first order.",
    breakfastLabel: "Turkish Breakfast",
    breakfastTitle: "A generous morning table",
    breakfastBody: "Eggs, cheeses, olives, labneh, jams, and hot Turkish bread served for sharing.",
    breakfastCta: "Explore Breakfast",
    breakfastAlt: "Turkish breakfast and grills from Asya's Gourmet",
    bakeryLabel: "Bakery",
    bakeryTitle: "Hot bread and pide",
    bakeryBody: "Pide, gozleme, borek, and simit with soft dough, Turkish fillings, and a hot finish.",
    bakeryCta: "Explore Bakery",
    bakeryAlt: "Fresh Turkish bread from Asya's bakery",
    menuLabel: "Full Menu",
    menuTitle: "Choose your table",
    menuBody: "Breakfast, appetizers, grills, desserts, and drinks are organized in one clear menu.",
    menuCta: "View Menu",
    menuAlt: "Asya's Gourmet dining room",
  },
} as const;

function HomePage() {
  const homeContent = useMemo(() => buildHomeContent(), []);

  return (
    <AsyaShell current="home">
      <main className="home-premium-page">
        <HomeHero />
        <SignatureSection items={homeContent.signatures} />
        <HomeEditorialFeature
          labelKey="breakfastLabel"
          titleKey="breakfastTitle"
          bodyKey="breakfastBody"
          ctaKey="breakfastCta"
          altKey="breakfastAlt"
          image={mezzeImg}
          imagePosition="center"
        />
        <HomeEditorialFeature
          labelKey="bakeryLabel"
          titleKey="bakeryTitle"
          bodyKey="bakeryBody"
          ctaKey="bakeryCta"
          altKey="bakeryAlt"
          image={bakeryImg}
          imagePosition="center"
          reverse
        />
        <VisitContact />
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
    <section id="top" className="home-premium-hero" aria-labelledby="home-hero-title">
      <div className="home-premium-hero-media">
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
      <div className="home-premium-hero-copy">
        <p className="home-premium-eyebrow">{copy.heroEyebrow}</p>
        <h1 id="home-hero-title">{copy.heroTitle}</h1>
        <p>{copy.heroBody}</p>
        <a href="/menu" className="primary-cta home-premium-cta">
          <span>{copy.heroCta}</span>
          <ArrowUpRight className="h-4 w-4" />
        </a>
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
    <section className="home-premium-section home-signature-section">
      <div className="section-wrap home-section-heading">
        <p className="home-premium-eyebrow">{copy.signatureLabel}</p>
        <h2>{copy.signatureTitle}</h2>
        <p>{copy.signatureBody}</p>
      </div>
      <div className="section-wrap reference-feature-grid">
        {items.slice(0, 6).map((entry) => (
          <MenuCard
            key={entry.item.id}
            item={entry.item}
            category={entry.category}
            variant="feature"
            motionEnabled={false}
          />
        ))}
      </div>
    </section>
  );
}

type HomeCopyKey = keyof (typeof HOME_PAGE_COPY)["en"];

function HomeEditorialFeature({
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
    <section className={`home-premium-section home-editorial ${reverse ? "is-reverse" : ""}`}>
      <div className="section-wrap home-editorial-grid">
        <figure className="home-editorial-media">
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
        <div className="home-editorial-copy">
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

function HomeMenuCta() {
  const { locale } = useI18n();
  const copy = HOME_PAGE_COPY[locale];

  return (
    <section className="home-menu-cta-section" aria-labelledby="home-menu-cta-title">
      <img src={interiorImg} alt={copy.menuAlt} width={1400} height={960} loading="lazy" decoding="async" />
      <div className="home-menu-cta-copy">
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
