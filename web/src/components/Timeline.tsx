"use client";

import { useMemo, useState } from "react";

type TimelineItem = {
  id: string;
  title: string;
  summary: string;
  details: string;
};

type TimelineProps = {
  items: TimelineItem[];
};

export function Timeline({ items }: TimelineProps) {
  const orderedItems = useMemo(() => items, [items]);
  const [activeId, setActiveId] = useState(orderedItems[0]?.id ?? "");

  const active = orderedItems.find((item) => item.id === activeId);

  return (
    <section className="grid gap-10 lg:grid-cols-[280px_1fr]">
      <div className="flex flex-col gap-3 rounded-2xl border border-zinc-200/60 bg-white/80 p-4 backdrop-blur dark:border-white/10 dark:bg-zinc-900/60">
        {orderedItems.map((item) => {
          const isActive = item.id === activeId;
          return (
            <button
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className={`rounded-xl px-4 py-3 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 ${
                isActive
                  ? "bg-gradient-to-r from-violet-500 to-indigo-600 text-white shadow-lg"
                  : "text-zinc-500 hover:bg-zinc-100/70 dark:text-zinc-400 dark:hover:bg-white/10"
              }`}
            >
              <p className="text-sm font-medium uppercase tracking-wide">
                {item.title}
              </p>
              <p className="text-xs text-white/80 dark:text-white/60">
                {item.summary}
              </p>
            </button>
          );
        })}
      </div>
      <article className="flex flex-col justify-center gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-900/90 to-zinc-900/80 px-10 py-12 text-white shadow-[0_40px_120px_-60px_rgba(54,15,129,0.8)]">
        <h3 className="text-sm font-medium uppercase tracking-[0.28em] text-violet-300">
          Adaptive Flow
        </h3>
        <div>
          <h4 className="text-3xl font-semibold tracking-tight">
            {active?.title}
          </h4>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            {active?.details}
          </p>
        </div>
        <p className="text-sm text-white/50">
          Every step is orchestrated in real time — re-optimizing the experience
          in milliseconds as signals arrive.
        </p>
      </article>
    </section>
  );
}
