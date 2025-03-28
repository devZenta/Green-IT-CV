"use client";

import DotPattern from "@/components/ui/dot-pattern-1";
import { ReactNode } from "react";

interface FrameProps {
  children: ReactNode;
}

export function Frame({ children }: FrameProps) {
  return (
    <div className="relative min-h-screen w-full py-4">
      {/* Main container with relative positioning */}
      <div className="relative mx-auto w-[98%]">
        {/* Frame border - using absolute positioning within the container */}
        <div className="absolute inset-0 border border-red-500">
          <DotPattern width={5} height={5} />
          
          {/* Corner squares */}
          <div className="absolute -left-1.5 -top-1.5 h-3 w-3 bg-red-500" />
          <div className="absolute -bottom-1.5 -left-1.5 h-3 w-3 bg-red-500" />
          <div className="absolute -right-1.5 -top-1.5 h-3 w-3 bg-red-500" />
          <div className="absolute -bottom-1.5 -right-1.5 h-3 w-3 bg-red-500" />
        </div>
        
        {/* Content container */}
        <div className="relative z-10 py-4">
          {children}
          
          {/* Additional space at the bottom to ensure the frame extends */}
          <div className="h-16"></div>
        </div>
      </div>
    </div>
  );
}
