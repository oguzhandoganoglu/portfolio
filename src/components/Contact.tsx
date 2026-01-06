"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/oguzhandoganoglu",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    className: "social-btn github",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/o%C4%9Fuzhan-do%C4%9Fano%C4%9Flu-1022881bb/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    className: "social-btn linkedin",
  },
  {
    name: "HuggingFace",
    href: "https://huggingface.co/CerebrumTech",
    icon: (
      <svg viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5">
        <path d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm-2.5 22.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5zm9 0c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z" />
      </svg>
    ),
    className: "social-btn huggingface",
  },
];

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Background */}
      <div className="glow-green" style={{ bottom: '0%', left: '30%' }} />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="section-title">
            <span className="gradient-text">İletişim</span>
          </h2>
          <p className="text-zinc-400 max-w-lg mx-auto">
            Yeni projeler, iş birlikleri veya sadece merhaba demek için benimle
            iletişime geçebilirsiniz.
          </p>
        </div>

        {/* CTA Card */}
        <div
          className={`info-card text-center mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-xl font-semibold text-white mb-3">Görüşme Planlayın</h3>
          <p className="text-zinc-400 mb-6">
            Projeleriniz, danışmanlık veya iş birliği için 30 dakikalık ücretsiz görüşme ayarlayın.
          </p>
          <Link href="/randevu" className="btn-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span>Randevu Al</span>
          </Link>
        </div>

        {/* Divider */}
        <div
          className={`flex items-center gap-4 mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-zinc-600 text-sm">veya sosyal medyadan ulaşın</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Social Links */}
        <div
          className={`flex flex-wrap justify-center gap-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={link.className}
            >
              {link.icon}
              <span>{link.name}</span>
            </a>
          ))}
        </div>

        {/* Email */}
        <div
          className={`text-center mt-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-zinc-500 text-sm">
            veya doğrudan mail gönderin:{" "}
            <a href="mailto:oguzhandoganoglu@gmail.com" className="text-emerald-500 hover:underline">
              oguzhandoganoglu@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
