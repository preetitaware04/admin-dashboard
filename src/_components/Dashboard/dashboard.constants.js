import {
  PiGiftBold,
  PiChartPieSliceBold,
  PiBankBold,
  PiUsersBold,
} from "react-icons/pi";

export const cardsData = [
  {
    id: 1,
    title: "New Orders",
    icon: <PiGiftBold size={45} className="text-[#3b82f6]" />,
    count: "1,930",
    changeCount: "+32.40%",
    status: " Increased last month",
    progress: true,
    chartColor: "#3b82f6",
  },
  {
    id: 2,
    title: "Sales",
    icon: <PiChartPieSliceBold size={45} className="text-[#10b981]" />,
    count: "57,890",
    changeCount: "-4.40%",
    status: "Decreased last month",
    progress: false,
    chartColor: "#10b981",
  },
  {
    id: 3,
    title: "Revenue",
    icon: <PiBankBold size={45} className="text-[#7928ca]" />,
    count: "12,390",
    changeCount: "+20.34%",
    status: "Increased last month",
    progress: true,
    chartColor: "#7928ca",
  },
  {
    id: 4,
    title: "Total Users",
    icon: <PiUsersBold size={45} className="text-[#ff2aca]" />,
    count: "538",
    changeCount: "+32.40%",
    status: "Increased last month",
    progress: true,
    chartColor: "#ff2aca",
  },
  {
    id: 5,
    title: "Total images",
    icon: <PiChartPieSliceBold size={45} className="text-blue-500" />,
    count: "32%",
    changeCount: "+32.40%",
    status: "Increased last month",
    progress: true,
    chartColor: "#3b82f6",
  },
];

export const profitData = [
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

export const profitTabsData = [
  { id: 1, tabName: "5D" },
  { id: 2, tabName: "2W" },
  { id: 3, tabName: "1M" },
  { id: 4, tabName: "6M" },
  { id: 5, tabName: "1Y" },
];
