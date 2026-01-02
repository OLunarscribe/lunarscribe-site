import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    { q: "What exactly is Lunarscribe?", a: "Lunarscribe is an operations control tower — dashboards, workflow structure, and automation that gives leadership a clear view of execution and performance." },
    { q: "Is this a CRM replacement?", a: "Not necessarily. If your CRM is strong for sales but weak for operations, Lunarscribe becomes the layer that standardizes data, tracks execution, and generates trusted exports." },
    { q: "How fast can we launch?", a: "Most teams can get a first dashboard live quickly once the workflow and data fields are defined. Complexity depends on integrations and how many workflows you want live on day one." },
    { q: "Can we export to Excel?", a: "Yes. Exports are a core feature — you can generate CSV/Excel-ready outputs for reporting, billing, and leadership updates." },
    { q: "How does access control work?", a: "Role-based permissions let you control who can view, edit, approve, and export — with an audit trail for changes." },
  ];

  return (
    <section id="faq" className="mx-auto max-w-6xl px-6 pt-16">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">FAQ</h2>
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
  );
}
