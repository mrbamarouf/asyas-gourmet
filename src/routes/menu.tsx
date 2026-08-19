import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Beef,
  CakeSlice,
  Coffee,
  CookingPot,
  Croissant,
  CupSoda,
  Egg,
  Flame,
  GlassWater,
  HandPlatter,
  Leaf,
  Milk,
  Pizza,
  Salad,
  Soup,
  UtensilsCrossed,
  Wheat,
  type LucideIcon,
} from "lucide-react";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";

import {
  CATEGORIES,
  ITEMS,
  type MenuCategory,
  type MenuCategoryGroup,
  type MenuItem,
} from "@/data/menu";
import { REFERENCE_MENU_GROUPS } from "@/data/reference-menu-groups";
import { AsyaShell, MenuCard, localizeMenuText } from "@/components/asya/primitives";
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
      {
        property: "og:description",
        content: "Turkish breakfast, bakery, grills, desserts, coffee, tea, and cold drinks.",
      },
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
const itemCategoryIds = new Set(
  ITEMS.flatMap((item) => item.categoryAssignments.map((assignment) => assignment.categoryId)),
);
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

const MENU_GROUP_ICONS: Partial<Record<string, LucideIcon>> = {
  "19e11b5f-abcd-4fa6-aa29-e937ffe65d00": CookingPot,
  "61e69fe8-3255-49c0-ad94-517a04184cd5": HandPlatter,
  "3b01083f-53db-4932-9716-4e4d8c6265a6": UtensilsCrossed,
  "e74e388c-048d-47e4-afec-acf25fac4650": Egg,
  "cf0cfebf-b9de-4221-85e6-9513ddd57809": UtensilsCrossed,
  "1290e96c-f491-4a64-8e9e-61f0df6a85c7": CookingPot,
  "59ee4ca2-bb09-4a86-981b-fd40460331ea": Croissant,
  "641057a2-0237-4c4b-ab55-bf923ae06cc8": Wheat,
  "c0a5b81c-a849-43c6-994d-e4a41c842182": Soup,
  "81d3c1d4-b82c-4ea3-8a9d-881977f47761": Salad,
  "884b790b-3b65-46a2-9be5-2ef78ce53146": Pizza,
  "a6c1ce59-bed8-4049-b4c5-c1713025ce88": Flame,
  "8c4ad6c8-a1ea-446d-9f0e-3900fd39609d": CakeSlice,
  "7abd9b4c-6ed3-4261-a386-d1ebe1038268": GlassWater,
  "8fc09a90-b4db-4681-8506-f430b7c1360d": Coffee,
  "503260fe-058c-4b7a-9dac-6035eb79d781": GlassWater,
  "05d02beb-e1f6-4908-9b12-e2b69b1fafc1": Coffee,
  "927fc8d2-117e-44b9-8ab5-08522f536d0f": CupSoda,
  "5c90c4d7-8c7b-4c07-86c0-531eea82ef0a": Leaf,
  "99cd0bc2-d9cc-4ae5-be3a-ff6316b646b9": CupSoda,
  "cafb1cd7-1c37-430f-80a6-48cd5f213c4a": CupSoda,
  "634c84dd-5cf6-4e20-8270-3e2fbd61e850": Milk,
};

function getMenuControlsOffset(extra = 16) {
  const controls = document.querySelector<HTMLElement>(".full-menu-controls");
  if (!controls) return 132;

  const topValue = Number.parseFloat(window.getComputedStyle(controls).top);
  const stickyTop = Number.isFinite(topValue) ? topValue : 0;
  const rect = controls.getBoundingClientRect();
  const controlsBottom =
    rect.top <= stickyTop + 1 ? rect.bottom : stickyTop + controls.offsetHeight;

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
  const { locale } = useI18n();
  const copy =
    locale === "ar"
      ? {
          eyebrow: "اختيارات آسيا",
          title: "المنيو",
          body: "اكتشف أشهى الأطباق التركية، من الفطور والمقبلات إلى المشويات، الحلويات والمشروبات، مرتبة لتسهّل عليك اختيار ما يناسبك.",
          cta: "استكشف المنيو",
          imageAlt: "مائدة تركية من أطباق أسيا جورميه",
        }
      : {
          eyebrow: "Asya’s Selection",
          title: "Menu",
          body: "Explore authentic Turkish breakfast, appetizers, grills, desserts and drinks, thoughtfully organized to make choosing easy.",
          cta: "Explore Menu",
          imageAlt: "Turkish table dishes from Asya's Gourmet",
        };

  return (
    <section className="full-menu-hero menu-editorial-hero" aria-labelledby="menu-hero-title">
      <div
        className="full-menu-hero-content menu-editorial-hero-copy"
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        <p className="section-kicker">
          <span>{copy.eyebrow}</span>
        </p>
        <h1 id="menu-hero-title">{copy.title}</h1>
        <p>{copy.body}</p>
        <a href="#menu-categories" className="menu-hero-cta">
          {copy.cta}
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
      <figure className="menu-editorial-hero-media">
        <img
          src={heroImg}
          alt={copy.imageAlt}
          width={1600}
          height={1067}
          loading="lazy"
          decoding="async"
        />
      </figure>
    </section>
  );
}

