import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skills } from "@/data/portfolio";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const Skills = () => (
  <section id="skills" className="section-padding section-alt">
    <div className="max-w-5xl mx-auto">
      <SectionHeading title="Skills" subtitle="Technologies and tools I work with regularly." />
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill}
            variants={item}
            whileHover={{ scale: 1.03 }}
            className="card-lift rounded-xl border border-border bg-card px-4 py-3 text-sm md:text-base"
          >
            <p className="font-medium text-foreground">{skill}</p>
            <div className="mt-2 h-[2px] w-8 rounded-full bg-gradient-to-r from-blue-500/40 to-violet-500/40" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Skills;
