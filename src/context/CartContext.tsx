import { createContext, useContext, useState, type ReactNode } from "react";
import type { Product } from "@/data/catalog";

export type CartItem = Product & { qty: number };

type CartCtx = {
  items: CartItem[];
  add: (p: Product) => void;
  remove: (id: string) => void;
  count: number;
  total: number;
};

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const add = (p: Product) =>
    setItems((prev) => {
      const existing = prev.find((i) => i.id === p.id);
      if (existing) return prev.map((i) => (i.id === p.id ? { ...i, qty: i.qty + 1 } : i));
      return [...prev, { ...p, qty: 1 }];
    });

  const remove = (id: string) =>
    setItems((prev) =>
      prev.flatMap((i) => (i.id === id ? (i.qty > 1 ? [{ ...i, qty: i.qty - 1 }] : []) : [i])),
    );

  const count = items.reduce((s, i) => s + i.qty, 0);
  const total = items.reduce((s, i) => s + i.qty * i.price, 0);

  return <Ctx.Provider value={{ items, add, remove, count, total }}>{children}</Ctx.Provider>;
}

export function useCart() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart must be used within CartProvider");
  return c;
}
