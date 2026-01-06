"use client";

import { useEffect, useRef, useState } from "react";

const achievements = [
  {
    icon: "📄",
    title: "Akademik Yayın",
    subtitle: "arXiv:2508.16431 - Cetvel Benchmark",
    description:
      "Geliştirdiğim Cere-LLaMA-3-8B modeli, Cetvel benchmark çalışmasında 70B parametreli Llama-3.3-Instruct modelini GEC ve Türk tarihi QA görevlerinde geçerek exceptional performance sergiledi.",
    link: "https://arxiv.org/abs/2508.16431",
    highlight: "8B > 70B",
    badgeType: "green",
  },
  {
    icon: "🤗",
    title: "HuggingFace Modelleri",
    subtitle: "CerebrumTech Organization",
    description:
      "Türkçe dil modelleri HuggingFace'te yayınlandı ve topluluk tarafından aktif olarak kullanılıyor. LLaMA ve Gemma tabanlı modeller Türkçe NLP ekosisteminde önemli bir kaynak haline geldi.",
    link: "https://huggingface.co/CerebrumTech",
    highlight: "6 Model",
    badgeType: "blue",
  },
];

export default function Achievements() {
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
      id="achievements"
      ref={sectionRef}
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Background */}
      <div className="glow-green" style={{ top: '10%', left: '50%', transform: 'translateX(-50%)' }} />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="section-title">
            <span className="gradient-text">Başarılar</span>
          </h2>
          <p className="text-zinc-500">Akademik yayınlar ve yayınlanan modeller</p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <a
              key={index}
              href={achievement.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`card p-6 group block transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{achievement.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-emerald-500 transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-blue-400 text-sm">{achievement.subtitle}</p>
                  </div>
                </div>
                <span className={`badge ${achievement.badgeType === "green" ? "badge-green" : "badge-blue"}`}>
                  {achievement.highlight}
                </span>
              </div>

              {/* Description */}
              <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                {achievement.description}
              </p>

              {/* Link indicator */}
              <div className="flex items-center gap-2 text-zinc-500 text-sm group-hover:text-emerald-500 transition-colors">
                <span>Detayları gör</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transform group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
