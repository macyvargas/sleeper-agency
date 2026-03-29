"use client";

import { useState } from "react";

/* ─────────────────────────────────────────────
   WebGen v8 template — logic preserved verbatim.
   Only the injectable placeholders are marked.
───────────────────────────────────────────── */
function buildSiteHtml(name: string, city: string, phone: string, tagline: string): string {
  const n = name || 'mkcal"s';
  const c = city || "Lugano";
  const p = phone || "+41 79 638 73 81";
  const t = tagline || "cook, fancy italian. italian swiss right infront of lake lugano.";
  const slug = n.toLowerCase().replace(/[^a-z0-9]/g, "");

  return `<!DOCTYPE html><html lang="it"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="${n} — ${c}"><title>${n} — ${c}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lora:wght@300;400;500;600;700;800&display=swap"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800&display=swap"><style>*{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}body{font-family:'Nunito',system-ui,sans-serif;background:#fdf8ee;color:#3a2800;line-height:1.6;-webkit-font-smoothing:antialiased;overflow-x:hidden}a{text-decoration:none;color:inherit}img{max-width:100%;height:auto}h1,h2,h3{font-family:'Lora',Georgia,serif;letter-spacing:-.2px;line-height:1.15}.btn{display:inline-block;background:#8B6914;color:#fff;padding:12px 28px;border-radius:3px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;border:none;cursor:pointer;transition:all .2s}.btn:hover{opacity:.88;transform:translateY(-1px)}.btn-o{display:inline-block;border:1.5px solid #8B6914;color:#8B6914;padding:11px 26px;border-radius:3px;font-size:12px;font-weight:600;letter-spacing:.06em;transition:all .2s}.btn-o:hover{background:#8B6914;color:#fff}@media(max-width:768px){h1{font-size:clamp(28px,8vw,52px)!important}h2{font-size:clamp(20px,6vw,36px)!important}.grid-3,.grid-2,.split-grid{grid-template-columns:1fr!important}.hb{flex-direction:column!important;align-items:stretch!important}.hb .btn,.hb .btn-o{text-align:center!important}nav .nm{display:none!important}}@keyframes floatIn{to{opacity:1;transform:translateY(0)}}.hero-title{opacity:0;transform:translateY(44px);animation:floatIn .9s cubic-bezier(.22,1,.36,1) .1s forwards}.hero-sub{opacity:0;transform:translateY(30px);animation:floatIn .9s cubic-bezier(.22,1,.36,1) .3s forwards}.hero-cta{opacity:0;transform:translateY(20px);animation:floatIn .9s cubic-bezier(.22,1,.36,1) .5s forwards}.fade-up{opacity:0;transform:translateY(28px);transition:all .75s cubic-bezier(.22,1,.36,1)}.fade-up.vis{opacity:1;transform:translateY(0)}.slide-left{opacity:0;transform:translateX(-36px);transition:all .7s cubic-bezier(.22,1,.36,1)}.slide-left.vis{opacity:1;transform:translateX(0)}.slide-right{opacity:0;transform:translateX(36px);transition:all .7s cubic-bezier(.22,1,.36,1)}.slide-right.vis{opacity:1;transform:translateX(0)}</style></head><body><nav style="position:fixed;top:0;left:0;right:0;z-index:100;padding:14px 5%;display:flex;justify-content:space-between;align-items:center;background:#3a2800ee;backdrop-filter:blur(14px);border-bottom:1px solid #8B691422"><div style="font-family:'Lora',Georgia,serif;font-style:italic;font-size:20px;color:#fdf0cc">${n}</div><div style="display:flex;gap:22px"><a href="#" style="font-size:11px;color:#fdf0cc88;letter-spacing:.08em;text-transform:uppercase;text-decoration:none;transition:color .2s" onmouseover="this.style.color='#8B6914'" onmouseout="this.style.color='#fdf0cc88'">Home</a><a href="#" style="font-size:11px;color:#fdf0cc88;letter-spacing:.08em;text-transform:uppercase;text-decoration:none;transition:color .2s" onmouseover="this.style.color='#8B6914'" onmouseout="this.style.color='#fdf0cc88'">Menu</a><a href="#" style="font-size:11px;color:#fdf0cc88;letter-spacing:.08em;text-transform:uppercase;text-decoration:none;transition:color .2s" onmouseover="this.style.color='#8B6914'" onmouseout="this.style.color='#fdf0cc88'">Reserve</a></div></nav><section style="height:100vh;position:relative;display:flex;align-items:flex-end;padding:0 5% 80px;overflow:hidden"><img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80" style="position:absolute;inset:0;width:100%;height:115%;object-fit:cover"><div style="position:absolute;inset:0;background:linear-gradient(to top,#3a2800e0 0%,#3a280066 50%,transparent 100%)"></div><div style="position:relative;z-index:2;max-width:600px"><span style="font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:#8B6914;display:block;margin-bottom:12px" class="hero-title">${c} · DAL 1992</span><h1 style="font-size:clamp(44px,7vw,80px);font-weight:400;color:#fdf0cc;margin-bottom:18px;font-style:italic" class="hero-title">${n}</h1><p style="font-size:16px;color:#fdf0ccbb;line-height:1.75;margin-bottom:32px;max-width:420px" class="hero-sub">${t}</p><div class="hb hero-cta" style="display:flex;gap:12px;flex-wrap:wrap"><a class="btn" href="#">Prenota un tavolo</a><a class="btn-o" style="border-color:#fdf0cc88;color:#fdf0cc" href="#">Scopri il menu</a></div></div></section><div style="display:grid;grid-template-columns:1fr 1fr" class="split-grid"><div style="overflow:hidden"><img src="https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80" style="width:100%;height:100%;object-fit:cover;display:block;min-height:480px"></div><div style="padding:60px 6%;display:flex;flex-direction:column;justify-content:center;background:#3a2800"><span style="font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:#8B6914;margin-bottom:16px;display:block" class="fade-up">La nostra storia</span><h2 style="font-size:clamp(26px,3.5vw,38px);color:#fdf0cc;margin-bottom:18px;font-style:italic;font-weight:400" class="fade-up">Passione ticinese<br>dal 1992</h2><p style="font-size:14px;color:#fdf0cc99;line-height:1.9;margin-bottom:24px" class="fade-up">${t} Ogni piatto racconta il territorio con ingredienti selezionati ogni mattina.</p><div style="display:flex;gap:32px" class="fade-up"><div><div style="font-size:34px;font-weight:700;color:#8B6914;font-family:'Lora',Georgia,serif;font-style:italic">30+</div><div style="font-size:11px;color:#fdf0cc66;margin-top:2px">Anni di storia</div></div><div><div style="font-size:34px;font-weight:700;color:#8B6914;font-family:'Lora',Georgia,serif;font-style:italic">4.8★</div><div style="font-size:11px;color:#fdf0cc66;margin-top:2px">Su Google</div></div></div></div></div><section style="padding:80px 5%;background:#fdf8ee"><div style="max-width:900px;margin:0 auto"><h2 style="font-family:'Lora',Georgia,serif;font-style:italic;font-size:clamp(28px,4vw,44px);color:#3a2800;text-align:center;margin-bottom:8px" class="fade-up">Il nostro menu</h2><p style="text-align:center;font-size:13px;color:#3a280077;margin-bottom:48px" class="fade-up">Cucina ticinese tradizionale, stagionale e genuina</p><div class="grid-2" style="display:grid;grid-template-columns:1fr 1fr;gap:0"><div class="fade-up" style="display:flex;justify-content:space-between;align-items:flex-start;padding:20px 0;border-bottom:1px solid #f0d870;gap:16px"><div><div style="font-family:'Lora',Georgia,serif;font-style:italic;font-size:15px;color:#3a2800;margin-bottom:4px">Risotto al tartufo nero</div><div style="font-size:12px;color:#3a280077;line-height:1.5">Carnaroli, tartufo estivo, parmigiano 24 mesi</div></div><div style="font-size:14px;color:#8B6914;font-weight:700;white-space:nowrap;margin-top:2px">CHF 32</div></div><div class="fade-up" style="display:flex;justify-content:space-between;align-items:flex-start;padding:20px 0;border-bottom:1px solid #f0d870;gap:16px"><div><div style="font-family:'Lora',Georgia,serif;font-style:italic;font-size:15px;color:#3a2800;margin-bottom:4px">Ossobuco alla milanese</div><div style="font-size:12px;color:#3a280077;line-height:1.5">Vitello, gremolata, risotto zafferano</div></div><div style="font-size:14px;color:#8B6914;font-weight:700;white-space:nowrap;margin-top:2px">CHF 42</div></div><div class="fade-up" style="display:flex;justify-content:space-between;align-items:flex-start;padding:20px 0;border-bottom:1px solid #f0d870;gap:16px"><div><div style="font-family:'Lora',Georgia,serif;font-style:italic;font-size:15px;color:#3a2800;margin-bottom:4px">Tagliatelle al ragù</div><div style="font-size:12px;color:#3a280077;line-height:1.5">Pasta fresca, ragù di carne</div></div><div style="font-size:14px;color:#8B6914;font-weight:700;white-space:nowrap;margin-top:2px">CHF 26</div></div><div class="fade-up" style="display:flex;justify-content:space-between;align-items:flex-start;padding:20px 0;border-bottom:1px solid #f0d870;gap:16px"><div><div style="font-family:'Lora',Georgia,serif;font-style:italic;font-size:15px;color:#3a2800;margin-bottom:4px">Branzino al forno</div><div style="font-size:12px;color:#3a280077;line-height:1.5">Verdure di stagione, olio EVO, limone</div></div><div style="font-size:14px;color:#8B6914;font-weight:700;white-space:nowrap;margin-top:2px">CHF 38</div></div><div class="fade-up" style="display:flex;justify-content:space-between;align-items:flex-start;padding:20px 0;border-bottom:1px solid #f0d870;gap:16px"><div><div style="font-family:'Lora',Georgia,serif;font-style:italic;font-size:15px;color:#3a2800;margin-bottom:4px">Brasato al Merlot</div><div style="font-size:12px;color:#3a280077;line-height:1.5">Guancia di manzo, polenta, salvia</div></div><div style="font-size:14px;color:#8B6914;font-weight:700;white-space:nowrap;margin-top:2px">CHF 36</div></div><div class="fade-up" style="display:flex;justify-content:space-between;align-items:flex-start;padding:20px 0;border-bottom:1px solid #f0d870;gap:16px"><div><div style="font-family:'Lora',Georgia,serif;font-style:italic;font-size:15px;color:#3a2800;margin-bottom:4px">Tiramisù della casa</div><div style="font-size:12px;color:#3a280077;line-height:1.5">Mascarpone, savoiardi, caffè</div></div><div style="font-size:14px;color:#8B6914;font-weight:700;white-space:nowrap;margin-top:2px">CHF 14</div></div></div></div></section><section style="padding:80px 5%;background:#8B6914;text-align:center"><h2 style="font-family:'Lora',Georgia,serif;font-style:italic;font-size:clamp(26px,4vw,42px);color:#fff;margin-bottom:12px" class="fade-up">Prenota il tuo tavolo</h2><p style="font-size:14px;color:#ffffff99;margin-bottom:28px" class="fade-up">via lucchini 99 · mon-sat 9:00-20:00</p><a class="fade-up" href="tel:${p}" style="display:inline-block;background:#fff;color:#8B6914;padding:14px 36px;font-size:13px;font-weight:700;letter-spacing:.06em">${p}</a></section><footer style="background:#3a2800;padding:32px 5%;text-align:center;border-top:1px solid #8B691422"><div style="font-family:'Lora',Georgia,serif;font-style:italic;font-size:18px;color:#fdf0cc;margin-bottom:8px">${n}</div><p style="font-size:11px;color:#fdf0cc44;line-height:1.9">via lucchini 99 · <a href="tel:${p}" style="color:#8B6914">${p}</a> · <a href="mailto:info@${slug}.ch" style="color:#8B6914">info@${slug}.ch</a></p></footer><script>const _io=new IntersectionObserver(e=>{e.forEach(el=>{if(el.isIntersecting)el.target.classList.add('vis')})},{threshold:.12});document.querySelectorAll('.fade-up,.slide-left,.slide-right').forEach(el=>_io.observe(el));<\/script></body></html>`;
}

