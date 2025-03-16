import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { useTheme } from "next-themes";

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
  colorClass?: string;
}

export const SocialLink = ({ href, icon, label, colorClass = "text-gray-700 dark:text-[#eceff4]" }: SocialLinkProps) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  // Wait until component is mounted on the client
  useEffect(() => setMounted(true), []);

  // Determine the actual color class to use based on mounted state and theme
  const actualColorClass = mounted 
    ? resolvedTheme === 'dark' 
      ? colorClass.includes('dark:') 
        ? colorClass.split('dark:')[1] 
        : colorClass
      : colorClass.split(' dark:')[0]
    : colorClass;
    
  // Similar logic for hover effects
  const hoverColorClass = mounted && resolvedTheme === 'dark'
    ? "hover:text-[#4D0A4B] focus:ring-[#ee82ce]" 
    : "hover:text-[#6095ea] focus:ring-[#6095ea]";

  return (
    <a 
      href={href} 
      title={label} 
      aria-label={label} 
      className={`${actualColorClass} transition-all duration-200 ${hoverColorClass} hover:scale-110 focus:outline-none focus:ring-2 rounded-full p-1`}
    >
      {icon}
    </a>
  );
};

export default SocialLink;
