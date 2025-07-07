"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { sidebarMenu } from "../sidebar.constants";
import { Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa6";
import { Collapse } from "react-collapse";
import lightThemeLogo from "../../../public/assets/images/lightModelogo.png";
import darkThemeLogo from "../../../public/assets/images/darkmodelogo.png";
import { RxCross2 } from "react-icons/rx";

import { MyContext } from "@/Context/ThemeProvider";
import { HiMenuAlt2 } from "react-icons/hi";

const Sidebar = () => {
  const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);
  const [toggleIndex, setToggleIndex] = useState(null);

  const context = useContext(MyContext);

  const toggleTab = (index) => {
    setToggleIndex(index);
    setIsToggleSubmenu(!isToggleSubmenu);
  };

  const toggleNav = () => {
    context?.setIsToggleSidebar(!context?.isToggleSidebar);
  };
  return (
    <aside
      className="h-screen max-h-screen overflow-y-scroll overflow-x-hidden p-3 border border-r-[1px] border-[rgba(0,0,0,0.1)] fixed top-0 left-0 transition-all duration-300 dark:!bg-[#171717]"
      style={{ width: context.isToggleSidebar ? "4%" : "18%" }}
    >
      {context.isToggleSidebar ? (
        <Button
          className="!min-w-[40px] !w-[40px] !h-[40px] !rounded-full !text-medium dark:!text-gray-200 hover:!bg-gray-200 dark:hover:!bg-gray-700 transition-all duration-300 !mb-5"
          onClick={toggleNav}
        >
          <HiMenuAlt2 size={30} />
        </Button>
      ) : (
        <div className="flex justify-between items-end gap-3 !mb-5">
          <Link href="/">
            {context.theme === "light" ? (
              <Image src={lightThemeLogo} alt="logo" width={180} height={30} />
            ) : (
              <Image src={darkThemeLogo} alt="logo" width={180} height={30} />
            )}
          </Link>
          <RxCross2
            onClick={toggleNav}
            size={20}
            className="!min-w-[30px] !w-[30px] !h-[30px] !rounded-full !text-medium dark:!text-gray-200 transition-all duration-300 cursor-pointer"
          />
        </div>
      )}
      <div className="sidebarMenu mt-4">
        {sidebarMenu?.length !== 0 && (
          <ul className="w-full flex flex-col justify-center gap-2">
            {sidebarMenu?.map((menu, index) => {
              return (
                <div className="w-full relative group" key={menu?.id}>
                  <Link href={menu?.href}>
                    <Button
                      variant="text"
                      className={`w-full !capitalize text-left !justify-start group-hover:!bg-gray-200 dark:group-hover:!bg-gray-700 !text-medium gap-5 !font-medium !text-xl !py-3 dark:!text-gray-200 ${
                        toggleIndex === index && isToggleSubmenu === true
                          ? "!bg-gray-200 dark:!bg-gray-700"
                          : ""
                      }`}
                      onClick={() => toggleTab(index)}
                    >
                      {menu?.icon}
                      {`${menu?.title}`}
                    </Button>
                  </Link>
                  {menu?.items?.length > 0 && (
                    <Button
                      className={`!absolute !min-w-[30px] !w-[30px] !h-[30px] !rounded-full z-[30] !top-[13px] !right-[10px] flex items-center justify-center cursor-pointer !text-medium dark:!text-gray-200`}
                      style={{ display: context.isToggleSidebar ? "none" : "" }}
                    >
                      <FaAngleDown
                        size={18}
                        className={`${
                          toggleIndex === index && isToggleSubmenu === true
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </Button>
                  )}
                  {menu?.items?.length > 0 && (
                    <Collapse
                      isOpened={toggleIndex === index ? isToggleSubmenu : false}
                    >
                      <div className="submenu w-full flex flex-col items-end py-1">
                        {menu?.items?.map((item, index) => {
                          return (
                            <Link
                              key={item?.id}
                              href={item?.href}
                              className="block w-full"
                            >
                              <Button
                                variant="text"
                                className="!text-xl !font-medium !capitalize hover:!bg-gray-200 dark:hover:!bg-gray-800 !text-left !text-medium dark:!text-gray-200 gap-4 !pl-10"
                              >
                                <span className="w-[5px] h-[5px] bg-gray-500"></span>
                                {item?.title}
                              </Button>
                            </Link>
                          );
                        })}
                      </div>
                    </Collapse>
                  )}
                </div>
              );
            })}
          </ul>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
