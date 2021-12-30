import React, { useState } from "react";
import * as Materials from "@mui/material";
import TextField from "@mui/material/TextField";
import DateAdapter from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";

import styles from "./TempChartElement.module.css";

const TempChartElement = (props) => {
  const [minDate, setMinDate] = useState(
    new Date(props.propsData.data[0].lastUpdatedAtApify)
  );
  const [maxDate, setMaxDate] = useState(
    new Date(
      props.propsData.data[props.propsData.data.length - 1].lastUpdatedAtApify
    )
  );

  const applyTimeFilterHandler = () => {
    let minIndex = 0;
    let maxIndex = 0;

    props.propsData.data.every((element) => {
      minIndex++;
      if (new Date(element.lastUpdatedAtApify) >= minDate) {
        return false;
      }
      return true;
    });

    props.propsData.data.every((element) => {
      maxIndex++;
      if (new Date(element.lastUpdatedAtApify) >= maxDate) {
        return false;
      }
      return true;
    });

    const tempDataArray = [];

    for (let index = minIndex; index < maxIndex; index++) {
      tempDataArray.push(props.propsData.data[index]);
    }

    props.filteredDataChange(tempDataArray);
  };

  return (
    <div className={styles.TempChartElement}>
      <h2>
        {props.propsData.dataType[0].toUpperCase() +
          props.propsData.dataType.slice(1).toLowerCase()}
      </h2>
      <div className={styles.ChartContainer}>
        {props.children}
        <div className={styles.TimeFilterContainer}>
          <div className={styles.FilterButtonContainer}>
            <LocalizationProvider dateAdapter={DateAdapter}>
              <DateTimePicker
                renderInput={(props) => <TextField {...props} />}
                label="Select Min Time"
                value={minDate}
                onChange={(newValue) => {
                  setMinDate(newValue._d);
                }}
              />
            </LocalizationProvider>
          </div>
          <div className={styles.FilterButtonContainer}>
            <LocalizationProvider dateAdapter={DateAdapter}>
              <DateTimePicker
                renderInput={(props) => <TextField {...props} />}
                label="Select Max Time"
                value={maxDate}
                onChange={(newValue) => {
                  setMaxDate(newValue._d);
                }}
              />
            </LocalizationProvider>
            <Materials.Button
              variant="contained"
              onClick={applyTimeFilterHandler}
              style={{ height: 36, width: 60, marginLeft: 10 }}
            >
              Apply
            </Materials.Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TempChartElement;
