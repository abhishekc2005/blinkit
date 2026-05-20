import { useEffect, useState } from "react";
import { banners } from "@/data/catalog";

export function Banner() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % banners.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="mx-auto mt-4 max-w-7xl px-4">
      <div className="relative h-44 overflow-hidden rounded-2xl shadow-sm md:h-64">
        {banners.map((b, idx) => (
          <div
            key={b.id}
            className="absolute inset-0 flex items-center px-6 transition-opacity duration-700 md:px-12"
            style={{ background: b.bg, opacity: i === idx ? 1 : 0 }}
          >
            <div className="text-white">
              <h2 className="text-2xl font-extrabold leading-tight md:text-4xl">{b.title}</h2>
              <p className="mt-2 text-sm opacity-90 md:text-lg">{b.subtitle}</p>
              <button className="mt-4 rounded-lg bg-white px-5 py-2 text-sm font-semibold text-primary hover:bg-white/90">
                Shop now
              </button>
            </div>
          </div>
        ))}
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
          {banners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${i === idx ? "w-6 bg-white" : "w-2 bg-white/60"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
