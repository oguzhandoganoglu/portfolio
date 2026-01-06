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
    title: "Türkçe LLM Fine-tuning",
    category: "LLM",
    badge: "Akademik Yayın",
    badgeType: "green",
    description:
      "LLaMA 3 (8B), Qwen 2 (7B), LLaMA 3.1 (8B) ve Gemma-2 (9B) modellerini Türkçe veri ile fine-tune ettim. 6 model HuggingFace'te yayınlandı. Cere-LLaMA-3-8B, 70B modellerden iyi performans gösterdi.",
    tech: ["LLaMA", "Unsloth", "LLaMA-Factory", "HuggingFace"],
    link: "https://huggingface.co/CerebrumTech",
  },
  {
    title: "AI Podcast Uygulaması",
    category: "Ses",
    badge: "Üretimde",
    badgeType: "green",
    description:
      "URL veya metinden otomatik podcast oluşturan uygulama. Çoklu konuşmacı, ses seçimi, Türkçe/İngilizce destek. OpenAI + ElevenLabs entegrasyonu. podcast.cereinsight.com adresinde yayında.",
    tech: ["Python", "OpenAI", "ElevenLabs", "React"],
    link: "https://podcast.cereinsight.com",
  },
  {
    title: "RAG & LLM Orkestrasyon",
    category: "LLM",
    description:
      "3.864 PDF'ten otomatik soru-cevap üretimi, embedding ve vektör DB. RouteLLM ile akıllı yönlendirme: basit sorular local LLaMA'ya, zor sorular GPT-4o'ya. Maliyet optimizasyonu sağlandı.",
    tech: ["RAG", "RouteLLM", "Embedding", "Streamlit"],
  },
  {
    title: "Lip-Sync & Avatar",
    category: "Vision",
    description:
      "SyncTalk ile model eğitimi yaparak avatar dudak senkronizasyonu. 4090 GPU sunucuda inference, gerçek zamanlıya yakın performans elde edildi.",
    tech: ["SyncTalk", "PyTorch", "CUDA", "4090 GPU"],
  },
  {
    title: "Otoyol Plaka Tanıma",
    category: "Vision",
    badge: "%98 Doğruluk",
    badgeType: "blue",
    description:
      "YOLOv8 ile plaka tespiti (fine-tune), PaddleOCR ve Google OCR karşılaştırması. Base64 API + Docker ile deploy edildi.",
    tech: ["YOLOv8", "PaddleOCR", "Docker", "FastAPI"],
  },
  {
    title: "Virtual Try-On & Face Swap",
    category: "Vision",
    description:
      "KlingAI API ile kıyafet giydirme, Roop + GFPGAN ile yüz değiştirme kiosk uygulaması. Gerçek zamanlı yüz tespiti, swap ve kalite artırma.",
    tech: ["KlingAI", "Roop", "GFPGAN", "Computer Vision"],
  },
  {
    title: "TTS & STT Sistemleri",
    category: "Ses",
    description:
      "Amazon & Google TTS entegrasyonu, Zonos (local açık kaynak TTS), Whisper & WhisperX ile speech-to-text ve konuşmacı ayrımı (diarization).",
    tech: ["Whisper", "WhisperX", "Zonos", "Amazon TTS"],
  },
  {
    title: "Call Center AI Asistanı",
    category: "Kurumsal",
    description:
      "Konuşmaları dinleyip kategorize eden, ilgili birime yönlendiren AI asistan. RAG + Structured Output, Python desktop app (Windows).",
    tech: ["RAG", "Anthropic", "Python", "Desktop App"],
  },
  {
    title: "Marksoft",
    category: "Full-Stack",
    badge: "Aktif",
    badgeType: "green",
    description:
      "Marka ve patent yönetimi için kurumsal yazılım. Fikri mülkiyet haklarının takibi, araştırması ve izlenmesi için kapsamlı web uygulaması.",
    tech: ["React", "Next.js", "Node.js", "PostgreSQL"],
    link: "https://www.marksoft.com.tr",
  },
];

const categories = ["Tümü", "LLM", "Vision", "Ses", "Kurumsal", "Full-Stack"];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Tümü");
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

  const filteredProjects = activeCategory === "Tümü"
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
          <p className="text-zinc-400 mt-4">CerebrumTech ve kişisel projelerim</p>
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
                  Projeyi Gör
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
