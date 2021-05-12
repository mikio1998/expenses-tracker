import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {

  // - Find max (expenditure) value
  // Map the values of dataPoints (array of {month, value})
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
  // Cast Math.max() on the spreaded array to find the maximum value.
  // Spread, because Math.max() wants a list of arguments, not grouped in array.
  const totalMaximum = Math.max(...dataPointValues)



  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
