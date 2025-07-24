"use client";
import Header from "@/_components/Header";
import Sidebar from "@/_components/Sidebar";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const { MyContext } = require("./ThemeProvider");

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(null);
  const [isToggleSidebar, setIsToggleSidebar] = useState(true);

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
      <div className="main flex">
        <div
          className={`h-screen bg-white dark:bg-gray-800 transition-all duration-300`}
          style={{ width: isToggleSidebar ? "4%" : "18%" }}
        >
          <Sidebar />
        </div>

        <div
          style={{
            width: isToggleSidebar ? "95%" : "82%",
          }}
          className="transition-all duration-300"
        >
          <Header />
          <div className="px-10 py-20 relative right-0">{children}</div>
        </div>
      </div>
    </MyContext.Provider>
  );
};

export default ThemeProvider;
