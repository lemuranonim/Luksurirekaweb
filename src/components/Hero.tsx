import { motion } from "motion/react";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";

interface HeroProps {
  onNavigate: (section: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const { theme } = useTheme();
  const { t } = useLanguage();

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };

  return (
    <section
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        theme === "dark" ? "bg-black" : "bg-gradient-to-br from-blue-50 via-white to-cyan-50"
      }`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 ${
            theme === "dark"
              ? "bg-gradient-to-br from-blue-900/20 via-black to-cyan-900/20"
              : "bg-gradient-to-br from-blue-100/30 via-transparent to-cyan-100/30"
          }`}
        />
        <motion.div
          className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl ${
            theme === "dark" ? "bg-blue-600/30" : "bg-blue-400/40"
          }`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl ${
            theme === "dark" ? "bg-cyan-500/30" : "bg-cyan-300/40"
          }`}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Grid Pattern */}
      <div
        className={`absolute inset-0 ${
          theme === "dark"
            ? "bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)]"
            : "bg-[linear-gradient(rgba(0,0,0,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.03)_1px,transparent_1px)]"
        } bg-[size:64px_64px]`}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <motion.div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm border mb-8 ${
              theme === "dark"
                ? "bg-white/5 border-white/10"
                : "bg-white/50 border-blue-200"
            }`}
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span
              className={`text-sm ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {t("hero.badge")}
            </span>
          </motion.div>

          <motion.h1
            className={`text-5xl sm:text-6xl lg:text-7xl mb-6 tracking-tight ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {t("hero.title1")}{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              {t("hero.title2")}
            </span>
            <br />
            {t("hero.title3")}
          </motion.h1>

          <motion.p
            className={`text-xl mb-12 max-w-3xl mx-auto ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button
              size="lg"
              onClick={() => onNavigate("portfolio")}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 px-8 py-6 group text-white"
            >
              {t("hero.viewWork")}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onNavigate("contact")}
              className={`px-8 py-6 ${
                theme === "dark"
                  ? "border-white/20 text-white hover:bg-white/10"
                  : "border-blue-300 text-blue-700 hover:bg-blue-50"
              }`}
            >
              <Zap className="mr-2 w-5 h-5" />
              {t("hero.startProject")}
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating Cards */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {[
            { number: "150+", label: t("hero.stats.projects") },
            { number: "98%", label: t("hero.stats.satisfaction") },
            { number: "50+", label: t("hero.stats.team") },
          ].map((stat, index) => (
            <motion.div
              key={index}
              animate={floatingAnimation}
              transition={{ delay: index * 0.2 }}
              className={`p-6 rounded-2xl backdrop-blur-sm border ${
                theme === "dark"
                  ? "bg-white/5 border-white/10"
                  : "bg-white/50 border-blue-200"
              }`}
            >
              <div className="text-4xl bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div
                className={theme === "dark" ? "text-gray-400" : "text-gray-600"}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div
          className={`w-6 h-10 border-2 rounded-full flex justify-center pt-2 ${
            theme === "dark" ? "border-white/30" : "border-gray-400/50"
          }`}
        >
          <motion.div
            className={`w-1.5 h-1.5 rounded-full ${
              theme === "dark" ? "bg-white" : "bg-gray-600"
            }`}
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
