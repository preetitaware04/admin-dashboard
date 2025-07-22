"use client";
import { profitData } from "@/_components/Dashboard/dashboard.constants";
import { Button } from "@mui/material";
import React from "react";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";

const TotalProfit = () => {
  return (
    <div className="p-5 w-[60%] shadow-md rounded-md flex flex-col justify-between">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-lg">TotalProfit</h2>
          <span className="text-[25px] font-bold">$8,950.00</span>
        </div>
        <Button variant="outlined" className="!capitalize" size="small">
          Details
        </Button>
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
