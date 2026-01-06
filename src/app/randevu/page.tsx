"use client";

import { useEffect } from "react";
import Link from "next/link";

const CALENDLY_USERNAME = "oguzhandoganoglu";

export default function Randevu() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="h-screen overflow-hidden bg-[#0a0a0a] flex flex-col">
      {/* Navbar */}
      <nav className="shrink-0 glass py-4">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
          >
            <span className="gradient-text">oguzhan</span>
            <span className="text-zinc-500">.dev</span>
          </Link>
          <Link
            href="/"
            className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Ana Sayfa
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="flex-1 flex flex-col min-h-0 px-6 py-6">
        <div className="max-w-4xl mx-auto w-full flex flex-col flex-1 min-h-0">
          {/* Header */}
          <div className="text-center shrink-0 mb-6">
            <h1 className="text-3xl font-bold mb-2">
              <span className="gradient-text">Randevu Al</span>
            </h1>
            <p className="text-zinc-400">
              Projeleriniz, iş birlikleri veya danışmanlık için görüşme ayarlayın.
            </p>
          </div>

          {/* Calendly Embed */}
          <div className="card flex-1 min-h-0 overflow-hidden">
            <div
              className="calendly-inline-widget w-full h-full"
              data-url={`https://calendly.com/${CALENDLY_USERNAME}?hide_gdpr_banner=1&background_color=0a0a0a&text_color=fafafa&primary_color=10b981`}
              style={{ minWidth: "320px", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
