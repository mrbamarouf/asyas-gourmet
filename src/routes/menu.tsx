import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Search, Sparkles, Utensils, X } from "lucide-react";
import { memo, useCallback, useEffect, useMemo, useRef, useState, type ChangeEvent } from "react";

import {
  CATEGORIES,
  CATEGORY_ORDER,
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
  CategoryGlyph,
  MenuCard,
  SectionIntro,
  fadeUp,
  isUsableImageUrl,
  staggerChildren,
} from "@/components/asya/primitives";
import { useI18n } from "@/lib/i18n";

import heroImg from "@/assets/hero-turkish-table.jpg";
import logoImg from "@/assets/asyas-logo-transparent.png";

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

interface MenuDisplayGroup {
  definition: MenuCategoryGroup;
  sections: MenuGroup[];
  featuredItems: MenuItem[];
}

const categoryMap = new Map(CATEGORIES.map((category) => [category.id, category]));
const TOP_LEVEL_MENU_NAV_IDS: MenuGroupId[] = [
  "offers",
  "breakfast",
  "appetizers",
  "mains",
  "grills",
  "desserts",
  "drinks",
];
const TOP_LEVEL_MENU_NAV_GROUPS = TOP_LEVEL_MENU_NAV_IDS.map((id) =>
  CATEGORY_ORDER.find((group) => group.id === id),
).filter((group): group is MenuCategoryGroup => Boolean(group));
const TOP_LEVEL_MENU_NAV_ID_SET = new Set<MenuGroupId>(TOP_LEVEL_MENU_NAV_IDS);

