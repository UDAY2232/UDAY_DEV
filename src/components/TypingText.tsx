import { useState, useEffect } from "react";

const phrases = ["Full Stack Developer", "AI Enthusiast", "Problem Solver"];

const TypingText = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    const timeout = deleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!deleting && charIndex < current.length) {
        setCharIndex(charIndex + 1);
      } else if (!deleting && charIndex === current.length) {
        setTimeout(() => setDeleting(true), 1800);
      } else if (deleting && charIndex > 0) {
        setCharIndex(charIndex - 1);
      } else if (deleting && charIndex === 0) {
        setDeleting(false);
        setPhraseIndex((phraseIndex + 1) % phrases.length);
      }
    }, timeout);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, phraseIndex]);

  return (
    <span className="font-mono">
      {phrases[phraseIndex].substring(0, charIndex)}
      <span className="typing-cursor text-muted-foreground">|</span>
    </span>
  );
};

export default TypingText;
