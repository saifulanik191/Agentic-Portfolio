"use client";
import { useState } from "react";

const extracurricular = [
  {
    title: "Bonsai Cultivation",
    emoji: "🌿",
    color: "green",
    description:
      "I practice the ancient Japanese art of Bonsai — carefully shaping miniature trees through pruning, wiring, and patient cultivation. This art form has taught me precision, long-term vision, and the beauty of working with living things.",
    skills: ["Patience", "Attention to Detail", "Long-term Thinking", "Artistic Vision"],
  },
  {
    title: "Miniature Landscapes",
    emoji: "🏔️",
    color: "teal",
    description:
      "Creating tiny, detailed worlds through terrariums and diorama-style miniature landscapes. I enjoy the creative challenge of making natural scenes in a small, contained space — balancing rocks, moss, soil, and plants to create a living artwork.",
    skills: ["Creativity", "Design Thinking", "Problem Solving", "Spatial Awareness"],
  },
  {
    title: "Indoor Gardening",
    emoji: "🪴",
    color: "emerald",
    description:
      "Maintaining a growing collection of indoor plants — from succulents to tropical foliage. It adds greenery and calm to my workspace while teaching me about growth cycles, care routines, and the rewarding experience of nurturing life.",
    skills: ["Dedication", "Routine Building", "Observation", "Care & Nurturing"],
  },
];

const colorMap = {
  green: {
    bg: "bg-green-50",
    border: "border-green-100",
    text: "text-green-700",
    badge: "bg-green-100 text-green-700",
    icon: "bg-green-100",
  },
  teal: {
    bg: "bg-teal-50",
    border: "border-teal-100",
    text: "text-teal-700",
    badge: "bg-teal-100 text-teal-700",
    icon: "bg-teal-100",
  },
  emerald: {
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    text: "text-emerald-700",
    badge: "bg-emerald-100 text-emerald-700",
    icon: "bg-emerald-100",
  },
};

export default function ExtracurricularSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="hobbies" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-green-50 text-green-700 text-sm font-semibold rounded-full mb-4">
            Beyond Code
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Extracurricular Activities
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Outside of programming, I find peace and creativity in nature-inspired hobbies that sharpen the same skills I use in development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {extracurricular.map((item, idx) => {
            const c = colorMap[item.color];
            return (
              <div
                key={item.title}
                onClick={() => setActive(idx)}
                className={`rounded-2xl border p-6 cursor-pointer transition-all duration-200 ${
                  active === idx
                    ? `${c.bg} ${c.border} shadow-md`
                    : "bg-white border-slate-100 hover:border-slate-200 hover:shadow-sm"
                }`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4 ${c.icon}`}>
                  {item.emoji}
                </div>
                <h3 className={`font-bold text-lg mb-2 ${active === idx ? c.text : "text-slate-900"}`}>
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {item.skills.map((skill) => (
                    <span key={skill} className={`px-2.5 py-1 text-xs font-medium rounded-full ${c.badge}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quote */}
        <div className="mt-12 text-center p-8 bg-gradient-to-br from-slate-50 to-green-50/30 rounded-2xl border border-slate-100">
          <div className="text-4xl mb-4">🌱</div>
          <blockquote className="text-slate-600 text-lg italic max-w-2xl mx-auto leading-relaxed">
            &ldquo;Just like a bonsai tree, great software requires patience, careful shaping, and constant nurturing — the process is as beautiful as the result.&rdquo;
          </blockquote>
          <p className="mt-4 text-slate-400 text-sm font-medium">— Saiful Islam</p>
        </div>
      </div>
    </section>
  );
}
