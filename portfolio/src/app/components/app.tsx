"use client";
import React from "react";

import { DockNavigation } from "./dockNavigation";

function App({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <div className="pb-32">{children}</div>

      <div className="fixed bottom-0 left-0 right-0 z-50">
        <div className="relative">
          <div
            className="absolute bottom-0 left-0 right-0 h-32 
                        bg-gradient-to-t from-black to-transparent 
                        pointer-events-none"
          />
          <DockNavigation />
        </div>
      </div>
    </div>
  );
}

export default App;
