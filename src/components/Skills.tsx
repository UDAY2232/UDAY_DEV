import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Code2, Layout, Server, Wrench, Brain } from "lucide-react";

const categories = [
  { name: "Languages", icon: Code2, items: ["Java", "Python", "C"] },
  { name: "Frontend", icon: Layout, items: ["HTML", "CSS", "JavaScript", "React.js"] },
  { name: "Backend", icon: Server, items: ["Node.js", "Express.js", "MySQL"] },
  { name: "Tools", icon: Wrench, items: ["Git", "GitHub", "Docker", "AWS"] },
  { name: "Machine Learning", icon: Brain, items: ["CNN", "SVM", "Random Forest"] },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Skills = () => (
  <section id="skills" className="section-padding section-alt relative">
    <div className="max-w-4xl mx-auto relative z-10">
      <SectionHeading title="Skills" subtitle="Technologies I work with" />
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {categories.map((cat) => (
          <motion.div
            key={cat.name}
            variants={item}
            className="skill-glow p-6 rounded-2xl bg-card border border-border cursor-default"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 rounded-lg bg-secondary">
                <cat.icon className="w-4 h-4 text-foreground" />
              </div>
              <h3 className="text-sm font-semibold tracking-wide uppercase text-foreground">{cat.name}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 text-xs font-medium rounded-full bg-secondary text-secondary-foreground hover:bg-foreground hover:text-background transition-colors duration-200"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Skills;
