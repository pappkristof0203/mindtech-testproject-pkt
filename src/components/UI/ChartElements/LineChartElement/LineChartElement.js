import React, { useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

// import styles from "./LineChartElement.module.css";
import TempChartElement from "../TempChartElement/TempChartElement";

const LineChartElement = (props) => {
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
        <LineChart data={filteredData}>
          <Line
            type="monotone"
            dataKey={props.propsData.dataType}
            stroke="#8884d8"
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis
            interval={"preserveStartEnd"}
            minTickGap={100}
            dataKey="lastUpdatedAtApify"
          />
          <YAxis width={80} type="number" dataKey={props.propsData.dataType} />
        </LineChart>
      </ResponsiveContainer>
    </TempChartElement>
  );
};

export default LineChartElement;
