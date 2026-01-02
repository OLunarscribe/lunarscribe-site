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

/* ---------------------------------------------
   Execution Overview Slider
--------------------------------------------- */

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
      actions: [
        "Review blocked: 5 items",
        "Rebalance workload",
        "Send owner nudges",
      ],
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      5500
    );
    return () => clearInterval(t);
  }, []);

  const slide = slides[index];

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-purple-900/20">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm font-semibold">{slide.title}</div>
          <div className="text-xs text-white/60">{slide.subtitle}</div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() =>
              setIndex((i) => (i - 1 + slides.length) % slides.length)
            }
            className="h-9 w-9 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => setIndex((i) => (i + 1) % slides.length)}
            className="h-9 w-9 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.25 }}
          className="mt-4"
        >
          <div className="grid gap-3 md:grid-cols-2">
            {slide.cards.map((c) => (
              <div
                key={c.label}
                className="rounded-2xl border border-white/10 bg-black/20 p-4"
              >
                <div className="text-xs text-white/60">{c.label}</div>
                <div className="mt-2 h-2 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-2 bg-purple-300/70 rounded-full"
                    style={{ width: `${c.progress * 100}%` }}
                  />
                </div>
                <div className="mt-3 text-xs text-white/60">{c.meta}</div>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4">
            <div className="text-xs text-white/60">Next Actions</div>
            <div className="mt-2 space-y-2">
              {slide.actions.map((a) => (
                <div
                  key={a}
                  className="flex justify-between items-center rounded-xl bg-white/5 px-3 py-2"
                >
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-purple-200" />
                    {a}
                  </div>
                  <Badge className="bg-white/10">Run</Badge>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ---------------------------------------------
   Page
--------------------------------------------- */

export default function LunarscribeLanding() {
  return (
    <div className="min-h-screen bg-[#05010f] text-white">
      <main className="mx-auto max-w-6xl px-6 pt-16">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <Badge className="bg-purple-500/20 text-purple-100">New</Badge>
              Ship faster with fewer tools
            </div>

            <h1 className="mt-5 text-4xl md:text-5xl font-semibold">
              Turn messy execution into a{" "}
              <span className="text-purple-200">single source of truth</span>.
            </h1>

            <p className="mt-4 text-white/70 max-w-xl">
              Lunarscribe is an operations control tower that makes ownership
              obvious, bottlenecks visible, and reporting effortless.
            </p>

            <div className="mt-6 flex gap-3">
              <Button className="bg-white text-black">Book a demo</Button>
              <Button variant="outline" className="border-white/15 bg-white/5">
                See pricing
              </Button>
            </div>
          </div>

          <ExecutionOverviewSlider />
        </div>
      </main>
    </div>
  );
}
