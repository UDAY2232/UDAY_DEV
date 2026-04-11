import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", onMove);

    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[1] h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-transform duration-300 hidden lg:block"
      style={{
        left: position.x,
        top: position.y,
        background:
          "radial-gradient(circle, hsl(var(--accent-blue) / 0.14) 0%, hsl(var(--accent-purple) / 0.08) 45%, transparent 75%)",
      }}
    />
  );
};

export default CursorGlow;