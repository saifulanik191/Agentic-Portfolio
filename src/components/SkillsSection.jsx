"use client";

const skillCategories = [
  {
    category: "Frontend",
    color: "indigo",
    icon: "🎨",
    skills: [
      { name: "React.js", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "TypeScript", level: 72 },
      { name: "JavaScript", level: 88 },
      { name: "HTML5 & CSS3", level: 90 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    category: "Backend & Database",
    color: "purple",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 70 },
      { name: "MongoDB", level: 75 },
      { name: "REST APIs", level: 80 },
      { name: "Express.js", level: 65 },
    ],
  },
  {
    category: "WordPress",
    color: "blue",
    icon: "🌐",
    skills: [
      { name: "WordPress", level: 92 },
      { name: "WooCommerce", level: 88 },
      { name: "Elementor", level: 90 },
      { name: "Custom Themes", level: 80 },
      { name: "Plugins", level: 75 },
    ],
  },
  {
    category: "Tools & Others",
    color: "slate",
    icon: "🛠️",
    skills: [
      { name: "Git & GitHub", level: 82 },
      { name: "Figma", level: 70 },
      { name: "Vercel / Netlify", level: 80 },
      { name: "VS Code", level: 95 },
    ],
  },
];

const colorMap = {
  indigo: {
    bg: "bg-indigo-50",
    border: "border-indigo-100",
    text: "text-indigo-700",
    bar: "bg-indigo-500",
    badge: "bg-indigo-100 text-indigo-700",
    icon: "bg-indigo-100",
  },
  purple: {
    bg: "bg-purple-50",
    border: "border-purple-100",
    text: "text-purple-700",
    bar: "bg-purple-500",
    badge: "bg-purple-100 text-purple-700",
    icon: "bg-purple-100",
  },
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-100",
    text: "text-blue-700",
    bar: "bg-blue-500",
    badge: "bg-blue-100 text-blue-700",
    icon: "bg-blue-100",
  },
  slate: {
    bg: "bg-slate-50",
    border: "border-slate-200",
    text: "text-slate-700",
    bar: "bg-slate-500",
    badge: "bg-slate-100 text-slate-700",
    icon: "bg-slate-100",
  },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-700 text-sm font-semibold rounded-full mb-4">
            Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            My Technical Expertise
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Technologies and tools I work with to build amazing digital products.
          </p>
        </div>

        {/* Tech Badge Cloud */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {[
            "React.js", "Next.js", "TypeScript", "JavaScript", "Node.js",
            "MongoDB", "WordPress", "WooCommerce", "Elementor", "Tailwind CSS",
            "Git", "REST APIs", "Figma", "Vercel",
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-1.5 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-full shadow-sm hover:border-indigo-300 hover:text-indigo-700 hover:shadow-md transition-all duration-200 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Skill Category Cards with Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat) => {
            const c = colorMap[cat.color];
            return (
              <div
                key={cat.category}
                className={`${c.bg} border ${c.border} rounded-2xl p-6 hover:shadow-md transition-shadow duration-200`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`${c.icon} w-10 h-10 rounded-xl flex items-center justify-center text-lg`}>
                    {cat.icon}
                  </div>
                  <h3 className={`font-bold text-lg ${c.text}`}>{cat.category}</h3>
                </div>

                <div className="space-y-4">
                  {cat.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                        <span className={`text-xs font-semibold ${c.text}`}>{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-white rounded-full overflow-hidden shadow-inner">
                        <div
                          className={`h-full ${c.bar} rounded-full transition-all duration-700`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
