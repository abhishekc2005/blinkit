import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Toaster } from "sonner";
import { Header } from "@/components/Header";
import { Banner } from "@/components/Banner";
import { Categories } from "@/components/Categories";
import { ProductGrid } from "@/components/ProductGrid";
import { Footer } from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import { products } from "@/data/catalog";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Blinkit Clone — Groceries delivered in 10 minutes" },
      {
        name: "description",
        content:
          "Order fresh groceries, snacks, beverages and household essentials online — delivered in 10 minutes.",
      },
    ],
  }),
});

function Index() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products;
    return products.filter(
      (p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header query={query} onQueryChange={setQuery} />
        <main className="pb-10">
          <Banner />
          <Categories />
          <ProductGrid products={filtered} loading={loading} />
        </main>
        <Footer />
        <Toaster position="top-center" richColors />
      </div>
    </CartProvider>
  );
}
