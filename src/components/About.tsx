import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const About = () => (
  <section id="about" className="section-padding max-w-4xl mx-auto">
    <SectionHeading title="About" subtitle="A bit about me" />
    <div className="grid grid-cols-1 md:grid-cols-[1fr] gap-8">
      <motion.p
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7 }}
        className="text-muted-foreground leading-relaxed text-base md:text-lg font-light"
      >
        I'm a 3rd-year Computer Science student passionate about building scalable web applications
        and exploring the frontiers of Artificial Intelligence. With hands-on experience in full stack
        development and machine learning, I enjoy turning complex problems into elegant, user-friendly
        solutions.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-muted-foreground leading-relaxed text-base md:text-lg font-light"
      >
        I'm constantly learning, building, and pushing my limits — whether it's shipping a full-stack app,
        training ML models, or solving DSA problems. I believe in clean code, thoughtful design, and making
        technology accessible.
      </motion.p>
    </div>
  </section>
);

export default About;
