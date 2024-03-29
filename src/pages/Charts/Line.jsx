import React from "react";
import { ChartsHeader, LineChart } from "../../components";

function Line() {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white  dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Line Chart" title="Inflation Rate" />
      <div className="w-full">
        <LineChart />
      </div>
    </div>
  );
}

export default Line;
