"use client";

const experiences = [
  {
    role: "Project Basis WordPress Web Designer",
    company: "DevwingsLLC",
    duration: "Jan 2025 – Present",
    type: "Contract",
    description:
      "Working on a project basis to design and deliver professional WordPress websites for clients, handling everything from layout implementation to final delivery.",
    highlights: [
      "Managed the website design and development process from layout implementation and WordPress customization",
      "Handled responsive optimization and final delivery with client revisions",
      "Handled client communication, requirements gathering, feedback, and revision requests",
      "Ensured project satisfaction through thorough quality control and timely delivery",
    ],
    technologies: ["WordPress", "Elementor", "CSS", "PHP", "Page Builders"],
    color: "indigo",
  },

];


export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-700 text-sm font-semibold rounded-full mb-4">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Work Experience
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            My professional journey and what I&apos;ve accomplished along the way.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-200 via-indigo-300 to-transparent"></div>

          {experiences.map((exp, idx) => (
            <div key={idx} className="relative flex gap-6 mb-12">
              {/* Timeline dot */}
              <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-100">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>

              {/* Content Card */}
              <div className="flex-1 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-200 p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{exp.role}</h3>
                    <p className="text-indigo-600 font-semibold text-sm mt-0.5">{exp.company}</p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-1.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded-full">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {exp.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                      {exp.type}
                    </span>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-4">{exp.description}</p>

                <ul className="space-y-1.5 mb-4">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <svg className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                      </svg>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-600 text-xs font-medium rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
