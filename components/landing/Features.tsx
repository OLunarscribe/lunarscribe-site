import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Link2, Clock, Shield, FileDown, Mail } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Operational dashboards",
      desc: "Live views for pipeline, workload, blockers, aging, and SLA risk.",
    },
    {
      icon: <Link2 className="h-5 w-5" />,
      title: "Integrations & normalization",
      desc: "Bring in data from your tools, clean it, and keep it consistent.",
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Time-in-stage tracking",
      desc: "Expose bottlenecks automatically by owner and stage.",
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Permissions & governance",
      desc: "Role-based access, approvals, and change history as you scale.",
    },
    {
      icon: <FileDown className="h-5 w-5" />,
      title: "Exports leadership trusts",
      desc: "Excel-ready exports for finance, ops, and leadership reporting.",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Automated follow-ups",
      desc: "Nudges for overdue tasks, missing fields, and stalled work.",
    },
  ];

  return (
    <section id="features" className="mx-auto max-w-6xl px-6 pt-16">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Features
          </h2>
          <p className="mt-2 max-w-2xl text-white/70">
            Everything you need to run execution: visibility, structure, automation, and trusted exports.
          </p>
        </div>
        <Badge className="w-fit bg-white/10 text-white/70 hover:bg-white/10">
          Built for ops
        </Badge>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {features.map((f) => (
          <Card key={f.title} className="rounded-3xl border-white/10 bg-white/5 text-white">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-purple-500/15 ring-1 ring-white/10">
                  {f.icon}
                </div>
                <CardTitle className="text-base">{f.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-white/60">{f.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
