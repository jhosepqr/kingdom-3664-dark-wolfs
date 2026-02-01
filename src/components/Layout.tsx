import type { FC, ReactNode } from "react";
import { motion } from "framer-motion";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="relative min-h-screen selection:bg-neonCyan/30 selection:text-neonCyan">
      <div className="fog-bg">
        <motion.div
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -50, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="fog-element top-[-500px] left-[-500px]"
        />
        <motion.div
          animate={{
            x: [0, -100, 100, 0],
            y: [0, 50, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="fog-element bottom-[-500px] right-[-500px] bg-royalGold/5"
        />
      </div>
      <main className="relative z-10">{children}</main>
    </div>
  );
};

export default Layout;
