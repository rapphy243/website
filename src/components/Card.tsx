import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useThemeUtils } from "../util/themeUtils";
import { fadeInVariants } from "../util/animations";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className = "" }: CardProps) => {
  const { getThemeClass } = useThemeUtils();
  
  const cardClass = getThemeClass(
    "bg-[#eceff4]",
    "bg-[#2e3440] shadow-gray-900"
  );

  return (
    <motion.div 
      className={`${cardClass} rounded-2xl shadow-2xl p-8 text-left transition-all duration-300 ${className}`}
      variants={fadeInVariants} 
      initial="hidden" 
      animate="visible"
    >
      {children}
    </motion.div>
  );
};
