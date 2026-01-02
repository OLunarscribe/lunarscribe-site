import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Process() {
  const steps = [
    {
      step: "1",
      title: "Map your workflow",
      desc: "We capture your stages, handoffs, owners, and data fields so execution is explicit.",
    },
    {
      step: "2",
      title: "Connect and consolidate",
      desc: "Pull data from your existing tools and normalize it into one source of truth.",
    },
    {
      step: "3",
      title: "Launch dashboards and automation",
      desc: "Expose bottlenecks, enforce ownership, and automate follow-ups so work actually moves.",
    },
  ];

  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-6 pt-16">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            How it works
          </h2>
          <p className="mt-2 max-w-2xl text-white/70">
            Simple, fast, and focused on outcomes — not busywork.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {steps.map((s) => (
          <Card
            key={s.step}
            className="rounded-3xl border-white/10 bg-white/5 text-white"
          >
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/10">
                  <span className="text-sm font-semibold">{s.step}</span>
                </div>
                <div>
                  <CardTitle className="text-base">{s.title}</CardTitle>
                  <CardDescription className="text-white/60">
                    {s.desc}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
