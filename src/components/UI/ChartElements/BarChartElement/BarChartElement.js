import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

// import styles from "./BarChartElement.module.css";
import TempChartElement from "../TempChartElement/TempChartElement";

const BarChartElement = (props) => {
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
        <BarChart data={filteredData}>
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis interval={"preserveStartEnd"} minTickGap={100} dataKey="lastUpdatedAtApify" />
          <YAxis width={80} type="number" dataKey={props.propsData.dataType} />
          <Bar dataKey={props.propsData.dataType} fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </TempChartElement>
  );
};

export default BarChartElement;
