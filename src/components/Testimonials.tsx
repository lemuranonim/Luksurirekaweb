import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";

const testimonials = [
  {
    name: "John Anderson",
    role: "CEO, TechStart Inc",
    image: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc2MTYyNjY1NXww&ixlib=rb-4.1.0&q=80&w=1080",
    content:
      "LUKSURI REKA transformed our vision into reality. Their expertise in web development and attention to detail exceeded our expectations. The team was professional, responsive, and delivered on time.",
    rating: 5,
  },
  {
    name: "Maria Garcia",
    role: "Founder, FitLife App",
    image: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc2MTYyNjY1NXww&ixlib=rb-4.1.0&q=80&w=1080",
    content:
      "The mobile app they built for us is simply amazing. User engagement increased by 300% after launch. I highly recommend LUKSURI REKA for anyone looking for top-tier mobile development.",
    rating: 5,
  },
  {
    name: "Robert Chen",
    role: "CTO, DataViz Pro",
    image: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc2MTYyNjY1NXww&ixlib=rb-4.1.0&q=80&w=1080",
    content:
      "Outstanding work on our SaaS platform. The architecture is solid, scalable, and the UI/UX is beautiful. LUKSURI REKA is our go-to partner for all development projects.",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    role: "Marketing Director, ShopEasy",
    image: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc2MTYyNjY1NXww&ixlib=rb-4.1.0&q=80&w=1080",
    content:
      "Our e-commerce platform has never looked or performed better. Sales are up 250% since the redesign. The team's creativity and technical skills are unmatched.",
    rating: 5,
  },
  {
    name: "Ahmed Hassan",
    role: "Product Manager, CloudSync",
    image: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc2MTYyNjY1NXww&ixlib=rb-4.1.0&q=80&w=1080",
    content:
      "LUKSURI REKA helped us migrate our entire infrastructure to the cloud seamlessly. Their expertise saved us months of work and potential downtime. Absolutely brilliant team!",
    rating: 5,
  },
  {
    name: "Sophie Martin",
    role: "Co-founder, EduTech Solutions",
    image: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc2MTYyNjY1NXww&ixlib=rb-4.1.0&q=80&w=1080",
    content:
      "They built our educational platform from scratch and it's been a game-changer. The platform is intuitive, fast, and our students love it. Can't thank them enough!",
    rating: 5,
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { theme } = useTheme();
  const { t } = useLanguage();

  return (
    <section
      id="testimonials"
      ref={ref}
      className={`py-24 relative overflow-hidden ${
        theme === "dark"
          ? "bg-gradient-to-b from-black via-cyan-950/20 to-black"
          : "bg-gradient-to-b from-white via-cyan-50 to-white"
      }`}
    >
      {/* Background */}
      <div
        className={`absolute inset-0 ${
          theme === "dark"
            ? "bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.1),transparent_50%)]"
            : "bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.05),transparent_50%)]"
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
              {t("testimonials.badge")}
            </span>
          </motion.div>
          <h2
            className={`text-4xl lg:text-5xl mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            {t("testimonials.title")}{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              {t("testimonials.titleHighlight")}
            </span>
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {t("testimonials.description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div
                className={`relative p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300 h-full ${
                  theme === "dark"
                    ? "bg-white/5 border-white/10 hover:border-white/20"
                    : "bg-white border-gray-200 hover:border-cyan-300 shadow-sm hover:shadow-xl"
                }`}
              >
                {/* Quote Icon */}
                <div
                  className={`absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity ${
                    theme === "dark" ? "text-blue-400" : "text-blue-600"
                  }`}
                >
                  <Quote className="w-12 h-12" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Content */}
                <p
                  className={`mb-6 relative z-10 italic ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-purple-500/50">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div
                      className={theme === "dark" ? "text-white" : "text-gray-900"}
                    >
                      {testimonial.name}
                    </div>
                    <div
                      className={`text-sm ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {testimonial.role}
                    </div>
                  </div>
                </div>

                {/* Gradient border effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 blur-xl -z-10 opacity-30" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Stats */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {[
            { label: t("testimonials.stats.satisfaction"), value: "98%" },
            { label: t("testimonials.stats.delivered"), value: "150+" },
            { label: t("testimonials.stats.rating"), value: "4.9/5" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className={`p-6 rounded-2xl backdrop-blur-sm border text-center ${
                theme === "dark"
                  ? "bg-gradient-to-r from-blue-600/10 to-cyan-500/10 border-white/10"
                  : "bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200"
              }`}
            >
              <div className="text-3xl bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-2">
                {stat.value}
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
    </section>
  );
}
