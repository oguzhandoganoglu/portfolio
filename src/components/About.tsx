"use client";

const experience = [
  {
    company: "Marksoft",
    role: "Full-Stack Developer",
    period: "2025 - Devam Ediyor",
    description: "Marka ve patent yonetim yazilimi gelistiriyorum.",
  },
  {
    company: "CerebrumTech",
    role: "AI/ML Engineer",
    period: "2024 - 2025",
    description: "LLM fine-tuning, RAG sistemleri, Computer Vision, TTS/STT ve kurumsal AI cozumleri gelistirdim.",
  },
  {
    company: "TOBB ETU",
    role: "Bilgisayar Muhendisligi",
    period: "2017 - 2024",
    description: "Lisans egitimimi basariyla tamamladim.",
  },
];

const stats = [
  { value: "6+", label: "LLM Modeli", icon: "🧠" },
  { value: "20+", label: "AI Projesi", icon: "🤖" },
  { value: "3+", label: "Yil Deneyim", icon: "💼" },
  { value: "1", label: "Akademik Yayin", icon: "📄" },
];

const expertise = [
  { icon: "🧠", title: "LLM & Fine-tuning", desc: "LLaMA, Gemma, Qwen fine-tuning, RAG sistemleri" },
  { icon: "🎙️", title: "Ses & Konusma", desc: "TTS, STT, Whisper, Lip-sync, AI Podcast" },
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
            <span className="gradient-text">Hakkimda</span>
          </h2>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
            Yapay zeka, LLM fine-tuning ve full-stack gelistirme alanlarinda uzman bir muhendis
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="stat-box">
              <span className="text-2xl mb-2 block">{stat.icon}</span>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-zinc-500 text-sm">{stat.label}</div>
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
                TOBB ETU Bilgisayar Muhendisligi mezunuyum.
                <span className="text-emerald-500 font-medium"> CerebrumTech</span>&apos;te AI/ML Engineer olarak
                LLM fine-tuning, RAG sistemleri, Computer Vision ve ses isleme projeleri gelistirdim.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                <span className="text-white font-medium">Cere-LLaMA-3-8B</span> modelim akademik benchmark&apos;larda
                70B parametreli modellerden iyi performans gosterdi. Simdi
                <span className="text-emerald-500 font-medium"> Marksoft</span>&apos;ta Full-Stack Developer olarak calismaya devam ediyorum.
              </p>
            </div>

            {/* Expertise */}
            <h3 className="text-lg font-semibold text-white mb-4">Uzmanlik Alanlari</h3>
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
              <h4 className="text-sm font-semibold text-white mb-4">Kullandigim Teknolojiler</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, i) => (
                  <span key={i} className="tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
