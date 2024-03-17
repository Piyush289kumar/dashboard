import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  StackingColumnSeries,
  Tooltip,
} from "@syncfusion/ej2-react-charts";

import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

function StackedChart({ width, height }) {
  const { currentThemeMode } = useStateContext();
  return (
    <ChartComponent
      id="charts"
      // primaryXAxis={stackedPrimaryXAxis}
      // primaryYAxis={stackedPrimaryYAxis}
      width={width}
      height={height}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      className="rounded- xl"
      background={currentThemeMode === "Dark" ? "#033373E" : "#FAFBFB"}
      legendSettings={{ background: "#FAFBFB" }}
    >
      <Inject services={{ StackingColumnSeries, Category, Legend, Tooltip }} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, idx) => (
          <SeriesDirective key={idx} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
}

export default StackedChart;
