import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { ITEMS } from "@/data/menu";

const RECENT_STORAGE_KEY = "asyas-recently-viewed-v1";
const MAX_RECENT_ITEMS = 8;
const VALID_ITEM_IDS = new Set(ITEMS.map((item) => item.id));

interface StoredRecentlyViewed {
  version: 1;
  itemIds: string[];
}

interface RecentlyViewedContextValue {
  itemIds: string[];
}

interface RecentlyViewedActionsValue {
  recordViewed: (itemId: string) => void;
}

const RecentlyViewedContext = createContext<RecentlyViewedContextValue | null>(null);
const RecentlyViewedActionsContext = createContext<RecentlyViewedActionsValue | null>(null);

export function RecentlyViewedProvider({ children }: { children: ReactNode }) {
  const [itemIds, setItemIds] = useState<string[]>([]);
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setItemIds(readStoredRecentlyViewed());
    setHasHydrated(true);
  }, []);

  useEffect(() => {
    if (!hasHydrated || typeof window === "undefined") return;
    const payload: StoredRecentlyViewed = { version: 1, itemIds };
    window.localStorage.setItem(RECENT_STORAGE_KEY, JSON.stringify(payload));
  }, [hasHydrated, itemIds]);

  const recordViewed = useCallback((itemId: string) => {
    if (!VALID_ITEM_IDS.has(itemId)) return;
    setItemIds((current) =>
      [itemId, ...current.filter((id) => id !== itemId)].slice(0, MAX_RECENT_ITEMS),
    );
  }, []);

  const value = useMemo(() => ({ itemIds }), [itemIds]);
  const actions = useMemo(() => ({ recordViewed }), [recordViewed]);

  return (
    <RecentlyViewedActionsContext.Provider value={actions}>
      <RecentlyViewedContext.Provider value={value}>{children}</RecentlyViewedContext.Provider>
    </RecentlyViewedActionsContext.Provider>
  );
}

export function useRecentlyViewed() {
  const context = useContext(RecentlyViewedContext);
  if (!context) throw new Error("useRecentlyViewed must be used inside RecentlyViewedProvider");
  return context;
}

export function useRecentlyViewedActions() {
  const context = useContext(RecentlyViewedActionsContext);
  if (!context) {
    throw new Error("useRecentlyViewedActions must be used inside RecentlyViewedProvider");
  }
  return context;
}

function readStoredRecentlyViewed() {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(RECENT_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Partial<StoredRecentlyViewed>;
    if (parsed.version !== 1 || !Array.isArray(parsed.itemIds)) return [];
    return [
      ...new Set(parsed.itemIds.filter((id) => typeof id === "string" && VALID_ITEM_IDS.has(id))),
    ].slice(0, MAX_RECENT_ITEMS);
  } catch {
    return [];
  }
}
