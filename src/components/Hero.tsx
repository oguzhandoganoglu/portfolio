import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Background Glows */}
      <div className="glow-green animate-float" style={{ top: '10%', left: '10%' }} />
      <div className="glow-blue animate-float" style={{ bottom: '20%', right: '10%', animationDelay: '2s' }} />
      <div className="glow-purple animate-float" style={{ top: '60%', left: '50%', animationDelay: '4s' }} />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      {/* Content */}
      <div className="max-w-4xl text-center z-10">
        {/* Badge */}
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-zinc-400 text-sm">AI/ML Engineer & Full-Stack Developer</span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 animate-fade-in delay-100 tracking-tight">
          Merhaba, ben{" "}
          <span className="gradient-text">Oguzhan</span>
        </h1>

        {/* Description */}
        <p className="text-xl text-zinc-400 mb-4 animate-fade-in delay-200 max-w-2xl mx-auto">
          Yapay zeka modelleri geliştiriyor, modern web uygulamaları tasarlıyorum.
        </p>

        <p className="text-zinc-500 mb-10 animate-fade-in delay-300">
          TOBB ETÜ Bilgisayar Mühendisliği Mezunu
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center animate-fade-in delay-400">
          <Link href="#projects" className="btn-primary">
            <span>Projelerimi Gör</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link href="/randevu" className="btn-secondary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span>Randevu Al</span>
          </Link>
        </div>

        {/* Scroll */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-500">
          <div className="flex flex-col items-center gap-2">
            <span className="text-zinc-600 text-xs uppercase tracking-widest">Keşfet</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-zinc-600 animate-bounce">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
