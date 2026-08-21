import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { ITEMS, type MenuItem } from "@/data/menu";

const TRAY_STORAGE_KEY = "asyas-my-tray-v2";
const ITEM_BY_ID = new Map(ITEMS.map((item) => [item.id, item]));

interface StoredTrayV2 {
  version: 1;
  quantities: Record<string, number>;
}

export interface TrayLineV2 {
  item: MenuItem;
  quantity: number;
  lineTotal: number | null;
}

interface TrayContextV2Value {
  quantities: Record<string, number>;
  lines: TrayLineV2[];
  totalQuantity: number;
  totalPrice: number;
  hasUnavailablePrice: boolean;
  isOpen: boolean;
  isWaiterViewOpen: boolean;
  addItem: (itemId: string, quantity?: number) => void;
  incrementItem: (itemId: string) => void;
  decrementItem: (itemId: string) => void;
  removeItem: (itemId: string) => void;
  clearTray: () => void;
  openTray: () => void;
  closeTray: () => void;
  openWaiterView: () => void;
  closeWaiterView: () => void;
}

const TrayContextV2 = createContext<TrayContextV2Value | null>(null);
type TrayActionsV2Value = Pick<
  TrayContextV2Value,
  | "addItem"
  | "incrementItem"
  | "decrementItem"
  | "removeItem"
  | "clearTray"
  | "openTray"
  | "closeTray"
  | "openWaiterView"
  | "closeWaiterView"
>;
const TrayActionsV2 = createContext<TrayActionsV2Value | null>(null);

export function TrayProviderV2({ children }: { children: ReactNode }) {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [hasHydrated, setHasHydrated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isWaiterViewOpen, setIsWaiterViewOpen] = useState(false);

  useEffect(() => {
    setQuantities(readStoredTray());
    setHasHydrated(true);
  }, []);

  useEffect(() => {
    if (!hasHydrated || typeof window === "undefined") return;

    const payload: StoredTrayV2 = { version: 1, quantities };
    window.localStorage.setItem(TRAY_STORAGE_KEY, JSON.stringify(payload));
  }, [hasHydrated, quantities]);

  const addItem = useCallback((itemId: string, quantity = 1) => {
    if (!ITEM_BY_ID.has(itemId) || !Number.isFinite(quantity) || quantity <= 0) return;
    const safeQuantity = Math.max(1, Math.floor(quantity));

    setQuantities((current) => ({
      ...current,
      [itemId]: Math.min(99, (current[itemId] ?? 0) + safeQuantity),
    }));
  }, []);

  const incrementItem = useCallback((itemId: string) => addItem(itemId, 1), [addItem]);

  const decrementItem = useCallback((itemId: string) => {
    setQuantities((current) => {
      const nextQuantity = (current[itemId] ?? 0) - 1;
      if (nextQuantity > 0) return { ...current, [itemId]: nextQuantity };

      const next = { ...current };
      delete next[itemId];
      return next;
    });
  }, []);

  const removeItem = useCallback((itemId: string) => {
    setQuantities((current) => {
      if (!current[itemId]) return current;
      const next = { ...current };
      delete next[itemId];
      return next;
    });
  }, []);

  const clearTray = useCallback(() => setQuantities({}), []);
  const openTray = useCallback(() => setIsOpen(true), []);
  const closeTray = useCallback(() => {
    setIsWaiterViewOpen(false);
    setIsOpen(false);
  }, []);
  const openWaiterView = useCallback(() => setIsWaiterViewOpen(true), []);
  const closeWaiterView = useCallback(() => setIsWaiterViewOpen(false), []);

  const lines = useMemo(
    () =>
      Object.entries(quantities)
        .map(([itemId, quantity]) => {
          const item = ITEM_BY_ID.get(itemId);
          if (!item || quantity <= 0) return null;
          const lineTotal = typeof item.priceValue === "number" ? item.priceValue * quantity : null;
          return { item, quantity, lineTotal };
        })
        .filter((line): line is TrayLineV2 => Boolean(line)),
    [quantities],
  );

  const totalQuantity = useMemo(() => lines.reduce((sum, line) => sum + line.quantity, 0), [lines]);
  const totalPrice = useMemo(
    () => lines.reduce((sum, line) => sum + (line.lineTotal ?? 0), 0),
    [lines],
  );
  const hasUnavailablePrice = useMemo(() => lines.some((line) => line.lineTotal === null), [lines]);

  const value = useMemo<TrayContextV2Value>(
    () => ({
      quantities,
      lines,
      totalQuantity,
      totalPrice,
      hasUnavailablePrice,
      isOpen,
      isWaiterViewOpen,
      addItem,
      incrementItem,
      decrementItem,
      removeItem,
      clearTray,
      openTray,
      closeTray,
      openWaiterView,
      closeWaiterView,
    }),
    [
      quantities,
      lines,
      totalQuantity,
      totalPrice,
      hasUnavailablePrice,
      isOpen,
      isWaiterViewOpen,
      addItem,
      incrementItem,
      decrementItem,
      removeItem,
      clearTray,
      openTray,
      closeTray,
      openWaiterView,
      closeWaiterView,
    ],
  );

  const actions = useMemo<TrayActionsV2Value>(
    () => ({
      addItem,
      incrementItem,
      decrementItem,
      removeItem,
      clearTray,
      openTray,
      closeTray,
      openWaiterView,
      closeWaiterView,
    }),
    [
      addItem,
      incrementItem,
      decrementItem,
      removeItem,
      clearTray,
      openTray,
      closeTray,
      openWaiterView,
      closeWaiterView,
    ],
  );

  return (
    <TrayActionsV2.Provider value={actions}>
      <TrayContextV2.Provider value={value}>{children}</TrayContextV2.Provider>
    </TrayActionsV2.Provider>
  );
}

export function useTrayV2() {
  const context = useContext(TrayContextV2);
  if (!context) throw new Error("useTrayV2 must be used inside TrayProviderV2");
  return context;
}

export function useTrayActionsV2() {
  const context = useContext(TrayActionsV2);
  if (!context) throw new Error("useTrayActionsV2 must be used inside TrayProviderV2");
  return context;
}

function readStoredTray() {
  if (typeof window === "undefined") return {};

  try {
    const raw = window.localStorage.getItem(TRAY_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Partial<StoredTrayV2>;
    if (parsed.version !== 1 || !parsed.quantities || typeof parsed.quantities !== "object") {
      return {};
    }

    return Object.fromEntries(
      Object.entries(parsed.quantities)
        .filter(([itemId, quantity]) => ITEM_BY_ID.has(itemId) && isValidQuantity(quantity))
        .map(([itemId, quantity]) => [itemId, Math.min(99, Math.floor(quantity))]),
    );
  } catch {
    return {};
  }
}

function isValidQuantity(value: unknown): value is number {
  return typeof value === "number" && Number.isFinite(value) && value > 0;
}
