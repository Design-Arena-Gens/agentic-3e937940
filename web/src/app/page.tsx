import Link from "next/link";
import { FeatureCard } from "@/components/FeatureCard";
import { Timeline } from "@/components/Timeline";
import { CaseStudyCarousel } from "@/components/CaseStudyCarousel";
import { FAQ } from "@/components/FAQ";

const features = [
  {
    icon: "🧭",
    title: "Universal Signal Graph",
    subtitle: "Sense",
    description:
      "Ingest granular telemetry across every channel, auto-normalize semantics, and stitch identities into a living graph that learns with each interaction.",
  },
  {
    icon: "🧠",
    title: "Decisioning Brain",
    subtitle: "Predict",
    description:
      "Blend causal inference with reinforcement learning to determine the next-best-action for every individual journey, measured down to the millisecond.",
  },
  {
    icon: "⚡",
    title: "Experience Orchestrator",
    subtitle: "Act",
    description:
      "Deploy adaptive flows across web, product, and lifecycle touchpoints through one API — Yyy syncs the copy, design, and incentives automatically.",
  },
  {
    icon: "📈",
    title: "Compounding Intelligence",
    subtitle: "Optimize",
    description:
      "Continuously experiment with self-tuning guardrails, reveal uplift by segment, and broadcast trusted metrics to downstream dashboards instantly.",
  },
];

const timelineItems = [
  {
    id: "sense",
    title: "Sense every signal",
    summary: "Consolidate live telemetry in minutes.",
    details:
      "Yyy establishes a bi-directional data plane with your stack, normalizing schema, resolving identities, and enriching the experience graph with fresh context every 200ms.",
  },
  {
    id: "predict",
    title: "Predict adaptive intent",
    summary: "Pair cohort insights with live state.",
    details:
      "The decisioning brain combines causal inference, experimentation memories, and short-term signals to anticipate user intent before the friction shows up.",
  },
  {
    id: "act",
    title: "Act with precision",
    summary: "Launch multi-channel experiences.",
    details:
      "Trigger orchestrations across product surfaces, lifecycle comms, and sales nudges with a single orchestration blueprint that enforces compliance and brand tone.",
  },
  {
    id: "learn",
    title: "Learn and amplify",
    summary: "Let feedback loops self-tune.",
    details:
      "Closed-loop measurement calibrates uplift with revenue, retention, and sentiment baselines to auto-promote winning treatments and deprecate noisy experiments.",
  },
];

const caseStudies = [
  {
    id: "nebulon",
    company: "Nebulon Cloud",
    metric: "41% net retention uplift in one quarter",
    description:
      "Nebulon unified their post-onboarding journeys, integrating telemetry from support, product analytics, and CRM in under two weeks.",
    quote:
      "We sunset five bespoke playbooks and let Yyy orchestrate the experience dynamically. Our CSAT ticked up while the team finally focused on strategy again.",
    author: "Amina Cray",
    role: "VP Lifecycle, Nebulon",
  },
  {
    id: "solace",
    company: "Solace Banking",
    metric: "3.2x conversion to funded accounts",
    description:
      "Regulated onboarding workflows now respond in real time to countless data permutations, clearing compliance while amplifying personalization.",
    quote:
      "Yyy handled the orchestration logic we could never maintain ourselves. Our legal and growth teams see the same single source of truth.",
    author: "Marcus Howe",
    role: "Head of Growth, Solace",
  },
  {
    id: "helix",
    company: "Helix Bio",
    metric: "22% faster research collaboration cycles",
    description:
      "Helix connected lab telemetry, documentation signals, and partner communications to keep project milestones humming without manual intervention.",
    quote:
      "We layer Yyy on top of our scientific stack. The adaptive nudges it generates keep cross-functional projects moving with zero nagging.",
    author: "Dr. Nisha Patel",
    role: "Chief Collaboration Officer, Helix",
  },
];

