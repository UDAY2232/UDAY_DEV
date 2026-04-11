const FloatingBlobs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div
      className="absolute -top-10 left-[8%] h-64 w-64 rounded-full blur-3xl animate-float-slow"
      style={{ backgroundColor: "hsl(var(--accent-blue) / 0.16)" }}
    />
    <div
      className="absolute top-[28%] -right-10 h-72 w-72 rounded-full blur-3xl animate-float-medium"
      style={{ backgroundColor: "hsl(var(--accent-purple) / 0.13)" }}
    />
    <div
      className="absolute bottom-[-3rem] left-[35%] h-56 w-56 rounded-full blur-3xl animate-float-fast"
      style={{ backgroundColor: "hsl(var(--accent-blue) / 0.1)" }}
    />
    <div
      className="absolute top-[65%] left-[6%] h-40 w-40 rounded-full blur-2xl animate-float-medium"
      style={{ backgroundColor: "hsl(var(--accent-purple) / 0.08)", animationDelay: "-6s" }}
    />
  </div>
);

export default FloatingBlobs;
