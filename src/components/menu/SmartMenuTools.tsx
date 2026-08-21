import { Clock3, Plus, Search, X } from "lucide-react";
import { memo, useDeferredValue, useMemo, useState } from "react";

import {
  DishImage,
  PriceTag,
  localizeMenuDescription,
  localizeMenuItemName,
  localizeMenuText,
  useItemDetail,
} from "@/components/asya/primitives";
import { useTrayActionsV2 } from "@/components/mobilev2/TrayContextV2";
import { type MenuItem } from "@/data/menu";
import { useI18n } from "@/lib/i18n";
import {
  menuSearchEntryForItem,
  normalizeMenuSearch,
  searchMenu,
  type MenuSearchEntry,
} from "@/lib/menu-search";
import { presentMenuTextForLocale } from "@/lib/menu-presentation";

import { useRecentlyViewed } from "./RecentlyViewedContext";

const COPY = {
  ar: {
    label: "ابحث في المنيو",
    placeholder: "ابحث عن طبق...",
    clear: "مسح البحث",
    result: "نتيجة",
    results: "نتائج",
    emptyTitle: "لم نجد نتائج مطابقة",
    emptyBody: "جرّب اسم طبق أو مكوّن آخر.",
    view: "عرض الطبق",
    add: "أضف إلى سلتي",
    added: "تمت الإضافة",
    recently: "شاهدتها مؤخرًا",
    recentlyBody: "ارجع سريعًا إلى الأصناف التي تصفحتها.",
    prep: "دقيقة",
    calories: "سعرة",
    weight: "جم",
  },
  en: {
    label: "Search the Menu",
    placeholder: "Search the menu...",
    clear: "Clear search",
    result: "Result",
    results: "Results",
    emptyTitle: "No matching dishes found.",
    emptyBody: "Try another dish or menu term.",
    view: "View Dish",
    add: "Add to My Tray",
    added: "Added",
    recently: "Recently Viewed",
    recentlyBody: "Return to dishes you explored recently.",
    prep: "min",
    calories: "kcal",
    weight: "g",
  },
} as const;

export function SmartMenuSearch() {
  const { locale } = useI18n();
  const copy = COPY[locale];
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const hasQuery = Boolean(normalizeMenuSearch(deferredQuery));
  const results = useMemo(() => searchMenu(deferredQuery), [deferredQuery]);

  return (
    <section className="experience-menu-search" aria-labelledby="experience-search-title">
      <label htmlFor="experience-menu-search-input" id="experience-search-title">
        {copy.label}
      </label>
      <div className="experience-search-field">
        <Search aria-hidden="true" />
        <input
          id="experience-menu-search-input"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={copy.placeholder}
          autoComplete="off"
          enterKeyHint="search"
          dir={locale === "ar" ? "rtl" : "ltr"}
        />
        {query ? (
          <button type="button" onClick={() => setQuery("")} aria-label={copy.clear}>
            <X aria-hidden="true" />
          </button>
        ) : null}
      </div>

      {hasQuery ? (
        <div className="experience-search-results" aria-live="polite">
          {results.length ? (
            <>
              <p className="experience-search-count">
                <strong>{results.length}</strong>{" "}
                {results.length === 1 ? copy.result : copy.results}
              </p>
              <div className="experience-search-grid">
                {results.map((entry) => (
                  <SearchResultCard key={entry.item.id} entry={entry} />
                ))}
              </div>
            </>
          ) : (
            <div className="experience-search-empty">
              <Search aria-hidden="true" />
              <strong>{copy.emptyTitle}</strong>
              <p>{copy.emptyBody}</p>
            </div>
          )}
        </div>
      ) : null}
    </section>
  );
}

const SearchResultCard = memo(function SearchResultCard({ entry }: { entry: MenuSearchEntry }) {
  const { locale } = useI18n();
  const { openItemDetail } = useItemDetail();
  const { addItem } = useTrayActionsV2();
  const [added, setAdded] = useState(false);
  const copy = COPY[locale];
  const name = localizeMenuItemName(entry.item, locale);
  const description = presentMenuTextForLocale(
    localizeMenuDescription(entry.item, entry.sourceCategory, locale),
    locale,
  );
  const metadata = verifiedFacts(entry.item, locale);

  const handleAdd = () => {
    addItem(entry.item.id);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1000);
  };

  return (
    <article className="experience-search-card">
      <button
        type="button"
        className="experience-search-open"
        onClick={() => openItemDetail({ item: entry.item, category: entry.sourceCategory })}
        aria-label={`${copy.view}: ${name}`}
      >
        <DishImage item={entry.item} alt={name} />
        <span className="experience-search-copy">
          <small>
            {localizeMenuText(entry.group.name, locale)} ·{" "}
            {localizeMenuText(entry.presentationCategory.name, locale)}
          </small>
          <strong>{name}</strong>
          {description ? <p>{description}</p> : null}
          {metadata.length ? (
            <span className="experience-search-facts">
              {metadata.map((fact) => (
                <em key={fact}>
                  <Clock3 aria-hidden="true" />
                  {fact}
                </em>
              ))}
            </span>
          ) : null}
          <PriceTag item={entry.item} />
        </span>
      </button>
      <button
        type="button"
        className="experience-search-add"
        onClick={handleAdd}
        aria-label={`${copy.add}: ${name}`}
      >
        <Plus aria-hidden="true" />
      </button>
      <span className="experience-search-feedback" aria-live="polite">
        {added ? copy.added : ""}
      </span>
    </article>
  );
});

export function RecentlyViewedRail() {
  const { locale } = useI18n();
  const { itemIds } = useRecentlyViewed();
  const copy = COPY[locale];
  const entries = useMemo(
    () =>
      itemIds
        .map(menuSearchEntryForItem)
        .filter((entry): entry is MenuSearchEntry => Boolean(entry)),
    [itemIds],
  );

  if (!entries.length) return null;

  return (
    <section className="experience-recent" aria-labelledby="experience-recent-title">
      <header>
        <h2 id="experience-recent-title">{copy.recently}</h2>
        <p>{copy.recentlyBody}</p>
      </header>
      <div className="experience-recent-rail">
        {entries.map((entry) => (
          <RecentCard key={entry.item.id} entry={entry} />
        ))}
      </div>
    </section>
  );
}

const RecentCard = memo(function RecentCard({ entry }: { entry: MenuSearchEntry }) {
  const { locale } = useI18n();
  const { openItemDetail } = useItemDetail();
  const copy = COPY[locale];
  const name = localizeMenuItemName(entry.item, locale);

  return (
    <button
      type="button"
      className="experience-recent-card"
      onClick={() => openItemDetail({ item: entry.item, category: entry.sourceCategory })}
      aria-label={`${copy.view}: ${name}`}
    >
      <DishImage item={entry.item} alt={name} />
      <span>
        <strong>{name}</strong>
        <PriceTag item={entry.item} />
      </span>
    </button>
  );
});

function verifiedFacts(item: MenuItem, locale: "ar" | "en") {
  const copy = COPY[locale];
  return [
    item.prepTime ? `${item.prepTime} ${copy.prep}` : "",
    item.calories ? `${item.calories} ${copy.calories}` : "",
    item.weight ? `${item.weight} ${copy.weight}` : "",
  ]
    .filter(Boolean)
    .slice(0, 2);
}
