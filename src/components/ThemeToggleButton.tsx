import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Mount check to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render until client-side to prevent hydration issues
  if (!mounted) return null;
  
  // Simple theme check
  const isDark = theme === 'dark';
  
  // Icon styles
  const sunIconClasses = "h-6 w-6 text-[#ee82ce]";
  const moonIconClasses = "h-6 w-6 text-[#4D0A4B]";
  
  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="transition-all duration-200 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? (
        <SunIcon className={sunIconClasses} />
      ) : (
        <MoonIcon className={moonIconClasses} />
      )}
    </button>
  );
};

export default ThemeToggleButton;
