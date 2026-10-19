"use client";

export default function Footer() {
  const year = 2026;


  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="font-bold text-white text-lg">
              Saiful<span className="text-indigo-400">.</span>
            </span>
            <span className="text-slate-500 text-sm">
              Full-Stack & WordPress Developer
            </span>
          </div>

          {/* Copyright */}
          <p className="text-slate-500 text-sm text-center">
            © {year} Saiful Islam. All rights reserved.
          </p>

          {/* Back to Top */}
          <button
            onClick={handleScrollTop}
            id="back-to-top"
            className="flex items-center gap-2 text-slate-400 hover:text-white text-sm font-medium transition-colors"
          >
            Back to top
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
