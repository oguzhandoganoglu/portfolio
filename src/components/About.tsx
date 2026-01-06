"use client";

import CountUp from "./CountUp";
import Marquee from "./Marquee";

const experience = [
  {
    company: "Marksoft",
    role: "Full-Stack Developer",
    period: "2025 - Devam Ediyor",
    description: "Marka ve patent yönetim yazılımı geliştiriyorum.",
  },
  {
    company: "CerebrumTech",
    role: "AI/ML Engineer",
    period: "2024 - 2025",
    description: "LLM fine-tuning, RAG sistemleri, Computer Vision, TTS/STT ve kurumsal AI çözümleri geliştirdim.",
  },
  {
    company: "TOBB ETÜ",
    role: "Bilgisayar Mühendisliği",
    period: "2017 - 2024",
    description: "Lisans eğitimimi başarıyla tamamladım.",
  },
];

const stats = [
  { value: 6, suffix: "+", label: "LLM Modeli", icon: "🧠" },
  { value: 20, suffix: "+", label: "AI Projesi", icon: "🤖" },
  { value: 3, suffix: "+", label: "Yıl Deneyim", icon: "💼" },
  { value: 1, suffix: "", label: "Akademik Yayın", icon: "📄" },
];

const expertise = [
  { icon: "🧠", title: "LLM & Fine-tuning", desc: "LLaMA, Gemma, Qwen fine-tuning, RAG sistemleri" },
  { icon: "🎙️", title: "Ses & Konuşma", desc: "TTS, STT, Whisper, Lip-sync, AI Podcast" },
  { icon: "👁️", title: "Computer Vision", desc: "YOLOv8, Face Swap, Virtual Try-On, OCR" },
  { icon: "💻", title: "Full-Stack", desc: "React, Next.js, Node.js, Python, Docker" },
];

const technologies = [
  "Python", "PyTorch", "LLaMA", "Transformers", "HuggingFace",
  "TypeScript", "React", "Next.js", "Node.js",
  "Docker", "PostgreSQL", "FastAPI", "Streamlit"
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="glow-green" style={{ top: '20%', right: '-10%' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">
            <span className="gradient-text">Hakkımda</span>
          </h2>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
            Yapay zeka, LLM fine-tuning ve full-stack geliştirme alanlarında uzman bir mühendis
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="stat-box group">
              <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform duration-300">{stat.icon}</span>
              <div className="text-4xl font-bold text-[var(--fg)] mb-2 font-[family-name:var(--font-display)]">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[var(--fg-subtle)] text-sm font-[family-name:var(--font-mono)]">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Column */}
          <div>
            {/* Bio */}
            <div className="info-card mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">Ben Kimim?</h3>
              <p className="text-zinc-300 leading-relaxed mb-4">
                TOBB ETÜ Bilgisayar Mühendisliği mezunuyum.
                <span className="text-emerald-500 font-medium"> CerebrumTech</span>&apos;te AI/ML Engineer olarak
                LLM fine-tuning, RAG sistemleri, Computer Vision ve ses işleme projeleri geliştirdim.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                <span className="text-white font-medium">Cere-LLaMA-3-8B</span> modelim akademik benchmark&apos;larda
                70B parametreli modellerden iyi performans gösterdi. Şimdi
                <span className="text-emerald-500 font-medium"> Marksoft</span>&apos;ta Full-Stack Developer olarak çalışmaya devam ediyorum.
              </p>
            </div>

            {/* Expertise */}
            <h3 className="text-lg font-semibold text-white mb-4">Uzmanlık Alanları</h3>
            <div className="grid grid-cols-2 gap-3">
              {expertise.map((item, index) => (
                <div key={index} className="card p-4">
                  <span className="text-2xl mb-2 block">{item.icon}</span>
                  <h4 className="font-medium text-white text-sm mb-1">{item.title}</h4>
                  <p className="text-zinc-500 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Experience Timeline */}
            <h3 className="text-lg font-semibold text-white mb-6">Deneyim</h3>
            <div className="mb-8">
              {experience.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="flex items-start justify-between mb-1">
                    <h4 className="font-semibold text-white">{exp.company}</h4>
                    <span className="text-emerald-500 text-sm font-medium">{exp.period}</span>
                  </div>
                  <p className="text-zinc-400 text-sm mb-1">{exp.role}</p>
                  <p className="text-zinc-500 text-sm">{exp.description}</p>
                </div>
              ))}
            </div>

            {/* Technologies */}
            <div className="card p-5">
              <h4 className="text-sm font-semibold text-[var(--fg)] mb-4 font-[family-name:var(--font-display)]">Kullandığım Teknolojiler</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, i) => (
                  <span key={i} className="tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Technology Marquee */}
        <div className="mt-16">
          <Marquee
            items={[...technologies, "OpenAI", "Anthropic", "CUDA", "Linux", "Git", "REST API"]}
            speed={40}
          />
        </div>
      </div>
    </section>
  );
}
