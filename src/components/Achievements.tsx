import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Award } from "lucide-react";
import { achievements } from "@/data/portfolio";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Achievements = () => (
  <section id="achievements" className="section-padding">
    <div className="max-w-5xl mx-auto">
      <SectionHeading
        title="Achievements & Certifications"
        subtitle="Key milestones across coding, research, AI projects, and certifications."
      />
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        {achievements.map((itemText) => (
          <motion.article
            key={itemText}
            variants={item}
            className="card-lift rounded-2xl border border-border bg-card p-5"
          >
            <div className="flex items-start gap-3">
              <div className="mt-1 rounded-lg p-2 bg-secondary">
                <Award className="w-4 h-4 text-foreground" />
              </div>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{itemText}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Achievements;
