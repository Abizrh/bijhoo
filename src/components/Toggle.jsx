import React from "react";
import { ThemeContext } from "./themeContext";
import { Button } from "flowbite-react";
import { FaSun, FaMoon} from "react-icons/fa";

export const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  // function isDark() {
  //   return theme === 'dark'
  // }

  return (
    <>
      <div className="transition duration-500 ease-in-out rounded-full p-2 ">
        {theme === "dark" ? (
          <FaSun
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
          />
        ) : (
          <FaMoon
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
          />
        )}
      </div>
    </>
  );
};
