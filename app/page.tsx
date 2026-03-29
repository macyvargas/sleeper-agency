import Hero from "./components/Hero";
import DemoSection from "./components/DemoSection";
import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Gold divider */}
      <div className="mx-auto max-w-5xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-[#c5a059]/40 to-transparent" />
      </div>

      <DemoSection />

      <div className="mx-auto max-w-5xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-[#c5a059]/40 to-transparent" />
      </div>

      <ServicesSection />

      <footer className="border-t border-white/5 px-6 py-10 text-center">
        <p className="font-sans text-xs text-[#9a9a9a]/50 tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Sleeper Agency &mdash; Lugano, Switzerland
        </p>
      </footer>
    </main>
  );
}
