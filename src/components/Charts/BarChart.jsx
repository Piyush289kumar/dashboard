import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  ColumnSeries,
  DataLabel,
} from "@syncfusion/ej2-react-charts";
import {
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
} from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

function BarChart() {
  const { currentThemeMode } = useStateContext();
  return (
    <ChartComponent
      id="charts"
      //   primaryXAxis={barPrimaryXAxis}
      //   primaryYAxis={barPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentThemeMode === "Dark" ? "#033373E" : "#FAFBFB"}
      legendSettings={{ background: "#FAFBFB" }}
    >
      <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
      <SeriesCollectionDirective>
        {barCustomSeries.map((item, idx) => (
          <SeriesDirective key={idx} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
}

export default BarChart;
