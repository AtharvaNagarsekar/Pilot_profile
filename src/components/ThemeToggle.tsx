"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting until mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="p-2 rounded-full bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 text-slate-800 dark:text-slate-200 transition-colors w-10 h-10 flex items-center justify-center opacity-0"
        aria-hidden="true"
      >
        <span className="w-5 h-5" />
      </button>
    );
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-slate-200/50 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:bg-slate-300/50 dark:hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 w-10 h-10 flex items-center justify-center"
      aria-label={`Switch to ${resolvedTheme === "light" ? "dark" : "light"} theme`}
    >
      {resolvedTheme === "light" ? (
        <Moon className="w-5 h-5" />
      ) : (
        <Sun className="w-5 h-5" />
      )}
    </button>
  );
}
