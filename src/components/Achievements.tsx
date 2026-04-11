import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Award, BookOpen } from "lucide-react";

const achievements = [
  "Solved 300+ DSA problems across platforms",
  "Published 2 research papers on LULC classification using ML",
  "Built applications leveraging Large Language Models (LLMs)",
];

const certifications = [
  "Azure AI Fundamentals",
  "AWS Cloud Architecting",
  "AWS Cloud Foundations",
  "CCNA Introduction to Networks",
];

const Achievements = () => (
  <section id="achievements" className="section-padding">
    <div className="max-w-4xl mx-auto">
      <SectionHeading title="Achievements & Certifications" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-4 h-4 text-foreground" />
            <h3 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">Achievements</h3>
          </div>
          <ul className="space-y-3">
            {achievements.map((a) => (
              <li key={a} className="text-sm text-muted-foreground leading-relaxed pl-4 border-l-2 border-border">
                {a}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-4 h-4 text-foreground" />
            <h3 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">Certifications</h3>
          </div>
          <ul className="space-y-3">
            {certifications.map((c) => (
              <li key={c} className="text-sm text-muted-foreground leading-relaxed pl-4 border-l-2 border-border">
                {c}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Achievements;
