import type { ReactNode } from "react";
import { useThemeUtils } from "../util/themeUtils";

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
  colorClass?: string;
}

export const SocialLink = ({ href, icon, label, colorClass = "text-gray-700 dark:text-[#eceff4]" }: SocialLinkProps) => {
  const { getThemeClass } = useThemeUtils();
  
  // Process the color class to handle dark: prefixes
  const processedColorClass = colorClass.includes('dark:')
    ? getThemeClass(colorClass.split(' dark:')[0] ?? '', colorClass.split('dark:')[1] ?? '')
    : getThemeClass(colorClass, colorClass);
  
  // Handle hover effects
  const hoverColorClass = getThemeClass(
    "hover:text-[#6095ea]",
    "hover:text-[#4D0A4B]"
  );

  return (
    <a 
      href={href} 
      title={label} 
      aria-label={label} 
      className={`${processedColorClass} transition-all duration-200 ${hoverColorClass} hover:scale-110 focus:outline-none rounded-full p-1`}
    >
      {icon}
    </a>
  );
};

export default SocialLink;
