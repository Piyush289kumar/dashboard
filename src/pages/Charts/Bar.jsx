import React from "react";
import { ChartsHeader, BarChart } from "../../components";

function Bar() {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white  dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Bar Chart" title="Covid Dead Rate" />
      <div className="w-full">
        <BarChart />
      </div>
    </div>
  );
}

export default Bar;
