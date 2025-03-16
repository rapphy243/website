import type { ReactNode } from "react";

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
  colorClass?: string;
}

export const SocialLink = ({ href, icon, label, colorClass = "text-gray-700 dark:text-[#eceff4]" }: SocialLinkProps) => {
  return (
    <a href={href} title={label} aria-label={label} className={`${colorClass} transition-all duration-200 hover:text-[#6095ea] dark:hover:text-[#4D0A4B] hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#6095ea] dark:focus:ring-[#ee82ce] rounded-full p-1`} >
      {icon}
    </a>
  );
};

export default SocialLink;
