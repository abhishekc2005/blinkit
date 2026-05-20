import { Clock } from "lucide-react";
import { toast } from "sonner";
import type { Product } from "@/data/catalog";
import { useCart } from "@/context/CartContext";

export function ProductCard({ product }: { product: Product }) {
  const { add, items, remove } = useCart();
  const inCart = items.find((i) => i.id === product.id);
  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  const handleAdd = () => {
    add(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-3 transition hover:-translate-y-0.5 hover:shadow-lg">
      {discount > 0 && (
        <div className="absolute left-0 top-2 z-10 rounded-r-md bg-primary px-2 py-0.5 text-[10px] font-bold text-primary-foreground">
          {discount}% OFF
        </div>
      )}
      <div className="flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-muted/40">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="mt-2 flex items-center gap-1 self-start rounded-md bg-muted px-1.5 py-0.5 text-[10px] font-semibold text-muted-foreground">
        <Clock className="h-3 w-3" />
        {product.deliveryTime}
      </div>

      <h3 className="mt-1 line-clamp-2 text-sm font-semibold text-foreground">{product.name}</h3>
      <p className="text-xs text-muted-foreground">{product.weight}</p>

      <div className="mt-auto flex items-center justify-between gap-2 pt-3">
        <div className="leading-tight">
          <div className="text-sm font-bold text-foreground">₹{product.price}</div>
          {product.mrp > product.price && (
            <div className="text-xs text-muted-foreground line-through">₹{product.mrp}</div>
          )}
        </div>
        {inCart ? (
          <div className="flex items-center gap-2 rounded-lg bg-primary text-primary-foreground">
            <button
              onClick={() => remove(product.id)}
              className="px-3 py-1.5 text-sm font-bold"
              aria-label="Decrease"
            >
              −
            </button>
            <span className="text-sm font-bold">{inCart.qty}</span>
            <button
              onClick={handleAdd}
              className="px-3 py-1.5 text-sm font-bold"
              aria-label="Increase"
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={handleAdd}
            className="rounded-lg border border-primary px-4 py-1.5 text-sm font-bold text-primary transition hover:bg-primary hover:text-primary-foreground"
          >
            ADD
          </button>
        )}
      </div>
    </div>
  );
}
