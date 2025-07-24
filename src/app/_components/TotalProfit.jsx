"use client";
import {
  profitData,
  profitTabsData,
} from "@/_components/Dashboard/dashboard.constants";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";

const TotalProfit = () => {
  const [selectedProfit, setSelectedProfit] = useState(0);

  const handleSelectProfit = (index) => {
    setSelectedProfit(index);
  };
  return (
    <div className="card dark:border-gray-700 p-5 w-[60%] shadow-md dark:shadow-gray-700 rounded-md flex flex-col justify-between">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl">TotalProfit</h2>
          <span className="text-[25px] font-bold">$8,950.00</span>
        </div>
        <Button variant="outlined" className="!capitalize" size="small">
          Details
        </Button>
      </div>

      <div className="my-3 w-full rounded-xl card dark:border-gray-700 py-2 flex items-center gap-8 justify-between px-4">
        {profitTabsData?.map((tab, index) => {
          return (
            <span
              key={index}
              className={`flex items-center justify-center p-2 px-4 rounded-md text-sm cursor-pointer w-full ${
                selectedProfit === index
                  ? "bg-[#f3f4f6] dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-800 font-bold"
                  : " font-medium"
              }`}
              onClick={() => handleSelectProfit(index)}
            >
              {tab?.tabName}
            </span>
          );
        })}
      </div>

      <div className="w-full h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart width={500} height={400} data={profitData}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              strokeWidth={3}
              fill="url(#colorValue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TotalProfit;
