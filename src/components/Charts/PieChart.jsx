import React from "react";
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationLegend,
  PieSeries,
  AccumulationDataLabel,
  Inject,
  AccumulationTooltip,
} from "@syncfusion/ej2-react-charts";
import { useStateContext } from "../../contexts/ContextProvider";
import { pieChartData } from "../../data/dummy";

function PieChart({ givenRadius = "80%", givenHeigth = "650px" }) {
  const { currentThemeMode, currentColorMode } = useStateContext();
  const dataLabelColor =
    currentColorMode === "Dark" ? "#FAFBFB" : currentColorMode;

  return (
    <AccumulationChartComponent
      id="pie-chart"
      legendSettings={{ visible: true, background: "#FAFBFB" }}
      height={givenHeigth}
      background={currentThemeMode === "Dark" ? "#33373E" : "#FAFBFB"}
      className="cursor-pointer"
    >
      <Inject
        services={[
          AccumulationLegend,
          PieSeries,
          AccumulationDataLabel,
          AccumulationTooltip,
        ]}
      />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          name="Sale"
          dataSource={pieChartData}
          xName="x"
          yName="y"
          innerRadius="40%"
          startAngle={0}
          endAngle={360}
          radius={givenRadius}
          explode
          explodeOffset="5%"
          explodeIndex={2}
          dataLabel={{
            visible: true,
            name: "text",
            position: "Outside",
            font: {
              fontWeight: "600",
              color: dataLabelColor,
              size: "18px",
            },
          }}
        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
}

export default PieChart;
