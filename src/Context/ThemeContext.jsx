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
        <Sidebar />

        <div
          className={`w-full flex-1 transition-all duration-300 ${
            isToggleSidebar
              ? "bg-black/40 backdrop-blur-sm"
              : "bg-black/40 backdrop-blur-sm"
          }`}
          style={{ marginLeft: "70px" }}
          onClick={() => {
            if (!isToggleSidebar) setIsToggleSidebar(true);
          }}
        >
          <Header />
          <div className="px-4 py-10 relative right-0">{children}</div>
        </div>
      </div>
    </MyContext.Provider>
  );
};

export default ThemeProvider;
