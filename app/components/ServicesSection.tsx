const services = [
  {
    category: "Bakeries",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-4.444 0-8 2.015-8 4.5S7.556 12 12 12s8-2.015 8-4.5S16.444 3 12 3Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7.5v9C4 18.985 7.556 21 12 21s8-2.015 8-4.5v-9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 12c0 2.485 3.556 4.5 8 4.5s8-2.015 8-4.5" />
      </svg>
    ),
    headline: "Artisan Bakeries",
    description:
      "Automated order management, daily specials broadcasting, and WhatsApp reservation flows — so your bakers can focus on the bread.",
    features: ["Pre-order automation", "Daily menu push notifications", "Inventory alerts"],
  },
  {
    category: "Barbers",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33" />
      </svg>
    ),
    headline: "Luxury Barber Shops",
    description:
      "Intelligent booking systems, no-show reduction campaigns, and post-visit follow-ups that build a loyal clientele automatically.",
    features: ["Smart appointment scheduling", "No-show SMS reminders", "Loyalty programme automation"],
  },
  {
    category: "Clinics",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
    headline: "Private Clinics",
    description:
      "GDPR-compliant patient intake forms, appointment confirmations, and discreet follow-up sequences built for the Swiss healthcare standard.",
    features: ["Compliant intake automation", "Appointment reminders", "Secure patient comms"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="px-6 py-28 md:py-36">
      {/* Header */}
      <div className="mb-16 flex flex-col items-center gap-3 text-center">
        <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#c5a059]">
          Lugano · Switzerland
        </span>
        <h2 className="font-serif text-4xl font-semibold text-white md:text-5xl">
          Built for Luxury Businesses
        </h2>
        <span className="mt-2 h-px w-20 bg-[#c5a059] opacity-60" />
        <p className="mt-4 max-w-lg font-sans text-sm leading-relaxed text-[#9a9a9a]">
          Each automation suite is tailored to the specific rhythms and
          expectations of high-end Lugano businesses.
        </p>
      </div>

      {/* Cards */}
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.category}
            className="group relative flex flex-col border border-white/10 bg-[#111111] p-8 transition-colors duration-300 hover:border-[#c5a059]/40"
          >
            {/* Top corner mark */}
            <span className="absolute right-0 top-0 h-4 w-4 border-r border-t border-[#c5a059]/0 transition-colors duration-300 group-hover:border-[#c5a059]/50" />

            <div className="mb-6 flex h-10 w-10 items-center justify-center border border-[#c5a059]/30 text-[#c5a059]">
              {service.icon}
            </div>

            <span className="mb-1 font-sans text-[10px] uppercase tracking-[0.2em] text-[#c5a059]/70">
              {service.category}
            </span>
            <h3 className="font-serif text-xl font-medium text-white">
              {service.headline}
            </h3>

            <p className="mt-3 font-sans text-sm leading-relaxed text-[#9a9a9a]">
              {service.description}
            </p>

            <ul className="mt-6 space-y-2">
              {service.features.map((f) => (
                <li key={f} className="flex items-center gap-2 font-sans text-xs text-[#9a9a9a]">
                  <span className="h-px w-4 shrink-0 bg-[#c5a059] opacity-70" />
                  {f}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      {/* CTA strip */}
      <div className="mx-auto mt-20 max-w-5xl border border-[#c5a059]/20 bg-[#111111] px-8 py-10 text-center">
        <p className="font-serif text-2xl text-white md:text-3xl">
          Ready to run your business on autopilot?
        </p>
        <p className="mt-3 font-sans text-sm text-[#9a9a9a]">
          Book a complimentary 30-minute strategy call — no obligation.
        </p>
        <a
          href="mailto:hello@sleeper.agency"
          className="mt-8 inline-block border border-[#c5a059] px-10 py-3 font-sans text-sm uppercase tracking-[0.15em] text-[#c5a059] transition-colors duration-200 hover:bg-[#c5a059] hover:text-[#1a1a1a]"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
