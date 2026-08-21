import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  Clock3,
  HandPlatter,
  ListFilter,
  Plus,
  X,
} from "lucide-react";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";

import {
  DishImage,
  PriceTag,
  localizeMenuDescription,
  localizeMenuItemName,
  localizeMenuText,
  useItemDetail,
} from "@/components/asya/primitives";
import { PresentationMenuIcon } from "@/components/menu/PresentationMenuIcon";
import type { MenuCategory, MenuItem } from "@/data/menu";
import { useI18n } from "@/lib/i18n";
import {
  formatPresentationCategoryCount,
  formatPresentationItemCount,
  presentMenuTextForLocale,
} from "@/lib/menu-presentation";
import {
  presentationCategoryTargetId,
  presentationGroupTargetId,
  resolveLegacyMenuTarget,
  type PresentationMenuCategory,
  type PresentationMenuGroup,
} from "@/lib/menu-taxonomy";
import { centerMenuRailItem, runWhenMenuScrollUnlocked } from "@/lib/menu-scroll";

import { useTrayActionsV2, useTrayV2 } from "./TrayContextV2";

const COPY = {
  ar: {
    title: "المنيو",
    body: "تصفح جميع الأصناف، وأضف اختياراتك إلى سلّتك.",
    categories: "الأقسام",
    categoryAccess: "اختر قسمًا",
    close: "إغلاق الأقسام",
    back: "العودة إلى الأقسام الرئيسية",
    items: "أصناف",
    sections: "أقسام فرعية",
    viewDish: "عرض الطبق",
    quickAdd: "أضف إلى السلة",
    added: "تمت الإضافة",
    prep: "دقيقة",
    calories: "سعرة",
    weight: "جم",
    tray: "سلتي",
  },
  en: {
    title: "Menu",
    body: "Browse every dish and keep your selections in My Tray.",
    categories: "Sections",
    categoryAccess: "Choose a Section",
    close: "Close Sections",
    back: "Back to Main Sections",
    items: "Items",
    sections: "Subcategories",
    viewDish: "View Dish",
    quickAdd: "Add to Tray",
    added: "Added",
    prep: "min",
    calories: "kcal",
    weight: "g",
    tray: "My Tray",
  },
} as const;

