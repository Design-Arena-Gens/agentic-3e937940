import { ReactNode } from "react";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  subtitle: string;
  description: string;
};

export function FeatureCard({
  icon,
  title,
  subtitle,
  description,
}: FeatureCardProps) {
  return (
    <article className="relative flex h-full flex-col gap-4 rounded-3xl border border-white/20 bg-white/70 p-8 shadow-[0_20px_80px_-40px_rgba(27,33,54,0.4)] backdrop-blur transition hover:-translate-y-1 hover:border-violet-500/60 hover:shadow-[0_24px_90px_-40px_rgba(109,40,217,0.5)] dark:border-white/10 dark:bg-zinc-900/70">
      <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 text-white shadow-lg">
        {icon}
      </span>
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-violet-600">
          {subtitle}
        </p>
        <h3 className="mt-1 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
          {title}
        </h3>
      </div>
      <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
    </article>
  );
}
