import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowLeft, ArrowRight, ListFilter, X } from "lucide-react";
import { memo, useCallback, useEffect, useRef, useState } from "react";

import { AsyaShell, MenuCard, localizeMenuText } from "@/components/asya/primitives";
import { PresentationMenuIcon } from "@/components/menu/PresentationMenuIcon";
import { RecentlyViewedRail, SmartMenuSearch } from "@/components/menu/SmartMenuTools";
import { MobileMenuV2 } from "@/components/mobilev2/MobileMenuV2";
import { useMobilePresentation } from "@/components/mobile35/useMobilePresentation";
import { ITEMS } from "@/data/menu";
import { useI18n } from "@/lib/i18n";
import {
  formatPresentationCategoryCount,
  formatPresentationItemCount,
} from "@/lib/menu-presentation";
import {
  PRESENTATION_MENU,
  presentationCategoryTargetId,
  presentationGroupTargetId,
  resolveLegacyMenuTarget,
  type PresentationMenuCategory,
  type PresentationMenuGroup,
} from "@/lib/menu-taxonomy";
import {
  centerMenuRailItem,
  runWhenMenuScrollUnlocked,
  scrollClickedMenuTargetIntoView,
} from "@/lib/menu-scroll";

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

function FullMenuPage() {
  const isMobile = useMobilePresentation();

  return (
    <AsyaShell current="menu">
      {isMobile ? (
        <MobileMenuV2 groups={PRESENTATION_MENU} />
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
          body: "تصفح المنيو الرسمي كاملًا، وانتقل بين أطباق الفطور، والمخبوزات، والمشويات، والحلويات، والمشروبات.",
          action: "ابدأ الاستكشاف",
          categories: "أقسام رئيسية",
          dishes: "طبقًا",
          imageAlt: "مائدة تركية من أطباق آسيا جورميه",
        }
      : {
          eyebrow: "Asya’s Gourmet Menu",
          title: "Every Table Begins with a Choice",
          body: "Explore the complete official menu across breakfast, bakery, grills, desserts, and drinks.",
          action: "Start Exploring",
          categories: "Main Sections",
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
            {PRESENTATION_MENU.length}
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
  const pendingTargetRef = useRef<string | null>(null);
  const scrollCleanupRef = useRef<(() => void) | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerGroupId, setDrawerGroupId] = useState<string | null>(null);
  const [activeGroupId, setActiveGroupId] = useState(PRESENTATION_MENU[0]?.id ?? "");
  const [activeCategoryId, setActiveCategoryId] = useState(
    PRESENTATION_MENU[0]?.categories[0]?.id ?? "",
  );
  const activeGroupRef = useRef(activeGroupId);
  const activeCategoryRef = useRef(activeCategoryId);
  const copy =
    locale === "ar"
      ? {
          title: "اكتشف المنيو",
          body: "اختر قسمًا رئيسيًا، ثم انتقل مباشرة إلى القسم الفرعي الذي تريده.",
          all: "كل الأقسام",
          close: "إغلاق الأقسام",
          back: "العودة إلى الأقسام الرئيسية",
          drawerTitle: "اختر قسمًا",
          section: "القسم",
          item: "صنف",
          subcategories: "أقسام فرعية",
        }
      : {
          title: "Discover the Menu",
          body: "Choose a main section, then jump directly to the subcategory you want.",
          all: "All Sections",
          close: "Close Sections",
          back: "Back to Main Sections",
          drawerTitle: "Choose a Section",
          section: "Section",
          item: "Items",
          subcategories: "Subcategories",
        };

  const setActiveIfChanged = useCallback((groupId: string, categoryId?: string | null) => {
    if (groupId && activeGroupRef.current !== groupId) {
      activeGroupRef.current = groupId;
      setActiveGroupId(groupId);
    }
    if (categoryId !== undefined && activeCategoryRef.current !== (categoryId ?? "")) {
      activeCategoryRef.current = categoryId ?? "";
      setActiveCategoryId(categoryId ?? "");
    }
  }, []);

  const scrollTargetIntoView = useCallback(
    (targetId: string, groupId: string, requestedBehavior?: ScrollBehavior) => {
      scrollCleanupRef.current?.();
      scrollCleanupRef.current = runWhenMenuScrollUnlocked(() => {
        const target = document.getElementById(targetId);
        if (!target) return;
        const behavior =
          requestedBehavior ??
          (window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth");
        const stopStabilizing = scrollClickedMenuTargetIntoView(target, behavior);
        window.history.replaceState(null, "", `#${targetId}`);
        const strip = stripRef.current;
        centerMenuRailItem(
          strip,
          strip?.querySelector<HTMLElement>(`[data-group-pill="${groupId}"]`) ?? null,
        );
        return stopStabilizing;
      });
    },
    [],
  );

  const jumpToTarget = useCallback(
    (targetId: string, groupId: string, categoryId?: string | null) => {
      setActiveIfChanged(groupId, categoryId);
      if (drawerOpen) {
        pendingTargetRef.current = targetId;
        setDrawerOpen(false);
        return;
      }
      scrollTargetIntoView(targetId, groupId);
    },
    [drawerOpen, scrollTargetIntoView, setActiveIfChanged],
  );

  useEffect(() => {
    if (drawerOpen || !pendingTargetRef.current) return;
    const targetId = pendingTargetRef.current;
    pendingTargetRef.current = null;
    const group = PRESENTATION_MENU.find(
      (entry) =>
        presentationGroupTargetId(entry.id) === targetId ||
        entry.categories.some((category) => presentationCategoryTargetId(category.id) === targetId),
    );
    if (!group) return;
    scrollTargetIntoView(targetId, group.id);
  }, [drawerOpen, scrollTargetIntoView]);

  useEffect(() => {
    const sections = PRESENTATION_MENU.flatMap((group) =>
      group.categories
        .map((category) => document.getElementById(presentationCategoryTargetId(category.id)))
        .filter((node): node is HTMLElement => Boolean(node)),
    );
    if (!sections.length || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => left.boundingClientRect.top - right.boundingClientRect.top)[0];
        if (!(visible?.target instanceof HTMLElement)) return;
        setActiveIfChanged(
          visible.target.dataset.presentationGroup ?? "",
          visible.target.dataset.presentationCategory,
        );
      },
      { rootMargin: "-18% 0px -68% 0px", threshold: 0.01 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [setActiveIfChanged]);

  useEffect(() => {
    const alignHashTarget = (behavior: ScrollBehavior) => {
      const targetId = resolveLegacyMenuTarget(window.location.hash);
      if (!targetId) return;
      const group = PRESENTATION_MENU.find(
        (entry) =>
          presentationGroupTargetId(entry.id) === targetId ||
          entry.categories.some(
            (category) => presentationCategoryTargetId(category.id) === targetId,
          ),
      );
      const category = group?.categories.find(
        (entry) => presentationCategoryTargetId(entry.id) === targetId,
      );
      if (!group) return;
      setActiveIfChanged(group.id, category?.id ?? null);
      scrollTargetIntoView(targetId, group.id, behavior);
    };
    const handleHashTarget = () => alignHashTarget("smooth");

    alignHashTarget("auto");
    window.addEventListener("hashchange", handleHashTarget);
    return () => {
      window.removeEventListener("hashchange", handleHashTarget);
    };
  }, [scrollTargetIntoView, setActiveIfChanged]);

  useEffect(() => () => scrollCleanupRef.current?.(), []);

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

  const selectedDrawerGroup = PRESENTATION_MENU.find((group) => group.id === drawerGroupId);

  return (
    <section className="phase3-menu-explorer" dir={locale === "ar" ? "rtl" : "ltr"}>
      <div className="experience-menu-discovery">
        <SmartMenuSearch />
        <RecentlyViewedRail />
      </div>
      <div id="menu-index" className="phase3-menu-index">
        <header>
          <div>
            <h2>{copy.title}</h2>
            <p>{copy.body}</p>
          </div>
          <button
            type="button"
            onClick={() => {
              setDrawerGroupId(null);
              setDrawerOpen(true);
            }}
          >
            <ListFilter aria-hidden="true" />
            {copy.all}
          </button>
        </header>
        <nav ref={stripRef} className="phase3-category-strip" aria-label={copy.title}>
          {PRESENTATION_MENU.map((group) => (
            <button
              type="button"
              key={group.id}
              className={activeGroupId === group.id ? "is-active" : ""}
              data-group-pill={group.id}
              onClick={() => jumpToTarget(presentationGroupTargetId(group.id), group.id, null)}
              aria-current={activeGroupId === group.id ? "true" : undefined}
            >
              <PresentationMenuIcon id={group.id} />
              <span>{localizeMenuText(group.name, locale)}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="phase3-menu-chapters">
        {PRESENTATION_MENU.map((group, index) => (
          <MenuDisplayGroup
            key={group.id}
            group={group}
            index={index}
            sectionLabel={copy.section}
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
            className="phase3-category-drawer phase3-category-drawer-v2"
            role="dialog"
            aria-modal="true"
            aria-labelledby="phase3-category-drawer-title"
          >
            <header>
              <div>
                <small>{copy.all}</small>
                <h2 id="phase3-category-drawer-title">
                  {selectedDrawerGroup
                    ? localizeMenuText(selectedDrawerGroup.name, locale)
                    : copy.drawerTitle}
                </h2>
              </div>
              <span className="phase3-category-drawer-actions">
                {selectedDrawerGroup ? (
                  <button
                    type="button"
                    onClick={() => setDrawerGroupId(null)}
                    aria-label={copy.back}
                  >
                    {locale === "ar" ? (
                      <ArrowRight aria-hidden="true" />
                    ) : (
                      <ArrowLeft aria-hidden="true" />
                    )}
                  </button>
                ) : null}
                <button
                  type="button"
                  onClick={() => setDrawerOpen(false)}
                  aria-label={copy.close}
                  autoFocus
                >
                  <X aria-hidden="true" />
                </button>
              </span>
            </header>

            {selectedDrawerGroup ? (
              <div className="phase3-category-detail">
                <nav className="phase3-category-group-switcher" aria-label={copy.all}>
                  {PRESENTATION_MENU.map((group) => (
                    <button
                      type="button"
                      key={group.id}
                      className={selectedDrawerGroup.id === group.id ? "is-active" : ""}
                      onClick={() => setDrawerGroupId(group.id)}
                    >
                      {localizeMenuText(group.name, locale)}
                    </button>
                  ))}
                </nav>
                <div className="phase3-category-subcategories">
                  <button
                    type="button"
                    className={
                      activeGroupId === selectedDrawerGroup.id && !activeCategoryId
                        ? "is-active"
                        : ""
                    }
                    onClick={() =>
                      jumpToTarget(
                        presentationGroupTargetId(selectedDrawerGroup.id),
                        selectedDrawerGroup.id,
                        null,
                      )
                    }
                  >
                    <span className="phase3-category-drawer-icon">
                      <PresentationMenuIcon id={selectedDrawerGroup.id} />
                    </span>
                    <span>
                      <strong>{localizeMenuText(selectedDrawerGroup.allLabel, locale)}</strong>
                      <small>
                        {formatPresentationItemCount(selectedDrawerGroup.itemCount, locale)}
                      </small>
                    </span>
                  </button>
                  {selectedDrawerGroup.categories.map((category) => (
                    <button
                      type="button"
                      key={category.id}
                      className={activeCategoryId === category.id ? "is-active" : ""}
                      onClick={() =>
                        jumpToTarget(
                          presentationCategoryTargetId(category.id),
                          selectedDrawerGroup.id,
                          category.id,
                        )
                      }
                    >
                      <span className="phase3-category-drawer-icon">
                        <PresentationMenuIcon id={category.id} />
                      </span>
                      <span>
                        <strong>{localizeMenuText(category.name, locale)}</strong>
                        <small>{formatPresentationItemCount(category.items.length, locale)}</small>
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="phase3-category-main-groups">
                {PRESENTATION_MENU.map((group) => (
                  <button
                    type="button"
                    key={group.id}
                    className={activeGroupId === group.id ? "is-active" : ""}
                    onClick={() => setDrawerGroupId(group.id)}
                  >
                    <span className="phase3-category-drawer-icon">
                      <PresentationMenuIcon id={group.id} />
                    </span>
                    <span>
                      <strong>{localizeMenuText(group.name, locale)}</strong>
                      <small>
                        {formatPresentationCategoryCount(group.categories.length, locale)}
                      </small>
                    </span>
                    {locale === "ar" ? (
                      <ArrowLeft aria-hidden="true" />
                    ) : (
                      <ArrowRight aria-hidden="true" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </section>
        </div>
      ) : null}
    </section>
  );
}

const MenuDisplayGroup = memo(function MenuDisplayGroup({
  group,
  index,
  sectionLabel,
  itemLabel,
}: {
  group: PresentationMenuGroup;
  index: number;
  sectionLabel: string;
  itemLabel: string;
}) {
  const { locale } = useI18n();

  return (
    <section
      id={presentationGroupTargetId(group.id)}
      data-presentation-group={group.id}
      className="phase3-presentation-group"
      aria-labelledby={`phase3-presentation-group-title-${group.id}`}
    >
      <header className="phase3-presentation-group-heading">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <i>
          <PresentationMenuIcon id={group.id} />
        </i>
        <h2 id={`phase3-presentation-group-title-${group.id}`}>
          {localizeMenuText(group.name, locale)}
        </h2>
        <p>{localizeMenuText(group.description, locale)}</p>
      </header>
      {group.categories.map((category, categoryIndex) => (
        <MenuDisplayCategory
          key={category.id}
          category={category}
          categoryIndex={categoryIndex}
          groupId={group.id}
          tone={(index + categoryIndex) % 4}
          sectionLabel={sectionLabel}
          itemLabel={itemLabel}
        />
      ))}
    </section>
  );
});

const MenuDisplayCategory = memo(function MenuDisplayCategory({
  category,
  categoryIndex,
  groupId,
  tone,
  sectionLabel,
  itemLabel,
}: {
  category: PresentationMenuCategory;
  categoryIndex: number;
  groupId: string;
  tone: number;
  sectionLabel: string;
  itemLabel: string;
}) {
  const { locale } = useI18n();
  const sectionNumber = String(categoryIndex + 1).padStart(2, "0");
  return (
    <section
      id={presentationCategoryTargetId(category.id)}
      data-presentation-group={groupId}
      data-presentation-category={category.id}
      data-tone={tone}
      className="phase3-menu-chapter"
      aria-labelledby={`phase3-presentation-category-title-${category.id}`}
    >
      <header className="phase3-chapter-heading">
        <div className="phase3-chapter-meta">
          <span>
            {sectionLabel} {sectionNumber}
          </span>
          <span>{formatPresentationItemCount(category.items.length, locale)}</span>
        </div>
        <span className="phase3-chapter-icon">
          <PresentationMenuIcon id={category.id} />
        </span>
        <h3 id={`phase3-presentation-category-title-${category.id}`}>
          {localizeMenuText(category.name, locale)}
        </h3>
        <p>{localizeMenuText(category.description, locale)}</p>
        <span className="phase3-chapter-line" aria-hidden="true" />
      </header>

      <div className="phase3-product-grid">
        {category.items.map(({ item, sourceCategory }, itemIndex) => (
          <MenuCard
            key={item.id}
            item={item}
            category={sourceCategory}
            variant={itemIndex === 0 ? "wide" : "menu"}
            motionEnabled={false}
          />
        ))}
      </div>
    </section>
  );
});