export function MobileMenuV2({ groups }: { groups: PresentationMenuGroup[] }) {
  const { locale } = useI18n();
  const { totalQuantity, openTray } = useTrayV2();
  const copy = COPY[locale];
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerGroupId, setDrawerGroupId] = useState<string | null>(null);
  const [activeGroupId, setActiveGroupId] = useState(groups[0]?.id ?? "");
  const [activeCategoryId, setActiveCategoryId] = useState(groups[0]?.categories[0]?.id ?? "");
  const activeGroupRef = useRef(activeGroupId);
  const activeCategoryRef = useRef(activeCategoryId);
  const chipRailRef = useRef<HTMLDivElement>(null);
  const pendingTargetRef = useRef<string | null>(null);
  const scrollCleanupRef = useRef<(() => void) | null>(null);

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
        target.scrollIntoView({
          behavior:
            requestedBehavior ??
            (window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"),
          block: "start",
        });
        window.history.replaceState(null, "", `#${targetId}`);

        const chip = chipRailRef.current?.querySelector<HTMLElement>(
          `[data-group-id="${groupId}"]`,
        );
        centerMenuRailItem(chipRailRef.current, chip);
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
    const group = groups.find(
      (entry) =>
        presentationGroupTargetId(entry.id) === targetId ||
        entry.categories.some((category) => presentationCategoryTargetId(category.id) === targetId),
    );
    if (!group) return;
    scrollTargetIntoView(targetId, group.id);
  }, [drawerOpen, groups, scrollTargetIntoView]);

  useEffect(() => {
    const sections = groups.flatMap((group) =>
      group.categories
        .map((category) => document.getElementById(presentationCategoryTargetId(category.id)))
        .filter((section): section is HTMLElement => Boolean(section)),
    );
    if (!sections.length) return;

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
      { rootMargin: "-18% 0px -68%", threshold: 0.01 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [groups, setActiveIfChanged]);

  useEffect(() => {
    const targetId = resolveLegacyMenuTarget(window.location.hash);
    const alignHashTarget = (behavior: ScrollBehavior) => {
      const resolvedTargetId = resolveLegacyMenuTarget(window.location.hash);
      if (!resolvedTargetId) return;
      const group = groups.find(
        (entry) =>
          presentationGroupTargetId(entry.id) === resolvedTargetId ||
          entry.categories.some(
            (category) => presentationCategoryTargetId(category.id) === resolvedTargetId,
          ),
      );
      const category = group?.categories.find(
        (entry) => presentationCategoryTargetId(entry.id) === resolvedTargetId,
      );
      if (!group) return;
      setActiveIfChanged(group.id, category?.id ?? null);
      scrollTargetIntoView(resolvedTargetId, group.id, behavior);
    };
    const handleHashTarget = () => alignHashTarget("smooth");

    if (targetId) alignHashTarget("auto");
    window.addEventListener("hashchange", handleHashTarget);
    return () => {
      window.removeEventListener("hashchange", handleHashTarget);
    };
  }, [groups, scrollTargetIntoView, setActiveIfChanged]);

  useEffect(() => () => scrollCleanupRef.current?.(), []);

  useEffect(() => {
    if (!drawerOpen) return;
    document.body.classList.add("mobilev2-drawer-lock");
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDrawerOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("mobilev2-drawer-lock");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [drawerOpen]);

  const selectedDrawerGroup = groups.find((group) => group.id === drawerGroupId);

  return (
    <main className="mobilev2-menu" dir={locale === "ar" ? "rtl" : "ltr"}>
      <section className="mobilev2-menu-intro" aria-labelledby="mobilev2-menu-title">
        <div>
          <h1 id="mobilev2-menu-title">{copy.title}</h1>
          <p>{copy.body}</p>
        </div>
        <button type="button" onClick={openTray} className="mobilev2-menu-tray">
          <HandPlatter aria-hidden="true" />
          <span>{copy.tray}</span>
          {totalQuantity ? <strong>{totalQuantity}</strong> : null}
        </button>
      </section>

      <section className="mobilev2-category-access" aria-label={copy.categories}>
        <button
          type="button"
          onClick={() => {
            setDrawerGroupId(null);
            setDrawerOpen(true);
          }}
        >
          <ListFilter aria-hidden="true" />
          <span>{copy.categoryAccess}</span>
          <ChevronDown aria-hidden="true" />
        </button>
        <div ref={chipRailRef} className="mobilev2-category-rail">
          {groups.map((group) => (
            <button
              type="button"
              key={group.id}
              data-group-id={group.id}
              className={activeGroupId === group.id ? "is-active" : ""}
              onClick={() => jumpToTarget(presentationGroupTargetId(group.id), group.id, null)}
            >
              {localizeMenuText(group.name, locale)}
            </button>
          ))}
        </div>
      </section>

      <div className="mobilev2-menu-groups">
        {groups.map((group, index) => (
          <MobileMenuGroupV2 key={group.id} group={group} groupIndex={index} />
        ))}
      </div>

      {drawerOpen ? (
        <div
          className="mobilev2-category-layer"
          role="presentation"
          onMouseDown={() => setDrawerOpen(false)}
        >
          <section
            className="mobilev2-category-drawer"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobilev2-category-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <header>
              <div>
                <small>{copy.categories}</small>
                <h2 id="mobilev2-category-title">
                  {selectedDrawerGroup
                    ? localizeMenuText(selectedDrawerGroup.name, locale)
                    : copy.categoryAccess}
                </h2>
              </div>
              <span className="mobilev2-category-drawer-actions">
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
              <div className="mobilev2-category-detail">
                <nav className="mobilev2-category-group-switcher" aria-label={copy.categories}>
                  {groups.map((group) => (
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
                <div className="mobilev2-category-subcategories">
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
                    <span className="mobilev2-category-drawer-icon">
                      <PresentationMenuIcon id={selectedDrawerGroup.id} />
                    </span>
                    <span>
                      <strong>{localizeMenuText(selectedDrawerGroup.allLabel, locale)}</strong>
                      <em>{formatPresentationItemCount(selectedDrawerGroup.itemCount, locale)}</em>
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
                      <span className="mobilev2-category-drawer-icon">
                        <PresentationMenuIcon id={category.id} />
                      </span>
                      <span>
                        <strong>{localizeMenuText(category.name, locale)}</strong>
                        <em>{formatPresentationItemCount(category.items.length, locale)}</em>
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="mobilev2-category-main-groups">
                {groups.map((group) => (
                  <button
                    type="button"
                    key={group.id}
                    className={activeGroupId === group.id ? "is-active" : ""}
                    onClick={() => setDrawerGroupId(group.id)}
                  >
                    <span className="mobilev2-category-drawer-icon">
                      <PresentationMenuIcon id={group.id} />
                    </span>
                    <span>
                      <strong>{localizeMenuText(group.name, locale)}</strong>
                      <em>{formatPresentationCategoryCount(group.categories.length, locale)}</em>
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
    </main>
  );
}

const MobileMenuGroupV2 = memo(function MobileMenuGroupV2({
  group,
  groupIndex,
}: {
  group: PresentationMenuGroup;
  groupIndex: number;
}) {
  const { locale } = useI18n();

  return (
    <section
      id={presentationGroupTargetId(group.id)}
      data-presentation-group={group.id}
      className="mobilev2-menu-main-group"
      aria-labelledby={`mobilev2-main-group-title-${group.id}`}
    >
      <header className="mobilev2-menu-main-group-header">
        <span>{String(groupIndex + 1).padStart(2, "0")}</span>
        <i className="mobilev2-menu-main-group-icon">
          <PresentationMenuIcon id={group.id} />
        </i>
        <h2 id={`mobilev2-main-group-title-${group.id}`}>{localizeMenuText(group.name, locale)}</h2>
        <p>{localizeMenuText(group.description, locale)}</p>
      </header>
      {group.categories.map((category, index) => (
        <MobileMenuSectionV2
          key={category.id}
          category={category}
          categoryIndex={index}
          groupId={group.id}
        />
      ))}
    </section>
  );
});

const MobileMenuSectionV2 = memo(function MobileMenuSectionV2({
  category,
  categoryIndex,
  groupId,
}: {
  category: PresentationMenuCategory;
  categoryIndex: number;
  groupId: string;
}) {
  const { locale } = useI18n();
  const copy = COPY[locale];

  return (
    <section
      id={presentationCategoryTargetId(category.id)}
      data-presentation-group={groupId}
      data-presentation-category={category.id}
      className="mobilev2-menu-section"
      aria-labelledby={`mobilev2-category-title-${category.id}`}
    >
      <header className="mobilev2-menu-section-header">
        <small>{String(categoryIndex + 1).padStart(2, "0")}</small>
        <span className="mobilev2-menu-section-icon">
          <PresentationMenuIcon id={category.id} />
        </span>
        <h3 id={`mobilev2-category-title-${category.id}`}>
          {localizeMenuText(category.name, locale)}
        </h3>
        <p>{localizeMenuText(category.description, locale)}</p>
        <span>{formatPresentationItemCount(category.items.length, locale)}</span>
        <i aria-hidden="true" />
      </header>
      <div className="mobilev2-product-list">
        {category.items.map(({ item, sourceCategory }) => (
          <MobileProductCardV2 key={item.id} item={item} category={sourceCategory} />
        ))}
      </div>
    </section>
  );
});

const MobileProductCardV2 = memo(function MobileProductCardV2({
  item,
  category,
}: {
  item: MenuItem;
  category: MenuCategory;
}) {
  const { locale } = useI18n();
  const { openItemDetail } = useItemDetail();
  const { addItem } = useTrayActionsV2();
  const copy = COPY[locale];
  const [added, setAdded] = useState(false);
  const name = localizeMenuItemName(item, locale);
  const description = presentMenuTextForLocale(
    localizeMenuDescription(item, category, locale),
    locale,
  );
  const fact = useMemo(() => firstFact(item, locale), [item, locale]);

  const handleAdd = () => {
    addItem(item.id);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1100);
  };

  return (
    <article className="mobilev2-product-card">
      <button
        type="button"
        className="mobilev2-product-open"
        onClick={() => openItemDetail({ item, category })}
        aria-label={`${copy.viewDish}: ${name}`}
      >
        <DishImage item={item} alt={name} />
        <span className="mobilev2-product-copy">
          <strong>{name}</strong>
          {description ? <p>{description}</p> : null}
          {fact ? (
            <small>
              <Clock3 aria-hidden="true" />
              {fact}
            </small>
          ) : null}
          <PriceTag item={item} />
        </span>
      </button>
      <button
        type="button"
        className="mobilev2-product-add"
        onClick={handleAdd}
        aria-label={`${copy.quickAdd}: ${name}`}
      >
        <Plus aria-hidden="true" />
      </button>
      <span className="mobilev2-product-feedback" aria-live="polite">
        {added ? copy.added : ""}
      </span>
    </article>
  );
});

function firstFact(item: MenuItem, locale: "ar" | "en") {
  const copy = COPY[locale];
  if (item.prepTime) return `${item.prepTime} ${copy.prep}`;
  if (item.calories) return `${item.calories} ${copy.calories}`;
  if (item.weight) return `${item.weight} ${copy.weight}`;
  return "";
}
