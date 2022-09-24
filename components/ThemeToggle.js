import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className="dark:text-white dark:text-opacity-70 dark:hover:text-opacity-100 duration-500 ease-in-out rounded-full p-2">
      {theme === "dark" ? (
        <SunIcon
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="block h-6 w-6 cursor-pointer"
        />
      ) : (
        <MoonIcon
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="block h-6 w-6 cursor-pointer"
        />
      )}
    </div>
  );
};

export default ThemeToggle;
