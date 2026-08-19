import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  Beef,
  CakeSlice,
  Coffee,
  CookingPot,
  Croissant,
  CupSoda,
  Egg,
  GlassWater,
  HandPlatter,
  Leaf,
  ListFilter,
  Milk,
  Pizza,
  Salad,
  Smile,
  Soup,
  Sparkles,
  UtensilsCrossed,
  Wheat,
  X,
  type LucideIcon,
} from "lucide-react";
import { memo, useCallback, useEffect, useRef, useState, type CSSProperties } from "react";

import { AsyaShell, MenuCard, localizeMenuText } from "@/components/asya/primitives";
import { MobileMenu35 } from "@/components/mobile35/MobileMenu35";
import { useMobilePresentation } from "@/components/mobile35/useMobilePresentation";
import { CATEGORIES, ITEMS, type MenuCategoryGroup, type MenuItem } from "@/data/menu";
import { REFERENCE_MENU_GROUPS } from "@/data/reference-menu-groups";
import { useI18n } from "@/lib/i18n";
import { localizeMenuSectionHeading } from "@/lib/menu-presentation";

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
const MENU_DISPLAY_DATA: MenuDisplayGroupData[] = MENU_DISPLAY_GROUPS.map((definition) => {
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

const MENU_GROUP_ICONS: Partial<Record<string, LucideIcon>> = {
  "19e11b5f-abcd-4fa6-aa29-e937ffe65d00": Sparkles,
  "61e69fe8-3255-49c0-ad94-517a04184cd5": HandPlatter,
  "3b01083f-53db-4932-9716-4e4d8c6265a6": Smile,
  "e74e388c-048d-47e4-afec-acf25fac4650": Egg,
  "cf0cfebf-b9de-4221-85e6-9513ddd57809": UtensilsCrossed,
  "1290e96c-f491-4a64-8e9e-61f0df6a85c7": CookingPot,
  "59ee4ca2-bb09-4a86-981b-fd40460331ea": Croissant,
  "641057a2-0237-4c4b-ab55-bf923ae06cc8": Wheat,
  "c0a5b81c-a849-43c6-994d-e4a41c842182": Soup,
  "81d3c1d4-b82c-4ea3-8a9d-881977f47761": Salad,
  "884b790b-3b65-46a2-9be5-2ef78ce53146": Pizza,
  "a6c1ce59-bed8-4049-b4c5-c1713025ce88": Beef,
  "8c4ad6c8-a1ea-446d-9f0e-3900fd39609d": CakeSlice,
  "8fc09a90-b4db-4681-8506-f430b7c1360d": Coffee,
  "503260fe-058c-4b7a-9dac-6035eb79d781": CupSoda,
  "05d02beb-e1f6-4908-9b12-e2b69b1fafc1": Coffee,
  "927fc8d2-117e-44b9-8ab5-08522f536d0f": Sparkles,
  "5c90c4d7-8c7b-4c07-86c0-531eea82ef0a": Leaf,
  "99cd0bc2-d9cc-4ae5-be3a-ff6316b646b9": CupSoda,
  "cafb1cd7-1c37-430f-80a6-48cd5f213c4a": GlassWater,
  "634c84dd-5cf6-4e20-8270-3e2fbd61e850": Milk,
};

function FullMenuPage() {
  const isMobile = useMobilePresentation();

  return (
    <AsyaShell current="menu">
      {isMobile ? (
        <MobileMenu35 groups={MENU_DISPLAY_DATA} categoryMap={categoryMap} />
      ) : (
        <main id="menu-top" className="phase3-menu-page">
          <MenuHero />
          <MenuExplorer />
        </main>
      )}
    </AsyaShell>
  );
}

function MenuHero() {
  const { locale } = useI18n();
  const copy =
    locale === "ar"
      ? {
          eyebrow: "منيو آسيا جورميه",
          title: "كل مائدة تبدأ باختيار",
          body: "تصفح المنيو الرسمي كاملًا، وانتقل بين أطباق الفطور، المخبوزات، المشويات، الحلويات والمشروبات.",
          action: "ابدأ الاستكشاف",
          categories: "قسمًا",
          dishes: "طبقًا",
          imageAlt: "مائدة تركية من أطباق آسيا جورميه",
        }
      : {
          eyebrow: "Asya’s Gourmet Menu",
          title: "Every Table Begins with a Choice",
          body: "Explore the complete official menu across breakfast, bakery, grills, desserts, and drinks.",
          action: "Start Exploring",
          categories: "Categories",
          dishes: "Dishes",
          imageAlt: "A Turkish table from Asya's Gourmet",
        };

  return (
    <section
      className="phase3-menu-hero"
      aria-labelledby="phase3-menu-title"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <figure>
        <img src={heroImg} alt={copy.imageAlt} width={1600} height={1067} decoding="async" />
        <span aria-hidden="true" />
      </figure>
      <div className="phase3-menu-hero-copy">
        <p>{copy.eyebrow}</p>
        <h1 id="phase3-menu-title">{copy.title}</h1>
        <span>{copy.body}</span>
        <div className="phase3-menu-facts" aria-label={copy.eyebrow}>
          <strong>
            {MENU_DISPLAY_GROUPS.length}
            <small>{copy.categories}</small>
          </strong>
          <strong>
            {ITEMS.length}
            <small>{copy.dishes}</small>
          </strong>
        </div>
        <a href="#menu-index" className="phase3-button phase3-button-light">
          {copy.action}
          <ArrowDown aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

function MenuExplorer() {
  const { locale } = useI18n();
  const stripRef = useRef<HTMLElement | null>(null);
  const clickedGroupRef = useRef(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState(MENU_DISPLAY_GROUPS[0]?.id ?? "");
  const activeGroupRef = useRef(activeGroup);
  const copy =
    locale === "ar"
      ? {
          title: "اكتشف المنيو",
          body: "اختر قسمًا للانتقال إليه، أو مرّر لتكتشف الأطباق بالترتيب.",
          all: "كل الأقسام",
          close: "إغلاق الأقسام",
          drawerTitle: "انتقل إلى قسم",
          chapter: "الفصل",
          item: "صنف",
        }
      : {
          title: "Discover the Menu",
          body: "Choose a category to jump ahead, or scroll through every chapter in order.",
          all: "All Categories",
          close: "Close Categories",
          drawerTitle: "Jump to a Category",
          chapter: "Chapter",
          item: "Items",
        };
  const displayGroups = MENU_DISPLAY_DATA;

  const setActiveIfChanged = useCallback((groupId: string) => {
    if (!groupId || activeGroupRef.current === groupId) return;
    activeGroupRef.current = groupId;
    setActiveGroup(groupId);
  }, []);

  const scrollToGroup = useCallback(
    (groupId: string) => {
      clickedGroupRef.current = true;
      setDrawerOpen(false);
      setActiveIfChanged(groupId);

      window.requestAnimationFrame(() => {
        const group = document.getElementById(`group-${groupId}`);
        if (!group) return;
        const navOffset = window.matchMedia("(max-width: 767px)").matches ? 78 : 96;
        const alignGroup = (behavior: ScrollBehavior) => {
          const top = group.getBoundingClientRect().top + window.scrollY - navOffset;
          window.scrollTo({ top: Math.max(0, top), behavior });
        };

        alignGroup("smooth");
        window.setTimeout(() => alignGroup("smooth"), 550);
        window.setTimeout(() => alignGroup("auto"), 1500);
      });
    },
    [setActiveIfChanged],
  );

  useEffect(() => {
    const sections = displayGroups
      .map((group) => document.getElementById(`group-${group.definition.id}`))
      .filter((node): node is HTMLElement => Boolean(node));
    if (!sections.length || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (left, right) =>
              Math.abs(left.boundingClientRect.top - window.innerHeight * 0.24) -
              Math.abs(right.boundingClientRect.top - window.innerHeight * 0.24),
          )[0];
        const id = visible?.target.getAttribute("data-menu-group");
        if (id) setActiveIfChanged(id);
      },
      { rootMargin: "-18% 0px -68% 0px", threshold: [0, 0.01] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [displayGroups, setActiveIfChanged]);

  useEffect(() => {
    if (!clickedGroupRef.current) return;
    clickedGroupRef.current = false;
    const strip = stripRef.current;
    const pill = strip?.querySelector<HTMLElement>(`[data-group-pill="${activeGroup}"]`);
    pill?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  }, [activeGroup]);

  useEffect(() => {
    if (!drawerOpen) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDrawerOpen(false);
    };
    document.body.classList.add("phase3-category-drawer-open");
    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.classList.remove("phase3-category-drawer-open");
      window.removeEventListener("keydown", handleEscape);
    };
  }, [drawerOpen]);

  return (
    <section className="phase3-menu-explorer" dir={locale === "ar" ? "rtl" : "ltr"}>
      <div id="menu-index" className="phase3-menu-index">
        <header>
          <div>
            <h2>{copy.title}</h2>
            <p>{copy.body}</p>
          </div>
          <button type="button" onClick={() => setDrawerOpen(true)}>
            <ListFilter aria-hidden="true" />
            {copy.all}
          </button>
        </header>
        <nav ref={stripRef} className="phase3-category-strip" aria-label={copy.title}>
          {displayGroups.map(({ definition }) => (
            <button
              type="button"
              key={definition.id}
              className={activeGroup === definition.id ? "is-active" : ""}
              data-group-pill={definition.id}
              onClick={() => scrollToGroup(definition.id)}
              aria-current={activeGroup === definition.id ? "true" : undefined}
            >
              <MenuGroupIcon groupId={definition.id} />
              <span>{localizeMenuText(definition.shortName, locale)}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="phase3-menu-chapters">
        {displayGroups.map((group, index) => (
          <MenuDisplayGroup
            key={group.definition.id}
            group={group}
            index={index}
            chapterLabel={copy.chapter}
            itemLabel={copy.item}
          />
        ))}
      </div>

      {drawerOpen ? (
        <div
          className="phase3-category-drawer-layer"
          role="presentation"
          onPointerDown={(event) => {
            if (event.target === event.currentTarget) setDrawerOpen(false);
          }}
        >
          <section
            className="phase3-category-drawer"
            role="dialog"
            aria-modal="true"
            aria-label={copy.drawerTitle}
          >
            <header>
              <h2>{copy.drawerTitle}</h2>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                aria-label={copy.close}
                autoFocus
              >
                <X aria-hidden="true" />
              </button>
            </header>
            <div>
              {displayGroups.map(({ definition, items }, index) => (
                <button
                  type="button"
                  key={definition.id}
                  onClick={() => scrollToGroup(definition.id)}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <MenuGroupIcon groupId={definition.id} />
                  <strong>{localizeMenuText(definition.name, locale)}</strong>
                  <small>
                    {items.length} {copy.item}
                  </small>
                  <ArrowUpRight aria-hidden="true" />
                </button>
              ))}
            </div>
          </section>
        </div>
      ) : null}
    </section>
  );
}

function MenuGroupIcon({ groupId }: { groupId: string }) {
  const Icon = MENU_GROUP_ICONS[groupId];
  return Icon ? <Icon aria-hidden="true" /> : null;
}

const MenuDisplayGroup = memo(function MenuDisplayGroup({
  group,
  index,
  chapterLabel,
  itemLabel,
}: {
  group: MenuDisplayGroupData;
  index: number;
  chapterLabel: string;
  itemLabel: string;
}) {
  const { locale } = useI18n();
  const Icon = MENU_GROUP_ICONS[group.definition.id];
  const chapterNumber = String(index + 1).padStart(2, "0");
  const chapterSize = {
    "--phase3-chapter-mobile-size": `${480 + group.items.length * 150}px`,
    "--phase3-chapter-tablet-size": `${1030 + Math.ceil(Math.max(0, group.items.length - 1) / 2) * 185}px`,
    "--phase3-chapter-desktop-size": `${980 + Math.ceil(Math.max(0, group.items.length - 2) / 3) * 182}px`,
  } as CSSProperties;

  return (
    <section
      id={`group-${group.definition.id}`}
      data-menu-group={group.definition.id}
      data-tone={index % 4}
      className="phase3-menu-chapter"
      style={chapterSize}
    >
      <header className="phase3-chapter-heading">
        <div className="phase3-chapter-meta">
          <span>
            {chapterLabel} {chapterNumber}
          </span>
          <span>
            {group.items.length} {itemLabel}
          </span>
        </div>
        {Icon ? (
          <span className="phase3-chapter-icon">
            <Icon aria-hidden="true" />
          </span>
        ) : null}
        <h2>{localizeMenuSectionHeading(group.definition.name, locale)}</h2>
        <p>{localizeMenuText(group.definition.blurb, locale)}</p>
        <span className="phase3-chapter-line" aria-hidden="true" />
      </header>

      <div className="phase3-product-grid">
        {group.items.map((item, itemIndex) => {
          const assignment = item.categoryAssignments.find((entry) =>
            group.definition.categoryIds.includes(entry.categoryId),
          );
          const category = categoryMap.get(assignment?.categoryId ?? item.category);
          return category ? (
            <MenuCard
              key={item.id}
              item={item}
              category={category}
              variant={itemIndex === 0 ? "wide" : "menu"}
              motionEnabled={false}
            />
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
