import type { ReactNode } from "react";
import { useThemeUtils } from "../util/themeUtils";
import { Tooltip } from 'react-tooltip'

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
      data-tooltip-id={label}
      data-tooltip-content={label}
      data-tooltip-place="bottom"
      className={`${processedColorClass} transition-all duration-200 ${hoverColorClass} hover:scale-110 focus:outline-none rounded-full p-1`}
    >
      {icon} 
      <Tooltip 
        id={label}  
        className={getThemeClass(
          "!bg-[#e5e9f0] !text-gray-700 !border-gray-400 !shadow-md",
          "!bg-[#272e39] !text-[#eceff4] !border-gray-900 !shadow-gray-900"
        )}
      />
    </a>
  );
};

export default SocialLink;
