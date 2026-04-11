import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Award, BookOpen, Trophy, ShieldCheck } from "lucide-react";

const achievements = [
  { text: "Solved 300+ DSA problems across platforms", icon: Trophy },
  { text: "Published 2 research papers on LULC classification using ML", icon: BookOpen },
  { text: "Built applications leveraging Large Language Models (LLMs)", icon: Award },
];

const certifications = [
  "Azure AI Fundamentals",
  "AWS Cloud Architecting",
  "AWS Cloud Foundations",
  "CCNA Introduction to Networks",
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Achievements = () => (
  <section id="achievements" className="section-padding relative">
    <div className="max-w-4xl mx-auto relative z-10">
      <SectionHeading title="Achievements & Certifications" subtitle="Milestones along the way" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-4 h-4 text-foreground" />
            <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">Achievements</h3>
          </div>
          <div className="space-y-4">
            {achievements.map((a) => (
              <motion.div
                key={a.text}
                variants={item}
                className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border skill-glow"
              >
                <div className="p-1.5 rounded-lg bg-secondary mt-0.5">
                  <a.icon className="w-3.5 h-3.5 text-foreground" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="flex items-center gap-2 mb-6">
            <ShieldCheck className="w-4 h-4 text-foreground" />
            <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">Certifications</h3>
          </div>
          <div className="space-y-4">
            {certifications.map((c) => (
              <motion.div
                key={c}
                variants={item}
                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border skill-glow"
              >
                <div className="w-2 h-2 rounded-full bg-foreground/30 shrink-0" />
                <p className="text-sm text-muted-foreground">{c}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Achievements;
