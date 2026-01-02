import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function Testimonials() {
  const testimonials = [
    { name: "Ops Lead", role: "Multi-location services", quote: "We finally have one place to see what’s stuck, who owns it, and what to do next. It killed the spreadsheet chaos." },
    { name: "Founder", role: "Field + back office", quote: "Exports are clean and consistent. Finance stopped arguing about numbers because the source of truth is obvious." },
    { name: "Project Manager", role: "High-volume ops", quote: "Time-in-stage changed everything. We found the real bottleneck in week one and fixed it." },
  ];

  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-6 pt-16">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">What operators say</h2>
      <p className="mt-2 max-w-2xl text-white/70">
        The point is simple: execution becomes visible, measurable, and consistent.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {testimonials.map((t) => (
          <Card key={t.name} className="rounded-3xl border-white/10 bg-white/5 text-white">
            <CardHeader>
              <CardTitle className="text-base">{t.name}</CardTitle>
              <CardDescription className="text-white/60">{t.role}</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-white/70">“{t.quote}”</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
