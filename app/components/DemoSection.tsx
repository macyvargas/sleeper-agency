export default function DemoSection() {
  return (
    <section
      id="demo"
      className="relative px-6 py-28 md:py-36"
    >
      {/* Section label */}
      <div className="mb-14 flex flex-col items-center gap-3 text-center">
        <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#c5a059]">
          Interactive
        </span>
        <h2 className="font-serif text-4xl font-semibold text-white md:text-5xl">
          The One-Minute Demo
        </h2>
        <span className="mt-2 h-px w-20 bg-[#c5a059] opacity-60" />
        <p className="mt-4 max-w-lg font-sans text-sm leading-relaxed text-[#9a9a9a]">
          Experience our AI-powered automation firsthand. In under sixty
          seconds, see exactly what we can build for your business.
        </p>
      </div>

      {/* Placeholder canvas — replace with AI generator */}
      <div className="mx-auto max-w-3xl">
        <div className="relative flex min-h-[320px] flex-col items-center justify-center border border-[#c5a059]/20 bg-[#111111] px-8 py-16 text-center">
          {/* Corner marks */}
          <span className="absolute left-0 top-0 h-4 w-4 border-l border-t border-[#c5a059]/50" />
          <span className="absolute right-0 top-0 h-4 w-4 border-r border-t border-[#c5a059]/50" />
          <span className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-[#c5a059]/50" />
          <span className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-[#c5a059]/50" />

          <div className="mb-4 flex h-12 w-12 items-center justify-center border border-[#c5a059]/30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="h-6 w-6 text-[#c5a059]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z"
              />
            </svg>
          </div>

          <p className="font-serif text-lg text-[#9a9a9a] italic">
            AI generator coming soon.
          </p>
          <p className="mt-2 font-sans text-xs text-[#9a9a9a]/50">
            Drop your component here to bring this section to life.
          </p>
        </div>
      </div>
    </section>
  );
}
