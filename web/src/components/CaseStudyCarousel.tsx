"use client";

import { useMemo, useState } from "react";

type CaseStudy = {
  id: string;
  company: string;
  metric: string;
  description: string;
  quote: string;
  author: string;
  role: string;
};

type CaseStudyCarouselProps = {
  items: CaseStudy[];
};

export function CaseStudyCarousel({ items }: CaseStudyCarouselProps) {
  const orderedItems = useMemo(() => items, [items]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? orderedItems.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === orderedItems.length - 1 ? 0 : prev + 1,
    );
  };

  const active = orderedItems[activeIndex];

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(129,140,248,0.4),transparent_55%)]" />
      <div className="relative grid gap-12 px-8 py-12 sm:px-12 lg:grid-cols-[1fr_320px] lg:items-center">
        <div className="flex flex-col gap-5">
          <div className="text-sm font-medium uppercase tracking-[0.28em] text-indigo-300">
            Signal-Proven Impact
          </div>
          <h3 className="text-4xl font-semibold tracking-tight lg:max-w-xl">
            {active.company} unlocked {active.metric} with Yyy&apos;s adaptive
            orchestration
          </h3>
          <p className="text-lg leading-relaxed text-white/70">
            {active.description}
          </p>
          <blockquote className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-base leading-relaxed text-white/80">
              “{active.quote}”
            </p>
            <footer className="mt-4 text-sm text-white/50">
              {active.author} · {active.role}
            </footer>
          </blockquote>
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              className="flex size-12 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-indigo-400 hover:bg-indigo-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              aria-label="Previous case study"
            >
              ◀
            </button>
            <button
              onClick={handleNext}
              className="flex size-12 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-indigo-400 hover:bg-indigo-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              aria-label="Next case study"
            >
              ▶
            </button>
            <div className="ml-4 flex items-center gap-2">
              {orderedItems.map((item, index) => (
                <span
                  key={item.id}
                  className={`h-1.5 w-6 rounded-full transition ${
                    index === activeIndex
                      ? "bg-white"
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/10 p-6">
          <h4 className="text-sm font-semibold uppercase tracking-[0.32em] text-white/70">
            Signals we fused
          </h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li>• Behavioral telemetry across web, mobile, and in-product flows</li>
            <li>• Real-time revenue and retention baselines</li>
            <li>• Experimentation streams from legacy tools</li>
            <li>• Contextual sentiment from support transcripts</li>
          </ul>
          <p className="text-sm text-white/50">
            Yyy synchronizes every event into a universal experience graph to
            continuously learn and deploy the next-best interaction automatically.
          </p>
        </div>
      </div>
    </section>
  );
}
