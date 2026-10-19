"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    id: "project-1",
    slug: "ecommerce-wordpress-store",
    title: "E-Commerce WordPress Store",
    type: "WordPress",
    typeColor: "blue",
    shortDescription:
      "A fully functional e-commerce website built with WordPress and WooCommerce featuring custom product pages, payment gateway integration, and a mobile-responsive design.",
    image: null,
    liveLink: "#",
    githubLink: null,
    technologies: ["WordPress", "WooCommerce", "Elementor", "PHP", "CSS"],
  },
  {
    id: "project-2",
    slug: "business-website-wordpress",
    title: "Business Website – WordPress",
    type: "WordPress",
    typeColor: "blue",
    shortDescription:
      "A professional multi-page business website with custom design, contact forms, SEO optimization, and a blog section built on WordPress.",
    image: null,
    liveLink: "#",
    githubLink: null,
    technologies: ["WordPress", "Elementor", "Yoast SEO", "WP Forms", "CSS"],
  },
  {
    id: "project-3",
    slug: "react-nextjs-web-app",
    title: "React + Next.js Web App",
    type: "React / Next.js",
    typeColor: "indigo",
    shortDescription:
      "A full-stack web application built with Next.js and MongoDB featuring authentication, dynamic content, and a modern responsive UI.",
    image: null,
    liveLink: "https://github.com/saifulanik191",
    githubLink: "https://github.com/saifulanik191",
    technologies: ["Next.js", "TypeScript", "MongoDB", "React.js", "Tailwind CSS"],
  },
];

const typeColorMap = {
  blue: "bg-blue-50 text-blue-700 border-blue-100",
  indigo: "bg-indigo-50 text-indigo-700 border-indigo-100",
};

// Placeholder SVG for projects without images
function ProjectPlaceholder({ title }) {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-50 flex flex-col items-center justify-center gap-3">
      <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center">
        <svg className="w-7 h-7 text-indigo-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12 0a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      </div>
      <span className="text-slate-400 text-xs font-medium text-center px-4">Project Preview Coming Soon</span>
    </div>
  );
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "WordPress", "React / Next.js"];

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.type === filter);

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-700 text-sm font-semibold rounded-full mb-4">
            Projects
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            My Recent Work
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            A selection of projects I&apos;ve built — from custom WordPress solutions to full-stack React applications.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === f
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "bg-white border border-slate-200 text-slate-600 hover:border-indigo-300 hover:text-indigo-600"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-slate-50 overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <ProjectPlaceholder title={project.title} />
                )}
                {/* Type Badge */}
                <div className="absolute top-3 left-3">
                  <span className={`px-2.5 py-1 text-xs font-semibold rounded-full border ${typeColorMap[project.typeColor]}`}>
                    {project.type}
                  </span>
                </div>
                {/* Live Link overlay */}
                {project.liveLink && project.liveLink !== "#" && (
                  <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-white text-slate-800 rounded-full text-sm font-semibold hover:bg-indigo-600 hover:text-white transition-colors"
                    >
                      Live Demo
                    </a>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5">
                <h3 className="font-bold text-slate-900 text-lg mb-2 line-clamp-1">{project.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.shortDescription}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="px-2.5 py-0.5 bg-slate-50 border border-slate-100 text-slate-600 text-xs font-medium rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-50">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-indigo-600 text-sm font-semibold hover:text-indigo-700 transition-colors"
                  >
                    View Details
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <div className="flex items-center gap-2">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-colors"
                        aria-label="GitHub"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                      </a>
                    )}
                    {project.liveLink && project.liveLink !== "#" && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:text-indigo-600 hover:border-indigo-200 transition-colors"
                        aria-label="Live Demo"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
