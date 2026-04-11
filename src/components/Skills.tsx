import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const categories = [
  { name: "Languages", items: ["Java", "Python", "C"] },
  { name: "Frontend", items: ["HTML", "CSS", "JavaScript", "React.js"] },
  { name: "Backend", items: ["Node.js", "Express.js", "MySQL"] },
  { name: "Tools", items: ["Git", "GitHub", "Docker", "AWS"] },
  { name: "Machine Learning", items: ["CNN", "SVM", "Random Forest"] },
];

const Skills = () => (
  <section id="skills" className="section-padding section-alt">
    <div className="max-w-4xl mx-auto">
      <SectionHeading title="Skills" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="p-6 rounded-xl bg-card border border-border"
          >
            <h3 className="text-sm font-medium tracking-wide uppercase text-muted-foreground mb-4">{cat.name}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((s) => (
                <span key={s} className="px-3 py-1.5 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
