"use client"

import { useState } from "react"

export default function PortfolioProjects() {
  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "web",
      description: "Plataforma completa de e-commerce com painel administrativo e integração de pagamentos.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      category: "app",
      description: "Aplicativo de gerenciamento de tarefas com funcionalidades de colaboração em equipe.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      tags: ["React Native", "Firebase"],
      link: "#"
    },
    {
      id: 3,
      title: "Portfolio Website",
      category: "web",
      description: "Site portfólio moderno e responsivo com animações e efeitos visuais.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      tags: ["Next.js", "Tailwind CSS"],
      link: "#"
    },
    {
      id: 4,
      title: "Dashboard Analytics",
      category: "design",
      description: "Dashboard interativo para visualização de dados e métricas em tempo real.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["React", "Chart.js", "API"],
      link: "#"
    },
    {
      id: 5,
      title: "Social Media App",
      category: "app",
      description: "Rede social com feed, stories e sistema de mensagens instantâneas.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
      tags: ["React Native", "Socket.io"],
      link: "#"
    },
    {
      id: 6,
      title: "Landing Page",
      category: "design",
      description: "Landing page moderna para startup com foco em conversão e SEO.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tags: ["HTML5", "CSS3", "JavaScript"],
      link: "#"
    },
  ]

  const filters = [
    { id: "all", label: "Todos" },
    { id: "web", label: "Web" },
    { id: "app", label: "Apps" },
    { id: "design", label: "Design" },
  ]

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="portfolio" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-600 to-[#60a5fa] bg-clip-text text-transparent">
            Meus Projetos
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gray-600 to-[#60a5fa] mx-auto rounded-full mb-8"></div>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Confira alguns dos projetos que desenvolvi ao longo da minha carreira
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-gray-600 to-[#60a5fa] text-white shadow-lg shadow-[#60a5fa]/50"
                  : "backdrop-blur-lg bg-gray-200 dark:bg-gray-800/30 border border-gray-300 dark:border-gray-700/50 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700/50"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group backdrop-blur-xl bg-white/50 dark:bg-gray-900/30 rounded-3xl border border-gray-200 dark:border-gray-700/50 overflow-hidden shadow-2xl hover:shadow-[#60a5fa]/20 transition-all duration-500 hover:scale-105"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60"></div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-[#60a5fa] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 sm:px-3 py-1 backdrop-blur-lg bg-gray-200 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700/50 rounded-full text-xs text-gray-700 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  className="inline-flex items-center text-xs sm:text-sm text-[#60a5fa] hover:text-blue-500 font-medium transition-colors duration-300"
                >
                  Ver Projeto
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
