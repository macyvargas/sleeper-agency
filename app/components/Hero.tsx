export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      {/* Subtle gold gradient orb */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="h-[600px] w-[600px] rounded-full bg-[#c5a059] opacity-[0.06] blur-[120px]" />
      </div>

      {/* Top rule */}
      <div className="mb-10 flex items-center gap-4">
        <span className="h-px w-16 bg-[#c5a059] opacity-60" />
        <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#c5a059]">
          Sleeper Agency
        </span>
        <span className="h-px w-16 bg-[#c5a059] opacity-60" />
      </div>

      <h1 className="font-serif max-w-3xl text-5xl font-semibold leading-tight tracking-tight text-white md:text-7xl">
        Elite Business Automation{" "}
        <em className="not-italic text-[#c5a059]">for the Swiss Market.</em>
      </h1>

      <p className="mt-8 max-w-xl font-sans text-base leading-relaxed text-[#9a9a9a] md:text-lg">
        We build invisible infrastructure that lets Lugano&rsquo;s finest
        businesses focus on what matters — their clients.
      </p>

      <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
        <a
          href="#demo"
          className="inline-block border border-[#c5a059] px-8 py-3 font-sans text-sm uppercase tracking-[0.15em] text-[#c5a059] transition-colors duration-200 hover:bg-[#c5a059] hover:text-[#1a1a1a]"
        >
          See the Demo
        </a>
        <a
          href="#services"
          className="inline-block px-8 py-3 font-sans text-sm uppercase tracking-[0.15em] text-[#9a9a9a] transition-colors duration-200 hover:text-white"
        >
          Our Services
        </a>
      </div>

      {/* Bottom scroll cue */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="h-8 w-px bg-[#c5a059]" />
        <span className="font-sans text-[10px] uppercase tracking-widest text-[#c5a059]">
          Scroll
        </span>
      </div>
    </section>
  );
}
