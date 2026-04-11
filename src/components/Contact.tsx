import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { contactLinks } from "@/data/portfolio";

const socials = [
  { icon: Mail, label: "Email", href: contactLinks[0].href },
  { icon: Github, label: "GitHub", href: contactLinks[1].href },
  { icon: Linkedin, label: "LinkedIn", href: contactLinks[2].href },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:chirrauday2232@gmail.com?subject=${subject}&body=${body}`;

    setSent(true);
    setForm({ name: "", email: "", message: "" });

    setTimeout(() => setSent(false), 2500);
  };

  const inputClasses =
    "w-full px-5 py-3.5 rounded-xl bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/10 focus:border-foreground/20 transition-all duration-300";

  return (
    <section id="contact" className="section-padding section-alt">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Contact" subtitle="Let’s connect for opportunities, collaboration, or tech conversations." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              I am open to internships, full-time roles, and impactful developer collaborations. Feel free
              to reach out through email or social platforms.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3.5 rounded-xl border border-border bg-card hover:bg-secondary transition-colors duration-200"
                  aria-label={s.label}
                >
                  <s.icon className="w-4 h-4 text-foreground" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputClasses}
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={inputClasses}
            />
            <textarea
              placeholder="Message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`${inputClasses} resize-none`}
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03, boxShadow: "0 10px 40px hsl(0 0% 0% / 0.12)" }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold transition-shadow duration-300"
            >
              <Send className="w-4 h-4" />
              Send Message
            </motion.button>

            {sent && <p className="text-sm text-muted-foreground">Mail client opened with your message draft.</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
