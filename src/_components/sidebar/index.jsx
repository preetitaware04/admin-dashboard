import Image from "next/image";
import Link from "next/link";
import React from "react";
import { sidebarMenu } from "../sidebar.constants";
import { Button } from "@mui/material";

const Sidebar = () => {
  return (
    <aside className="w-[18%] h-screen max-h-screen overflow-y-scroll overflow-x-hidden p-3 border border-r-[1px] border-[rgba(0,0,0,0.1)] fixed top-0 left-0">
      <Link href="/">
        <Image src="/next.svg" alt="logo" width={130} height={43} />
      </Link>
      <div className="sidebarMenu mt-4">
        {sidebarMenu?.length !== 0 && (
          <ul className="w-full">
            {sidebarMenu?.map((menu, index) => {
              return (
                <div className="w-full" key={menu?.id}>
                  <Button
                    variant="text"
                    className="w-full !capitalize text-left !justify-start !text-gray-700  gap-2 !font-bold !text-[13px] !py-3 dark:!text-gray-200"
                  >
                    {menu?.icon}
                    {`${menu?.title}`}
                  </Button>
                  {menu?.items?.length > 0 && (
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
                              className="block !w-full !text-[13px] !capitalize hover:bg-gray-200 !text-left !justify-start !text-medium"
                            >
                              {item?.title}
                            </Button>
                          </Link>
                        );
                      })}
                    </div>
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