const FIELD_CLS =
  "w-full bg-[#0d0d0d] border border-[#c5a059]/20 px-4 py-3 font-sans text-sm text-white placeholder-[#9a9a9a]/40 focus:outline-none focus:border-[#c5a059]/60 transition-colors duration-200";

const LABEL_CLS = "block font-sans text-[10px] uppercase tracking-[0.2em] text-[#c5a059]/70 mb-2";

export default function DemoSection() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [tagline, setTagline] = useState("");
  const [previewHtml, setPreviewHtml] = useState(() => buildSiteHtml("", "", "", ""));
  const [loading, setLoading] = useState(false);

  const handleGenerate = () => {
    setLoading(true);
    // Simulate a brief generation delay for UX effect
    setTimeout(() => {
      setPreviewHtml(buildSiteHtml(name, city, phone, tagline));
      setLoading(false);
    }, 800);
  };

  return (
    <section id="demo" className="relative px-6 py-28 md:py-36">
      {/* Section header */}
      <div className="mb-14 flex flex-col items-center gap-3 text-center">
        <span className="font-sans text-xs uppercase tracking-[0.25em] text-[#c5a059]">
          Interactive
        </span>
        <h2 className="font-serif text-4xl font-semibold text-white md:text-5xl">
          The One-Minute Demo
        </h2>
        <span className="mt-2 h-px w-20 bg-[#c5a059] opacity-60" />
        <p className="mt-4 max-w-lg font-sans text-sm leading-relaxed text-[#9a9a9a]">
          Enter your business details and watch your website generate in real time.
          This is exactly what we build for our clients — in minutes.
        </p>
      </div>

      {/* Generator layout */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-[340px_1fr]">

        {/* ── Control panel ── */}
        <div className="relative flex flex-col border border-[#c5a059]/20 bg-[#111111] p-8">
          {/* Corner marks */}
          <span className="absolute left-0 top-0 h-4 w-4 border-l border-t border-[#c5a059]/50" />
          <span className="absolute right-0 top-0 h-4 w-4 border-r border-t border-[#c5a059]/50" />
          <span className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-[#c5a059]/50" />
          <span className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-[#c5a059]/50" />

          <p className="mb-8 font-sans text-[10px] uppercase tracking-[0.25em] text-[#c5a059]">
            Business Details
          </p>

          <div className="flex flex-col gap-6">
            <div>
              <label className={LABEL_CLS}>Business Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='e.g. mkcal"s'
                className={FIELD_CLS}
              />
            </div>

            <div>
              <label className={LABEL_CLS}>City</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="e.g. Lugano"
                className={FIELD_CLS}
              />
            </div>

            <div>
              <label className={LABEL_CLS}>Phone</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+41 79 000 00 00"
                className={FIELD_CLS}
              />
            </div>

            <div>
              <label className={LABEL_CLS}>Tagline</label>
              <textarea
                value={tagline}
                onChange={(e) => setTagline(e.target.value)}
                placeholder="A short description of your business…"
                rows={3}
                className={`${FIELD_CLS} resize-none`}
              />
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="mt-8 flex items-center justify-center gap-2 border border-[#c5a059] px-8 py-3 font-sans text-sm uppercase tracking-[0.15em] text-[#c5a059] transition-colors duration-200 hover:bg-[#c5a059] hover:text-[#1a1a1a] disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <span className="h-3 w-3 animate-spin rounded-full border border-current border-t-transparent" />
                Generating…
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                </svg>
                Generate Website
              </>
            )}
          </button>

          <p className="mt-4 font-sans text-[10px] text-[#9a9a9a]/40 text-center">
            Live preview updates on generation
          </p>
        </div>

        {/* ── Website preview ── */}
        <div className="relative overflow-hidden border border-[#c5a059]/20 bg-[#111111]">
          {/* Browser chrome bar */}
          <div className="flex items-center gap-3 border-b border-[#c5a059]/10 bg-[#0d0d0d] px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
            <div className="ml-3 flex-1 rounded-sm bg-white/5 px-3 py-1 font-sans text-[10px] text-[#9a9a9a]/40">
              {(name || 'mkcal"s').toLowerCase().replace(/[^a-z0-9]/g, "")}.ch
            </div>
          </div>

          {loading ? (
            <div className="flex min-h-[600px] flex-col items-center justify-center gap-4">
              <div className="h-6 w-6 animate-spin rounded-full border border-[#c5a059] border-t-transparent" />
              <p className="font-sans text-xs uppercase tracking-widest text-[#c5a059]/60">
                Building your website…
              </p>
            </div>
          ) : (
            <iframe
              srcDoc={previewHtml}
              className="h-[640px] w-full"
              title="Generated website preview"
              sandbox="allow-same-origin allow-scripts"
            />
          )}
        </div>
      </div>
    </section>
  );
}
