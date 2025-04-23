
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() =>
    typeof window !== "undefined" && window.localStorage.getItem("theme") === "light"
      ? "light"
      : "dark"
  );

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
    }
  }, [theme]);

  return (
    <button
      aria-label="Toggle color theme"
      className="w-11 h-11 rounded-full bg-gradient-to-r from-magenta to-violet text-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all border-2 border-white/10"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Sun className="w-6 h-6 text-yellow-400 transition-transform duration-300" />
      ) : (
        <Moon className="w-6 h-6 text-primary transition-transform duration-300" />
      )}
    </button>
  );
};

export default ThemeToggle;
