import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Linkedin, Twitter, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";

const team = [
  {
    name: "Ludtanza Wijaya",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc2MTYyNjY1NXww&ixlib=rb-4.1.0&q=80&w=1080",
    bio: "15+ years in tech leadership",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
];

export function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <section
      id="team"
      ref={ref}
      className={`py-24 relative overflow-hidden ${
        theme === "dark" ? "bg-black" : "bg-white"
      }`}
    >
      {/* Background */}
      <div
        className={`absolute inset-0 ${
          theme === "dark"
            ? "bg-gradient-to-b from-blue-950/20 via-black to-cyan-950/20"
            : "bg-gradient-to-b from-blue-50 via-white to-cyan-50"
        }`}
      />
      <div
        className={`absolute inset-0 ${
          theme === "dark"
            ? "bg-[radial-gradient(circle_at_70%_30%,rgba(37,99,235,0.15),transparent_40%)]"
            : "bg-[radial-gradient(circle_at_70%_30%,rgba(37,99,235,0.08),transparent_40%)]"
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
              {t("team.badge")}
            </span>
          </motion.div>
          <h2
            className={`text-4xl lg:text-5xl mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            {t("team.title")}{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              {t("team.titleHighlight")}
            </span>
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {t("team.description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div
                className={`relative rounded-2xl overflow-hidden backdrop-blur-sm border transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-white/5 border-white/10 hover:border-white/20"
                    : "bg-white border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-xl"
                }`}
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />

                  {/* Social Links Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={member.social.linkedin}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <Linkedin className="w-5 h-5 text-white" />
                    </motion.a>
                    <motion.a
                      href={member.social.twitter}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <Twitter className="w-5 h-5 text-white" />
                    </motion.a>
                    <motion.a
                      href={member.social.github}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </motion.a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className={`text-xl mb-1 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {member.name}
                  </h3>
                  <p className="text-cyan-400 mb-2">{member.role}</p>
                  <p
                    className={`text-sm ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {member.bio}
                  </p>
                </div>

                {/* Gradient border effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 blur-xl -z-10" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
