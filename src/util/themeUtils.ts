import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

/**
 * Hook to get theme-conditional classes with hydration safety
 * @returns Theme utility functions and state
 */
export function useThemeUtils() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // Mount component
  useEffect(() => {
    setMounted(true);
  }, []);

  /**
   * Returns the appropriate class based on theme
   */
  const getThemeClass = (lightClass: string, darkClass: string): string => {
    if (!mounted) return lightClass; // Default to light for SSR
    return resolvedTheme === 'dark' ? darkClass : lightClass;
  };

  /**
   * Renders content only when theme is detected
   * @param renderFn Function that returns content to render when theme is ready
   * @param placeholder Optional placeholder to show while waiting (defaults to empty div)
   */
  const renderWhenThemeReady = (renderFn: () => React.ReactNode, placeholder?: React.ReactNode) => {
    if (!mounted) return placeholder || <div style={{ visibility: 'hidden' }} />;
    return renderFn();
  };

  return {
    mounted,
    resolvedTheme,
    setTheme,
    getThemeClass,
    renderWhenThemeReady,
  };
}

export default useThemeUtils;