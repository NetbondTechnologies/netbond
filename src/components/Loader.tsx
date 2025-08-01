import React from "react";

interface LoaderProps {
  text?: string;
  className?: string;
}

const Loader: React.FC<LoaderProps> = ({
  text = "Sending Application...",
  className = "",
}) => {
  return (
    <div className={`flex items-center fixed z-9999 left-1/2 -translate-x-1/2 top-1/2 mx-auto w-screen h-screen bg-black/90 -translate-y-1/2 justify-center ${className}`}>
      <div className="relative">
        <div className="text-4xl font-bold text-gray-600 select-none font-figtree">
          {text}
        </div>

        
        <div className="absolute inset-0 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-transparent via-white to-transparent animate-glow-sweep select-none font-figtree">
          {text}
        </div>

        
        <div className="absolute inset-0 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-transparent via-white to-transparent animate-glow-sweep-delayed opacity-80 select-none font-figtree">
          {text}
        </div>
      </div>
    </div>
  );
};

export default Loader;
