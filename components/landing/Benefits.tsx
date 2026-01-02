import { Check } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Benefits() {
  const items = [
    {
      title: "Your control tower for execution",
      desc: "One place to see pipeline, owners, blockers, and next actions without duct-taping tools together.",
    },
    {
      title: "Metrics that drive decisions",
      desc: "Time-in-stage, throughput, conversion, and aging built in — not bolted on.",
    },
    {
      title: "Export what you need",
      desc: "Clean, Excel-ready exports for ops, finance, and leadership.",
    },
    {
      title: "Permissioned & auditable",
      desc: "Roles, approvals, and a clear trail of who changed what as you scale.",
    },
  ];

  return (
    <section id="benefits" className="mx-auto max-w-6xl px-6 pt-16 md:pt-20">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Designed for real operations — not pretty reports.
          </h2>
          <p className="mt-3 max-w-xl text-white/70">
            If your team lives in spreadsheets, Slack, and five tools that don’t agree,
            you don’t have a system. You have noise.
          </p>

          <div className="mt-6 space-y-3 text-sm text-white/70">
            {[
              "Make ownership unavoidable",
              "Expose bottlenecks instantly",
              "Standardize data fields",
              "Export clean reporting",
            ].map((x) => (
              <div key={x} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-purple-200" />
                <span>{x}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          {items.map((b) => (
            <Card key={b.title} className="rounded-3xl border-white/10 bg-white/5 text-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{b.title}</CardTitle>
                <CardDescription className="text-white/60">
                  {b.desc}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
