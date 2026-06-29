import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Utensils } from "lucide-react";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";

import {
  CATEGORIES,
  ITEMS,
  type MenuCategory,
  type MenuCategoryGroup,
  type MenuItem,
} from "@/data/menu";
import { REFERENCE_MENU_GROUPS } from "@/data/reference-menu-groups";
import {
  AsyaShell,
  CategoryGlyph,
  MenuCard,
  fadeUp,
  staggerChildren,
} from "@/components/asya/primitives";
import { useI18n } from "@/lib/i18n";

import heroImg from "@/assets/hero-turkish-table.jpg";
import logoImg from "@/assets/asyas-logo-transparent.png";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Asya's Gourmet | Turkish Menu" },
      {
        name: "description",
        content:
          "Browse Asya's Gourmet Turkish breakfast, pide, meze, grills, sweets, coffee, tea, and fresh drinks.",
      },
      { property: "og:title", content: "Asya's Gourmet | Turkish Menu" },
      { property: "og:description", content: "Turkish breakfast, bakery, grills, desserts, coffee, tea, and cold drinks." },
      { property: "og:image", content: logoImg },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: FullMenuPage,
});

interface MenuDisplayGroupData {
  definition: MenuCategoryGroup;
  items: MenuItem[];
}

const categoryMap = new Map(CATEGORIES.map((category) => [category.id, category]));
const itemCategoryIds = new Set(ITEMS.map((item) => item.category));
const MENU_DISPLAY_GROUPS = REFERENCE_MENU_GROUPS.filter((group) =>
  group.categoryIds.some((categoryId) => itemCategoryIds.has(categoryId)),
);

interface TopLevelMenuNavEntry {
  group: MenuCategoryGroup;
  label: MenuCategoryGroup["shortName"];
}

const TOP_LEVEL_MENU_NAV_GROUPS: TopLevelMenuNavEntry[] = MENU_DISPLAY_GROUPS.map((group) => ({
  group,
  label: group.shortName,
}));

function getMenuControlsOffset(extra = 16) {
  const controls = document.querySelector<HTMLElement>(".full-menu-controls");
  if (!controls) return 132;

  const topValue = Number.parseFloat(window.getComputedStyle(controls).top);
  const stickyTop = Number.isFinite(topValue) ? topValue : 0;
  const rect = controls.getBoundingClientRect();
  const controlsBottom = rect.top <= stickyTop + 1 ? rect.bottom : stickyTop + controls.offsetHeight;

  return controlsBottom + extra;
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
  const { t } = useI18n();

  return (
    <section className="full-menu-hero">
      <img
        src={heroImg}
        alt=""
        width={1920}
        height={1280}
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
      <div className="full-menu-hero-overlay" />
      <motion.div
        className="full-menu-hero-content"
        variants={staggerChildren}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="section-kicker" variants={fadeUp}>
          <Utensils className="h-4 w-4" />
          <span>{t("menu_page_eyebrow")}</span>
        </motion.p>
        <motion.h1 variants={fadeUp}>{t("full_menu_title")}</motion.h1>
        <motion.p variants={fadeUp}>{t("full_menu_body")}</motion.p>
        <motion.a href="#menu-categories" className="menu-hero-cta" variants={fadeUp}>
          {t("exploreFullMenu")}
          <ArrowUpRight className="h-4 w-4" />
        </motion.a>
      </motion.div>
    </section>
  );
}

