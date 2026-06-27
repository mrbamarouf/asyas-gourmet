import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, CakeSlice, ChefHat, Coffee, CupSoda, ExternalLink, Sparkles, Wheat } from "lucide-react";

import {
  CATEGORIES,
  CHEF_PICK_ITEMS,
  ITEMS,
  POPULAR_ITEMS,
  RESTAURANT,
  type MenuCategory,
  type MenuItem,
} from "@/data/menu";
import {
  AsyaShell,
  DishImage,
  MenuCard,
  PriceTag,
  SectionIntro,
  VisitContact,
  categoryById,
  fadeUp,
  getDishImage,
  isOfficialImage,
  softScale,
  staggerChildren,
} from "@/components/asya/primitives";
import { useI18n } from "@/lib/i18n";

import bakeryImg from "@/assets/bakery.jpg";
import heroImg from "@/assets/hero-turkish-table.jpg";
import interiorImg from "@/assets/interior.jpg";
import logoImg from "@/assets/asyas-logo.png";
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
      { property: "og:description", content: "A warm Turkish boutique restaurant experience with a complete QR menu." },
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

const categoryMap = new Map(CATEGORIES.map((category) => [category.id, category]));

function HomePage() {
  const homeContent = buildHomeContent();

  return (
    <AsyaShell current="home">
      <main>
        <HomeHero />
        <StorySection />
        <SignatureSection items={homeContent.signature} />
        <BreakfastSection items={homeContent.breakfast} />
        <BakerySection items={homeContent.bakery} />
        <DrinksSection items={homeContent.drinks} />
        <DessertsSection items={homeContent.desserts} />
        <GallerySection items={homeContent.gallery} />
        <VisitIntro />
        <VisitContact />
      </main>
    </AsyaShell>
  );
}

function HomeHero() {
  const { t, tx } = useI18n();
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 780], reduceMotion ? [0, 0] : [0, 120]);
  const heroScale = useTransform(scrollY, [0, 780], reduceMotion ? [1.04, 1.04] : [1.04, 1.14]);

  return (
    <section id="top" className="home-hero">
      <motion.img
        src={heroImg}
        alt=""
        className="home-hero-image"
        style={{ y: heroY, scale: heroScale }}
        width={1920}
        height={1280}
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
      <div className="home-hero-overlay" />
      <div className="home-hero-vignette" />

      <motion.div className="home-hero-content" variants={staggerChildren} initial="hidden" animate="visible">
        <motion.img className="home-hero-logo" src={logoImg} alt="Asya's Gourmet" width={140} height={140} variants={softScale} />
        <motion.p className="hero-kicker" variants={fadeUp}>
          {tx(RESTAURANT.kicker)}
        </motion.p>
        <motion.h1 variants={fadeUp}>{t("hero_title")}</motion.h1>
        <motion.p className="home-hero-sub" variants={fadeUp}>
          {t("hero_sub")}
        </motion.p>
        <motion.div className="home-hero-actions" variants={fadeUp}>
          <a href="/menu" className="primary-cta">
            {t("exploreMenu")}
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a href="#visit" className="secondary-cta">
            {t("contactUs")}
          </a>
        </motion.div>
        <motion.div className="hero-meta" variants={fadeUp} aria-label="Menu summary">
          <span>{CATEGORIES.length} {t("categoryCount")}</span>
          <span>{ITEMS.length} {t("menuCount")}</span>
          <span>{t("hero_note")}</span>
        </motion.div>
      </motion.div>
    </section>
  );
}

