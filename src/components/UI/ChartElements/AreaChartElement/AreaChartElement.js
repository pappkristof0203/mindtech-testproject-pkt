import React, { useState } from "react";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

// import styles from "./AreaChartElement.module.css";
import TempChartElement from "../TempChartElement/TempChartElement";

const AreaChartElement = (props) => {
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
        <AreaChart data={filteredData}>
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis
            interval={"preserveStartEnd"}
            minTickGap={100}
            dataKey="lastUpdatedAtApify"
          />
          <YAxis type="number" width={80} dataKey={props.propsData.dataType} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey={props.propsData.dataType}
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </TempChartElement>
  );
};

export default AreaChartElement;
