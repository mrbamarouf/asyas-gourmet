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
  CATEGORY_ORDER,
  CHEF_PICK_ITEMS,
  ITEMS,
  POPULAR_ITEMS,
  RESTAURANT,
  type MenuCategory,
  type MenuCategoryGroup,
  type MenuGroupId,
  type MenuItem,
} from "@/data/menu";
import {
  AsyaShell,
  DishImage,
  MenuCard,
  PriceTag,
  VisitContact,
  categoryById,
  getDishImage,
  isOfficialImage,
  localizeMenuText,
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
      { title: "Asya's Gourmet | Turkish Restaurant Experience" },
      {
        name: "description",
        content:
          "Asya's Gourmet restaurant experience with signature Turkish dishes, fresh bakery, Turkish breakfast, drinks, desserts, and a complete Foost-matched menu.",
      },
      { property: "og:title", content: "Asya's Gourmet | Turkish Restaurant Experience" },
      {
        property: "og:description",
        content: "A warm Turkish boutique restaurant experience with a complete QR menu.",
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

const FINAL_GROUP_IDS = [
  "offers",
  "breakfast",
  "appetizers",
  "mains",
  "grills",
  "desserts",
  "drinks",
] as const satisfies readonly MenuGroupId[];

type FinalGroupId = (typeof FINAL_GROUP_IDS)[number];

const FINAL_GROUP_COPY: Record<
  FinalGroupId,
  Pick<MenuCategoryGroup, "name" | "shortName" | "blurb">
> = {
  offers: {
    name: { ar: "العروض", en: "Offers" },
    shortName: { ar: "العروض", en: "Offers" },
    blurb: { ar: "باقات مشاركة من المنيو الحقيقي.", en: "Sharing packages from the real menu." },
  },
  breakfast: {
    name: { ar: "الفطور", en: "Breakfast" },
    shortName: { ar: "الفطور", en: "Breakfast" },
    blurb: { ar: "أطباق صباحية ومخبوزات تركية.", en: "Morning plates and Turkish bakery." },
  },
  appetizers: {
    name: { ar: "المقبلات", en: "Appetizers" },
    shortName: { ar: "المقبلات", en: "Appetizers" },
    blurb: { ar: "سلطات، شوربات، وجانبيات.", en: "Salads, soups, and sides." },
  },
  mains: {
    name: { ar: "الرئيسية", en: "Main Courses" },
    shortName: { ar: "الرئيسية", en: "Main Courses" },
    blurb: { ar: "أطباق غداء وعشاء غنية.", en: "Generous lunch and dinner plates." },
  },
  grills: {
    name: { ar: "المشويات", en: "Grills" },
    shortName: { ar: "المشويات", en: "Grills" },
    blurb: { ar: "كباب، شيش، وطواجن ساخنة.", en: "Kebabs, shish, and hot casseroles." },
  },
  desserts: {
    name: { ar: "الحلويات", en: "Desserts" },
    shortName: { ar: "الحلويات", en: "Desserts" },
    blurb: { ar: "حلويات تركية وخيارات حلوة.", en: "Turkish sweets and dessert plates." },
  },
  drinks: {
    name: { ar: "المشروبات", en: "Drinks" },
    shortName: { ar: "المشروبات", en: "Drinks" },
    blurb: { ar: "شاي، قهوة، عصائر، وخيارات باردة.", en: "Tea, coffee, juices, and cold drinks." },
  },
};

const FINAL_GROUP_MERGES: Record<FinalGroupId, MenuGroupId[]> = {
  offers: ["offers"],
  breakfast: ["breakfast", "bakery"],
  appetizers: ["appetizers", "soups", "sides"],
  mains: ["mains"],
  grills: ["grills"],
  desserts: ["desserts"],
  drinks: ["drinks", "shisha"],
};

const FINAL_MENU_GROUPS = FINAL_GROUP_IDS.reduce<MenuCategoryGroup[]>((groups, id) => {
  const source = CATEGORY_ORDER.find((group) => group.id === id);
  const copy = FINAL_GROUP_COPY[id];
  if (!source) return groups;

  const categoryIds = FINAL_GROUP_MERGES[id].flatMap(
    (groupId) => CATEGORY_ORDER.find((group) => group.id === groupId)?.categoryIds ?? [],
  );

  groups.push({
    ...source,
    ...copy,
    categoryIds,
    quickJump: true,
    featuredOnly: false,
  });

  return groups;
}, []);

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
          { value: `${ITEMS.length}+`, label: "صنف حقيقي" },
          { value: "7", label: "مجموعات منيو" },
          { value: `${POPULAR_ITEMS.length}+`, label: "اختيارات بارزة" },
          { value: "رسمي", label: "مصدر مطابق" },
        ]
      : [
          { value: `${ITEMS.length}+`, label: "Real dishes" },
          { value: "7", label: "Menu groups" },
          { value: `${POPULAR_ITEMS.length}+`, label: "Highlighted picks" },
          { value: "Foost", label: "Matched source" },
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
          { icon: <ChefHat />, title: "وصفات تركية", body: "أطباق مختارة من بيانات المنيو نفسها." },
          { icon: <Sparkles />, title: "مكونات واضحة", body: "صور وأسعار ظاهرة بدون ازدحام." },
          { icon: <Flame />, title: "أطباق ساخنة", body: "مشويات وطواجن بروح تركية دافئة." },
          { icon: <Heart />, title: "ضيافة هادئة", body: "تجربة قراءة فاخرة وسهلة من الجوال." },
        ]
      : [
          {
            icon: <ChefHat />,
            title: "Turkish Recipes",
            body: "Selections drawn from the same real menu data.",
          },
          {
            icon: <Sparkles />,
            title: "Clear Ingredients",
            body: "Photos and prices stay visible without clutter.",
          },
          {
            icon: <Flame />,
            title: "Warm Plates",
            body: "Grills and casseroles with a Turkish table feel.",
          },
          {
            icon: <Heart />,
            title: "Calm Hospitality",
            body: "A premium mobile reading experience.",
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
  const description = localizeMenuText(entry.item.description, locale);
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

  const categories = FINAL_MENU_GROUPS.map((group) => ({
    group,
    image: imageForGroup(group),
  }));

  const signatures = toEntries(uniqueItems([...CHEF_PICK_ITEMS, ...POPULAR_ITEMS]).slice(0, 6));
  const gallery = toEntries(
    uniqueItems([
      ...signatures.map((entry) => entry.item),
      ...itemsFromGroup("desserts"),
      ...itemsFromGroup("drinks"),
    ]).filter(isOfficialImage),
  );

  return { categories, signatures, gallery };
}

function hydrateCategoryMap() {
  if (categoryMap.size) return;
  CATEGORY_ORDER.flatMap((group) => group.categoryIds).forEach((categoryId) => {
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

function itemsFromGroup(groupId: MenuGroupId) {
  const categoryIds = FINAL_MENU_GROUPS.find((group) => group.id === groupId)?.categoryIds ?? [];
  return ITEMS.filter((item) => categoryIds.includes(item.category));
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
