"use client";

import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    icon: "🧠",
    title: "LLM & NLP",
    skills: ["LLaMA", "Qwen", "Gemma", "Fine-tuning", "RAG", "RouteLLM", "Unsloth", "LLaMA-Factory"],
  },
  {
    icon: "🎙️",
    title: "Ses & Konuşma",
    skills: ["Whisper", "WhisperX", "ElevenLabs", "Zonos", "Amazon TTS", "Diarization"],
  },
  {
    icon: "👁️",
    title: "Computer Vision",
    skills: ["YOLOv8", "PaddleOCR", "SyncTalk", "Roop", "GFPGAN", "Face Detection"],
  },
  {
    icon: "💻",
    title: "Full-Stack",
    skills: ["React", "Next.js", "Node.js", "FastAPI", "Streamlit", "PostgreSQL"],
  },
  {
    icon: "🛠️",
    title: "DevOps & Araçlar",
    skills: ["Docker", "Git", "CUDA", "Linux", "HuggingFace", "REST API"],
  },
  {
    icon: "🐍",
    title: "Programlama",
    skills: ["Python", "TypeScript", "PyTorch", "Transformers", "OpenAI API", "Anthropic API"],
  },
];

export default function Skills() {
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
      id="skills"
      ref={sectionRef}
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Background */}
      <div className="glow-blue" style={{ top: '30%', left: '-10%' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="section-title">
            <span className="gradient-text">Yetenekler</span>
          </h2>
          <p className="text-zinc-500">Uzmanlaştığım teknolojiler ve araçlar</p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`card p-6 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="font-semibold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
