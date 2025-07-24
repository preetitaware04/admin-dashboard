import React from "react";
import { BarChart, Bar, ResponsiveContainer } from "recharts";
import { FiChevronsUp, FiChevronsDown } from "react-icons/fi";
import { barChartData } from "../dashboard.constants";

const DashboardCard = ({
  title,
  count,
  icon,
  changeCount,
  status,
  progress,
  chartColor,
}) => {
  return (
    <div className="px-5 py-4 my-5 shadow-md dark:shadow-slate-800 rounded-md w-full h-auto bg-[#f3f4f6] dark:bg-slate-800">
      <div className="flex justify-between items-center gap-10 mb-5">
        <div className="flex gap-4 items-center">
          <div>{icon}</div>
          <div>
            <p>{title}</p>
            <h4 className="font-bold text-xl">{count}</h4>
          </div>
        </div>
        <div className="w-[70px] h-[70px]">
          <ResponsiveContainer>
            <BarChart width={150} height={40} data={barChartData}>
              <Bar
                dataKey="uv"
                fill={chartColor}
                barSize={5}
                radius={[10, 10, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span
          className={`${
            progress ? "text-green-700" : "text-red-600"
          } font-medium flex items-center gap-1`}
        >
          {progress ? <FiChevronsUp /> : <FiChevronsDown />}
          {changeCount}
        </span>
        <span className="text-gray-700 dark:text-gray-200">{status}</span>
      </div>
    </div>
  );
};

export default DashboardCard;
