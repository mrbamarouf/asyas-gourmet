import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Utensils } from "lucide-react";
import { memo, useCallback, useMemo, useState } from "react";

import {
  CATEGORIES,
  CATEGORY_ORDER,
  ITEMS,
  type MenuCategory,
  type MenuCategoryGroup,
  type MenuGroupId,
  type MenuItem,
} from "@/data/menu";
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
      { title: "Asya's Gourmet | Full Menu" },
      {
        name: "description",
        content:
          "The complete Asya's Gourmet menu with official sections, prices, descriptions, and product imagery.",
      },
      { property: "og:title", content: "Asya's Gourmet | Full Menu" },
      { property: "og:description", content: "Complete official menu for Asya's Gourmet." },
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
const TOP_LEVEL_MENU_NAV_IDS = [
  "offers",
  "breakfast",
  "appetizers",
  "mains",
  "grills",
  "desserts",
  "drinks",
] as const satisfies readonly MenuGroupId[];

type FinalMenuGroupId = (typeof TOP_LEVEL_MENU_NAV_IDS)[number];

interface TopLevelMenuNavEntry {
  group: MenuCategoryGroup;
  label: MenuCategoryGroup["shortName"];
}

const FINAL_MENU_GROUP_COPY: Record<
  FinalMenuGroupId,
  Pick<MenuCategoryGroup, "name" | "shortName" | "blurb">
> = {
  offers: {
    name: { ar: "العروض", en: "Offers" },
    shortName: { ar: "العروض", en: "Offers" },
    blurb: {
      ar: "سفرات وباقات مشاركة للعائلة والأصدقاء.",
      en: "Sharing spreads and packages for family and friends.",
    },
  },
  breakfast: {
    name: { ar: "الفطور", en: "Breakfast" },
    shortName: { ar: "الفطور", en: "Breakfast" },
    blurb: {
      ar: "بيض، أطباق صباحية، ومخبوزات تركية دافئة.",
      en: "Eggs, morning plates, and warm Turkish bakery choices.",
    },
  },
  appetizers: {
    name: { ar: "المقبلات", en: "Appetizers" },
    shortName: { ar: "المقبلات", en: "Appetizers" },
    blurb: {
      ar: "سلطات، مقبلات، شوربات، وأطباق جانبية قبل الطبق الرئيسي.",
      en: "Salads, starters, soups, and sides before the main plate.",
    },
  },
  mains: {
    name: { ar: "الرئيسية", en: "Main Courses" },
    shortName: { ar: "الرئيسية", en: "Main Courses" },
    blurb: {
      ar: "أطباق غداء وعشاء تركية وغنية.",
      en: "Generous Turkish lunch and dinner plates.",
    },
  },
  grills: {
    name: { ar: "المشويات", en: "Grills" },
    shortName: { ar: "المشويات", en: "Grills" },
    blurb: {
      ar: "كباب، شيش، أطباق مشوية، وطواجن ساخنة.",
      en: "Kebabs, shish, grilled plates, and hot casseroles.",
    },
  },
  desserts: {
    name: { ar: "الحلويات", en: "Desserts" },
    shortName: { ar: "الحلويات", en: "Desserts" },
    blurb: {
      ar: "بقلاوة، كنافة، كيك، وحلويات تركية.",
      en: "Baklava, kunafa, cakes, and Turkish sweets.",
    },
  },
  drinks: {
    name: { ar: "المشروبات", en: "Drinks" },
    shortName: { ar: "المشروبات", en: "Drinks" },
    blurb: {
      ar: "شاي، قهوة، عصائر، مشروبات باردة، وخيارات الشيشة.",
      en: "Tea, coffee, juices, cold drinks, and shisha options.",
    },
  },
};

const FINAL_MENU_GROUP_MERGES: Record<FinalMenuGroupId, MenuGroupId[]> = {
  offers: ["offers"],
  breakfast: ["breakfast", "bakery"],
  appetizers: ["appetizers", "soups", "sides"],
  mains: ["mains"],
  grills: ["grills"],
  desserts: ["desserts"],
  drinks: ["drinks", "shisha"],
};

const FINAL_MENU_GROUPS = TOP_LEVEL_MENU_NAV_IDS.reduce<MenuCategoryGroup[]>((entries, id) => {
  const sourceGroup = CATEGORY_ORDER.find((candidate) => candidate.id === id);
  const copy = FINAL_MENU_GROUP_COPY[id];
  if (!sourceGroup || !copy) return entries;

  const categoryIds = FINAL_MENU_GROUP_MERGES[id].flatMap(
    (groupId) => CATEGORY_ORDER.find((candidate) => candidate.id === groupId)?.categoryIds ?? [],
  );

  entries.push({
    ...sourceGroup,
    ...copy,
    categoryIds,
    quickJump: true,
    featuredOnly: false,
  });
  return entries;
}, []);

const TOP_LEVEL_MENU_NAV_GROUPS: TopLevelMenuNavEntry[] = FINAL_MENU_GROUPS.map((group) => ({
  group,
  label: group.shortName,
}));

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
  const { t, tx } = useI18n();
  const [activeGroup, setActiveGroup] = useState<FinalMenuGroupId>(
    TOP_LEVEL_MENU_NAV_GROUPS[0]?.group.id ?? "offers",
  );
  const displayGroups = useMemo<MenuDisplayGroupData[]>(() => {
    return FINAL_MENU_GROUPS.map((definition) => {
      const items = uniqueItems(
        ITEMS.filter((item) => definition.categoryIds.includes(item.category)),
      );

      return { definition, items };
    }).filter((group) => group.items.length > 0);
  }, []);

  const scrollToGroup = useCallback((groupId: FinalMenuGroupId) => {
    setActiveGroup((current) => (current === groupId ? current : groupId));
    const group = document.getElementById(`group-${groupId}`);
    if (!group) return;

    const controls = document.querySelector<HTMLElement>(".full-menu-controls");
    const stickyOffset = controls ? controls.offsetHeight + 28 : 120;
    const top = group.getBoundingClientRect().top + window.scrollY - stickyOffset;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  }, []);

  return (
    <section className="full-menu-explorer">
      <div className="mobile-menu-heading">
        <h1>{t("full_menu_title")}</h1>
        <p>{t("full_menu_body")}</p>
      </div>

      <div id="menu-categories" className="full-menu-controls">
        <div className="section-wrap controls-wrap">
          <nav
            className="menu-category-strip menu-quick-jump no-scrollbar"
            aria-label="Menu quick jump"
          >
            {TOP_LEVEL_MENU_NAV_GROUPS.map(({ group, label }) => (
              <button
                key={group.id}
                type="button"
                onClick={() => scrollToGroup(group.id)}
                className={activeGroup === group.id ? "category-pill is-active" : "category-pill"}
                aria-pressed={activeGroup === group.id}
                data-group-pill={group.id}
              >
                <QuickJumpIcon group={group} />
                <span>{tx(label)}</span>
              </button>
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
