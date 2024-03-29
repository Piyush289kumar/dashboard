import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";
import { useStateContext } from "../../contexts/ContextProvider";
import { render } from "react-dom";

class SparkLineChart extends React.PureComponent {
  render() {
    const { id, height, width, color, data, type, currentColorMode } =
      this.props;

    return (
      <SparklineComponent
        id={id}
        height={height}
        width={width}
        lineWidth={1}
        valueType="Numeric"
        fill={color}
        border={{ color: { currentColorMode }, width: 2 }}
        tooltipSettings={{
          visible: true,
          format: "${x} : data ${yval}",
          trackLineSettings: {
            visible: true,
          },
        }}
        markerSettings={{
          visible: ["All"],
          size: 2.5,
          fill: { currentColorMode },
        }}
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
}

export default SparkLineChart;
