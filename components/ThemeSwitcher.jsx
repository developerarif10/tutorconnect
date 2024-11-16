"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const ThemeSwitcher = () => {
  const [mount, setMount] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  useEffect(() => {
    setMount(true);
  }, []);
  //   console.log(currentTheme);
  return mount ? (
    <Button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      type="button"
      className="flex h-10 w-10 p-2 items-center justify-center rounded-md border focus:outline-none focus:ring-0 focus:ring-gray-200"
    >
      <Moon className="dark:hidden" /> <Sun className="hidden dark:block" />
    </Button>
  ) : null;
};
export default ThemeSwitcher;
