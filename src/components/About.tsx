import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const About = () => (
  <section id="about" className="section-padding max-w-4xl mx-auto">
    <SectionHeading title="About" />
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-muted-foreground leading-relaxed text-base md:text-lg font-light"
    >
      I'm a 3rd-year Computer Science student passionate about building scalable web applications
      and exploring the frontiers of Artificial Intelligence. With hands-on experience in full stack
      development and machine learning, I enjoy turning complex problems into elegant, user-friendly
      solutions. I'm constantly learning, building, and pushing my limits.
    </motion.p>
  </section>
);

export default About;
