'use client';

import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="relative z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
            <Sparkles className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-wide">Lunarscribe</div>
            <div className="text-xs text-white/60">Operations Control Tower</div>
          </div>
        </a>

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
  );
}
