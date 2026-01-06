import Link from "next/link";
import MagneticButton from "./MagneticButton";
import TextReveal from "./TextReveal";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Background Glows */}
      <div className="glow-green" style={{ top: '5%', left: '5%' }} />
      <div className="glow-blue" style={{ bottom: '10%', right: '5%' }} />
      <div className="glow-purple" style={{ top: '50%', left: '60%' }} />

      {/* Grid Pattern */}
      <div className="grid-pattern" />

      {/* Content */}
      <div className="max-w-5xl text-center z-10">
        {/* Badge */}
        <div className="animate-fade-in stagger-1" style={{ opacity: 0 }}>
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[var(--bg-elevated)] border border-[var(--border)] mb-10">
            <span className="w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse" />
            <span className="text-[var(--fg-muted)] text-sm font-medium font-[var(--font-mono)]">AI/ML Engineer & Full-Stack Developer</span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-8 animate-fade-in stagger-2 tracking-tight font-[family-name:var(--font-display)]" style={{ opacity: 0 }}>
          Merhaba, ben{" "}
          <span className="gradient-text-animated">Oğuzhan</span>
        </h1>

        {/* Description */}
        <p className="text-xl md:text-2xl text-[var(--fg-muted)] mb-4 animate-fade-in stagger-3 max-w-3xl mx-auto leading-relaxed" style={{ opacity: 0 }}>
          Yapay zeka modelleri geliştiriyor, modern web uygulamaları tasarlıyorum.
        </p>

        <p className="text-[var(--fg-subtle)] mb-12 animate-fade-in stagger-4 font-[family-name:var(--font-mono)] text-sm tracking-wide" style={{ opacity: 0 }}>
          TOBB ETÜ Bilgisayar Mühendisliği Mezunu
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-5 justify-center animate-fade-in stagger-5" style={{ opacity: 0 }}>
          <MagneticButton strength={0.4}>
            <Link href="#projects" className="btn-primary">
              <span>Projelerimi Gör</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </MagneticButton>
          <MagneticButton strength={0.4}>
            <Link href="/randevu" className="btn-secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <span>Randevu Al</span>
            </Link>
          </MagneticButton>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in stagger-6" style={{ opacity: 0 }}>
          <div className="flex flex-col items-center gap-4">
            <span className="text-[var(--fg-subtle)] text-xs uppercase tracking-[0.2em] font-[family-name:var(--font-mono)]">Keşfet</span>
            <div className="scroll-indicator" />
          </div>
        </div>
      </div>

      {/* Noise Overlay */}
      <div className="noise" />
    </section>
  );
}
