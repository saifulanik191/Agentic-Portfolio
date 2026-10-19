"use client";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-700 text-sm font-semibold rounded-full mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Know Who I Am
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            A glimpse into my journey, what drives me, and what I do outside of coding.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/picture of saiful islam.jpg"
                alt="Saiful Islam"
                fill
                sizes="(max-width: 768px) 100vw, 448px"
                className="object-cover object-top"
              />
              {/* Overlay card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-indigo-100 flex-shrink-0">
                    <Image
                      src="/saifulislamlogo.jpeg"
                      alt="Logo"
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800">Saiful Islam</div>
                    <div className="text-sm text-indigo-600 font-medium">Full-Stack & WordPress Dev</div>
                  </div>
                  <div className="ml-auto flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-xs text-slate-500">Available</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative dots */}
            <div className="absolute -top-6 -left-6 grid grid-cols-4 gap-2 opacity-30">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="w-2 h-2 bg-indigo-400 rounded-full"></div>
              ))}
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              I build digital experiences that matter
            </h3>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Hi! I&apos;m <span className="font-semibold text-slate-800">Saiful Islam</span>, a Full-Stack and WordPress developer based in Bangladesh with over{" "}
                <span className="font-semibold text-indigo-600">1.5 years of hands-on experience</span>. My journey into programming began with a curiosity for how websites work, which quickly evolved into a deep passion for building them.
              </p>
              <p>
                I specialize in crafting pixel-perfect, user-friendly web applications using{" "}
                <span className="font-semibold text-slate-800">React.js, Next.js, TypeScript, and MongoDB</span> on the technical side, along with{" "}
                <span className="font-semibold text-slate-800">WordPress, WooCommerce, and Elementor</span> for content-driven sites and e-commerce solutions.
              </p>
              <p>
                I love solving complex problems and turning ideas into elegant digital experiences. Whether it&apos;s a custom WordPress theme, a dynamic React dashboard, or a full-stack web app — I enjoy every step of the process.
              </p>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { label: "Name", value: "Saiful Islam" },
                { label: "Email", value: "anik8187@gmail.com" },
                { label: "Phone", value: "01793085564" },
                { label: "Location", value: "Bangladesh" },
                { label: "Experience", value: "1.5+ Years" },
                { label: "Freelance", value: "Available" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-2">
                  <span className="text-indigo-500 mt-0.5">▸</span>
                  <div>
                    <span className="font-semibold text-slate-700 text-sm">{item.label}: </span>
                    <span className="text-slate-500 text-sm">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Hobbies */}
            <div className="mt-8 p-6 bg-gradient-to-br from-slate-50 to-indigo-50/30 rounded-2xl border border-slate-100">
              <h4 className="font-bold text-slate-800 mb-3 text-sm uppercase tracking-wider">Beyond Coding</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "🌿 Bonsai Cultivation", color: "bg-green-50 text-green-700 border-green-100" },
                  { label: "🏔️ Miniature Landscapes", color: "bg-teal-50 text-teal-700 border-teal-100" },
                  { label: "🪴 Indoor Gardening", color: "bg-emerald-50 text-emerald-700 border-emerald-100" },
                ].map((h) => (
                  <span
                    key={h.label}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium border ${h.color}`}
                  >
                    {h.label}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-4">
                <div className="w-20 h-20 rounded-xl overflow-hidden border-2 border-green-100 flex-shrink-0">
                  <Image
                    src="/hobby-bonsai.jpg"
                    alt="Bonsai hobby"
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Outside of coding, I practice the art of <strong className="text-slate-700">Bonsai cultivation</strong>, create miniature landscapes, and maintain indoor gardens — hobbies that teach me the same values I bring to development: precision, patience, and an eye for beauty.
                </p>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <a
                href="/Resume Of Saiful Islam .pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white font-semibold text-sm rounded-full hover:bg-indigo-700 transition-colors shadow-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-slate-200 text-slate-700 font-semibold text-sm rounded-full hover:border-indigo-300 hover:text-indigo-600 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
