import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Shield } from "lucide-react";

export default function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "$499",
      sub: "/mo",
      tagline: "Get visibility fast",
      bullets: ["Single workflow dashboard", "Core metrics (aging, conversion)", "CSV/Excel exports", "Email support"],
      cta: "Request access",
      featured: false,
    },
    {
      name: "Scale",
      price: "$1,499",
      sub: "/mo",
      tagline: "Run ops like a machine",
      bullets: ["Multiple workflows", "Role-based permissions", "Automations + alerts", "Custom export templates", "Implementation support"],
      cta: "Book a demo",
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      sub: "",
      tagline: "Full control tower",
      bullets: ["Advanced governance", "SSO & audit trails", "Dedicated success", "Custom integrations", "SLAs & priority support"],
      cta: "Talk to us",
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 pt-16">
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Pricing</h2>
        <p className="mt-2 max-w-2xl text-white/70">
          Choose the level of structure and support you want. Upgrade as your workflows expand.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {tiers.map((t) => (
          <Card
            key={t.name}
            className={`rounded-3xl border-white/10 bg-white/5 text-white ${t.featured ? "ring-1 ring-purple-300/40" : ""}`}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">{t.name}</CardTitle>
                {t.featured && (
                  <Badge className="bg-purple-500/20 text-purple-100 hover:bg-purple-500/20">Most popular</Badge>
                )}
              </div>
              <CardDescription className="text-white/60">{t.tagline}</CardDescription>
              <div className="mt-3 flex items-end gap-2">
                <div className="text-3xl font-semibold">{t.price}</div>
                <div className="pb-1 text-sm text-white/60">{t.sub}</div>
              </div>
            </CardHeader>

            <CardContent>
              <div className="space-y-3">
                {t.bullets.map((b) => (
                  <div key={b} className="flex items-start gap-2 text-sm text-white/70">
                    <Check className="mt-0.5 h-4 w-4 text-purple-200" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <Button
                className={`mt-6 w-full ${
                  t.featured ? "bg-white text-black hover:bg-white/90" : "border border-white/15 bg-white/5 text-white hover:bg-white/10"
                }`}
                variant={t.featured ? "default" : "secondary"}
                asChild
              >
                <a href="#contact">{t.cta}</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-purple-200" />
            <span>Need strict governance, SSO, or custom integrations? Enterprise is built for that.</span>
          </div>
          <Button variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white/10" asChild>
            <a href="#contact">Talk to sales</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
