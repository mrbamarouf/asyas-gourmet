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
import { memo, useCallback, useMemo } from "react";

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

function HomePage() {
  const homeContent = useMemo(() => buildHomeContent(), []);

  return (
    <AsyaShell current="home">
      <main>
        <HomeHero />
        <HomeCategories categories={homeContent.categories} />
        <QualitySection />
        <SignatureSection items={homeContent.signatures} />
        <PhotoStrip items={homeContent.gallery} />
        <VisitContact />
      </main>
    </AsyaShell>
  );
}

function HomeHero() {
  const { locale, t, tx } = useI18n();
  const stats =
    locale === "ar"
      ? [
          { value: `${ITEMS.length}+`, label: "صنف في القائمة" },
          { value: `${HOME_MENU_GROUPS.length}`, label: "أقسام رئيسية" },
          { value: `${POPULAR_ITEMS.length}+`, label: "أطباق مختارة" },
          { value: "يوميًا", label: "تحضير طازج" },
        ]
      : [
          { value: `${ITEMS.length}+`, label: "Menu dishes" },
          { value: `${HOME_MENU_GROUPS.length}`, label: "Main sections" },
          { value: `${POPULAR_ITEMS.length}+`, label: "House picks" },
          { value: "Daily", label: "Fresh prep" },
        ];

  return (
    <section id="top" className="reference-hero">
      <div className="reference-hero-copy">
        <p className="reference-kicker">{tx(RESTAURANT.kicker)}</p>
        <h1>{t("hero_title")}</h1>
        <p>{t("hero_sub")}</p>
        <a href="/menu" className="primary-cta">
          <span>{t("exploreMenu")}</span>
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
      <div className="reference-hero-media">
        <img
          src={heroImg}
          alt={t("hero_title")}
          width={1600}
          height={1067}
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </div>
      <dl className="reference-stats" aria-label={t("hero_note")}>
        {stats.map((stat) => (
          <div key={stat.label}>
            <dt>{stat.value}</dt>
            <dd>{stat.label}</dd>
          </div>
        ))}
      </dl>
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
          <h2>{t("home_quality_title")}</h2>
          <p>{t("home_quality_body")}</p>
          <a href="/menu" className="dark-link">
            <span>{t("exploreFullMenu")}</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
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
  const { t } = useI18n();

  return (
    <section className="reference-section reference-featured">
      <div className="section-wrap reference-section-heading">
        <h2>{t("home_signature_title")}</h2>
        <p>{t("home_signature_body")}</p>
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

function PhotoStrip({ items }: { items: DishEntry[] }) {
  const { t, tx } = useI18n();
  const photos = [
    { src: interiorImg, alt: t("home_gallery_title") },
    { src: bakeryImg, alt: t("home_bakery_title") },
    { src: teaImg, alt: t("home_drinks_title") },
    ...items
      .slice(0, 4)
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
