export default function PortfolioServices() {
  const services = [
    {
      icon: (
        <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Desenvolvimento Web",
      description: "Criação de sites e aplicações web modernas, responsivas e otimizadas para SEO.",
      features: ["React & Next.js", "HTML5/CSS3", "JavaScript/TypeScript", "Performance"]
    },
    {
      icon: (
        <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Aplicativos Mobile",
      description: "Desenvolvimento de aplicativos nativos e híbridos para iOS e Android.",
      features: ["React Native", "UI/UX Design", "APIs Integration", "Cross-platform"]
    },
    {
      icon: (
        <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      title: "Backend & APIs",
      description: "Desenvolvimento de APIs RESTful e sistemas backend escaláveis e seguros.",
      features: ["Node.js", "Express", "Database Design", "Authentication"]
    },
    {
      icon: (
        <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: "UI/UX Design",
      description: "Design de interfaces intuitivas e experiências de usuário memoráveis.",
      features: ["Figma", "Prototyping", "User Research", "Responsive Design"]
    },
    {
      icon: (
        <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Consultoria Tech",
      description: "Consultoria especializada em arquitetura de software e boas práticas.",
      features: ["Code Review", "Architecture", "Best Practices", "Mentoring"]
    },
    {
      icon: (
        <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Otimização & Performance",
      description: "Análise e otimização de performance para aplicações web e mobile.",
      features: ["Speed Optimization", "SEO", "Lighthouse", "Core Web Vitals"]
    },
  ]

  return (
    <section id="services" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-600 to-[#60a5fa] bg-clip-text text-transparent">
            Serviços
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gray-600 to-[#60a5fa] mx-auto rounded-full mb-8"></div>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Soluções completas em desenvolvimento de software para transformar suas ideias em realidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group backdrop-blur-xl bg-white/50 dark:bg-gray-900/30 p-6 sm:p-8 rounded-3xl border border-gray-200 dark:border-gray-700/50 shadow-2xl hover:shadow-[#60a5fa]/20 transition-all duration-500 hover:scale-105"
            >
              {/* Icon */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-gray-500/20 to-[#60a5fa]/20 border border-[#60a5fa]/30 flex items-center justify-center text-[#60a5fa] mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4 group-hover:text-[#60a5fa] transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-5 sm:mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 sm:space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-[#60a5fa] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
