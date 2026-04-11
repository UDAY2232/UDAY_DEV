import { useState, useEffect } from "react";

type TypingTextProps = {
  phrases: string[];
};

const TypingText = ({ phrases }: TypingTextProps) => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!phrases.length) {
      return;
    }

    const current = phrases[phraseIndex];
    const timeout = deleting ? 42 : 78;

    const timer = setTimeout(() => {
      if (!deleting && charIndex < current.length) {
        setCharIndex(charIndex + 1);
      } else if (!deleting && charIndex === current.length) {
        setTimeout(() => setDeleting(true), 1400);
      } else if (deleting && charIndex > 0) {
        setCharIndex(charIndex - 1);
      } else if (deleting && charIndex === 0) {
        setDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }, timeout);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, phraseIndex, phrases]);

  return (
    <span className="font-mono text-sm md:text-base">
      {phrases[phraseIndex].substring(0, charIndex)}
      <span className="typing-cursor text-muted-foreground">|</span>
    </span>
  );
};

export default TypingText;
