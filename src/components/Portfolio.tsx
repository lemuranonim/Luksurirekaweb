import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { ExternalLink, Code2 } from "lucide-react";
import { Button } from "./ui/button";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "web",
    description: "Full-featured online marketplace with payment integration",
    image: "https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjE1NzQ2Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Fitness Tracking App",
    category: "mobile",
    description: "iOS & Android app for workout and nutrition tracking",
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYxNjU4Mjc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tech: ["React Native", "Firebase", "Redux"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Corporate Website",
    category: "web",
    description: "Modern corporate site with CMS integration",
    image: "https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjB0ZWNofGVufDF8fHx8MTc2MTU2MTUxM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    tech: ["Next.js", "TypeScript", "Sanity CMS"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 4,
    title: "Food Delivery App",
    category: "mobile",
    description: "Real-time food ordering and delivery tracking",
    image: "https://images.unsplash.com/photo-1758524572025-15f9b3726345?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaW5ub3ZhdGlvbiUyMHRlY2h8ZW58MXx8fHwxNzYxNjU3ODI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tech: ["Flutter", "Firebase", "Google Maps"],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: 5,
    title: "SaaS Dashboard",
    category: "web",
    description: "Analytics dashboard for business intelligence",
    image: "https://images.unsplash.com/photo-1690264460165-0ff5e1063d86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NjE2NTkzMzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tech: ["Vue.js", "Django", "PostgreSQL"],
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    id: 6,
    title: "Social Media App",
    category: "mobile",
    description: "Photo sharing and social networking platform",
    image: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc2MTYyNjY1NXww&ixlib=rb-4.1.0&q=80&w=1080",
    tech: ["React Native", "AWS", "GraphQL"],
    gradient: "from-pink-500 to-rose-500",
  },
];

export function Portfolio() {
  const [activeTab, setActiveTab] = useState("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { theme } = useTheme();
  const { t } = useLanguage();

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section
      id="portfolio"
      ref={ref}
      className={`py-24 relative overflow-hidden ${
        theme === "dark" ? "bg-black" : "bg-gray-50"
      }`}
    >
      {/* Background gradient */}
      <div
        className={`absolute inset-0 ${
          theme === "dark"
            ? "bg-gradient-to-b from-cyan-950/20 via-black to-blue-950/20"
            : "bg-gradient-to-b from-cyan-50 via-white to-blue-50"
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
                ? "bg-cyan-500/10 border-cyan-500/20"
                : "bg-cyan-100 border-cyan-300"
            }`}
            whileHover={{ scale: 1.05 }}
          >
            <span className={theme === "dark" ? "text-cyan-400" : "text-cyan-700"}>
              {t("portfolio.badge")}
            </span>
          </motion.div>
          <h2
            className={`text-4xl lg:text-5xl mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            {t("portfolio.title")}{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              {t("portfolio.titleHighlight")}
            </span>
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {t("portfolio.description")}
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <Tabs
          defaultValue="all"
          value={activeTab}
          onValueChange={setActiveTab}
          className="mb-12"
        >
          <TabsList
            className={`grid w-full max-w-md mx-auto grid-cols-3 backdrop-blur-sm border ${
              theme === "dark"
                ? "bg-white/5 border-white/10"
                : "bg-white border-gray-200"
            }`}
          >
            <TabsTrigger
              value="all"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-cyan-500 data-[state=active]:text-white"
            >
              {t("portfolio.filter.all")}
            </TabsTrigger>
            <TabsTrigger
              value="web"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-cyan-500 data-[state=active]:text-white"
            >
              {t("portfolio.filter.web")}
            </TabsTrigger>
            <TabsTrigger
              value="mobile"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-cyan-500 data-[state=active]:text-white"
            >
              {t("portfolio.filter.mobile")}
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`group relative rounded-2xl overflow-hidden backdrop-blur-sm border transition-all duration-300 ${
                theme === "dark"
                  ? "bg-white/5 border-white/10 hover:border-white/20"
                  : "bg-white border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-xl"
              }`}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Overlay buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="sm"
                    className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t("portfolio.viewLive")}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    <Code2 className="w-4 h-4 mr-2" />
                    {t("portfolio.details")}
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className={`text-xl mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`mb-4 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-xs border ${
                        theme === "dark"
                          ? "bg-white/5 text-gray-300 border-white/10"
                          : "bg-gray-100 text-gray-700 border-gray-200"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
