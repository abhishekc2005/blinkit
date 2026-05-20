import { useState } from "react";
import { Search, ShoppingCart, ChevronDown, Menu, X, MapPin } from "lucide-react";
import { useCart } from "@/context/CartContext";

type Props = {
  query: string;
  onQueryChange: (q: string) => void;
};

export function Header({ query, onQueryChange }: Props) {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background shadow-sm border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 lg:gap-6">
        <a href="/" className="flex shrink-0 items-center gap-1">
          <span className="text-2xl font-extrabold tracking-tight text-primary">blinkit</span>
        </a>

        <div className="hidden flex-col text-sm md:flex">
          <div className="flex items-center gap-1 font-bold text-foreground">
            Delivery in 10 minutes <ChevronDown className="h-4 w-4" />
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="h-3 w-3" /> Home - Sector 14, Gurugram
          </div>
        </div>

        <div className="relative ml-auto hidden flex-1 max-w-2xl md:block">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder='Search "milk"'
            className="w-full rounded-xl bg-muted/60 py-3 pl-11 pr-4 text-sm outline-none ring-0 transition focus:bg-muted"
          />
        </div>

        <div className="ml-auto hidden items-center gap-3 md:flex">
          <button className="text-sm font-medium text-foreground hover:text-primary">Login</button>
          <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90">
            <ShoppingCart className="h-4 w-4" />
            <span>My Cart</span>
            {count > 0 && (
              <span className="ml-1 rounded-full bg-primary-foreground/20 px-2 py-0.5 text-xs">
                {count}
              </span>
            )}
          </button>
        </div>

        <button className="ml-auto md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <div className="px-4 pb-3 md:hidden">
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder='Search "milk"'
            className="w-full rounded-xl bg-muted/60 py-3 pl-11 pr-4 text-sm outline-none"
          />
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-4 py-3 md:hidden">
          <button className="block w-full rounded-lg py-2 text-left text-sm">Login</button>
          <button className="mt-2 flex w-full items-center justify-between rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground">
            <span className="flex items-center gap-2">
              <ShoppingCart className="h-4 w-4" /> My Cart
            </span>
            <span>{count}</span>
          </button>
        </div>
      )}
    </header>
  );
}
