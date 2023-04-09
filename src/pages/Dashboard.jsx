import React from "react";
import { BsCurrencyRupee } from "react-icons/bs";
// import { GoPrimitiveDot } from "react-icons/go";
// import { IoIosMore } from "react-icons/io";
// import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";

// import { Stacked, Pie, Button, LineChart, SparkLine } from "../components";
import {
  earningData,
} from "../data/dummy";
// import {
//   earningData,
//   medicalproBranding,
//   recentTransactions,
//   weeklyStats,
//   dropdownData,
//   SparklineAreaData,
//   ecomPieChartData,
// } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
// import product9 from "../data/product9.jpg";
// import welcome from "../data/welcome-bg.svg";

const Dashboard = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="mt-24 m-2 md:m-10 p-2 md:p-10 rounded-3xl">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl lg:w-80 p-8 pl-16 pt-14 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold dark:text-gray-400">Earnings</p>
              <p className="text-2xl">₹63,448.78</p>
            </div>
            <button
              type="button"
              style={{ backgroundColor: { currentColor } }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            >
              <BsCurrencyRupee />
            </button>
          </div>
          
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div key={item.title} className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400  mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
