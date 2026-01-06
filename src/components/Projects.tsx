"use client";

import { useEffect, useRef, useState } from "react";

interface Project {
  title: string;
  category: string;
  badge?: string;
  badgeType?: "green" | "blue";
  description: string;
  tech: string[];
  link?: string;
}

const projects: Project[] = [
  {
    title: "Turkce LLM Fine-tuning",
    category: "LLM",
    badge: "Akademik Yayin",
    badgeType: "green",
    description:
      "LLaMA 3 (8B), Qwen 2 (7B), LLaMA 3.1 (8B) ve Gemma-2 (9B) modellerini Turkce veri ile fine-tune ettim. 6 model HuggingFace'te yayinlandi. Cere-LLaMA-3-8B, 70B modellerden iyi performans gosterdi.",
    tech: ["LLaMA", "Unsloth", "LLaMA-Factory", "HuggingFace"],
    link: "https://huggingface.co/CerebrumTech",
  },
  {
    title: "AI Podcast Uygulamasi",
    category: "Ses",
    badge: "Uretimde",
    badgeType: "green",
    description:
      "URL veya metinden otomatik podcast olusturan uygulama. Coklu konusmaci, ses secimi, Turkce/Ingilizce destek. OpenAI + ElevenLabs entegrasyonu. podcast.cereinsight.com adresinde yayinda.",
    tech: ["Python", "OpenAI", "ElevenLabs", "React"],
    link: "https://podcast.cereinsight.com",
  },
  {
    title: "RAG & LLM Orkestrasyon",
    category: "LLM",
    description:
      "3.864 PDF'ten otomatik soru-cevap uretimi, embedding ve vektor DB. RouteLLM ile akilli yonlendirme: basit sorular local LLaMA'ya, zor sorular GPT-4o'ya. Maliyet optimizasyonu saglandi.",
    tech: ["RAG", "RouteLLM", "Embedding", "Streamlit"],
  },
  {
    title: "Lip-Sync & Avatar",
    category: "Vision",
    description:
      "SyncTalk ile model egitimi yaparak avatar dudak senkronizasyonu. 4090 GPU sunucuda inference, gercek zamanlia yakin performans elde edildi.",
    tech: ["SyncTalk", "PyTorch", "CUDA", "4090 GPU"],
  },
  {
    title: "Otoyol Plaka Tanima",
    category: "Vision",
    badge: "%98 Dogruluk",
    badgeType: "blue",
    description:
      "YOLOv8 ile plaka tespiti (fine-tune), PaddleOCR ve Google OCR karsilastirmasi. Base64 API + Docker ile deploy edildi.",
    tech: ["YOLOv8", "PaddleOCR", "Docker", "FastAPI"],
  },
  {
    title: "Virtual Try-On & Face Swap",
    category: "Vision",
    description:
      "KlingAI API ile kiyafet giydirme, Roop + GFPGAN ile yuz degistirme kiosk uygulamasi. Gercek zamanli yuz tespiti, swap ve kalite artirma.",
    tech: ["KlingAI", "Roop", "GFPGAN", "Computer Vision"],
  },
  {
    title: "TTS & STT Sistemleri",
    category: "Ses",
    description:
      "Amazon & Google TTS entegrasyonu, Zonos (local acik kaynak TTS), Whisper & WhisperX ile speech-to-text ve konusmaci ayirimi (diarization).",
    tech: ["Whisper", "WhisperX", "Zonos", "Amazon TTS"],
  },
  {
    title: "Call Center AI Asistani",
    category: "Kurumsal",
    description:
      "Konusmalari dinleyip kategorize eden, ilgili birime yonlendiren AI asistan. RAG + Structured Output, Python desktop app (Windows).",
    tech: ["RAG", "Anthropic", "Python", "Desktop App"],
  },
  {
    title: "Marksoft",
    category: "Full-Stack",
    badge: "Aktif",
    badgeType: "green",
    description:
      "Marka ve patent yonetimi icin kurumsal yazilim. Fikri mulkiyet haklarinin takibi, arastirmasi ve izlenmesi icin kapsamli web uygulamasi.",
    tech: ["React", "Next.js", "Node.js", "PostgreSQL"],
    link: "https://www.marksoft.com.tr",
  },
];

const categories = ["Tumu", "LLM", "Vision", "Ses", "Kurumsal", "Full-Stack"];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Tumu");
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

  const filteredProjects = activeCategory === "Tumu"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Background */}
      <div className="glow-purple" style={{ top: '20%', right: '-10%' }} />
      <div className="glow-green" style={{ bottom: '10%', left: '-5%' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">
            <span className="gradient-text">Projeler</span>
          </h2>
          <p className="text-zinc-400 mt-4">CerebrumTech ve kisisel projelerim</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-emerald-500/20 text-emerald-500 border border-emerald-500/30"
                  : "bg-white/5 text-zinc-400 border border-white/10 hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`card p-6 flex flex-col transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-2 mb-3">
                <div>
                  <span className="text-xs text-zinc-500 uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-base font-semibold text-white leading-tight mt-1">
                    {project.title}
                  </h3>
                </div>
                {project.badge && (
                  <span className={`badge shrink-0 ${project.badgeType === "green" ? "badge-green" : "badge-blue"}`}>
                    {project.badge}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-zinc-400 text-sm leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-white/5 text-zinc-500 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Link */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-emerald-500 hover:text-emerald-400 transition-colors text-sm font-medium pt-3 border-t border-white/10"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  Projeyi Gor
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
