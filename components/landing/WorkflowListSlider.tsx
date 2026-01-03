'use client';

import React, { useEffect, useState } from "react";
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

  /* ---------- HEADER CAROUSEL ---------- */
  const headerPhrases = [
    "workflow automation",
    "task orchestration",
    "handoff routing",
    "approval tracking",
    "ops control tower",
  ];

  const HEADER_ROW_H = 18; // px
  const headerLoopDistance = HEADER_ROW_H * headerPhrases.length;

  /* ---------- TASK DATA ---------- */
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

  const [index, setIndex] = useState(0);

  const ROW_H = 72;
  const VISIBLE_ROWS = 4;

  useEffect(() => setIndex(0), [tab]);

  useEffect(() => {
    if (items.length <= VISIBLE_ROWS) return;
    const t = window.setInterval(() => {
      setIndex((i) => {
        const maxIndex = items.length - VISIBLE_ROWS;
        return i + 1 > maxIndex ? 0 : i + 1;
      });
    }, 3500);
    return () => window.clearInterval(t);
  }, [items.length]);

  const maxIndex = Math.max(0, items.length - VISIBLE_ROWS);

  const up = () => setIndex((i) => Math.max(0, i - 1));
  const down = () => setIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-purple-900/20">
      {/* ---------- HEADER ---------- */}
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-purple-500/15 ring-1 ring-white/10">
            <Sparkles className="h-4 w-4" />
          </div>

          <div>
            <div className="text-sm font-semibold flex items-center gap-1">
              <div className="relative h-[18px] overflow-hidden">
                {reduceMotion ? (
                  <div className="h-[18px] leading-[18px]">
                    workflow automation
                  </div>
                ) : (
                  <motion.div
                    className="flex flex-col"
                    animate={{ y: [0, -headerLoopDistance] }}
                    transition={{
                      duration: headerPhrases.length * 1.2,
                      ease: "linear",
                      repeat: Infinity,
                    }}
                  >
                    {[...headerPhrases, ...headerPhrases].map((text, i) => (
                      <div
                        key={`${text}-${i}`}
                        className="h-[18px] leading-[18px]"
                      >
                        {text}
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>

              <span className="text-white/70">· Primary</span>
            </div>

            <div className="text-xs text-white/60">Live task flow</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={up}
            disabled={index === 0}
            className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 disabled:opacity-40"
          >
            <ChevronUp className="h-4 w-4" />
          </button>
          <button
            onClick={down}
            disabled={index === maxIndex}
            className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 disabled:opacity-40"
          >
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* ---------- TABS ---------- */}
      <div className="mt-4 flex w-full items-center gap-2 rounded-2xl border border-white/10 bg-black/20 p-1">
        <button
          onClick={() => setTab("all")}
          className={`flex-1 rounded-xl px-3 py-2 text-sm ${
            tab === "all" ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5"
          }`}
        >
          All Tasks
        </button>
        <button
          onClick={() => setTab("waiting")}
          className={`flex-1 rounded-xl px-3 py-2 text-sm ${
            tab === "waiting" ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5"
          }`}
        >
          Waiting for approval
        </button>
      </div>

      {/* ---------- TASK LIST ---------- */}
      <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-2">
        <div
          className="relative overflow-hidden rounded-xl"
          style={{ height: ROW_H * VISIBLE_ROWS }}
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />

          <motion.div
            animate={{ y: -index * ROW_H }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
          >
            {items.map((t, idx) => (
              <div
                key={`${t.title}-${idx}-${tab}`}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4"
                style={{ height: ROW_H, marginBottom: 8 }}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl bg-black/30 ring-1 ring-white/10">
                    {t.icon}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.title}</div>
                    <div className="mt-1 text-xs text-white/60">{t.subtitle}</div>
                  </div>
                </div>
                <StatusIcon status={t.status} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ---------- FOOTER ---------- */}
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
