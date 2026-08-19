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
import { memo, useCallback, useEffect, useState } from "react";

import {
  DishImage,
  PriceTag,
  localizeMenuDescription,
  localizeMenuItemName,
  localizeMenuText,
  useItemDetail,
} from "@/components/asya/primitives";
import { ITEMS, type MenuCategory, type MenuCategoryGroup, type MenuItem } from "@/data/menu";
import { useI18n } from "@/lib/i18n";
import { localizeMenuSectionHeading } from "@/lib/menu-presentation";

import heroImg from "@/assets/hero-turkish-table.jpg";

export interface MobileMenuGroupData {
  definition: MenuCategoryGroup;
  items: MenuItem[];
}

const GROUP_ICONS: Partial<Record<string, LucideIcon>> = {
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

export function MobileMenu35({
  groups,
  categoryMap,
}: {
  groups: MobileMenuGroupData[];
  categoryMap: Map<string, MenuCategory>;
}) {
  const { locale } = useI18n();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const copy =
    locale === "ar"
      ? {
          eyebrow: "منيو آسيا جورميه",
          title: "اختر طبقك",
          body: "تصفح المنيو الرسمي كاملًا، وانتقل إلى القسم الذي ترغب به.",
          categories: "قسمًا",
          dishes: "طبقًا",
          start: "ابدأ التصفح",
          open: "اختر قسمًا",
          close: "إغلاق الأقسام",
          drawerTitle: "جميع الأقسام",
          item: "صنف",
          chapter: "قسم",
          viewDish: "عرض الطبق",
          imageAlt: "مائدة تركية من أطباق آسيا جورميه",
        }
      : {
          eyebrow: "Asya’s Gourmet Menu",
          title: "Choose Your Dish",
          body: "Browse the complete official menu and jump to any category when you need it.",
          categories: "Categories",
          dishes: "Dishes",
          start: "Start Browsing",
          open: "Choose a Category",
          close: "Close Categories",
          drawerTitle: "All Categories",
          item: "Items",
          chapter: "Category",
          viewDish: "View dish",
          imageAlt: "A Turkish table from Asya's Gourmet",
        };

  const scrollToGroup = useCallback((groupId: string) => {
    setDrawerOpen(false);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        const section = document.getElementById(`mobile-group-${groupId}`);
        if (!section) return;
        const top = section.getBoundingClientRect().top + window.scrollY - 12;
        window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
      });
    });
  }, []);

  useEffect(() => {
    if (!drawerOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDrawerOpen(false);
    };
    document.body.classList.add("mobile35-drawer-lock");
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("mobile35-drawer-lock");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [drawerOpen]);

  useEffect(() => {
    const hash = window.location.hash.replace("#group-", "");
    if (!hash || !groups.some((group) => group.definition.id === hash)) return;
    const timer = window.setTimeout(() => scrollToGroup(hash), 120);
    return () => window.clearTimeout(timer);
  }, [groups, scrollToGroup]);

  return (
    <main className="mobile35-menu" dir={locale === "ar" ? "rtl" : "ltr"}>
      <section className="mobile35-menu-hero" aria-labelledby="mobile35-menu-title">
        <img src={heroImg} alt={copy.imageAlt} width={1600} height={1067} decoding="async" />
        <span aria-hidden="true" />
        <div>
          <p>{copy.eyebrow}</p>
          <h1 id="mobile35-menu-title">{copy.title}</h1>
          <small>{copy.body}</small>
          <dl>
            <div>
              <dt>{copy.categories}</dt>
              <dd>{groups.length}</dd>
            </div>
            <div>
              <dt>{copy.dishes}</dt>
              <dd>{ITEMS.length}</dd>
            </div>
          </dl>
          <a href="#mobile35-category-access">
            {copy.start}
            <ArrowDown aria-hidden="true" />
          </a>
        </div>
      </section>

      <section id="mobile35-category-access" className="mobile35-category-access">
        <div>
          <strong>{copy.open}</strong>
          <span>
            {groups.length} {copy.categories}
          </span>
        </div>
        <button type="button" onClick={() => setDrawerOpen(true)}>
          <ListFilter aria-hidden="true" />
          {copy.drawerTitle}
        </button>
      </section>

      <div className="mobile35-menu-chapters">
        {groups.map((group, index) => (
          <MobileMenuChapter
            key={group.definition.id}
            group={group}
            index={index}
            categoryMap={categoryMap}
            chapterLabel={copy.chapter}
            itemLabel={copy.item}
            viewDish={copy.viewDish}
          />
        ))}
      </div>

      {drawerOpen ? (
        <div
          className="mobile35-category-drawer-layer"
          role="presentation"
          onPointerDown={(event) => {
            if (event.target === event.currentTarget) setDrawerOpen(false);
          }}
        >
          <section
            className="mobile35-category-drawer"
            role="dialog"
            aria-modal="true"
            aria-label={copy.drawerTitle}
          >
            <header>
              <div>
                <small>
                  {groups.length} {copy.categories}
                </small>
                <h2>{copy.drawerTitle}</h2>
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
                  onClick={() => scrollToGroup(definition.id)}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <MobileGroupIcon groupId={definition.id} />
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
    </main>
  );
}

const MobileMenuChapter = memo(function MobileMenuChapter({
  group,
  index,
  categoryMap,
  chapterLabel,
  itemLabel,
  viewDish,
}: {
  group: MobileMenuGroupData;
  index: number;
  categoryMap: Map<string, MenuCategory>;
  chapterLabel: string;
  itemLabel: string;
  viewDish: string;
}) {
  const { locale } = useI18n();
  const Icon = GROUP_ICONS[group.definition.id];

  return (
    <section
      id={`mobile-group-${group.definition.id}`}
      className="mobile35-menu-chapter"
      data-tone={index % 4}
    >
      <header className="mobile35-chapter-header">
        {Icon ? (
          <span className="mobile35-chapter-icon">
            <Icon aria-hidden="true" />
          </span>
        ) : null}
        <div>
          <small>
            {chapterLabel} {String(index + 1).padStart(2, "0")}
          </small>
          <h2>{localizeMenuSectionHeading(group.definition.name, locale)}</h2>
          <p>{localizeMenuText(group.definition.blurb, locale)}</p>
        </div>
        <span className="mobile35-item-count">
          {group.items.length} {itemLabel}
        </span>
      </header>
      <div className="mobile35-product-list">
        {group.items.map((item) => {
          const assignment = item.categoryAssignments.find((entry) =>
            group.definition.categoryIds.includes(entry.categoryId),
          );
          const category = categoryMap.get(assignment?.categoryId ?? item.category);
          return category ? (
            <MobileMenuItemCard key={item.id} item={item} category={category} action={viewDish} />
          ) : null;
        })}
      </div>
    </section>
  );
});

const MobileMenuItemCard = memo(function MobileMenuItemCard({
  item,
  category,
  action,
}: {
  item: MenuItem;
  category: MenuCategory;
  action: string;
}) {
  const { locale } = useI18n();
  const { openItemDetail } = useItemDetail();
  const name = localizeMenuItemName(item, locale);
  const description = localizeMenuDescription(item, category, locale);

  return (
    <button
      type="button"
      className="mobile35-product-card"
      onClick={() => openItemDetail({ item, category })}
      aria-label={`${action}: ${name}`}
    >
      <DishImage item={item} alt={name} />
      <span className="mobile35-product-copy">
        <PriceTag item={item} />
        <strong>{name}</strong>
        {description ? <small>{description}</small> : null}
        <i>
          {action}
          <ArrowUpRight aria-hidden="true" />
        </i>
      </span>
    </button>
  );
});

function MobileGroupIcon({ groupId }: { groupId: string }) {
  const Icon = GROUP_ICONS[groupId];
  return Icon ? <Icon aria-hidden="true" /> : <span aria-hidden="true" />;
}
