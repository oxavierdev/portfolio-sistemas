export default function PortfolioAbout() {
  const skills = [
    { name: "HTML5 & CSS3", level: 95 },
    { name: "JavaScript/TypeScript", level: 90 },
    { name: "React & Next.js", level: 88 },
    { name: "Node.js", level: 85 },
    { name: "SQL & NoSQL", level: 82 },
    { name: "Git & GitHub", level: 90 },
  ]

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-600 to-[#60a5fa] bg-clip-text text-transparent">
            Sobre Mim
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gray-600 to-[#60a5fa] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* About Text */}
          <div className="backdrop-blur-xl bg-white/50 dark:bg-gray-900/30 p-6 sm:p-8 lg:p-10 rounded-3xl border border-gray-200 dark:border-gray-700/50 shadow-2xl transition-colors duration-300">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6">
              Analista em Desenvolvimento de Sistemas
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Formado em Análise e Desenvolvimento de Sistemas, sou apaixonado por tecnologia 
              e inovação. Minha jornada no desenvolvimento de software começou com a curiosidade 
              de entender como as coisas funcionam e evoluiu para a criação de soluções que 
              impactam positivamente a vida das pessoas.
            </p>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Tenho experiência em desenvolvimento full-stack, com foco especial em tecnologias 
              web modernas. Acredito que código limpo, boas práticas e trabalho em equipe são 
              fundamentais para o sucesso de qualquer projeto.
            </p>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              Estou sempre em busca de novos desafios e oportunidades para aprender e crescer 
              profissionalmente. Vamos construir algo incrível juntos?
            </p>

            <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-4">
              <div className="backdrop-blur-lg bg-gray-200 dark:bg-gray-800/30 p-4 rounded-xl border border-gray-300 dark:border-gray-700/50 transition-colors duration-300">
                <p className="text-3xl sm:text-4xl font-bold text-gray-600 dark:text-[#60a5fa] mb-1">3+</p>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Anos de Experiência</p>
              </div>
              <div className="backdrop-blur-lg bg-gray-200 dark:bg-gray-800/30 p-4 rounded-xl border border-gray-300 dark:border-gray-700/50 transition-colors duration-300">
                <p className="text-3xl sm:text-4xl font-bold text-[#60a5fa] mb-1">20+</p>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Projetos Concluídos</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="backdrop-blur-xl bg-white/50 dark:bg-gray-900/30 p-6 sm:p-8 lg:p-10 rounded-3xl border border-gray-200 dark:border-gray-700/50 shadow-2xl transition-colors duration-300">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-6 sm:mb-8">
              Habilidades Técnicas
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-sm sm:text-base text-[#60a5fa] font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-300 dark:bg-gray-800/50 rounded-full overflow-hidden border border-gray-400 dark:border-gray-700/50">
                    <div
                      className="h-full bg-gradient-to-r from-gray-600 to-[#60a5fa] rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-300 dark:border-gray-700/50">
              <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-4">Outras Competências</h4>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {["Agile/Scrum", "REST APIs", "Docker", "AWS", "UI/UX Design", "Testing"].map((item, index) => (
                  <span
                    key={index}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 backdrop-blur-lg bg-gray-200 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700/50 rounded-full text-xs sm:text-sm text-gray-700 dark:text-gray-300 hover:bg-[#60a5fa]/20 hover:border-[#60a5fa]/50 transition-all duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
