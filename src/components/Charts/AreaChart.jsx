import React from "react";

import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  SplineAreaSeries,
  DateTime,
  Legend,
  Tooltip,
} from "@syncfusion/ej2-react-charts";

import { useStateContext } from "../../contexts/ContextProvider";
import {
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis,
} from "../../data/dummy";

function AreaChart() {
  const { currentThemeMode } = useStateContext();
  return (
    <ChartComponent
      id="area-chart"
      height="420px"
      width="100%"
      primaryXAxis={areaPrimaryXAxis}
      primaryYAxis={areaPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentThemeMode === "Dark" ? "#33373E" : "#FAFBFB"}
      legendSettings={{ visible: true, background: "#FAFBFB" }}
      className="cursor-pointer"
    >
      <Inject services={[SplineAreaSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {areaCustomSeries.map((item, idx) => (
          <SeriesDirective key={idx} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
}

export default AreaChart;
