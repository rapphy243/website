import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const ThemeToggleButton = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Wait until component is mounted on the client to avoid hydration mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Return a placeholder to avoid hydration mismatch
    return <div className="w-6 h-6" />;
  }
  
  // Use resolvedTheme instead of theme for more reliable detection
  const isDark = resolvedTheme === 'dark';
  
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
