"use client";
import Header from "@/_components/Header";
import Sidebar from "@/_components/Sidebar";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const { MyContext } = require("./ThemeProvider");

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(null);
  const [isToggleSidebar, setIsToggleSidebar] = useState(false);

  useEffect(() => {
    const storedTheme = Cookies.get("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    }
  }, []);
  const values = {
    theme,
    isToggleSidebar,
    setTheme,
    setIsToggleSidebar,
  };

  return (
    <MyContext.Provider value={values}>
      <div className="main">
        <div
          className={`
        fixed top-0 left-0 h-screen bg-white dark:bg-gray-800
        transition-transform duration-300 z-50 w-[250px]
        ${isToggleSidebar ? "translate-x-0" : "-translate-x-full"}
      `}
        >
          <Sidebar />
        </div>

        <div
          className={`
        transition-all duration-300
        ${isToggleSidebar ? "ml-[250px]" : "ml-0"}
      `}
        >
          <Header />
          <div className="pt-20 p-4">{children}</div>
        </div>
      </div>
    </MyContext.Provider>
  );
};

export default ThemeProvider;
