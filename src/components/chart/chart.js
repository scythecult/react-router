import React from "react";
import { ChartBar } from "./chart-bar";
import "./chart.css";

const Chart = (props) => {
  const { dataPoints } = props;
  const dataPointValues = dataPoints.map((point) => point.value);
  const totalMax = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint, index) => (
        <ChartBar key={dataPoint.label + index} maxValue={totalMax} {...dataPoint} />
      ))}
    </div>
  );
};

export { Chart };
