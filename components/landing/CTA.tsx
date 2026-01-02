'use client';

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Shield, Lock } from "lucide-react";

export default function CTA() {
  const [lead, setLead] = useState({ name: "", email: "", company: "", message: "" });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Lead submitted", lead);
    alert("Submitted. We'll follow up shortly.");
    setLead({ name: "", email: "", company: "", message: "" });
  };

  return (
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
                <Input value={lead.name} onChange={(e) => setLead((p) => ({ ...p, name: e.target.value }))} placeholder="Name" className="border-white/10 bg-black/20" />
                <Input value={lead.company} onChange={(e) => setLead((p) => ({ ...p, company: e.target.value }))} placeholder="Company" className="border-white/10 bg-black/20" />
              </div>
              <Input type="email" value={lead.email} onChange={(e) => setLead((p) => ({ ...p, email: e.target.value }))} placeholder="Email" className="border-white/10 bg-black/20" required />
              <Textarea value={lead.message} onChange={(e) => setLead((p) => ({ ...p, message: e.target.value }))} placeholder="What are you tracking today (stages, owners, exports)?" className="min-h-[110px] border-white/10 bg-black/20" />
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button className="bg-white text-black hover:bg-white/90" type="submit">Submit</Button>
                <Button type="button" variant="outline" className="border-white/15 bg-white/5 text-white hover:bg-white/10" onClick={() => setLead({ name: "", email: "", company: "", message: "" })}>
                  Clear
                </Button>
              </div>
              <div className="text-xs text-white/60">By submitting, you agree to be contacted about Lunarscribe. No spam.</div>
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
                {["Your workflow mapped into a clean model", "A dashboard walkthrough", "Export examples", "Implementation plan"].map((x) => (
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
              <CardDescription className="text-white/60">Built for teams that care about accuracy and accountability.</CardDescription>
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
  );
}
