import { motion } from "motion/react";
import {
  Code2,
  Linkedin,
  Twitter,
  Github,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";

export function Footer() {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`border-t relative overflow-hidden ${
        theme === "dark"
          ? "bg-black border-white/10"
          : "bg-gray-50 border-gray-200"
      }`}
    >
      {/* Background */}
      <div
        className={`absolute inset-0 ${
          theme === "dark"
            ? "bg-gradient-to-b from-blue-950/10 to-black"
            : "bg-gradient-to-b from-blue-50/30 to-transparent"
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span
                className={`text-xl ${
                  theme === "dark"
                    ? "text-white"
                    : "text-gray-900"
                }`}
              >
                LUKSURI REKA
              </span>
            </motion.div>
            <p
              className={`mb-6 ${
                theme === "dark"
                  ? "text-gray-400"
                  : "text-gray-600"
              }`}
            >
              {t("footer.description")}
            </p>
            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Github, href: "#" },
                { icon: Instagram, href: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
                    theme === "dark"
                      ? "bg-white/5 border-white/10 hover:border-blue-500 text-gray-400 hover:text-white"
                      : "bg-white border-gray-200 hover:border-blue-500 text-gray-600 hover:text-blue-600"
                  }`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3
              className={`mb-6 ${
                theme === "dark"
                  ? "text-white"
                  : "text-gray-900"
              }`}
            >
              {t("footer.services")}
            </h3>
            <ul className="space-y-3">
              {[
                "Web Development",
                "Mobile App Development",
                "UI/UX Design",
                "Custom Software",
                "Cloud Solutions",
                "Consulting",
              ].map((item, index) => (
                <li key={index}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 5 }}
                    className={`transition-colors ${
                      theme === "dark"
                        ? "text-gray-400 hover:text-white"
                        : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3
              className={`mb-6 ${
                theme === "dark"
                  ? "text-white"
                  : "text-gray-900"
              }`}
            >
              {t("footer.company")}
            </h3>
            <ul className="space-y-3">
              {[
                "About Us",
                "Our Team",
                "Careers",
                "Portfolio",
                "Blog",
                "Contact",
              ].map((item, index) => (
                <li key={index}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 5 }}
                    className={`transition-colors ${
                      theme === "dark"
                        ? "text-gray-400 hover:text-white"
                        : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className={`mb-6 ${
                theme === "dark"
                  ? "text-white"
                  : "text-gray-900"
              }`}
            >
              {t("footer.getInTouch")}
            </h3>
            <ul className="space-y-4">
              <li
                className={`flex items-start gap-3 ${
                  theme === "dark"
                    ? "text-gray-400"
                    : "text-gray-600"
                }`}
              >
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>dev@luksurireka.com</span>
              </li>
              <li
                className={`flex items-start gap-3 ${
                  theme === "dark"
                    ? "text-gray-400"
                    : "text-gray-600"
                }`}
              >
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>+62 853 8563 5253</span>
              </li>
              <li
                className={`flex items-start gap-3 ${
                  theme === "dark"
                    ? "text-gray-400"
                    : "text-gray-600"
                }`}
              >
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  Kedungwilut, Bandung, Tulungagung, 66247
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`pt-8 border-t ${
            theme === "dark"
              ? "border-white/10"
              : "border-gray-200"
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p
              className={`text-sm ${
                theme === "dark"
                  ? "text-gray-400"
                  : "text-gray-600"
              }`}
            >
              © {currentYear} PT Luksuri Reka Digital
              Solutions. {t("footer.rights")}
            </p>
            <div className="flex gap-6 text-sm">
              {[
                t("footer.privacy"),
                t("footer.terms"),
                t("footer.cookie"),
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  className={`transition-colors ${
                    theme === "dark"
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}