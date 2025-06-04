"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { sidebarMenu } from "../sidebar.constants";
import { Button } from "@mui/material";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { Collapse } from "react-collapse";

const Sidebar = () => {
  const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);
  const [toggleIndex, setToggleIndex] = useState(null);

  const toggleTab = (index) => {
    setToggleIndex(index);
    setIsToggleSubmenu(!isToggleSubmenu);
  };
  return (
    <aside className="w-[18%] h-screen max-h-screen overflow-y-scroll overflow-x-hidden p-3 border border-r-[1px] border-[rgba(0,0,0,0.1)] fixed top-0 left-0">
      <Link href="/">
        <Image src="/next.svg" alt="logo" width={130} height={43} />
      </Link>
      <div className="sidebarMenu mt-4">
        {sidebarMenu?.length > 0 && (
          <ul className="w-full">
            {sidebarMenu?.map((menu, index) => {
              return (
                <div className="w-full relative group" key={menu?.id}>
                  {menu?.items?.length > 0 ? (
                    <Button
                      variant="text"
                      className={`w-full !capitalize text-left !justify-start group-hover:!bg-gray-200 !text-medium gap-2 !font-[600] !text-[13px] !py-[10px] dark:!text-gray-200 ${
                        toggleIndex === index && isToggleSubmenu === false
                          ? "!bg-gray-200"
                          : ""
                      }`}
                      onClick={() => toggleTab(index)}
                    >
                      {menu?.icon}
                      {`${menu?.title}`}
                    </Button>
                  ) : (
                    <Link href={menu?.href}>
                      <Button
                        variant="text"
                        className={`w-full !capitalize text-left !justify-start group-hover:!bg-gray-200 !text-medium gap-2 !font-[600] !text-[13px] !py-[10px] dark:!text-red-200 ${
                          toggleIndex === index && isToggleSubmenu === true
                            ? "!bg-gray-200"
                            : ""
                        }`}
                        onClick={() => toggleTab(index)}
                      >
                        {menu?.icon}
                        {`${menu?.title}`}
                      </Button>
                    </Link>
                  )}

                  {menu?.items?.length > 0 && (
                    <Button className="!absolute !min-w-[30px] !w-[30px] !h-[30px] !rounded-full z-[50] !top-[5px] !right-[10px] flex items-center justify-center cursor-pointer !text-medium">
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
                      <div className="submenu w-full flex flex-col py-1">
                        {menu?.items?.map((item, index) => {
                          return (
                            <Link
                              key={item?.id}
                              href={item?.href}
                              className="block w-full"
                            >
                              <Button
                                variant="text"
                                className="!w-full !text-[13px] !capitalize !hover:bg-gray-200 !text-left !justify-start !text-medium gap-2 !pl-3"
                              >
                                <span className="w-[5px] h-[5px] rounded-full bg-gray-500"></span>
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
