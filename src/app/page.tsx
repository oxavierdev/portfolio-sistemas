import PortfolioHeader from "@/components/custom/portfolio-header"
import PortfolioHero from "@/components/custom/portfolio-hero"
import PortfolioAbout from "@/components/custom/portfolio-about"
import PortfolioProjects from "@/components/custom/portfolio-projects"
import PortfolioServices from "@/components/custom/portfolio-services"
import PortfolioContact from "@/components/custom/portfolio-contact"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#60a5fa]/10 dark:bg-[#60a5fa]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-gray-400/10 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#60a5fa]/5 dark:bg-[#60a5fa]/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <PortfolioHeader />
        <PortfolioHero />
        <PortfolioAbout />
        <PortfolioProjects />
        <PortfolioServices />
        <PortfolioContact />

        {/* Footer */}
        <footer className="backdrop-blur-md bg-white/50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-700/50 py-8 transition-colors duration-300">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()} Portfolio. Desenvolvido com{" "}
                <span className="text-[#60a5fa]">♥</span> usando Next.js e Tailwind CSS
              </p>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 mt-2">
                Analista em Desenvolvimento de Sistemas
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
