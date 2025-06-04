"use client";
import { useState } from "react";

const { MyContext } = require("./ThemeProvider");

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const values = {
    setTheme,
    theme,
  };

  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
};

export default ThemeProvider;
