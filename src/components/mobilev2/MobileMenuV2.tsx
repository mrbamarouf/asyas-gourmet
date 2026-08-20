import { ChevronDown, Clock3, HandPlatter, ListFilter, Plus, X } from "lucide-react";
import type { CSSProperties } from "react";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";

import {
  DishImage,
  PriceTag,
  localizeMenuDescription,
  localizeMenuItemName,
  localizeMenuText,
  useItemDetail,
} from "@/components/asya/primitives";
import type { MenuCategory, MenuCategoryGroup, MenuItem } from "@/data/menu";
import { useI18n } from "@/lib/i18n";
import { localizeMenuSectionHeading, presentMenuTextForLocale } from "@/lib/menu-presentation";

import { useTrayActionsV2, useTrayV2 } from "./TrayContextV2";

export interface MobileMenuGroupV2 {
  definition: MenuCategoryGroup;
  items: MenuItem[];
}

const COPY = {
  ar: {
    title: "المنيو",
    body: "تصفح جميع الأصناف بالترتيب الرسمي، وأضف اختياراتك إلى سلّتك.",
    categories: "الأقسام",
    categoryAccess: "اختر قسمًا",
    close: "إغلاق الأقسام",
    items: "أصناف",
    viewDish: "عرض الطبق",
    quickAdd: "أضف إلى السلة",
    added: "تمت الإضافة",
    prep: "دقيقة",
    calories: "سعرة",
    weight: "جم",
    tray: "سلتي",
    emptyDescription: "تعرّف على أصناف هذا القسم واختر ما يناسب مائدتك.",
  },
  en: {
    title: "Menu",
    body: "Browse every dish in the official order and keep your selections in My Tray.",
    categories: "Categories",
    categoryAccess: "Choose a Category",
    close: "Close Categories",
    items: "Items",
    viewDish: "View Dish",
    quickAdd: "Add to Tray",
    added: "Added",
    prep: "min",
    calories: "kcal",
    weight: "g",
    tray: "My Tray",
    emptyDescription: "Explore this section and choose what belongs at your table.",
  },
} as const;

export function MobileMenuV2({
  groups,
  categoryMap,
}: {
  groups: MobileMenuGroupV2[];
  categoryMap: Map<string, MenuCategory>;
}) {
  const { locale } = useI18n();
  const { totalQuantity, openTray } = useTrayV2();
  const copy = COPY[locale];
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeGroupId, setActiveGroupId] = useState(groups[0]?.definition.id ?? "");
  const activeGroupRef = useRef(activeGroupId);
  const chipRailRef = useRef<HTMLDivElement>(null);

  const setActiveGroup = useCallback((groupId: string) => {
    if (!groupId || activeGroupRef.current === groupId) return;
    activeGroupRef.current = groupId;
    setActiveGroupId(groupId);
  }, []);

  useEffect(() => {
    const sections = groups
      .map((group) => document.getElementById(`group-${group.definition.id}`))
      .filter((section): section is HTMLElement => Boolean(section));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => left.boundingClientRect.top - right.boundingClientRect.top)[0];
        if (visible?.target instanceof HTMLElement) {
          setActiveGroup(visible.target.dataset.groupId ?? "");
        }
      },
      { rootMargin: "-18% 0px -68%", threshold: 0.01 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [groups, setActiveGroup]);

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

  const jumpToGroup = useCallback(
    (groupId: string) => {
      setDrawerOpen(false);
      setActiveGroup(groupId);
      window.requestAnimationFrame(() => {
        const rail = chipRailRef.current;
        const chip = rail?.querySelector<HTMLElement>(`[data-group-id="${groupId}"]`);
        if (rail && chip) {
          const railRect = rail.getBoundingClientRect();
          const chipRect = chip.getBoundingClientRect();
          rail.scrollBy({
            left: chipRect.left + chipRect.width / 2 - (railRect.left + railRect.width / 2),
            behavior: "smooth",
          });
        }
        document.getElementById(`group-${groupId}`)?.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "auto"
            : "smooth",
          block: "start",
        });
      });
    },
    [setActiveGroup],
  );

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
        <button type="button" onClick={() => setDrawerOpen(true)}>
          <ListFilter aria-hidden="true" />
          <span>{copy.categoryAccess}</span>
          <ChevronDown aria-hidden="true" />
        </button>
        <div ref={chipRailRef} className="mobilev2-category-rail">
          {groups.map(({ definition }) => (
            <button
              type="button"
              key={definition.id}
              data-group-id={definition.id}
              className={activeGroupId === definition.id ? "is-active" : ""}
              onClick={() => jumpToGroup(definition.id)}
            >
              {localizeMenuSectionHeading(definition.shortName, locale)}
            </button>
          ))}
        </div>
      </section>

      <div className="mobilev2-menu-groups">
        {groups.map((group, index) => (
          <MobileMenuSectionV2
            key={group.definition.id}
            group={group}
            groupIndex={index}
            categoryMap={categoryMap}
          />
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
                <h2 id="mobilev2-category-title">{copy.categoryAccess}</h2>
              </div>
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
              {groups.map(({ definition, items }, index) => (
                <button
                  type="button"
                  key={definition.id}
                  className={activeGroupId === definition.id ? "is-active" : ""}
                  onClick={() => jumpToGroup(definition.id)}
                >
                  <small>{String(index + 1).padStart(2, "0")}</small>
                  <span>
                    <strong>{localizeMenuSectionHeading(definition.name, locale)}</strong>
                    <em>
                      {items.length} {copy.items}
                    </em>
                  </span>
                </button>
              ))}
            </div>
          </section>
        </div>
      ) : null}
    </main>
  );
}

const MobileMenuSectionV2 = memo(function MobileMenuSectionV2({
  group,
  groupIndex,
  categoryMap,
}: {
  group: MobileMenuGroupV2;
  groupIndex: number;
  categoryMap: Map<string, MenuCategory>;
}) {
  const { locale } = useI18n();
  const copy = COPY[locale];
  const description = localizeMenuText(group.definition.blurb, locale) || copy.emptyDescription;

  return (
    <section
      id={`group-${group.definition.id}`}
      data-group-id={group.definition.id}
      className="mobilev2-menu-section"
      aria-labelledby={`mobilev2-group-title-${group.definition.id}`}
      style={
        {
          "--mobilev2-section-block-size": `${Math.max(720, group.items.length * 175 + 320)}px`,
        } as CSSProperties
      }
    >
      <header className="mobilev2-menu-section-header">
        <small>{String(groupIndex + 1).padStart(2, "0")}</small>
        <h2 id={`mobilev2-group-title-${group.definition.id}`}>
          {localizeMenuSectionHeading(group.definition.name, locale)}
        </h2>
        <p>{description}</p>
        <span>
          {group.items.length} {copy.items}
        </span>
        <i aria-hidden="true" />
      </header>
      <div className="mobilev2-product-list">
        {group.items.map((item) => {
          const category =
            categoryMap.get(item.category) ?? categoryMap.get(group.definition.categoryIds[0]);
          return category ? (
            <MobileProductCardV2 key={item.id} item={item} category={category} />
          ) : null;
        })}
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
