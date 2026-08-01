const PROCESS = [
  "Discovery",
  "Architecture",
  "Build",
  "Test",
  "Deploy",
] as const;

export function ProcessSection() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
        How I ship
      </p>
      <div className="flex flex-wrap items-center gap-2">
        {PROCESS.map((step, i) => (
          <div key={step} className="flex items-center gap-2">
            <span className="text-sm font-medium px-3 py-2 rounded-lg border border-border/50 bg-card">
              {step}
            </span>
            {i < PROCESS.length - 1 && (
              <span className="text-muted-foreground text-sm" aria-hidden>
                →
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
