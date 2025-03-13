import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="transition-all duration-300 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {theme === "light" ? (
        <MoonIcon className="h-6 w-6 text-gray-800 dark:text-gray-200" />
      ) : (
        <SunIcon className="h-6 w-6 text-gray-800 dark:text-gray-200" />
      )}
    </button>
  );
};

export default ThemeToggleButton;
