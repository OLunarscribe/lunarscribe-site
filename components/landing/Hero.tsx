'use client';

import React from "react";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import WorkflowListSlider from "@/components/landing/WorkflowListSlider";
import GlowModeToggle from "@/components/landing/GlowModeToggle";

export default function Hero() {
  const quickStats = [
    { label: "Unified operating picture", value: "1 dashboard" },
    { label: "Faster handoffs", value: "Less chaos" },
    { label: "Exportable", value: "Excel-ready" },
    { label: "Built for ops", value: "Not vanity" },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 pt-10 md:pt-14">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-5"
          >
            <GlowModeToggle />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl"
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
            Lunarscribe is an operations control tower: workflow structure,
            dashboards, and automation that makes ownership obvious, bottlenecks
            visible, and reporting effortless.
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
              <div
                key={s.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
              >
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

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="relative"
        >
          <WorkflowListSlider />
        </motion.div>
      </div>
    </section>
  );
}
