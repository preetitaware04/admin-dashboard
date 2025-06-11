"use client";
import { cardsData } from "@/_components/Dashboard/dashboard.constants";
import DashboardCard from "@/_components/Dashboard/DashboardCard";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Dashboard = () => {
  return (
    <section className="px-5">
      <div className="flex gap-4">
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          scrollbar={{ draggable: true }}
          modules={Navigation}
        >
          {cardsData &&
            cardsData.map(({ id, title, count, icon, dataUsed, change }) => (
              <SwiperSlide>
                <DashboardCard
                  key={id}
                  title={title}
                  count={count}
                  icon={icon}
                  dataUsed={dataUsed}
                  change={change}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Dashboard;
