"use client";
import { salesReportData } from "@/_components/Dashboard/dashboard.constants";
import React from "react";
import {
  Area,
  Tooltip,
  ResponsiveContainer,
  ComposedChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Bar,
  Line,
  Scatter,
} from "recharts";

const SalesReport = () => {
  return (
    <section>
      <div className="card dark:border-gray-700 p-5 px-5 shadow-md dark:shadow-gray-700 rounded-md flex flex-col gap-5">
        <h2 className="text-xl font-bold">Sales Report</h2>
      </div>
      <div className="w-full h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            width={500}
            height={400}
            data={salesReportData}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="revenue"
              fill="url(#colorValue)"
              stroke="#8884d8"
            />
            <Bar
              dataKey="expense"
              barSize={25}
              fill="#413ea0"
              radius={[10, 10, 0, 0]}
            />
            {/* <Line type="monotone" dataKey="revenue" stroke="#ff7300" /> */}
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default SalesReport;
