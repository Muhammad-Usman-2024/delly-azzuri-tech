import React from "react";
import { NotificationIcon } from "../constant/svgs";

const NotificationBar = () => {
  return (
    <div className="bg-[#013D29] text-white text-sm sm:text-base py-3 px-4 flex justify-between items-center border-t-2 border-[#219653]">
      <div className="flex items-center gap-2 ps-4">
        {NotificationIcon}
        <span className="text-sm">
          Delivery lead time will be impacted due to COVID-19. Stay safe!
        </span>
      </div>
      <div className="flex items-center gap-4 pe-4">
        <span className="text-[#669082] text-sm sm:text-base cursor-pointer">
          Select Language:
        </span>
        <div className="flex items-center gap-2">
          <button className="hover:text-green-200 ps-3">English</button>
          <span className="text-[#669082] ps-3 pe-3">|</span>
          <button className="text-[#669082] hover:text-green-200">
            العربية
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationBar;
