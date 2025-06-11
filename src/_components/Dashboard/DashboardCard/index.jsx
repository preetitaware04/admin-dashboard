import React from "react";

const DashboardCard = ({ title, count, icon, change }) => {
  return (
    <div className="p-4 my-5 shadow-md dark:shadow-slate-800 rounded-md w-fit h-auto">
      <div className="flex justify-between items-center mb-5">
        <div className="flex gap-4 items-center">
          <div>{icon}</div>
          <div>
            <p>{title}</p>
            <p>{count}</p>
          </div>
        </div>
        <div>graph</div>
      </div>
      <div>{change}</div>
    </div>
  );
};

export default DashboardCard;
