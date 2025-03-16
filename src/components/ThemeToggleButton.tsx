import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useThemeUtils } from "../util/themeUtils";

const ThemeToggleButton = () => {
  const { getThemeClass, mounted, resolvedTheme, setTheme } = useThemeUtils();

  if (!mounted) {
    // Return a placeholder to avoid hydration mismatch
    return <div className="w-6 h-6" />;
  }
  
  // Use resolvedTheme for theme detection
  const isDark = resolvedTheme === 'dark';
  
  // Get theme-specific classes
  const buttonHoverClass = getThemeClass(
    "hover:bg-gray-200", 
    "hover:bg-gray-700"
  );
  
  // Icon styles remain the same for consistent appearance
  const sunIconClasses = "h-6 w-6 text-[#ee82ce]";
  const moonIconClasses = "h-6 w-6 text-[#4D0A4B]";
  
  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={`transition-all duration-200 p-2 rounded-full ${buttonHoverClass}`}
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
