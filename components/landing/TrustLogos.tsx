export default function TrustLogos() {
  const items = ["Field Ops", "Back Office", "Leadership", "Finance"];

  return (
    <section className="mx-auto max-w-6xl px-6 pt-10">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <div className="text-xs text-white/60">
          Trusted by operators who care about execution
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 text-white/70 sm:grid-cols-4">
          {items.map((x) => (
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
  );
}
