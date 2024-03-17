import React from "react";
import { ChartsHeader, AreaChart } from "../../components";

function Area() {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white  dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Area Chart" title="Gold Rate" />
      <div className="w-full">
        <AreaChart />
      </div>
    </div>
  );
}

export default Area;
