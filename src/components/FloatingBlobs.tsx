const FloatingBlobs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-[10%] left-[15%] w-72 h-72 rounded-full bg-foreground/[0.03] blur-3xl animate-float-slow" />
    <div className="absolute top-[40%] right-[10%] w-96 h-96 rounded-full bg-foreground/[0.02] blur-3xl animate-float-medium" />
    <div className="absolute bottom-[15%] left-[40%] w-64 h-64 rounded-full bg-foreground/[0.04] blur-3xl animate-float-fast" />
    <div className="absolute top-[60%] left-[5%] w-48 h-48 rounded-full bg-foreground/[0.02] blur-2xl animate-float-medium" style={{ animationDelay: '-5s' }} />
    <div className="absolute top-[20%] right-[30%] w-56 h-56 rounded-full bg-foreground/[0.03] blur-3xl animate-float-slow" style={{ animationDelay: '-8s' }} />
  </div>
);

export default FloatingBlobs;
