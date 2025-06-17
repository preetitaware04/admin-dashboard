import React from "react";
import { BarChart, Bar, ResponsiveContainer } from "recharts";
import { FiChevronsUp, FiChevronsDown } from "react-icons/fi";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const DashboardCard = ({
  title,
  count,
  icon,
  changeCount,
  status,
  progress,
  chartColor,
}) => {
  const demoUrl = "https://codesandbox.io/p/sandbox/tiny-bar-chart-xzyy8g";
  return (
    <div className="px-5 py-4 my-5 shadow-md dark:shadow-slate-800 rounded-md w-full h-auto">
      <div className="flex justify-between items-center gap-10 mb-5">
        <div className="flex gap-4 items-center">
          <div>{icon}</div>
          <div>
            <p>{title}</p>
            <h4 className="bold">{count}</h4>
          </div>
        </div>
        <div className="w-[70px] h-[70px]">
          <ResponsiveContainer>
            <BarChart width={150} height={40} data={data}>
              <Bar dataKey="uv" fill={chartColor} barSize={5} />
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
