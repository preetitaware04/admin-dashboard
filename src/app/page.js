import Banner from "@/app/_components/Banner";
import DashboardCards from "./_components/DashboardCards";
import TotalProfit from "./_components/TotalProfit";

export default function Home() {
  return (
    <>
      <Banner />
      <DashboardCards/>
    <div className="grid grid-cols-2 gap-4 my-4">
      <TotalProfit/>
    </div>
    </>
  );
}
