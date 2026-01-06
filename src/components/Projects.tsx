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
      "LLaMA 3 (8B), Qwen 2 (7B), LLaMA 3.1 (8B) ve Gemma-2 (9B) modellerini Türkçe veri ile fine-tune ettim. 6 model HuggingFace'te yayınlandı. Cere-LLaMA-3-8B, 70B parametreli modellerden daha iyi performans gösterdi.",
    tech: ["LLaMA", "Unsloth", "LLaMA-Factory", "HuggingFace"],
    link: "https://huggingface.co/CerebrumTech",
  },
  {
    title: "AI Podcast Uygulaması",
    category: "Ses",
    badge: "Üretimde",
    badgeType: "green",
    description:
      "URL veya metinden otomatik podcast oluşturan uygulama. Çoklu konuşmacı, ses seçimi, Türkçe/İngilizce destek. OpenAI + ElevenLabs entegrasyonu.",
    tech: ["Python", "OpenAI", "ElevenLabs", "React"],
    link: "https://podcast.cereinsight.com",
  },
  {
    title: "RAG & LLM Orkestrasyon",
    category: "LLM",
    description:
      "3.864 PDF'ten otomatik soru-cevap üretimi, embedding ve vektör DB. RouteLLM ile akıllı yönlendirme: basit sorular local LLaMA'ya, zor sorular GPT-4o'ya.",
    tech: ["RAG", "RouteLLM", "Embedding", "Streamlit"],
  },
  {
    title: "Otoyol Plaka Tanıma",
    category: "Vision",
    badge: "%98 Doğruluk",
    badgeType: "blue",
    description:
      "YOLOv8 ile plaka tespiti (fine-tune), PaddleOCR ve Google OCR karşılaştırması. Base64 API + Docker ile production'a deploy edildi.",
    tech: ["YOLOv8", "PaddleOCR", "Docker", "FastAPI"],
  },
  {
    title: "Lip-Sync & Avatar",
    category: "Vision",
    description:
      "SyncTalk ile model eğitimi yaparak avatar dudak senkronizasyonu. 4090 GPU sunucuda inference, gerçek zamanlıya yakın performans.",
    tech: ["SyncTalk", "PyTorch", "CUDA", "4090 GPU"],
  },
  {
    title: "Virtual Try-On & Face Swap",
    category: "Vision",
    description:
      "KlingAI API ile kıyafet giydirme, Roop + GFPGAN ile yüz değiştirme kiosk uygulaması. Gerçek zamanlı yüz tespiti ve kalite artırma.",
    tech: ["KlingAI", "Roop", "GFPGAN", "Computer Vision"],
  },
  {
    title: "TTS & STT Sistemleri",
    category: "Ses",
    description:
      "Amazon & Google TTS entegrasyonu, Zonos (local açık kaynak TTS), Whisper & WhisperX ile speech-to-text ve konuşmacı ayrımı.",
    tech: ["Whisper", "WhisperX", "Zonos", "Amazon TTS"],
  },
  {
    title: "Call Center AI Asistanı",
    category: "Kurumsal",
    description:
      "Konuşmaları dinleyip kategorize eden, ilgili birime yönlendiren AI asistan. RAG + Structured Output ile Python desktop uygulaması.",
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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">
            <span className="gradient-text">Projeler</span>
          </h2>
          <p className="text-[var(--fg-muted)] mt-4 font-[family-name:var(--font-body)]">CerebrumTech ve kişisel projelerim</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 font-[family-name:var(--font-display)] ${
                activeCategory === cat
                  ? "bg-[var(--accent)] text-[var(--bg)] shadow-[0_0_20px_var(--accent-glow)]"
                  : "bg-[var(--bg-elevated)] text-[var(--fg-muted)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Classic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`group transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`relative h-full p-4 sm:p-6 rounded-xl sm:rounded-2xl border transition-all duration-300 ${
                  hoveredIndex === index
                    ? "bg-[var(--bg-elevated)] border-[var(--accent)] shadow-[0_0_30px_-10px_var(--accent-glow)] -translate-y-1"
                    : "bg-[var(--bg-elevated)]/50 border-[var(--border)] hover:border-[var(--border-hover)]"
                }`}
              >
                {/* Content */}
                <div className="flex flex-col h-full">
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-[var(--fg-subtle)] uppercase tracking-widest font-[family-name:var(--font-mono)]">
                      {project.category}
                    </span>
                    {project.badge && (
                      <span className={`badge ${project.badgeType === "green" ? "badge-green" : "badge-blue"}`}>
                        {project.badge}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className={`text-lg font-semibold mb-3 font-[family-name:var(--font-display)] transition-colors duration-300 ${
                    hoveredIndex === index ? "text-[var(--accent)]" : "text-[var(--fg)]"
                  }`}>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[var(--fg-muted)] text-sm leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2.5 py-1 rounded-md text-xs font-[family-name:var(--font-mono)] bg-[var(--bg)] text-[var(--fg-subtle)] border border-[var(--border)]"
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
                      className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] hover:underline font-[family-name:var(--font-display)]"
                    >
                      <span>Projeyi Gör</span>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
