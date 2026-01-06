export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-zinc-600 text-sm">
          &copy; {new Date().getFullYear()} Oguzhan Doganoglu
        </p>
        <p className="text-zinc-700 text-sm">
          Next.js & Tailwind CSS ile yapıldı
        </p>
      </div>
    </footer>
  );
}
