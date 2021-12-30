import React, { useState } from "react";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ScatterChart,
  Scatter,
  ResponsiveContainer,
} from "recharts";

// import styles from "./ChatterChartElement.module.css";
import TempChartElement from "../TempChartElement/TempChartElement";

const ChatterChartElement = (props) => {
  const [filteredData, setFilteredData] = useState(props.propsData.data);

  const filteredDataChangeHandler = (data) => {
    setFilteredData(data);
  };

  return (
    <TempChartElement
      filteredDataChange={filteredDataChangeHandler}
      propsData={props.propsData}
    >
      <ResponsiveContainer width={630} height={400}>
        <ScatterChart>
          <CartesianGrid />
          <XAxis
            interval={"preserveStartEnd"}
            minTickGap={100}
            dataKey="lastUpdatedAtApify"
          />
          <YAxis width={80} type="number" dataKey={props.propsData.dataType} />
          <Tooltip cursor={{ strokeDasharray: "5 5" }} />
          <Scatter name="" data={filteredData} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
    </TempChartElement>
  );
};

export default ChatterChartElement;
