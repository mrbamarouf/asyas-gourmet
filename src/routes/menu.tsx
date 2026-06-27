import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Search, Sparkles, Utensils, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { CATEGORIES, ITEMS, RESTAURANT, type MenuCategory, type MenuItem } from "@/data/menu";
import {
  AsyaShell,
  CategoryGlyph,
  MenuCard,
  SectionIntro,
  fadeUp,
  isUsableImageUrl,
  staggerChildren,
} from "@/components/asya/primitives";
import { useI18n } from "@/lib/i18n";

import heroImg from "@/assets/hero-turkish-table.jpg";
import logoImg from "@/assets/asyas-logo.png";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Asya's Gourmet | Full Menu" },
      {
        name: "description",
        content:
          "The complete Asya's Gourmet menu with all official Foost-matched sections, prices, descriptions, and product imagery.",
      },
      { property: "og:title", content: "Asya's Gourmet | Full Menu" },
      { property: "og:description", content: "Complete Foost-matched menu for Asya's Gourmet." },
      { property: "og:image", content: logoImg },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: FullMenuPage,
});

interface MenuGroup {
  category: MenuCategory;
  items: MenuItem[];
}

function FullMenuPage() {
  return (
    <AsyaShell current="menu">
      <main id="menu-top" className="full-menu-page">
        <MenuHero />
        <MenuExplorer />
      </main>
    </AsyaShell>
  );
}

function MenuHero() {
  const { t, tx } = useI18n();

  return (
    <section className="full-menu-hero">
      <img src={heroImg} alt="" width={1920} height={1280} loading="eager" decoding="async" fetchPriority="high" />
      <div className="full-menu-hero-overlay" />
      <motion.div className="full-menu-hero-content" variants={staggerChildren} initial="hidden" animate="visible">
        <motion.img src={logoImg} alt="Asya's Gourmet" width={104} height={104} variants={fadeUp} />
        <motion.p className="section-kicker" variants={fadeUp}>
          <Utensils className="h-4 w-4" />
          <span>{t("menu_page_eyebrow")}</span>
        </motion.p>
        <motion.h1 variants={fadeUp}>{t("full_menu_title")}</motion.h1>
        <motion.p variants={fadeUp}>{t("full_menu_body")}</motion.p>
        <motion.div className="menu-hero-facts" variants={fadeUp}>
          <span>{CATEGORIES.length} {t("categoryCount")}</span>
          <span>{ITEMS.length} {t("menuCount")}</span>
          <a href={RESTAURANT.menuSourceUrl} target="_blank" rel="noopener noreferrer">
            {t("source")}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>
        <motion.p className="menu-hero-restaurant" variants={fadeUp}>
          {tx(RESTAURANT.name)}
        </motion.p>
      </motion.div>
    </section>
  );
}

function MenuExplorer() {
  const { t, tx } = useI18n();
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]?.id ?? "");
  const groups = useMemo<MenuGroup[]>(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return CATEGORIES.map((category) => {
      const items = ITEMS.filter((item) => {
        if (item.category !== category.id) return false;
        if (!normalizedQuery) return true;
        const haystack = [
          item.name.ar,
          item.name.en,
          item.description.ar,
          item.description.en,
          category.name.ar,
          category.name.en,
          ...(item.options?.flatMap((option) => [option.name, option.price]) ?? []),
        ]
          .join(" ")
          .toLowerCase();
        return haystack.includes(normalizedQuery);
      });

      return { category, items };
    }).filter((group) => group.items.length > 0);
  }, [query]);

  const totalMatches = groups.reduce((total, group) => total + group.items.length, 0);

  useEffect(() => {
    if (query.trim()) {
      setActiveCategory(groups[0]?.category.id ?? "");
      return;
    }

    const visible = new Map<string, number>();
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-menu-section]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("data-menu-section");
          if (!id) return;
          if (entry.isIntersecting) {
            visible.set(id, entry.intersectionRatio);
          } else {
            visible.delete(id);
          }
        });

        const next = [...visible.entries()].sort((a, b) => b[1] - a[1])[0]?.[0];
        if (next) setActiveCategory(next);
      },
      { rootMargin: "-34% 0px -56% 0px", threshold: [0.05, 0.2, 0.5, 0.8] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [groups, query]);

  const scrollToCategory = (categoryId: string) => {
    setQuery("");
    setActiveCategory(categoryId);
    window.setTimeout(() => {
      document.getElementById(`section-${categoryId}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 40);
  };

  return (
    <section className="full-menu-explorer">
      <div className="full-menu-controls">
        <div className="section-wrap controls-wrap">
          <div className="menu-search">
            <Search className="h-4 w-4" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t("searchPlaceholder")}
              aria-label={t("searchPlaceholder")}
            />
            {query ? (
              <button type="button" onClick={() => setQuery("")} aria-label="Clear search">
                <X className="h-4 w-4" />
              </button>
            ) : null}
          </div>

          <nav className="menu-category-strip no-scrollbar" aria-label="Menu categories">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => scrollToCategory(category.id)}
                className={activeCategory === category.id ? "category-pill is-active" : "category-pill"}
                aria-pressed={activeCategory === category.id}
              >
                <CategoryGlyph category={category} />
                <span>{tx(category.name)}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="section-wrap full-menu-wrap">
        <div className="full-menu-summary">
          <span>{query ? `${totalMatches} ${t("matchingResults")}` : `${ITEMS.length} ${t("menuCount")}`}</span>
          <span>{CATEGORIES.length} {t("categoryCount")}</span>
        </div>

        {groups.length ? (
          <div className="full-menu-groups">
            {groups.map((group) => (
              <MenuSection key={group.category.id} group={group} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <Sparkles className="h-6 w-6" />
            <p>{t("noResults")}</p>
            <button type="button" onClick={() => setQuery("")}>
              {t("resetFilters")}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function MenuSection({ group }: { group: MenuGroup }) {
  const { t, tx } = useI18n();
  const cover = isUsableImageUrl(group.category.cover ?? group.category.sourceImageUrl)
    ? group.category.cover ?? group.category.sourceImageUrl
    : undefined;

  return (
    <motion.section
      id={`section-${group.category.id}`}
      data-menu-section={group.category.id}
      className="full-menu-section"
      variants={staggerChildren}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <div
        className={cover ? "menu-section-banner has-cover" : "menu-section-banner"}
        style={cover ? { backgroundImage: `linear-gradient(90deg, rgba(20, 30, 50, 0.82), rgba(20, 30, 50, 0.28)), url(${cover})` } : undefined}
      >
        <SectionIntro
          eyebrow={`${group.items.length} ${t("menuCount")}`}
          title={tx(group.category.name)}
          body={group.category.blurb ? tx(group.category.blurb) : undefined}
          icon={<CategoryGlyph category={group.category} />}
          tone="light"
        />
      </div>

      <div className="full-menu-grid">
        {group.items.map((item) => (
          <MenuCard key={item.id} item={item} category={group.category} />
        ))}
      </div>
    </motion.section>
  );
}

