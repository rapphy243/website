import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const ThemeToggleButton = () => {
  const { resolvedTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Function to determine theme from localStorage or system preference
    const detectTheme = () => {
      // First check localStorage (next-themes stores theme here)
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme === 'dark') {
        setIsDarkMode(true);
        return;
      } else if (storedTheme === 'light') {
        setIsDarkMode(false);
        return;
      }
      
      // Fall back to system preference if available
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setIsDarkMode(true);
        return;
      }
      
      // Default to light mode
      setIsDarkMode(false);
    };
    
    detectTheme();
  }, []);

  // Update isDarkMode whenever resolvedTheme changes
  useEffect(() => {
    if (resolvedTheme) {
      setIsDarkMode(resolvedTheme === 'dark');
    }
  }, [resolvedTheme]);

  // Don't render anything until component is mounted on client
  if (!mounted) return null;
  
  // Simple colored icons
  const sunIconClasses = "h-6 w-6 text-[#ee82ce]";
  const moonIconClasses = "h-6 w-6 text-[#4D0A4B]";
  
  return (
    <button
      onClick={() => setTheme(isDarkMode ? "light" : "dark")}
      className="transition-all duration-200 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      {isDarkMode ? (
        <SunIcon className={sunIconClasses} />
      ) : (
        <MoonIcon className={moonIconClasses} />
      )}
    </button>
  );
};

export default ThemeToggleButton;
