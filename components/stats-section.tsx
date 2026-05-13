export function StatsSection() {
  return (
    <section className="bg-zinc-50 py-16">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <p className="max-w-md text-lg text-zinc-600">
            Turn any complex web application into a guided, measurable, self-improving user experience.
          </p>
          <div className="flex gap-16">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                Time to First Guide
              </p>
              <p className="mt-1 text-5xl font-bold text-zinc-900">Minutes</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                Guide Maintenance
              </p>
              <p className="mt-1 text-5xl font-bold text-zinc-900">Auto</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
