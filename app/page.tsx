```tsx
'use client';

import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Check,
  Shield,
  Zap,
  BarChart3,
  Workflow,
  Clock,
  FileDown,
  Link2,
  Lock,
  Mail,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

function ExecutionOverviewSlider() {
  const slides = [
    {
      title: "Execution Overview",
      subtitle: "Live",
      cards: [
        { label: "Pipeline", meta: "Owner coverage: 92%", progress: 0.68 },
        { label: "Workload", meta: "Capacity used: 74%", progress: 0.74 },
        { label: "Aging", meta: "Over SLA: 6 items", progress: 0.42 },
        { label: "Bottlenecks", meta: "Top stage: Approvals", progress: 0.58 },
      ],
      actions: [
        "Assign owner: 7 items",
        "Resolve blockers: 3 items",
        "Export weekly report",
      ],
    },
    {
      title: "Pipeline Health",
      subtitle: "This week",
      cards: [
        { label: "New", meta: "Created: 41", progress: 0.72 },
        { label: "In Progress", meta: "Active: 28", progress: 0.55 },
        { label: "Blocked", meta: "Needs input: 5", progress: 0.25 },
        { label: "Closed", meta: "Completed: 19", progress: 0.62 },
      ],
      actions: ["Review blocked: 5 items", "Rebalance workload", "Send owner nudges"],
    },
    {
      title: "Ops Metrics",
      subtitle: "Rolling 30d",
      cards: [
        { label: "Time-in-stage", meta: "Median: 4.1 days", progress: 0.61 },
        { label: "Throughput", meta: "Per week: 23", progress: 0.66 },
        { label: "Conversion", meta: "Stage to stage", progress: 0.53 },
        { label: "Aging Risk", meta: "Rising: 9 items", progress: 0.36 },
      ],
      actions: ["Open bottleneck report", "Export finance view", "Audit missing fields"],
    },
  ] as const;

  const [index, setIndex] = useState(0);

  // Auto-rotate
  useEffect(() => {
    const t = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5500);
    return () => window.clearInterval(t);
  }, [slides.length]);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  const slide = slides[index];

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-purple-900/20">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm font-semibold">{slide.title}</div>
          <div className="text-xs text-white/60">{slide.subtitle}</div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10"
            aria-label="Previous"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={next}
            className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10"
            aria-label="Next"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <div className="flex gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition ${
                i === index ? "bg-purple-200" : "bg-white/20 hover:bg-white/30"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <div className="text-[11px] text-white/60">
          Slide {index + 1}/{slides.length}
        </div>
      </div>

      <div className="mt-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -18 }}
            transition={{ duration: 0.28 }}
          >
            <div className="grid gap-3 md:grid-cols-2">
              {slide.cards.map((c) => (
                <div
                  key={c.label}
                  className="rounded-2xl border border-white/10 bg-black/20 p-4"
                >
                  <div className="text-xs text-white/60">{c.label}</div>
                  <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-2 rounded-full bg-purple-300/70"
                      style={{
                        width: `${Math.max(0, Math.min(1, c.progress)) * 100}%`,
                      }}
                    />
                  </div>
                  <div className="mt-3 text-xs text-white/60">{c.meta}</div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="text-xs text-white/60">Next Actions</div>
              <div className="mt-2 space-y-2">
                {slide.actions.map((x) => (
                  <div
                    key={x}
                    className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2"
                  >
                    <div className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-purple-200" />
                      <span>{x}</span>
                    </div>
                    <Badge className="bg-white/10 text-white/80 hover:bg-white/10">
                      Run
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function LunarscribeLanding() {
  const [lead, setLead] = useState({ name: "", email: "", company: "", message: "" });

  const quickStats = useMemo(
    () => [
      { label: "Unified operating picture", value: "1 dashboard" },
      { label: "Faster handoffs", value: "Less chaos" },
      { label: "Exportable", value: "Excel-ready" },
      { label: "Built for ops", value: "Not vanity" },
    ],
    []
  );

  const benefits = useMemo(
    () => [
      {
        icon: <Workflow className="h-5 w-5" />,
        title: "Your control tower for execution",
        desc: "One place to see pipeline, status, owners, blockers, and next actions — without duct-taping tools together.",
      },
      {
        icon: <BarChart3 className="h-5 w-5" />,
        title: "Metrics that actually drive decisions",
        desc: "Time-in-stage, throughput, conversion, aging, and accountability — built-in, not bolted on.",
      },
      {
        icon: <FileDown className="h-5 w-5" />,
        title: "Export what you need, when you need it",
        desc: "Generate clean exports for finance, ops, and leadership — stay flexible without losing structure.",
      },
      {
        icon: <Lock className="h-5 w-5" />,
        title: "Permissioned, auditable workflows",
        desc: "Roles, approvals, and a clear trail of who changed what — so operations stays tight as you scale.",
      },
    ],
    []
  );

  const process = useMemo(
    () => [
      {
        step: "1",
        title: "Map your workflow",
        desc: "We capture your stages, handoffs, and data model — what you track, who owns it, and how it moves.",
      },
      {
        step: "2",
        title: "Connect + consolidate",
        desc: "Pull data from your current stack and standardize it into one source of truth.",
      },
      {
        step: "3",
        title: "Launch dashboards + automation",
        desc: "Roll out the control tower, exports, and automated nudges so your team executes consistently.",
      },
    ],
    []
  );

  const features = useMemo(
    () => [
      { icon: <Zap className="h-5 w-5" />, title: "Operational dashboards", desc: "Live views for pipeline, workload, blockers, aging, and SLA risk." },
      { icon: <Link2 className="h-5 w-5" />, title: "Integrations & data normalization", desc: "Bring in data from your tools, clean it, and keep it consistent." },
      { icon: <Clock className="h-5 w-5" />, title: "Time-in-stage tracking", desc: "Automatically calculate bottlenecks and enforce accountability by owner and stage." },
      { icon: <Shield className="h-5 w-5" />, title: "Permissions & governance", desc: "Role-based access, approvals, and change history." },
      { icon: <FileDown className="h-5 w-5" />, title: "Exports that leadership trusts", desc: "Pull clean, structured data into Excel or your reporting layer." },
      { icon: <Mail className="h-5 w-5" />, title: "Automated follow-ups", desc: "Nudges for overdue tasks, missing fields, and stalled work — so nothing silently dies." },
    ],
    []
  );

  const tiers = useMemo(
    () => [
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
    ],
    []
  );

  const testimonials = useMemo(
    () => [
      {
        name: "Ops Lead",
        role: "Multi-location services",
        quote: "We finally have one place to see what’s stuck, who owns it, and what to do next. It killed the spreadsheet chaos.",
      },
      {
        name: "Founder",
        role: "Field + back office",
        quote: "Exports are clean and consistent. Finance stopped arguing about numbers because the source of truth is obvious.",
      },
      {
        name: "Project Manager",
        role: "High-volume ops",
        quote: "Time-in-stage changed everything. We found the real bottleneck in week one and fixed it.",
      },
    ],
    []
  );

  const faqs = useMemo(
    () => [
      {
        q: "What exactly is Lunarscribe?",
        a: "Lunarscribe is an operations control tower — dashboards, workflow structure, and automation that gives leadership a clear view of execution and performance.",
      },
      {
        q: "Is this a CRM replacement?",
        a: "Not necessarily. If your CRM is strong for sales but weak for operations, Lunarscribe becomes the layer that standardizes data, tracks execution, and generates trusted exports.",
      },
      {
        q: "How fast can we launch?",
        a: "Most teams can get a first dashboard live quickly once the workflow and data fields are defined. Complexity depends on integrations and how many workflows you want live on day one.",
      },
      {
        q: "Can we export to Excel?",
        a: "Yes. Exports are a core feature — you can generate CSV/Excel-ready outputs for reporting, billing, and leadership updates.",
      },
      {
        q: "How does access control work?",
        a: "Role-based permissions let you control who can view, edit, approve, and export — with an audit trail for changes.",
      },
    ],
    []
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Replace with your backend / CRM hook.
    // eslint-disable-next-line no-console
    console.log("Lead submitted", lead);
    alert("Submitted. We'll follow up shortly.");
    setLead({ name: "", email: "", company: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-[#05010f] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-purple-600/25 blur-3xl" />
        <div className="absolute top-24 -left-24 h-[420px] w-[420px] rounded-full bg-fuchsia-500/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-indigo-500/15 blur-3xl" />
      </div>

      {/* Nav */}
      <header className="relative z-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
              <Sparkles className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-wide">Lunarscribe</div>
              <div className="text-xs text-white/60">Operations Control Tower</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a className="hover:text-white" href="#benefits">Benefits</a>
            <a className="hover:text-white" href="#how-it-works">Process</a>
            <a className="hover:text-white" href="#features">Features</a>
            <a className="hover:text-white" href="#pricing">Pricing</a>
            <a className="hover:text-white" href="#faq">FAQ</a>
          </nav>

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              className="hidden md:inline-flex border border-white/10 bg-white/5 hover:bg-white/10"
              asChild
            >
              <a href="#contact">Get a quote</a>
            </Button>
            <Button className="bg-white text-black hover:bg-white/90" asChild>
              <a href="#contact">Book a demo</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="relative z-10">
        <section className="mx-auto max-w-6xl px-6 pt-12 md:pt-16">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
              >
                <Badge className="bg-purple-500/20 text-purple-100 hover:bg-purple-500/20">New</Badge>
                Ship faster with fewer tools
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.05 }}
                className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl"
              >
                Turn messy execution into a{" "}
                <span className="text-purple-200">single source of truth</span>.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="mt-4 max-w-xl text-base leading-relaxed text-white/70"
              >
                Lunarscribe is an operations control tower: workflow structure, dashboards, and automation that makes
                ownership obvious, bottlenecks visible, and reporting effortless.
              </motion.p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button className="bg-white text-black hover:bg-white/90" asChild>
                  <a href="#contact">Book a demo</a>
                </Button>
                <Button
                  variant="outline"
                  className="border-white/15 bg-white/5 text-white hover:bg-white/10"
                  asChild
                >
                  <a href="#pricing">See pricing</a>
                </Button>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {quickStats.map((s) => (
                  <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-sm font-semibold">{s.value}</div>
                    <div className="mt-1 text-xs text-white/60">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-3 text-xs text-white/60">
                <Shield className="h-4 w-4" />
                <span>Permissioned, auditable, exportable.</span>
              </div>
            </div>

            {/* Visual (Slider) */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="relative"
            >
              <ExecutionOverviewSlider />
              <div className="pointer-events-none absolute -bottom-6 -right-6 hidden h-24 w-24 rounded-3xl bg-purple-500/20 blur-2xl md:block" />
            </motion.div>
          </div>

          {/* Trust logos */}
          <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-xs text-white/60">Trusted by operators who care about execution</div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-white/70 sm:grid-cols-4">
              {["Field Ops", "Back Office", "Leadership", "Finance"].map((x) => (
                <div
                  key={x}
                  className="flex items-center justify-center rounded-2xl border border-white/10 bg-black/10 p-3"
                >
                  <span className="text-sm">{x}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section id="benefits" className="mx-auto max-w-6xl px-6 pt-16 md:pt-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Designed for real operations — not pretty reports.
              </h2>
              <p className="mt-3 max-w-xl text-white/70">
                If your team lives in spreadsheets, Slack, and five tools that don’t agree, you don’t have a system. You
                have noise. Lunarscribe turns execution into a controlled, measurable workflow.
              </p>
              <div className="mt-6 space-y-3 text-sm text-white/70">
                {["Make ownership unavoidable", "Expose bottlenecks instantly", "Standardize data fields", "Export clean reporting"].map(
                  (x) => (
                    <div key={x} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 text-purple-200" />
                      <span>{x}</span>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="grid gap-4">
              {benefits.map((b) => (
                <Card key={b.title} className="rounded-3xl border-white/10 bg-white/5 text-white">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-purple-500/15 ring-1 ring-white/10">
                        {b.icon}
                      </div>
                      <div>
                        <CardTitle className="text-base">{b.title}</CardTitle>
                        <CardDescription className="text-white/60">{b.desc}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="how-it-works" className="mx-auto max-w-6xl px-6 pt-16 md:pt-20">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">How it works</h2>
              <p className="mt-2 max-w-2xl text-white/70">
                Simple, fast, and focused on outcomes. You get a control tower that matches your workflow.
              </p>
            </div>
            <div className="hidden md:block">
              <Badge className="bg-white/10 text-white/70 hover:bg-white/10">Implementation-led</Badge>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {process.map((p) => (
              <Card key={p.step} className="rounded-3xl border-white/10 bg-white/5 text-white">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/10">
                      <span className="text-sm font-semibold">{p.step}</span>
                    </div>
                    <div>
                      <CardTitle className="text-base">{p.title}</CardTitle>
                      <CardDescription className="text-white/60">{p.desc}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mx-auto max-w-6xl px-6 pt-16 md:pt-20">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Features</h2>
              <p className="mt-2 max-w-2xl text-white/70">
                Everything you need to run execution: visibility, structure, automation, and trusted exports.
              </p>
            </div>
            <Button variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white/10" asChild>
              <a href="#contact">Get a walkthrough</a>
            </Button>
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

        {/* Pricing */}
        <section id="pricing" className="mx-auto max-w-6xl px-6 pt-16 md:pt-20">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Pricing</h2>
            <p className="mt-2 max-w-2xl text-white/70">
              Choose the level of structure and support you want. Upgrade as your workflows expand.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {tiers.map((t) => (
              <Card
                key={t.name}
                className={`rounded-3xl border-white/10 bg-white/5 text-white ${
                  t.featured ? "ring-1 ring-purple-300/40" : ""
                }`}
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
                      t.featured
                        ? "bg-white text-black hover:bg-white/90"
                        : "border border-white/15 bg-white/5 text-white hover:bg-white/10"
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

        {/* Testimonials */}
        <section id="testimonials" className="mx-auto max-w-6xl px-6 pt-16 md:pt-20">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">What operators say</h2>
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

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-6xl px-6 pt-16 md:pt-20">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">FAQ</h2>
              <p className="mt-2 max-w-xl text-white/70">
                If you want to move faster, keep your stack lean, and still get clean reporting — this is for you.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-2">
              <Accordion type="single" collapsible>
                {faqs.map((f, idx) => (
                  <AccordionItem key={f.q} value={`item-${idx + 1}`} className="border-white/10">
                    <AccordionTrigger className="px-4 text-left text-white">{f.q}</AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 text-white/70">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="rounded-3xl border-white/10 bg-white/5 text-white">
              <CardHeader>
                <CardTitle className="text-xl">Book a demo</CardTitle>
                <CardDescription className="text-white/60">
                  Tell us your workflow and what you need exported. We’ll show you the control tower.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={onSubmit} className="space-y-3">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Input
                      value={lead.name}
                      onChange={(e) => setLead((p) => ({ ...p, name: e.target.value }))}
                      placeholder="Name"
                      className="border-white/10 bg-black/20"
                    />
                    <Input
                      value={lead.company}
                      onChange={(e) => setLead((p) => ({ ...p, company: e.target.value }))}
                      placeholder="Company"
                      className="border-white/10 bg-black/20"
                    />
                  </div>
                  <Input
                    type="email"
                    value={lead.email}
                    onChange={(e) => setLead((p) => ({ ...p, email: e.target.value }))}
                    placeholder="Email"
                    className="border-white/10 bg-black/20"
                    required
                  />
                  <Textarea
                    value={lead.message}
                    onChange={(e) => setLead((p) => ({ ...p, message: e.target.value }))}
                    placeholder="What are you tracking today (stages, owners, exports)?"
                    className="min-h-[110px] border-white/10 bg-black/20"
                  />
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button className="bg-white text-black hover:bg-white/90" type="submit">
                      Submit
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="border-white/15 bg-white/5 text-white hover:bg-white/10"
                      onClick={() => setLead({ name: "", email: "", company: "", message: "" })}
                    >
                      Clear
                    </Button>
                  </div>
                  <div className="text-xs text-white/60">
                    By submitting, you agree to be contacted about Lunarscribe. No spam.
                  </div>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <Card className="rounded-3xl border-white/10 bg-white/5 text-white">
                <CardHeader>
                  <CardTitle className="text-base">What you get on the demo</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3 text-sm text-white/70">
                    {[
                      "Your workflow mapped into a clean model",
                      "A dashboard walkthrough",
                      "Export examples",
                      "Implementation plan",
                    ].map((x) => (
                      <div key={x} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 text-purple-200" />
                        <span>{x}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-3xl border-white/10 bg-white/5 text-white">
                <CardHeader>
                  <CardTitle className="text-base">Security & governance</CardTitle>
                  <CardDescription className="text-white/60">
                    Built for teams that care about accuracy and accountability.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 grid gap-3 text-sm text-white/70">
                  <div className="flex items-start gap-2">
                    <Lock className="mt-0.5 h-4 w-4 text-purple-200" />
                    <span>Role-based access control</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Shield className="mt-0.5 h-4 w-4 text-purple-200" />
                    <span>Audit trail & approvals (enterprise)</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-black/20">
          <div className="mx-auto max-w-6xl px-6 py-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-sm font-semibold">Lunarscribe</div>
                <div className="mt-1 text-xs text-white/60">Operations Control Tower</div>
              </div>
              <div className="flex flex-wrap gap-3 text-xs text-white/60">
                <a className="hover:text-white" href="#benefits">Benefits</a>
                <a className="hover:text-white" href="#how-it-works">Process</a>
                <a className="hover:text-white" href="#features">Features</a>
                <a className="hover:text-white" href="#pricing">Pricing</a>
                <a className="hover:text-white" href="#faq">FAQ</a>
              </div>
            </div>
            <div className="mt-8 text-xs text-white/50">
              © {new Date().getFullYear()} Lunarscribe. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
```
