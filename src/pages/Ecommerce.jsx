import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { StackedChart, Button, SparkLineChart } from "../components";
import { earningData, SparklineAreaData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

function Ecommerce() {
  const { currentColorMode } = useStateContext();
  return (
    <div className="pt-24 h-screen">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div
          style={{ background: currentColorMode }}
          className={`text-gray-100 h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3`}
        >
          <div className="flex justify-between gap-5 items-center">
            <div>
              <p className="font-bold text-gray-100">Earnings</p>
              <p className="text-2xl">₹63,448.78</p>
            </div>
            <button
              type="button"
              className="bg-green-400 text-white text-2xl opacity-0.9 hover:drop-shadow-xl rounded-full p-4"
            >
              <BsCurrencyDollar />
            </button>
          </div>
          <div className="mt-6">
            <Button
              color={currentColorMode}
              bgColor={"white"}
              text="Download"
              borderRadius="10px"
            />
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm ${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-700">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:drop-shadow-xl">
                <span>
                  <GoDotFill />
                </span>
                <span>Expense</span>
              </p>

              <p className="flex items-center gap-2 text-green-600 dark:text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoDotFill />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">₹1,95,448.78</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              <div className="mt-8">
                <p className="text-3xl font-semibold">₹53,684.45</p>
                <p className="text-gray-500 mt-1">Expense</p>
              </div>

              <div className="mt-5">
                <SparkLineChart
                  currentColor={currentColorMode}
                  id="line-sparkLine"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color={currentColorMode}
                />
              </div>
              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={currentColorMode}
                  text={"Download Report"}
                  borderRadius={"10px"}
                />
              </div>
            </div>
            <div>
              <StackedChart width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ecommerce;
