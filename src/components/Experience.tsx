import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    role: "AI Intern",
    company: "Infosys Springboard",
    description:
      "Worked on artificial intelligence and machine learning projects, gaining hands-on experience with real-world datasets and model development pipelines.",
  },
  {
    role: "Full Stack Developer Intern",
    company: "TechnoHacks",
    description:
      "Built and deployed full stack web applications using modern frameworks. Collaborated with cross-functional teams to deliver responsive, user-centric solutions.",
  },
];

const Experience = () => (
  <section id="experience" className="section-padding section-alt">
    <div className="max-w-4xl mx-auto">
      <SectionHeading title="Experience" />
      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative pl-6 border-l border-border"
          >
            <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-foreground -translate-x-[5px]" />
            <h3 className="text-base font-semibold text-foreground">{exp.role}</h3>
            <p className="text-sm text-muted-foreground mt-0.5">{exp.company}</p>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed font-light">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
