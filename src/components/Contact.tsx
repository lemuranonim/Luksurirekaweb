import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { theme } = useTheme();
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success(t("contact.form.success"));
    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-24 relative overflow-hidden ${
        theme === "dark" ? "bg-black" : "bg-gray-50"
      }`}
    >
      {/* Background */}
      <div
        className={`absolute inset-0 ${
          theme === "dark"
            ? "bg-gradient-to-b from-blue-950/20 via-black to-black"
            : "bg-gradient-to-b from-blue-50 via-white to-white"
        }`}
      />
      <div
        className={`absolute inset-0 ${
          theme === "dark"
            ? "bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),transparent_50%)]"
            : "bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.05),transparent_50%)]"
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
            <span className={theme === "dark" ? "text-blue-400" : "text-blue-700"}>
              {t("contact.badge")}
            </span>
          </motion.div>
          <h2
            className={`text-4xl lg:text-5xl mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            {t("contact.title")}{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              {t("contact.titleHighlight")}
            </span>
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {t("contact.description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3
                className={`text-2xl mb-6 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                {t("contact.info.title")}
              </h3>
              <p
                className={`mb-8 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {t("contact.info.description")}
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    label: t("contact.info.email"),
                    value: "hello@luksurireka.com",
                    gradient: "from-purple-500 to-pink-500",
                  },
                  {
                    icon: Phone,
                    label: t("contact.info.phone"),
                    value: "+62 821 4370 6440",
                    gradient: "from-blue-500 to-cyan-500",
                  },
                  {
                    icon: MapPin,
                    label: t("contact.info.office"),
                    value: "Kedungwilut, Bandung, Tulungagung, 66247",
                    gradient: "from-green-500 to-emerald-500",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 group"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div
                        className={`text-sm mb-1 ${
                          theme === "dark" ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {item.label}
                      </div>
                      <div
                        className={theme === "dark" ? "text-white" : "text-gray-900"}
                      >
                        {item.value}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <motion.div
              className={`p-8 rounded-2xl backdrop-blur-sm border ${
                theme === "dark"
                  ? "bg-gradient-to-r from-blue-600/10 to-cyan-500/10 border-white/10"
                  : "bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200"
              }`}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h4
                    className={`mb-2 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {t("contact.consultation.title")}
                  </h4>
                  <p
                    className={`text-sm ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {t("contact.consultation.desc")}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className={`p-8 rounded-2xl backdrop-blur-sm border space-y-6 ${
                theme === "dark"
                  ? "bg-white/5 border-white/10"
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    className={`text-sm mb-2 block ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {t("contact.form.name")} *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={t("contact.form.placeholder.name")}
                    className={
                      theme === "dark"
                        ? "bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                        : "bg-white border-gray-300 text-gray-900 placeholder:text-gray-400"
                    }
                  />
                </div>
                <div>
                  <label
                    className={`text-sm mb-2 block ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {t("contact.form.email")} *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={t("contact.form.placeholder.email")}
                    className={
                      theme === "dark"
                        ? "bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                        : "bg-white border-gray-300 text-gray-900 placeholder:text-gray-400"
                    }
                  />
                </div>
              </div>

              <div>
                <label
                  className={`text-sm mb-2 block ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {t("contact.form.company")}
                </label>
                <Input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder={t("contact.form.placeholder.company")}
                  className={
                    theme === "dark"
                      ? "bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                      : "bg-white border-gray-300 text-gray-900 placeholder:text-gray-400"
                  }
                />
              </div>

              <div>
                <label
                  className={`text-sm mb-2 block ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {t("contact.form.message")} *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder={t("contact.form.placeholder.message")}
                  rows={6}
                  className={`resize-none ${
                    theme === "dark"
                      ? "bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                      : "bg-white border-gray-300 text-gray-900 placeholder:text-gray-400"
                  }`}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 disabled:opacity-50 py-6 group text-white"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                    />
                    {t("contact.form.sending")}
                  </>
                ) : (
                  <>
                    {t("contact.form.send")}
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </Button>

              <p
                className={`text-xs text-center ${
                  theme === "dark" ? "text-gray-500" : "text-gray-400"
                }`}
              >
                {t("contact.form.privacy")}
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
