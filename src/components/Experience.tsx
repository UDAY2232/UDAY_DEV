import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
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
  <section id="experience" className="section-padding section-alt relative">
    <div className="max-w-4xl mx-auto relative z-10">
      <SectionHeading title="Experience" subtitle="Where I've worked" />
      <div className="space-y-0">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="relative pl-8 pb-10 last:pb-0 border-l border-border"
          >
            <div className="absolute left-0 top-0 w-8 h-8 -translate-x-[17px] rounded-full bg-card border border-border flex items-center justify-center">
              <Briefcase className="w-3.5 h-3.5 text-foreground" />
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border skill-glow">
              <h3 className="text-base font-semibold text-foreground">{exp.role}</h3>
              <p className="text-sm text-muted-foreground mt-0.5 font-medium">{exp.company}</p>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed font-light">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
