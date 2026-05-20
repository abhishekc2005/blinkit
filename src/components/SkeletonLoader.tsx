export function ProductSkeleton() {
  return (
    <div className="rounded-2xl border border-border bg-card p-3">
      <div className="aspect-square animate-pulse rounded-xl bg-muted" />
      <div className="mt-3 h-3 w-1/3 animate-pulse rounded bg-muted" />
      <div className="mt-2 h-4 w-3/4 animate-pulse rounded bg-muted" />
      <div className="mt-2 h-3 w-1/2 animate-pulse rounded bg-muted" />
      <div className="mt-4 flex items-center justify-between">
        <div className="h-4 w-12 animate-pulse rounded bg-muted" />
        <div className="h-8 w-16 animate-pulse rounded-lg bg-muted" />
      </div>
    </div>
  );
}
