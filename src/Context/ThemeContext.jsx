"use client";
import Header from "@/_components/Header";
import Sidebar from "@/_components/Sidebar";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const { MyContext } = require("./ThemeProvider");

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(null);
  const [isToggleSidebar, setIsToggleSidebar] = useState(true);
  const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);
  const [toggleIndex, setToggleIndex] = useState(null);

  useEffect(() => {
    const storedTheme = Cookies.get("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    }
  }, []);

  const toggleNav = () => {
    setIsToggleSidebar(!isToggleSidebar);

    setIsToggleSubmenu(!isToggleSubmenu);
    setToggleIndex(null);
  };
  const values = {
    theme,
    isToggleSidebar,
    isToggleSubmenu,
    toggleIndex,
    setTheme,
    setIsToggleSidebar,
    setIsToggleSubmenu,
    setToggleIndex,
  };

  return (
    <MyContext.Provider value={values}>
      <div className="relative flex">
        <Sidebar toggleNav={toggleNav} />

        {/* Overlay (shown only when sidebar is open) */}
        {!isToggleSidebar && (
          <div
            className="fixed inset-0 bg-black/10 backdrop-blur-sm z-20"
            onClick={toggleNav}
          ></div>
        )}
        <div
          className={`w-full flex-1 relative transition-all duration-300 z-10 ${
            !isToggleSidebar
              ? "pointer-events-none select-none"
              : "pointer-events-auto"
          }`}
          style={{ marginLeft: "70px" }}
        >
          <Header />
          <div className="px-4 py-10">{children}</div>
        </div>
      </div>
    </MyContext.Provider>
  );
};

export default ThemeProvider;
