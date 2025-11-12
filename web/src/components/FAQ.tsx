"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  items: FAQItem[];
};

export function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="grid gap-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg dark:border-white/10 dark:bg-zinc-900"
          >
            <button
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
            >
              <span className="text-lg font-semibold text-zinc-900 dark:text-white">
                {item.question}
              </span>
              <span className="text-3xl leading-none text-violet-500">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden px-6 pb-6 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
