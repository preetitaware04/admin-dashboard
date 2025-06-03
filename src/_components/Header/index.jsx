import { Button } from "@mui/material";
import React from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import SearchBox from "../SearchBox";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex w-[82%] fixed top-0 right-0 z-100 px-4 py-2 justify-between border border-red-400">
      <div className="flex items-center gap-3">
        <Button className="!min-w-[40px] !w-[50px] !rounded-full !text-medium">
          <HiMenuAlt2 size={30} />
        </Button>

        <SearchBox placeholder="Search here..." width="350px" />
      </div>

      <div className="flex items-center gap-3">
        <Button className="!min-w-[40px] !w-[40px] !rounded-full !text-medium">
          <MdOutlineLightMode size={30} />
        </Button>
        <Button className="!min-w-[40px] !w-[40px] !rounded-full !text-medium">
          <FaRegBell size={20} />
        </Button>
      </div>
    </header>
  );
};

export default Header;
