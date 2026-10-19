"use client";

const education = [
  {
    institution: "Green University of Bangladesh",
    degree: "B.Sc. in Electrical & Electronic Engineering (EEE)",
    field: "Electrical & Electronic Engineering",
    year: "Jan 2019 – Feb 2023",
    grade: "CGPA: 3.44 / 4.00",
    status: "Completed",
    description:
      "Developed strong technical and analytical skills through MATLAB/Simulink-based research, engineering analysis, system modeling, simulation, and power-quality research involving renewable energy systems and FACTS devices.",
    icon: "🎓",
  },
  {
    institution: "Govt. Debendra College — Manikganj, Bangladesh",
    degree: "Higher Secondary Certificate (HSC)",
    field: "Science",
    year: "Jun 2015 – Oct 2017",
    grade: "GPA: 4.33 / 5.00",
    status: "Completed",
    description:
      "Completed higher secondary education in the Science stream, building a strong foundation in mathematics, physics, and chemistry.",
    icon: "📚",
  },
  {
    institution: "Dakhin Jamsha High School — Manikganj, Bangladesh",
    degree: "Secondary School Certificate (SSC)",
    field: "Science",
    year: "Feb 2015",
    grade: "GPA: 4.33 / 5.00",
    status: "Completed",
    description:
      "Completed secondary education with distinction in the Science stream.",
    icon: "🏫",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-700 text-sm font-semibold rounded-full mb-4">
            Education
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Educational Background
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            My academic journey that laid the foundation for my career in web development.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-200 via-purple-200 to-transparent"></div>

          {education.map((edu, idx) => (
            <div key={idx} className="relative flex gap-6 mb-8">
              {/* Icon */}
              <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-white border-2 border-indigo-200 rounded-2xl flex items-center justify-center shadow-sm text-2xl">
                {edu.icon}
              </div>

              {/* Card */}
              <div className="flex-1 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-200 p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">{edu.degree}</h3>
                    <p className="text-indigo-600 font-medium text-sm">{edu.field}</p>
                    <p className="text-slate-500 text-sm mt-0.5">{edu.institution}</p>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-1.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-full border border-slate-100">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {edu.year}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded-full border border-indigo-100">
                      {edu.grade}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full ${
                        edu.status === "Ongoing"
                          ? "bg-green-50 text-green-700"
                          : "bg-slate-50 text-slate-600 border border-slate-100"
                      }`}
                    >
                      {edu.status === "Ongoing" && (
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                      )}
                      {edu.status}
                    </span>
                  </div>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
