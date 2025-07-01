import { Button } from "@mui/material";
import React from "react";
import { FaPlus } from "react-icons/fa";
const Banner = () => {
  return (
    <section className="px-5">
      <div className="px-5 py-10 flex justify-between gap-5 shadow-lg rounded-md">
        <div className="flex flex-col gap-5 items-start">
          <h1 className="max-w-xl w-full font-bold text-4xl">
            Good Morning,
            <br /> Cameron
          </h1>
          <p className="text-lg font-medium">
            Here's What happening on your store today. See the statistics at
            once.
          </p>
          <Button variant="contained" className="flex items-center gap-2 !bg-medium">
            <FaPlus /> Add Product
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
