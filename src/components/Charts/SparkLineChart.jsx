import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

function SparkLineChart({
  id,
  height,
  width,
  color,
  data,
  type,
  currentColor,
}) {
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      valueType="Numeric"
      fill={color}
      border={{ color: "blue", width: 2 }}
      tooltipSettings={{
        visible: true,
        format: "${x} : data ${yval}",
        trackLineSettings: {
          visible: true,
        },
      }}
      markerSettings={{ visible: ["All"], size: 2.5, fill: "blue" }}
      dataSource={data}
      xName="x"
      yName="yval"
      type={type}
      className="cursor-pointer"
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
}

export default SparkLineChart;
