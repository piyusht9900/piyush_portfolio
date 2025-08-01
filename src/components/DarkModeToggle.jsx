import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function DarkModeToggle({ size = "medium" }) {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const buttonSize = size === "small" ? "p-2 text-lg" : "p-2 text-xl";

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className={`rounded-full bg-gray-200 dark:bg-gray-700 ${buttonSize} shadow-md text-gray-900 dark:text-white transition`}
      aria-label="Toggle Dark Mode"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
