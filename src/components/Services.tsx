import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  Globe,
  Smartphone,
  Palette,
  Code2,
  Database,
  Cloud,
} from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";

const serviceIcons = [Globe, Smartphone, Palette, Code2, Database, Cloud];
const gradients = [
  "from-blue-500 to-cyan-500",
  "from-purple-500 to-pink-500",
  "from-orange-500 to-red-500",
  "from-green-500 to-emerald-500",
  "from-indigo-500 to-purple-500",
  "from-sky-500 to-blue-500",
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { theme } = useTheme();
  const { t } = useLanguage();

  const services = [
    {
      icon: serviceIcons[0],
      title: t("services.web.title"),
      description: t("services.web.desc"),
      gradient: gradients[0],
    },
    {
      icon: serviceIcons[1],
      title: t("services.mobile.title"),
      description: t("services.mobile.desc"),
      gradient: gradients[1],
    },
    {
      icon: serviceIcons[2],
      title: t("services.design.title"),
      description: t("services.design.desc"),
      gradient: gradients[2],
    },
    {
      icon: serviceIcons[3],
      title: t("services.software.title"),
      description: t("services.software.desc"),
      gradient: gradients[3],
    },
    {
      icon: serviceIcons[4],
      title: t("services.backend.title"),
      description: t("services.backend.desc"),
      gradient: gradients[4],
    },
    {
      icon: serviceIcons[5],
      title: t("services.cloud.title"),
      description: t("services.cloud.desc"),
      gradient: gradients[5],
    },
  ];

  return (
    <section
      id="services"
      ref={ref}
      className={`py-24 relative overflow-hidden ${
        theme === "dark"
          ? "bg-gradient-to-b from-black via-blue-950/20 to-black"
          : "bg-gradient-to-b from-white via-blue-50 to-white"
      }`}
    >
      {/* Background Elements */}
      <div
        className={`absolute inset-0 ${
          theme === "dark"
            ? "bg-[radial-gradient(circle_at_30%_50%,rgba(120,0,255,0.1),transparent_50%)]"
            : "bg-[radial-gradient(circle_at_30%_50%,rgba(120,0,255,0.05),transparent_50%)]"
        }`}
      />
      <div
        className={`absolute inset-0 ${
          theme === "dark"
            ? "bg-[radial-gradient(circle_at_70%_50%,rgba(255,0,128,0.1),transparent_50%)]"
            : "bg-[radial-gradient(circle_at_70%_50%,rgba(255,0,128,0.05),transparent_50%)]"
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
              {t("services.badge")}
            </span>
          </motion.div>
          <h2
            className={`text-4xl lg:text-5xl mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            {t("services.title")}{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              {t("services.titleHighlight")}
            </span>
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {t("services.description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div
                className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"
                style={{
                  background: `linear-gradient(to right, var(--tw-gradient-stops))`,
                }}
              />
              <div
                className={`p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 h-full ${
                  theme === "dark"
                    ? "bg-white/5 border-white/10 hover:border-white/20"
                    : "bg-white border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-lg"
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3
                  className={`text-xl mb-3 transition-all ${
                    theme === "dark"
                      ? "text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text"
                      : "text-gray-900 group-hover:text-blue-600"
                  }`}
                  style={{
                    backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                  }}
                >
                  {service.title}
                </h3>
                <p
                  className={`transition-colors ${
                    theme === "dark"
                      ? "text-gray-400 group-hover:text-gray-300"
                      : "text-gray-600 group-hover:text-gray-700"
                  }`}
                >
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
