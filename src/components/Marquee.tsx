"use client";

interface MarqueeProps {
  items: string[];
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
}

export default function Marquee({
  items,
  speed = 30,
  direction = "left",
  pauseOnHover = true
}: MarqueeProps) {
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden">
      {/* Gradient Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--bg)] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--bg)] to-transparent z-10" />

      {/* Marquee Content */}
      <div
        className={`flex gap-6 ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-6 py-3 bg-[var(--bg-elevated)] border border-[var(--border)] rounded-full text-[var(--fg-muted)] font-[family-name:var(--font-mono)] text-sm whitespace-nowrap hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300"
          >
            {item}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        @keyframes marquee-right {
          0% {
            transform: translateX(-33.33%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
