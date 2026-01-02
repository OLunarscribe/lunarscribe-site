export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm font-semibold">Lunarscribe</div>
            <div className="mt-1 text-xs text-white/60">
              Operations Control Tower
            </div>
          </div>

          <div className="flex flex-wrap gap-3 text-xs text-white/60">
            <a className="hover:text-white" href="#benefits">Benefits</a>
            <a className="hover:text-white" href="#how-it-works">Process</a>
            <a className="hover:text-white" href="#features">Features</a>
            <a className="hover:text-white" href="#pricing">Pricing</a>
            <a className="hover:text-white" href="#faq">FAQ</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </div>
        </div>

        <div className="mt-8 text-xs text-white/50">
          © {new Date().getFullYear()} Lunarscribe. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