function StorySection() {
  const { t, tx } = useI18n();

  return (
    <motion.section
      id="about"
      className="story-section"
      variants={staggerChildren}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
    >
      <div className="section-wrap story-grid">
        <motion.div className="story-media" variants={softScale}>
          <img src={interiorImg} alt={t("home_story_title")} width={1600} height={1104} loading="lazy" decoding="async" />
          <img src={bakeryImg} alt={t("home_bakery_title")} width={900} height={1100} loading="lazy" decoding="async" />
          <img src={teaImg} alt={t("home_drinks_title")} width={900} height={1100} loading="lazy" decoding="async" />
        </motion.div>
        <div className="story-copy">
          <SectionIntro
            eyebrow={t("home_story")}
            title={t("home_story_title")}
            body={t("home_story_body")}
            icon={<Sparkles className="h-4 w-4" />}
          />
          <motion.div className="story-notes" variants={fadeUp}>
            <span>{tx(RESTAURANT.name)}</span>
            <strong>{tx(RESTAURANT.kicker)}</strong>
            <a href="/menu">
              {t("exploreFullMenu")}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

function SignatureSection({ items }: { items: DishEntry[] }) {
  const { t } = useI18n();
  const [lead, ...rest] = items;

  return (
    <motion.section
      className="signature-section"
      variants={staggerChildren}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-110px" }}
    >
      <div className="section-wrap">
        <SectionIntro
          eyebrow={t("sec_chef")}
          title={t("home_signature_title")}
          body={t("home_signature_body")}
          icon={<ChefHat className="h-4 w-4" />}
          tone="light"
        />
        <div className="signature-layout">
          {lead ? <SpotlightDish entry={lead} /> : null}
          <div className="signature-side-grid">
            {rest.slice(0, 5).map((entry) => (
              <CompactDish key={entry.item.id} entry={entry} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function BreakfastSection({ items }: { items: DishEntry[] }) {
  const { t } = useI18n();

  return (
    <motion.section
      className="breakfast-section"
      variants={staggerChildren}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-110px" }}
    >
      <div className="section-wrap">
        <div className="breakfast-banner">
          <img src={heroImg} alt="" loading="lazy" decoding="async" width={1600} height={1067} />
          <div>
            <SectionIntro
              eyebrow={t("home_breakfast_title")}
              title={t("home_breakfast_title")}
              body={t("home_breakfast_body")}
              icon={<Sparkles className="h-4 w-4" />}
              tone="light"
            />
            <a href="/menu" className="inline-menu-link">
              {t("exploreFullMenu")}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="breakfast-list">
          {items.slice(0, 6).map((entry) => (
            <MenuCard key={entry.item.id} item={entry.item} category={entry.category} variant="wide" />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function BakerySection({ items }: { items: DishEntry[] }) {
  const { t } = useI18n();

  return (
    <motion.section
      className="bakery-section"
      variants={staggerChildren}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-110px" }}
    >
      <div className="section-wrap bakery-grid">
        <motion.div className="bakery-photo" variants={softScale}>
          <img src={bakeryImg} alt={t("home_bakery_title")} width={1100} height={1250} loading="lazy" decoding="async" />
        </motion.div>
        <div>
          <SectionIntro
            eyebrow={t("sec_bakery")}
            title={t("home_bakery_title")}
            body={t("home_bakery_body")}
            icon={<Wheat className="h-4 w-4" />}
          />
          <div className="bakery-card-grid">
            {items.slice(0, 6).map((entry) => (
              <CompactDish key={entry.item.id} entry={entry} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function DrinksSection({ items }: { items: DishEntry[] }) {
  const { t } = useI18n();

  return (
    <motion.section
      className="drinks-section"
      variants={staggerChildren}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-110px" }}
    >
      <div className="section-wrap drinks-layout">
        <div className="drinks-copy">
          <SectionIntro
            eyebrow={t("sec_drinks")}
            title={t("home_drinks_title")}
            body={t("home_drinks_body")}
            icon={<CupSoda className="h-4 w-4" />}
            tone="light"
          />
          <img src={teaImg} alt={t("home_drinks_title")} width={1300} height={866} loading="lazy" decoding="async" />
        </div>
        <div className="drinks-grid">
          {items.slice(0, 6).map((entry) => (
            <MenuCard key={entry.item.id} item={entry.item} category={entry.category} variant="feature" />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function DessertsSection({ items }: { items: DishEntry[] }) {
  const { t } = useI18n();

  return (
    <motion.section
      className="desserts-section"
      variants={staggerChildren}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-110px" }}
    >
      <div className="section-wrap">
        <SectionIntro
          eyebrow={t("home_desserts_title")}
          title={t("home_desserts_title")}
          body={t("home_desserts_body")}
          icon={<CakeSlice className="h-4 w-4" />}
        />
        <div className="dessert-grid">
          {items.slice(0, 6).map((entry) => (
            <MenuCard key={entry.item.id} item={entry.item} category={entry.category} variant="feature" />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function GallerySection({ items }: { items: DishEntry[] }) {
  const { t, tx } = useI18n();

  return (
    <motion.section
      className="gallery-section"
      variants={staggerChildren}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-110px" }}
    >
      <div className="section-wrap">
        <SectionIntro
          eyebrow={t("home_gallery_title")}
          title={t("home_gallery_title")}
          body={t("home_gallery_body")}
          icon={<Coffee className="h-4 w-4" />}
          tone="light"
        />
        <div className="gallery-grid">
          <motion.img src={interiorImg} alt={t("home_gallery_title")} width={900} height={620} loading="lazy" decoding="async" variants={softScale} />
          <motion.img src={bakeryImg} alt={t("home_bakery_title")} width={620} height={720} loading="lazy" decoding="async" variants={softScale} />
          <motion.img src={teaImg} alt={t("home_drinks_title")} width={780} height={520} loading="lazy" decoding="async" variants={softScale} />
          {items.slice(0, 3).map((entry) => (
            <motion.img
              key={entry.item.id}
              src={getDishImage(entry.item)}
              alt={tx(entry.item.name)}
              width={640}
              height={640}
              loading="lazy"
              decoding="async"
              variants={softScale}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function VisitIntro() {
  const { t } = useI18n();

  return (
    <motion.div
      variants={staggerChildren}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-110px" }}
    >
      <div className="pre-visit section-wrap">
        <span>{t("exploreFullMenu")}</span>
        <a href="/menu">
          {t("viewSource")}
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </motion.div>
  );
}

function SpotlightDish({ entry }: { entry: DishEntry }) {
  const { tx } = useI18n();

  return (
    <motion.a href="/menu" className="spotlight-dish" variants={softScale} whileHover={{ y: -6, scale: 1.012 }}>
      <DishImage item={entry.item} alt={tx(entry.item.name)} eager className="spotlight-image" />
      <div>
        <span>{tx(entry.category.name)}</span>
        <h3>{tx(entry.item.name)}</h3>
        {tx(entry.item.description) ? <p>{tx(entry.item.description)}</p> : null}
        <PriceTag item={entry.item} />
      </div>
    </motion.a>
  );
}

function CompactDish({ entry }: { entry: DishEntry }) {
  const { tx } = useI18n();

  return (
    <motion.a href="/menu" className="compact-dish" variants={fadeUp} whileHover={{ y: -4, scale: 1.01 }}>
      <DishImage item={entry.item} alt={tx(entry.item.name)} className="compact-dish-image" />
      <div>
        <span>{tx(entry.category.name)}</span>
        <strong>{tx(entry.item.name)}</strong>
        <PriceTag item={entry.item} />
      </div>
    </motion.a>
  );
}

function buildHomeContent() {
  const signature = toEntries(uniqueItems([...CHEF_PICK_ITEMS, ...POPULAR_ITEMS]).slice(0, 6));
  const breakfast = toEntries(itemsFromCategories(["Happy Spreads", "Eggs"]).slice(0, 6));
  const bakery = toEntries(
    uniqueItems([
      ...ITEMS.filter((item) => item.bakery),
      ...itemsFromCategories(["Asya's Premium Pides", "Lahmacuns", "Pizza", "Abla's Handmade Gözleme & Börek"]),
    ]).slice(0, 6),
  );
  const drinks = toEntries(
    uniqueItems([
      ...ITEMS.filter((item) => item.turkishDrink),
      ...itemsFromCategories(["Tea", "World's Coffees", "Turkish Traditional Drinks", "Our Signatures"]),
    ]).slice(0, 6),
  );
  const desserts = toEntries(itemsFromCategories(["TURKISH DESSERT", "A Sweet Memory"]).slice(0, 6));
  const gallery = toEntries(uniqueItems([...signature.map((entry) => entry.item), ...desserts.map((entry) => entry.item), ...drinks.map((entry) => entry.item)]).filter(isOfficialImage));

  return { signature, breakfast, bakery, drinks, desserts, gallery };
}

function itemsFromCategories(names: string[]) {
  const categoryIds = CATEGORIES.filter((category) =>
    names.some((name) => category.name.en.toLowerCase().includes(name.toLowerCase())),
  ).map((category) => category.id);

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
    .map((item) => ({ item, category: categoryById(item.category) ?? categoryMap.get(item.category) }))
    .filter((entry): entry is DishEntry => Boolean(entry.category));
}
