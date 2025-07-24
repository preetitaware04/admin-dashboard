import Banner from "@/app/_components/Banner";
import DashboardCards from "./_components/DashboardCards";
import TotalProfit from "./_components/TotalProfit";
import ChannelRevenue from "./_components/ChannelRevenue";
import SalesReport from "./_components/SalesReport";

export default function Home() {
  return (
    <>
      <Banner />
      <DashboardCards />
      <section className="flex gap-4 my-4 px-5">
        <TotalProfit />
        <ChannelRevenue />
      </section>
      <SalesReport/>
    </>
  );
}