const faqItems = [
  {
    question: "How quickly can we connect our existing stack?",
    answer:
      "Most teams launch their first adaptive journey in under 14 days. Our connectors map to your warehouses, CDPs, analytics, and marketing tools without rewriting pipelines.",
  },
  {
    question: "Can Yyy coexist with our experimentation tools?",
    answer:
      "Yes. Yyy ingests results from Optimizely, LaunchDarkly, in-house experiment frameworks, and more to build causal memories that inform each next-best-action.",
  },
  {
    question: "How do you keep experiences compliant?",
    answer:
      "Policy guardrails are built into every orchestration. You can define jurisdictional, industry, or customer-specific constraints that the decisioning brain respects automatically.",
  },
  {
    question: "What does implementation support look like?",
    answer:
      "A dedicated experience architect pairs with your RevOps, Product, and Data leads to configure the graph, run validation sprints, and certify your first adaptive playbook.",
  },
];

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      <header className="relative z-10 px-6 pt-10 sm:px-12 lg:px-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-white/20 px-6 py-3 text-sm text-white backdrop-blur">
          <span className="font-semibold tracking-wide">Yyy</span>
          <nav className="hidden gap-6 sm:flex">
            <Link href="#features" className="hover:text-indigo-200">
              Capabilities
            </Link>
            <Link href="#workflow" className="hover:text-indigo-200">
              Flow
            </Link>
            <Link href="#stories" className="hover:text-indigo-200">
              Proof
            </Link>
            <Link href="#faq" className="hover:text-indigo-200">
              FAQ
            </Link>
          </nav>
          <Link
            href="#contact"
            className="rounded-full bg-white px-4 py-2 font-semibold text-indigo-600 transition hover:bg-indigo-100"
          >
            Talk with us
          </Link>
        </div>
      </header>

      <main className="relative z-10 flex-1 pb-24">
        <section className="mx-auto mt-20 flex max-w-6xl flex-col gap-12 rounded-[42px] p-10 sm:p-16 lg:flex-row lg:items-center lg:gap-20 hero-grid text-white">
          <div className="space-y-8 lg:max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm font-medium uppercase tracking-[0.32em] text-indigo-200">
              Adaptive Experience Cloud
            </span>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Orchestrate every moment your customers feel.
            </h1>
            <p className="text-lg leading-relaxed text-indigo-100/80">
              Yyy fuses telemetry, experimentation, and creative delivery into a
              single adaptive brain that launches personalized journeys in
              minutes — and keeps them compounding forever.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="#demo"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-indigo-600 shadow-lg shadow-indigo-500/30 transition hover:shadow-xl"
              >
                Launch the demo
              </Link>
              <Link
                href="#architecture"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Explore architecture
              </Link>
            </div>
            <div className="grid gap-6 rounded-3xl bg-white/10 p-6 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.28em] text-white/60">
                Trusted signals
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="space-y-1">
                  <p className="text-sm text-white/60">Time to Launch</p>
                  <p className="text-3xl font-semibold text-white">12 days</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-white/60">Average Lift</p>
                  <p className="text-3xl font-semibold text-white">+38%</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-white/60">Regions Secured</p>
                  <p className="text-3xl font-semibold text-white">18</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex w-full max-w-md flex-col gap-6 rounded-[36px] bg-white/10 p-8 backdrop-blur">
            <div className="glass-panel rounded-[28px] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-indigo-500">
                Experience Graph
              </p>
              <p className="mt-3 text-lg leading-relaxed text-slate-700">
                Every event streams into the Yyy experience graph, forming
                adaptive cohorts that trigger the right micro-journey in real
                time.
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-slate-600">
                <span className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                  • Behavioral telemetry
                </span>
                <span className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                  • Experiment memories
                </span>
                <span className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                  • Revenue streams
                </span>
                <span className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                  • Creative playbooks
                </span>
              </div>
            </div>
            <div className="glass-panel-dark rounded-[28px] p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-indigo-200">
                Instant clarity
              </p>
              <p className="mt-3 text-lg text-white/80">
                Observe experience-level metrics in a single command center with
                shared context across Product, Growth, and Revenue teams.
              </p>
              <div className="mt-6 flex items-center justify-between text-sm text-white/70">
                <div>
                  <p className="text-xl font-semibold text-white">98.2%</p>
                  <p>Proactive resolution</p>
                </div>
                <div>
                  <p className="text-xl font-semibold text-white">6.4x</p>
                  <p>Experiment velocity</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="mx-auto mt-28 max-w-6xl space-y-12 px-6 sm:px-12"
        >
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
              The adaptive stack that replaces five point solutions.
            </h2>
            <p className="text-lg text-zinc-600">
              Built for teams that expect nuanced control, verifiable uplift,
              and velocity that keeps launching every week.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </section>

        <section
          id="workflow"
          className="mx-auto mt-28 max-w-6xl space-y-12 px-6 sm:px-12"
        >
          <div className="space-y-4">
            <span className="text-sm font-semibold uppercase tracking-[0.32em] text-indigo-500">
              Flow
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
              A signal-to-experience pipeline with compounding feedback loops.
            </h2>
            <p className="text-lg text-zinc-600">
              Follow an adaptive playbook as it learns in real time. Click to
              explore how each stage evolves across the lifecycle.
            </p>
          </div>
          <Timeline items={timelineItems} />
        </section>

        <section
          id="stories"
          className="mx-auto mt-28 max-w-6xl space-y-10 px-6 sm:px-12"
        >
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
              Proven with operators who move fast in complex environments.
            </h2>
            <p className="text-lg text-zinc-600">
              From high-growth SaaS to regulated industries, Yyy blends into
              your ecosystem and keeps every action measurable.
            </p>
          </div>
          <CaseStudyCarousel items={caseStudies} />
        </section>

        <section
          id="architecture"
          className="mx-auto mt-28 max-w-6xl space-y-10 px-6 sm:px-12"
        >
          <div className="rounded-3xl border border-zinc-200 bg-white/90 p-10 shadow-[0_30px_120px_-80px_rgba(15,23,42,0.8)] backdrop-blur">
            <div className="grid gap-10 lg:grid-cols-[360px_1fr]">
              <div className="space-y-4">
                <span className="text-sm font-semibold uppercase tracking-[0.32em] text-indigo-500">
                  Architecture
                </span>
                <h3 className="text-3xl font-semibold tracking-tight text-zinc-900">
                  Modular by design. Opinionated where it matters.
                </h3>
                <p className="text-lg leading-relaxed text-zinc-600">
                  Every module plugs into your existing sources of truth. Choose
                  the capabilities you need today and layer more as your team
                  scales.
                </p>
              </div>
              <div className="grid gap-6 text-sm text-zinc-600 sm:grid-cols-2">
                <div className="rounded-2xl border border-zinc-200/80 bg-white p-5">
                  <h4 className="text-lg font-semibold text-zinc-900">
                    Signal Plane
                  </h4>
                  <p className="mt-2">
                    Native connectors for warehouses, product analytics, support
                    desks, billing systems, and more. Streamed in via Webhooks,
                    CDC, or SDK.
                  </p>
                </div>
                <div className="rounded-2xl border border-zinc-200/80 bg-white p-5">
                  <h4 className="text-lg font-semibold text-zinc-900">
                    Intelligence Layer
                  </h4>
                  <p className="mt-2">
                    Reinforcement learning policies, causal inference, and model
                    governance built into a unified brain with human override
                    controls.
                  </p>
                </div>
                <div className="rounded-2xl border border-zinc-200/80 bg-white p-5">
                  <h4 className="text-lg font-semibold text-zinc-900">
                    Orchestration Mesh
                  </h4>
                  <p className="mt-2">
                    Declarative playbooks mapped to channels including web,
                    mobile, email, chat, and sales enablement surfaces.
                  </p>
                </div>
                <div className="rounded-2xl border border-zinc-200/80 bg-white p-5">
                  <h4 className="text-lg font-semibold text-zinc-900">
                    Outcomes Console
                  </h4>
                  <p className="mt-2">
                    Real-time, trusted metrics with AI copilot insights and
                    automated reporting to stakeholders and downstream systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="faq"
          className="mx-auto mt-28 max-w-6xl space-y-10 px-6 sm:px-12"
        >
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
              Your questions, answered.
            </h2>
            <p className="text-lg text-zinc-600">
              Can’t find what you’re looking for? Our experience architects will
              get you what you need within a day.
            </p>
          </div>
          <FAQ items={faqItems} />
        </section>

        <section
          id="contact"
          className="mx-auto mt-28 max-w-5xl rounded-3xl border border-indigo-200/60 bg-indigo-50 p-10 text-center shadow-[0_40px_160px_-80px_rgba(99,102,241,0.8)]"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-indigo-900">
            Ready to orchestrate experiences that never plateau?
          </h2>
          <p className="mt-4 text-lg text-indigo-700">
            Share a signal map, and we&apos;ll return your personalized launch
            plan within 48 hours.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:hello@yyy.cloud"
              className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-500"
            >
              hello@yyy.cloud
            </a>
            <Link
              href="#demo"
              className="inline-flex items-center justify-center rounded-full border border-indigo-600 px-6 py-3 font-semibold text-indigo-600 transition hover:bg-indigo-100"
            >
              Book a working session
            </Link>
          </div>
        </section>
      </main>

      <footer className="relative z-10 mt-24 border-t border-white/20 bg-white/10 px-6 py-8 text-sm text-white/70 backdrop-blur sm:px-12 lg:px-20">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Yyy Labs. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="#security" className="hover:text-white">
              Security
            </Link>
            <Link href="#status" className="hover:text-white">
              Status
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