function MenuExplorer() {
  const { locale, t, tx } = useI18n();
  const categoryStripRef = useRef<HTMLElement | null>(null);
  const [activeGroup, setActiveGroup] = useState<string>(
    TOP_LEVEL_MENU_NAV_GROUPS[0]?.group.id ?? "offers",
  );
  const displayGroups = useMemo<MenuDisplayGroupData[]>(() => {
    return MENU_DISPLAY_GROUPS.map((definition) => {
      const items = uniqueItems(
        ITEMS.filter((item) => definition.categoryIds.includes(item.category)),
      );

      return { definition, items };
    }).filter((group) => group.items.length > 0);
  }, []);

  const scrollToGroup = useCallback((groupId: string) => {
    setActiveGroup((current) => (current === groupId ? current : groupId));
    const group = document.getElementById(`group-${groupId}`);
    if (!group) return;

    const stickyOffset = getMenuControlsOffset(14);
    const top = group.getBoundingClientRect().top + window.scrollY - stickyOffset;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  }, []);

  useEffect(() => {
    const sections = displayGroups
      .map((group) => ({
        id: group.definition.id,
        node: document.getElementById(`group-${group.definition.id}`),
      }))
      .filter((entry): entry is { id: string; node: HTMLElement } => Boolean(entry.node));
    if (!sections.length) return;

    let frame = 0;
    let stickyOffset = getMenuControlsOffset(140);

    const updateActiveGroup = () => {
      frame = 0;
      const threshold = window.scrollY + stickyOffset;
      const firstGroup = sections[0]?.id;
      let nextGroup = firstGroup;

      for (const section of sections) {
        if (section.node.offsetTop <= threshold) {
          nextGroup = section.id;
        } else {
          break;
        }
      }

      if (nextGroup) {
        setActiveGroup((current) => (current === nextGroup ? current : nextGroup));
      }
    };

    const scheduleUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateActiveGroup);
    };

    const refreshMeasurements = () => {
      stickyOffset = getMenuControlsOffset(140);
      scheduleUpdate();
    };

    updateActiveGroup();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", refreshMeasurements);
    window.addEventListener("pageshow", refreshMeasurements);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", refreshMeasurements);
      window.removeEventListener("pageshow", refreshMeasurements);
    };
  }, [displayGroups]);

  useEffect(() => {
    const strip = categoryStripRef.current;
    if (!strip) return;

    const activePill = strip.querySelector<HTMLElement>(`[data-group-pill="${activeGroup}"]`);
    if (!activePill) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (window.matchMedia("(max-width: 767px)").matches) {
      const stripRect = strip.getBoundingClientRect();
      const pillRect = activePill.getBoundingClientRect();
      const edgePadding = 16;
      let delta = 0;

      if (pillRect.left < stripRect.left + edgePadding) {
        delta = pillRect.left - stripRect.left - edgePadding;
      } else if (pillRect.right > stripRect.right - edgePadding) {
        delta = pillRect.right - stripRect.right + edgePadding;
      }

      if (Math.abs(delta) > 1) {
        strip.scrollBy({
          left: delta,
          behavior: reduceMotion ? "auto" : "smooth",
        });
      }
      return;
    }

    activePill.scrollIntoView({
      block: "nearest",
      inline: "nearest",
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }, [activeGroup]);

  return (
    <section className="full-menu-explorer">
      <div className="mobile-menu-heading">
        <h1>{t("full_menu_title")}</h1>
        <p>{t("full_menu_body")}</p>
      </div>

      <div id="menu-categories" className="full-menu-controls">
        <div className="section-wrap controls-wrap">
          <nav
            ref={categoryStripRef}
            className="menu-category-strip menu-quick-jump no-scrollbar"
            aria-label="Menu quick jump"
            dir={locale === "ar" ? "rtl" : "ltr"}
          >
            {TOP_LEVEL_MENU_NAV_GROUPS.map(({ group, label }) => (
              <a
                key={group.id}
                href={`#group-${group.id}`}
                onClick={(event) => {
                  event.preventDefault();
                  scrollToGroup(group.id);
                }}
                className={activeGroup === group.id ? "category-pill is-active" : "category-pill"}
                aria-current={activeGroup === group.id ? "true" : undefined}
                data-group-pill={group.id}
              >
                <QuickJumpIcon group={group} />
                <span>{tx(label)}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="section-wrap full-menu-wrap">
        <div className="full-menu-groups grouped-menu-groups">
          {displayGroups.map((group) => (
            <MenuDisplayGroup key={group.definition.id} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickJumpIcon({ group }: { group: MenuCategoryGroup }) {
  const category = categoryMap.get(group.categoryIds[0] ?? "");
  return category ? <CategoryGlyph category={category} /> : <Sparkles className="h-4 w-4" />;
}

const MenuDisplayGroup = memo(function MenuDisplayGroup({
  group,
}: {
  group: MenuDisplayGroupData;
}) {
  const { t, tx } = useI18n();

  return (
    <section
      id={`group-${group.definition.id}`}
      data-menu-group={group.definition.id}
      className={`menu-display-group menu-display-group-${group.definition.id}`}
    >
      <div className="menu-group-heading">
        <p className="section-kicker">
          <QuickJumpIcon group={group.definition} />
          <span>{tx(group.definition.shortName)}</span>
        </p>
        <h2>{tx(group.definition.name)}</h2>
        <p>{tx(group.definition.blurb)}</p>
        <div className="menu-group-meta">
          <span>
            {group.items.length} {t("menuCount")}
          </span>
        </div>
        <span className="menu-group-divider" aria-hidden="true" />
      </div>

      <div className="full-menu-grid">
        {group.items.map((item) => {
          const category = categoryMap.get(item.category);
          return category ? (
            <MenuCard key={item.id} item={item} category={category} motionEnabled={false} />
          ) : null;
        })}
      </div>
    </section>
  );
});

function uniqueItems(items: MenuItem[]) {
  const seen = new Set<string>();
  return items.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}
