import Hero from "@/components/landing/Hero";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#05010f] text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-purple-600/25 blur-3xl" />
        <div className="absolute top-24 -left-24 h-[420px] w-[420px] rounded-full bg-fuchsia-500/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-indigo-500/15 blur-3xl" />
      </div>

      <main className="relative z-10">
        <Hero />
        {/* next: TrustLogos, Benefits, etc. can be extracted the same way */}
      </main>
    </div>
  );
}
