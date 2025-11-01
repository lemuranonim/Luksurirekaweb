import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";

const technologies = [
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#FFFFFF" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Node.js", color: "#339933" },
  { name: "Python", color: "#3776AB" },
  { name: "React Native", color: "#61DAFB" },
  { name: "Flutter", color: "#02569B" },
  { name: "Vue.js", color: "#4FC08D" },
  { name: "Angular", color: "#DD0031" },
  { name: "MongoDB", color: "#47A248" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "Firebase", color: "#FFCA28" },
  { name: "AWS", color: "#FF9900" },
  { name: "Docker", color: "#2496ED" },
  { name: "GraphQL", color: "#E10098" },
  { name: "TailwindCSS", color: "#06B6D4" },
];

export function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <section
      ref={ref}
      className={`py-24 relative overflow-hidden ${
        theme === "dark"
          ? "bg-gradient-to-b from-black via-blue-950/20 to-black"
          : "bg-gradient-to-b from-white via-blue-50 to-white"
      }`}
    >
      {/* Background effects */}
      <div
        className={`absolute inset-0 ${
          theme === "dark"
            ? "bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]"
            : "bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.05),transparent_50%)]"
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className={`inline-block px-4 py-2 rounded-full border mb-4 ${
              theme === "dark"
                ? "bg-blue-500/10 border-blue-500/20"
                : "bg-blue-100 border-blue-300"
            }`}
            whileHover={{ scale: 1.05 }}
          >
            <span
              className={theme === "dark" ? "text-blue-400" : "text-blue-700"}
            >
              {t("tech.badge")}
            </span>
          </motion.div>
          <h2
            className={`text-4xl lg:text-5xl mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            {t("tech.title")}{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              {t("tech.titleHighlight")}
            </span>
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {t("tech.description")}
          </p>
        </motion.div>

        {/* Tech Grid with Infinite Scroll Effect */}
        <div className="relative">
          <div
            className={`absolute left-0 top-0 bottom-0 w-32 z-10 ${
              theme === "dark"
                ? "bg-gradient-to-r from-black to-transparent"
                : "bg-gradient-to-r from-white to-transparent"
            }`}
          />
          <div
            className={`absolute right-0 top-0 bottom-0 w-32 z-10 ${
              theme === "dark"
                ? "bg-gradient-to-l from-black to-transparent"
                : "bg-gradient-to-l from-white to-transparent"
            }`}
          />

          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6 py-8"
              animate={{
                x: [0, -1400],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {[...technologies, ...technologies].map((tech, index) => (
                <motion.div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0 group"
                  whileHover={{ scale: 1.1, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`w-40 h-40 rounded-2xl backdrop-blur-sm border flex items-center justify-center transition-all duration-300 ${
                      theme === "dark"
                        ? "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10"
                        : "bg-white border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-lg"
                    }`}
                  >
                    <div className="text-center">
                      <div
                        className="w-16 h-16 mx-auto mb-3 rounded-xl flex items-center justify-center transition-transform duration-300"
                        style={{
                          backgroundColor: `${tech.color}20`,
                          boxShadow: `0 0 20px ${tech.color}40`,
                        }}
                      >
                        <div
                          className="w-8 h-8 rounded-lg"
                          style={{ backgroundColor: tech.color }}
                        />
                      </div>
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {tech.name}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {[
            { label: t("tech.stats.mastered"), value: "50+" },
            { label: t("tech.stats.experience"), value: "10+" },
            { label: t("tech.stats.certifications"), value: "25+" },
            { label: t("tech.stats.success"), value: "99%" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className={`p-6 rounded-2xl backdrop-blur-sm border text-center ${
                theme === "dark"
                  ? "bg-white/5 border-white/10"
                  : "bg-white border-gray-200 shadow-sm"
              }`}
            >
              <div className="text-3xl bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div
                className={`text-sm ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
