"use client";
import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoStorefrontOutline } from "react-icons/io5";
import { TbSocial } from "react-icons/tb";

const ChannelRevenue = () => {
  const [revenue, setRevenue] = useState("Monthly");

  const handleChangeRevenue = (event) => {
    setRevenue(event.target.value);
  };
  return (
    <div className="card dark:border-gray-700 p-5 w-[40%] shadow-md dark:shadow-gray-700 rounded-md flex flex-col gap-5">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-[22px] font-bold">Channel Revenue</h2>
        </div>
        <Select
          value={revenue}
          onChange={handleChangeRevenue}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          className="!text-black dark:!text-gray-200 !border dark:!border-gray-700 !outline-none"
          size="small"
        >
          <MenuItem value={"Monthly"}>Monthly</MenuItem>
          <MenuItem value={"Weekly"}>Weekly</MenuItem>
          <MenuItem value={"Annualy"}>Annualy</MenuItem>
        </Select>
      </div>
      <h3 className="flex items-center gap-2">
        <span className="text-[35px] font-bold">3.4%</span>
        <span>Growth Rate</span>
      </h3>

      <div className="grid grid-cols-3 gap-3 mt-5">
        <div className="flex flex-col">
          <span className="flex w-full h-[5px] rounded-full bg-blue-300"></span>
          <span className="font-semibold">28%</span>
        </div>
        <div className="flex flex-col">
          <span className="flex w-full h-[5px] rounded-full bg-green-200"></span>
          <span className="font-semibold">32%</span>
        </div>
        <div className="flex flex-col">
          <span className="flex w-full h-[5px] rounded-full bg-orange-200"></span>
          <span className="font-semibold">40%</span>
        </div>
      </div>

      <div className="rounded-md bg-[#f3f4f6] shadow-md dark:bg-gray-800 p-4 w-full mt-3 grid grid-cols-3">
        <div className="flex items-center justify-center flex-col">
          <span className="flex items-center justify-center w-[60px] h-[60px] rounded-full bg-blue-300 text-black">
            <MdOutlineShoppingCart size={30} />
          </span>
          <h3 className="text-lg font-semibold mt-1">$2.9K</h3>
          <p className="text-[14px]">Online store</p>
        </div>
        <div className="flex items-center justify-center flex-col">
          <span className="flex items-center justify-center w-[60px] h-[60px] rounded-full bg-green-200 text-black">
            <IoStorefrontOutline size={30} />
          </span>
          <h3 className="text-lg font-semibold mt-1">$2.6K</h3>
          <p className="text-[14px]">Physical store</p>
        </div>
        <div className="flex items-center justify-center flex-col">
          <span className="flex items-center justify-center w-[60px] h-[60px] rounded-full bg-orange-200 text-black">
            <TbSocial size={30} />
          </span>
          <h3 className="text-lg font-semibold mt-1">$2.1K</h3>
          <p className="text-[14px]">Social media</p>
        </div>
      </div>
    </div>
  );
};

export default ChannelRevenue;
