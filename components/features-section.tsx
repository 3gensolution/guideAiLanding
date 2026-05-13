import { Sparkles, RefreshCw, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI-assisted creation",
    description: "Generate in-app guides with AI in minutes, not weeks",
  },
  {
    icon: RefreshCw,
    title: "Auto-healing guides",
    description: "Guides stay current as your UI changes automatically",
  },
  {
    icon: BarChart3,
    title: "Friction analytics",
    description: "See exactly where users get stuck and fix it in-product",
  },
];

export function FeaturesSection() {
  return (
    <section className="bg-zinc-50 py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
        <div className="mb-4 flex items-center gap-2">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-zinc-200">
            <Sparkles className="h-4 w-4 text-zinc-600" />
          </span>
          <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">
            In-App Guides
          </span>
        </div>
        <h2 className="text-3xl font-bold text-zinc-900 sm:text-4xl">
          Faster to launch. Lower to maintain.
        </h2>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 transition group-hover:bg-violet-50">
                <feature.icon className="h-5 w-5 text-zinc-600 transition group-hover:text-violet-600" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
