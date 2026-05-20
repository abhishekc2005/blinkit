import type { Product } from "@/data/catalog";
import { ProductCard } from "./ProductCard";
import { ProductSkeleton } from "./SkeletonLoader";

type Props = { products: Product[]; loading: boolean };

export function ProductGrid({ products, loading }: Props) {
  return (
    <section className="mx-auto mt-10 max-w-7xl px-4">
      <h2 className="mb-4 text-lg font-bold text-foreground md:text-xl">
        Popular Products{!loading && ` (${products.length})`}
      </h2>

      {loading ? (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <ProductSkeleton key={i} />
          ))}
        </div>
      ) : products.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border p-10 text-center text-sm text-muted-foreground">
          No products match your search.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </section>
  );
}
