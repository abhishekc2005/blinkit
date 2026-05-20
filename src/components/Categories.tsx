import { categories } from "@/data/catalog";

export function Categories() {
  return (
    <section className="mx-auto mt-8 max-w-7xl px-4">
      <h2 className="mb-4 text-lg font-bold text-foreground md:text-xl">Shop by Category</h2>
      <div className="-mx-2 flex gap-3 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-2">
        {categories.map((c) => (
          <button
            key={c.id}
            className="group flex w-28 shrink-0 flex-col items-center gap-2 rounded-2xl border border-border bg-card p-3 transition hover:-translate-y-1 hover:shadow-md md:w-32"
          >
            <div
              className="flex h-20 w-20 items-center justify-center rounded-xl transition-transform group-hover:scale-105"
              style={{ background: c.color }}
            >
              <img src={c.image} alt={c.name} loading="lazy" className="h-16 w-16 object-contain" />
            </div>
            <span className="text-center text-xs font-medium leading-tight text-foreground">
              {c.name}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
