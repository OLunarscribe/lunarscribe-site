'use client';

import React, { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Sparkles,
  ChevronUp,
  ChevronDown,
  Users2,
  CalendarDays,
  ListTodo,
  DollarSign,
  CheckCircle2,
  XCircle,
  Loader2,
  Clock,
  Workflow,
  Mail,
} from "lucide-react";

type TaskStatus = "done" | "waiting" | "canceled" | "progress";

type TaskItem = {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  status: TaskStatus;
};

function StatusIcon({ status }: { status: TaskStatus }) {
  if (status === "done") return <CheckCircle2 className="h-4 w-4 text-purple-200" />;
  if (status === "waiting") return <Loader2 className="h-4 w-4 text-purple-200 animate-spin" />;
  if (status === "canceled") return <XCircle className="h-4 w-4 text-white/50" />;
  return <Clock className="h-4 w-4 text-white/60" />;
}

export default function WorkflowListSlider() {
  const reduceMotion = useReducedMotion();

  const allTasks: TaskItem[] = [
    { title: "Payroll management", subtitle: "Due on 2nd July", icon: <DollarSign className="h-4 w-4 text-white/80" />, status: "waiting" },
    { title: "Employee Tracking", subtitle: "2 days ago", icon: <Users2 className="h-4 w-4 text-white/80" />, status: "done" },
    { title: "Social media post", subtitle: "Cancelled by user", icon: <CalendarDays className="h-4 w-4 text-white/80" />, status: "canceled" },
    { title: "Lead list", subtitle: "70% prepared", icon: <ListTodo className="h-4 w-4 text-white/80" />, status: "progress" },
    { title: "Payment reminder", subtitle: "Sent to selected clients", icon: <Mail className="h-4 w-4 text-white/80" />, status: "done" },
    { title: "Scope review", subtitle: "Waiting for approval", icon: <Workflow className="h-4 w-4 text-white/80" />, status: "waiting" },
  ];

  const waitingForApproval = allTasks.filter((t) => t.status === "waiting");

  const [tab, setTab] = useState<"all" | "waiting">("all");
  const items = tab === "all" ? allTasks : waitingForApproval;

  // ----- CAROUSEL CONFIG -----
  const ROW_H = 72;   // row height in px (matches your design)
  const ROW_GAP = 8;  // gap between rows in px (gap-2)
  const VISIBLE_ROWS = 4;

  // For a seamless loop, we render items twice.
  const loopItems = useMemo(() => [...items, ...items], [items]);

  // Total distance to scroll before looping (one full "set" of items).
  // NOTE: gap exists between items, so it's (n-1) gaps, not n gaps.
  const distance = items.length * ROW_H + Math.max(0, items.length - 1) * ROW_GAP;

  // Tune speed here (px per second) — higher = faster (more obvious)
  const PX_PER_SEC = 110;
  const duration = Math.max(6, distance / PX_PER_SEC);

  // Force animation on for debugging (set to false when confirmed)
  const FORCE_ANIMATE = false;

  const shouldAnimate =
    (FORCE_ANIMATE || !reduceMotion) && items.length > VISIBLE_ROWS;

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-purple-900/20">
      {/* HEADER (STATIC) */}
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-purple-500/15 ring-1 ring-white/10">
            <Sparkles className="h-4 w-4" />
          </div>
          <div>
            <div className="text-sm font-semibold">workflow automation · Primary</div>
            <div className="text-xs text-white/60">Live task flow</div>
          </div>
        </div>

        {/* Arrows (optional). They just nudge a scroll container if you want. */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10"
            aria-label="Scroll up"
            onClick={() => {
              const el = document.getElementById("workflow-marquee");
              if (el) el.scrollTop -= (ROW_H + ROW_GAP);
            }}
          >
            <ChevronUp className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10"
            aria-label="Scroll down"
            onClick={() => {
              const el = document.getElementById("workflow-marquee");
              if (el) el.scrollTop += (ROW_H + ROW_GAP);
            }}
          >
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* TABS */}
      <div className="mt-4 flex w-full items-center gap-2 rounded-2xl border border-white/10 bg-black/20 p-1">
        <button
          type="button"
          onClick={() => setTab("all")}
          className={`flex-1 rounded-xl px-3 py-2 text-sm transition ${
            tab === "all" ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5"
          }`}
        >
          All Tasks
        </button>
        <button
          type="button"
          onClick={() => setTab("waiting")}
          className={`flex-1 rounded-xl px-3 py-2 text-sm transition ${
            tab === "waiting" ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5"
          }`}
        >
          Waiting for approval
        </button>
      </div>

      {/* TASK LIST (INFINITE NONSTOP CAROUSEL) */}
      <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-2">
        <div
          id="workflow-marquee"
          className="relative overflow-hidden rounded-xl"
          style={{ height: ROW_H * VISIBLE_ROWS }}
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />

          {!shouldAnimate ? (
            // Reduced motion or too few items: render normally
            <div className="flex flex-col gap-2">
              {items.map((t, idx) => (
                <div
                  key={`${t.title}-${idx}-${tab}`}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4"
                  style={{ height: ROW_H }}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl bg-black/30 ring-1 ring-white/10">
                      {t.icon}
                    </div>
                    <div className="leading-tight">
                      <div className="text-sm font-semibold">{t.title}</div>
                      <div className="mt-1 text-xs text-white/60">{t.subtitle}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <StatusIcon status={t.status} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Infinite marquee: duplicate list and translate continuously
            <motion.div
              key={`${tab}-${items.length}`} // restart animation when tab changes
              className="flex flex-col gap-2"
              initial={{ y: 0 }}
              animate={{ y: [0, -distance] }}
              transition={{
                duration,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {loopItems.map((t, idx) => (
                <div
                  key={`${t.title}-${idx}-${tab}-loop`}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4"
                  style={{ height: ROW_H }}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl bg-black/30 ring-1 ring-white/10">
                      {t.icon}
                    </div>
                    <div className="leading-tight">
                      <div className="text-sm font-semibold">{t.title}</div>
                      <div className="mt-1 text-xs text-white/60">{t.subtitle}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <StatusIcon status={t.status} />
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* FOOTER */}
      <div className="mt-3 flex items-center justify-between text-[11px] text-white/60">
        <span>
          Showing <span className="text-white/80">{VISIBLE_ROWS}</span> of{" "}
          <span className="text-white/80">{items.length}</span>
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-purple-200" />
          Auto-scroll enabled
        </span>
      </div>
    </div>
  );
}
