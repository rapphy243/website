import type { ReactNode } from "react";
import { motion } from "framer-motion";
import ThemeToggleButton from "./ThemeToggleButton";
import { useThemeUtils } from "../util/themeUtils";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  const { getThemeClass, renderWhenThemeReady } = useThemeUtils();

  // For theme button animation
  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.5, duration: 1 } }
  };

  return renderWhenThemeReady(() => {
    // Apply theme classes using the utility
    const bgClass = getThemeClass(
      "bg-gradient-to-br from-[#ee82ce] to-[#6095ea]",
      "bg-gradient-to-br from-[#4D0A4B] to-[#03023F]"
    );

    return (
      <main className={`flex min-h-screen flex-col items-center justify-center ${bgClass} p-4 transition-all duration-300`}>
        {children}
        <motion.div 
          className="fixed bottom-4 right-4"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          <ThemeToggleButton />
        </motion.div>
      </main>
    );
  });
};

export default PageLayout;
