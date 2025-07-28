"use client";
import { cardsData } from "@/_components/Dashboard/dashboard.constants";
import DashboardCard from "@/_components/Dashboard/DashboardCard";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const DashboardCards = () => {
  const swiperRef = useRef(null);
  return (
    <section>
      <div className="flex gap-4 justify-between">
        <Swiper
          ref={swiperRef}
          spaceBetween={20}
          slidesPerView="auto"
          scrollbar={{ draggable: true }}
          modules={[Navigation]}
          className="!mx-0"
        >
          {cardsData &&
            cardsData.map(
              ({
                id,
                title,
                count,
                icon,
                dataUsed,
                changeCount,
                status,
                progress,
                chartColor,
              }) => (
                <SwiperSlide key={id} style={{ width: "300px" }}>
                  <DashboardCard
                    key={id}
                    title={title}
                    count={count}
                    icon={icon}
                    dataUsed={dataUsed}
                    changeCount={changeCount}
                    status={status}
                    progress={progress}
                    chartColor={chartColor}
                  />
                </SwiperSlide>
              )
            )}
        </Swiper>
      </div>
    </section>
  );
};

export default DashboardCards;
