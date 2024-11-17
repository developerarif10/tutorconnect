"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [mount, setMount] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  useEffect(() => {
    setMount(true);
  }, []);
  return mount ? (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      type="button"
      className="flex h-10 w-10 p-2 items-center justify-center border focus:outline-none rounded-full"
    >
      <Moon className="dark:hidden" /> <Sun className="hidden dark:block" />
    </button>
  ) : null;
};
export default ThemeSwitcher;