function isTopLevelMenuGroupId(id: string | null): id is MenuGroupId {
  return Boolean(id && TOP_LEVEL_MENU_NAV_ID_SET.has(id as MenuGroupId));
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
  const { locale, t, tx } = useI18n();

  return (
    <section className="full-menu-hero" dir={locale === "ar" ? "rtl" : "ltr"}>
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
  const { locale, t, tx } = useI18n();
  const [searchInput, setSearchInput] = useState("");
  const query = useDebouncedValue(searchInput, 150);
  const [activeGroup, setActiveGroup] = useState<MenuGroupId>(TOP_LEVEL_MENU_NAV_GROUPS[0]?.id ?? "offers");
  const isProgrammaticScrollRef = useRef(false);
  const displayGroups = useMemo<MenuDisplayGroup[]>(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const matchesQuery = (item: MenuItem, category?: MenuCategory) => {
      if (!normalizedQuery) return true;
      const haystack = [
        item.name.ar,
        item.name.en,
        item.description.ar,
        item.description.en,
        category?.name.ar,
        category?.name.en,
        ...(item.options?.flatMap((option) => [option.name, option.price]) ?? []),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(normalizedQuery);
    };

    return CATEGORY_ORDER.map((definition) => {
      const featuredItems = definition.featuredOnly
        ? POPULAR_ITEMS.filter((item) => matchesQuery(item, categoryMap.get(item.category))).slice(0, 12)
        : [];

      const sections = definition.categoryIds
        .map((categoryId) => categoryMap.get(categoryId))
        .filter((category): category is MenuCategory => Boolean(category))
        .map((category) => ({
          category,
          items: ITEMS.filter((item) => item.category === category.id && matchesQuery(item, category)),
        }))
        .filter((group) => group.items.length > 0);

      return { definition, sections, featuredItems };
    }).filter((group) => group.sections.length > 0 || group.featuredItems.length > 0);
  }, [query]);

  const totalMatches = useMemo(
    () => uniqueItemCount(displayGroups.flatMap((group) => group.sections.flatMap((section) => section.items))),
    [displayGroups],
  );
  const handleSearchChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  }, []);
  const clearSearch = useCallback(() => setSearchInput(""), []);

  useEffect(() => {
    if (query.trim()) {
      const firstVisibleTopLevelGroup = displayGroups.find((group) =>
        TOP_LEVEL_MENU_NAV_ID_SET.has(group.definition.id),
      )?.definition.id;
      setActiveGroup(firstVisibleTopLevelGroup ?? TOP_LEVEL_MENU_NAV_GROUPS[0]?.id ?? "offers");
      return;
    }

    const visible = new Map<MenuGroupId, number>();
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-menu-group]")).filter((section) =>
      isTopLevelMenuGroupId(section.getAttribute("data-menu-group")),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        if (isProgrammaticScrollRef.current) return;

        entries.forEach((entry) => {
          const id = entry.target.getAttribute("data-menu-group");
          if (!isTopLevelMenuGroupId(id)) return;
          if (entry.isIntersecting) {
            visible.set(id, entry.intersectionRatio);
          } else {
            visible.delete(id);
          }
        });

        const next = [...visible.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] as MenuGroupId | undefined;
        if (next) setActiveGroup(next);
      },
      { rootMargin: "-34% 0px -56% 0px", threshold: [0.05, 0.2, 0.5, 0.8] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [displayGroups, query]);

  const scrollToGroup = useCallback((groupId: MenuGroupId) => {
    setSearchInput("");
    setActiveGroup(groupId);
    const scrollToFirstSection = (attempt = 0) => {
      const group = document.getElementById(`group-${groupId}`);
      const target = group?.querySelector<HTMLElement>("[data-menu-section]") ?? group;

      if (target) {
        isProgrammaticScrollRef.current = true;
        const scrollTargetIntoPlace = (behavior: ScrollBehavior) => {
          const currentGroup = document.getElementById(`group-${groupId}`);
          const currentTarget = currentGroup?.querySelector<HTMLElement>("[data-menu-section]") ?? currentGroup;
          if (!currentTarget) return;

          const controls = document.querySelector<HTMLElement>(".full-menu-controls");
          const stickyOffset = controls ? Math.min(Math.max(controls.offsetHeight, 96), 180) : 120;
          const top = currentTarget.getBoundingClientRect().top + window.scrollY - stickyOffset - 16;
          window.scrollTo({ top: Math.max(0, top), behavior });
        };

        scrollTargetIntoPlace("smooth");
        window.setTimeout(() => scrollTargetIntoPlace("smooth"), 550);
        window.setTimeout(() => scrollTargetIntoPlace("auto"), 1250);
        window.setTimeout(() => scrollTargetIntoPlace("auto"), 1900);
        window.setTimeout(() => {
          scrollTargetIntoPlace("auto");
          setActiveGroup(groupId);
          isProgrammaticScrollRef.current = false;
        }, 2200);
        return;
      }

      if (attempt < 10) {
        window.setTimeout(() => scrollToFirstSection(attempt + 1), 50);
      }
    };

    window.setTimeout(() => scrollToFirstSection(), 40);
  }, []);

  return (
    <section className="full-menu-explorer soft-botanical-bg" dir={locale === "ar" ? "rtl" : "ltr"}>
      <div className="full-menu-controls">
        <div className="section-wrap controls-wrap">
          <div className="menu-search">
            <Search className="h-4 w-4" />
            <input
              value={searchInput}
              onChange={handleSearchChange}
              placeholder={t("searchPlaceholder")}
              aria-label={t("searchPlaceholder")}
            />
            {searchInput ? (
              <button type="button" onClick={clearSearch} aria-label="Clear search">
                <X className="h-4 w-4" />
              </button>
            ) : null}
          </div>

          <nav
            className="menu-category-strip menu-quick-jump no-scrollbar"
            aria-label="Menu quick jump"
            dir={locale === "ar" ? "rtl" : "ltr"}
          >
            {TOP_LEVEL_MENU_NAV_GROUPS.map((group) => (
              <button
                key={group.id}
                type="button"
                onClick={() => scrollToGroup(group.id)}
                className={activeGroup === group.id ? "category-pill is-active" : "category-pill"}
                aria-pressed={activeGroup === group.id}
                data-group-pill={group.id}
              >
                <QuickJumpIcon group={group} />
                <span>{tx(group.shortName)}</span>
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

        {displayGroups.length ? (
          <div className="full-menu-groups grouped-menu-groups">
            {displayGroups.map((group) => (
              <MenuDisplayGroup key={group.definition.id} group={group} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <Sparkles className="h-6 w-6" />
            <p>{t("noResults")}</p>
            <button type="button" onClick={clearSearch}>
              {t("resetFilters")}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function useDebouncedValue<T>(value: T, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = window.setTimeout(() => setDebouncedValue(value), delay);
    return () => window.clearTimeout(timer);
  }, [delay, value]);

  return debouncedValue;
}

function QuickJumpIcon({ group }: { group: MenuCategoryGroup }) {
  const category = categoryMap.get(group.categoryIds[0] ?? "");
  return category ? <CategoryGlyph category={category} /> : <Sparkles className="h-4 w-4" />;
}

const MenuDisplayGroup = memo(function MenuDisplayGroup({ group }: { group: MenuDisplayGroup }) {
  const { t, tx } = useI18n();
  const itemCount = uniqueItemCount([
    ...group.featuredItems,
    ...group.sections.flatMap((section) => section.items),
  ]);

  return (
    <motion.section
      id={`group-${group.definition.id}`}
      data-menu-group={group.definition.id}
      className={`menu-display-group menu-display-group-${group.definition.id}`}
      variants={staggerChildren}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-90px" }}
    >
      <div className="menu-group-heading">
        <p className="section-kicker">
          <QuickJumpIcon group={group.definition} />
          <span>{tx(group.definition.shortName)}</span>
        </p>
        <h2>{tx(group.definition.name)}</h2>
        <p>{tx(group.definition.blurb)}</p>
        <div className="menu-group-meta">
          {group.sections.length ? <span>{group.sections.length} {t("categoryCount")}</span> : null}
          <span>{itemCount} {t("menuCount")}</span>
        </div>
      </div>

      {group.featuredItems.length ? (
        <div className="menu-group-featured">
          {group.featuredItems.map((item) => {
            const category = categoryMap.get(item.category);
            return category ? (
              <MenuCard key={item.id} item={item} category={category} variant="feature" motionEnabled={false} />
            ) : null;
          })}
        </div>
      ) : null}

      {group.sections.length ? (
        <div className="menu-group-sections">
          {group.sections.map((section) => (
            <MenuSection key={section.category.id} group={section} />
          ))}
        </div>
      ) : null}
    </motion.section>
  );
});

const MenuSection = memo(function MenuSection({ group }: { group: MenuGroup }) {
  const { t, tx } = useI18n();
  const cover = isUsableImageUrl(group.category.cover ?? group.category.sourceImageUrl)
    ? group.category.cover ?? group.category.sourceImageUrl
    : undefined;

  return (
    <motion.section
      id={`section-${group.category.id}`}
      data-menu-section={group.category.id}
      className="full-menu-section menu-category-section soft-botanical-bg"
      variants={staggerChildren}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <div
        className={cover ? "menu-section-banner has-cover" : "menu-section-banner"}
        style={cover ? { backgroundImage: `linear-gradient(90deg, rgba(79, 90, 62, 0.82), rgba(104, 115, 84, 0.28)), url(${cover})` } : undefined}
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
          <MenuCard key={item.id} item={item} category={group.category} motionEnabled={false} />
        ))}
      </div>
    </motion.section>
  );
});

function uniqueItemCount(items: MenuItem[]) {
  return new Set(items.map((item) => item.id)).size;
}
