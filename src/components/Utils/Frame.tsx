"use client";

import DotPattern from "@/components/ui/dot-pattern-1";
import { ReactNode } from "react";

interface FrameProps {
  children: ReactNode;
}

export function Frame({ children }: FrameProps) {
  return (
    <div className="relative min-h-screen w-full flex flex-col py-4">
      <div className="relative mx-auto w-[98%] h-full min-h-screen">
        <div className="absolute w-full h-[calc(100vh-2rem)] border border-red-500">
          <DotPattern width={5} height={5} />
          
          <div className="absolute -left-1.5 -top-1.5 h-3 w-3 bg-red-500" />
          <div className="absolute -bottom-1.5 -left-1.5 h-3 w-3 bg-red-500" />
          <div className="absolute -right-1.5 -top-1.5 h-3 w-3 bg-red-500" />
          <div className="absolute -bottom-1.5 -right-1.5 h-3 w-3 bg-red-500" />
        </div>
        
        <div className="relative z-10 flex flex-col flex-grow py-4">
          <div className="flex-grow">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
