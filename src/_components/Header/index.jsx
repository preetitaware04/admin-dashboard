"use client";
import { Button } from "@mui/material";
import React, { useContext } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import SearchBox from "../SearchBox";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { MyContext } from "@/Context/ThemeProvider";
import Cookies from "js-cookie";

const Header = () => {
  const context = useContext(MyContext);

  const changeTheme = () => {
    const newTheme = context.theme === "dark" ? "light" : "dark";
    context.setTheme(newTheme);
    Cookies.set("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <header className="flex w-[82%] fixed top-0 right-0 z-100 px-4 py-2 justify-between shadow-md dark:shadow-slate-800">
      <div className="flex items-center gap-3">
        <Button className="!min-w-[40px] !w-[40px] !h-[40px] !rounded-full !text-medium dark:!text-gray-200 hover:!bg-gray-200 dark:hover:!bg-gray-700">
          <HiMenuAlt2 size={30} />
        </Button>

        <SearchBox placeholder="Search here..." width="350px" />
      </div>

      <div className="flex items-center gap-3">
        <Button
          className="!min-w-[40px] !w-[40px] !h-[40px] !rounded-full !text-medium dark:!text-gray-200 hover:!bg-gray-200 dark:hover:!bg-gray-700 transition-all duration-300"
          onClick={() => changeTheme()}
        >
          {context.theme === "light" ? (
            <MdOutlineLightMode size={30} />
          ) : (
            <MdDarkMode size={30} />
          )}
        </Button>
        <Button className="!min-w-[40px] !w-[40px] !h-[40px] !rounded-full !text-medium dark:!text-gray-200 hover:!bg-gray-200 dark:hover:!bg-gray-700">
          <FaRegBell size={20} />
        </Button>

        <div className="flex items-center gap-2">
          <Button className="!min-w-[40px] !w-[40px] !h-[40px] !rounded-full flex items-center justify-center !bg-medium dark:!bg-gray-200 !text-white">
            R
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