function MenuExplorer() {
  const { locale, t } = useI18n();
  const categoryStripRef = useRef<HTMLElement | null>(null);
  const revealActivePillRef = useRef(false);
  const [activeGroup, setActiveGroup] = useState<string>(
    TOP_LEVEL_MENU_NAV_GROUPS[0]?.group.id ?? "offers",
  );
  const activeGroupRef = useRef(activeGroup);
  const displayGroups = useMemo<MenuDisplayGroupData[]>(() => {
    return MENU_DISPLAY_GROUPS.map((definition) => {
      const items = uniqueItems(
        ITEMS.filter((item) =>
          item.categoryAssignments.some((assignment) =>
            definition.categoryIds.includes(assignment.categoryId),
          ),
        ),
      ).sort(
        (left, right) =>
          getGroupItemOrder(left, definition) - getGroupItemOrder(right, definition) ||
          left.id.localeCompare(right.id),
      );

      return { definition, items };
    }).filter((group) => group.items.length > 0);
  }, []);

  const setActiveGroupIfChanged = useCallback((groupId: string | undefined) => {
    if (!groupId || activeGroupRef.current === groupId) return;
    activeGroupRef.current = groupId;
    setActiveGroup(groupId);
  }, []);

  const scrollToGroup = useCallback(
    (groupId: string) => {
      revealActivePillRef.current = true;
      setActiveGroupIfChanged(groupId);
      const group = document.getElementById(`group-${groupId}`);
      if (!group) return;

      const stickyOffset = getMenuControlsOffset(14);
      const top = group.getBoundingClientRect().top + window.scrollY - stickyOffset;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    },
    [setActiveGroupIfChanged],
  );

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
    let sectionTops = sections.map((section) => ({
      id: section.id,
      top: section.node.offsetTop,
    }));

    const updateActiveGroup = () => {
      frame = 0;
      const threshold = window.scrollY + stickyOffset;
      const firstGroup = sectionTops[0]?.id;
      let nextGroup = firstGroup;

      for (const section of sectionTops) {
        if (section.top <= threshold) {
          nextGroup = section.id;
        } else {
          break;
        }
      }

      setActiveGroupIfChanged(nextGroup);
    };

    const scheduleUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateActiveGroup);
    };

    const refreshMeasurements = () => {
      stickyOffset = getMenuControlsOffset(140);
      sectionTops = sections.map((section) => ({
        id: section.id,
        top: section.node.offsetTop,
      }));
      scheduleUpdate();
    };

    const desktopQuery = window.matchMedia("(min-width: 768px)");

    if (desktopQuery.matches && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver(() => scheduleUpdate(), {
        root: null,
        rootMargin: `-${Math.max(0, Math.round(stickyOffset))}px 0px -65% 0px`,
        threshold: 0,
      });

      sections.forEach((section) => observer.observe(section.node));
      updateActiveGroup();
      window.addEventListener("resize", refreshMeasurements);
      window.addEventListener("pageshow", refreshMeasurements);

      return () => {
        if (frame) {
          window.cancelAnimationFrame(frame);
        }
        observer.disconnect();
        window.removeEventListener("resize", refreshMeasurements);
        window.removeEventListener("pageshow", refreshMeasurements);
      };
    }

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
  }, [displayGroups, setActiveGroupIfChanged]);

  useEffect(() => {
    activeGroupRef.current = activeGroup;
  }, [activeGroup]);

  useEffect(() => {
    if (!revealActivePillRef.current) return;
    revealActivePillRef.current = false;

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
                <span>{localizeMenuText(label, locale)}</span>
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
  const Icon = MENU_GROUP_ICONS[group.id];
  return Icon ? <Icon className="h-4 w-4" /> : null;
}

const MenuDisplayGroup = memo(function MenuDisplayGroup({
  group,
}: {
  group: MenuDisplayGroupData;
}) {
  const { locale, t } = useI18n();
  const Icon = MENU_GROUP_ICONS[group.definition.id];

  return (
    <section
      id={`group-${group.definition.id}`}
      data-menu-group={group.definition.id}
      className={`menu-display-group menu-display-group-${group.definition.id}`}
    >
      <div className="menu-group-heading">
        {Icon ? (
          <span className="menu-group-icon" aria-hidden="true">
            <Icon className="h-4 w-4" />
          </span>
        ) : null}
        <p className="section-kicker">
          <span>{localizeMenuText(group.definition.shortName, locale)}</span>
        </p>
        <div className="menu-group-meta">
          <span>
            {group.items.length} {t("menuCount")}
          </span>
        </div>
        <h2>{localizeMenuText(group.definition.name, locale)}</h2>
        <p>{localizeMenuText(group.definition.blurb, locale)}</p>
        <span className="menu-group-divider" aria-hidden="true" />
      </div>

      <div className="full-menu-grid">
        {group.items.map((item) => {
          const assignment = item.categoryAssignments.find((entry) =>
            group.definition.categoryIds.includes(entry.categoryId),
          );
          const category = categoryMap.get(assignment?.categoryId ?? item.category);
          return category ? (
            <MenuCard key={item.id} item={item} category={category} motionEnabled={false} />
          ) : null;
        })}
      </div>
    </section>
  );
});

function getGroupItemOrder(item: MenuItem, group: MenuCategoryGroup) {
  return (
    item.categoryAssignments.find((assignment) => group.categoryIds.includes(assignment.categoryId))
      ?.order ?? Number.MAX_SAFE_INTEGER
  );
}

function uniqueItems(items: MenuItem[]) {
  const seen = new Set<string>();
  return items.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}
