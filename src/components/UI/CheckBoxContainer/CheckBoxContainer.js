import React, { useReducer, useEffect } from "react";
import * as Materials from "@mui/material";
import { connect } from "react-redux";

// import styles from "./CheckBoxContainer.module.css";

const BOX_CHANGE = "BOX_CHANGE";
const BOX_CLEAR = "BOX_CLEAR";

const initialState = {
  lineChart: false,
  barChart: false,
  chatterChart: false,
  areaChart: false,
};

const boxReducer = (state, action) => {
  switch (action.type) {
    case BOX_CHANGE:
      return {
        ...state,
        [action.id]: action.value,
      };
    case BOX_CLEAR:
      return {
        initialState,
      };
    default:
      return state;
  }
};

const CheckBoxContainer = (props) => {
  const [boxState, dispatch] = useReducer(boxReducer, {
    lineChart: false,
    barChart: false,
    chatterChart: false,
    areaChart: false,
  });

  const { id, onCheckBoxChange } = props;

  useEffect(() => {
    onCheckBoxChange(id, boxState);
  }, [boxState, id, onCheckBoxChange]);

  useEffect(() => {
    if (props.filterData.length === 0) {
      dispatch({
        type: BOX_CLEAR,
      });
    }
  }, [props.filterData]);

  const stateChangeHandler = (event) => {
    dispatch({
      type: BOX_CHANGE,
      id: event.target.id,
      value: event.target.checked,
    });
  };

  return (
    <Materials.Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      <Materials.FormControlLabel
        label="Line Chart"
        control={
          <Materials.Checkbox
            id="lineChart"
            checked={boxState.lineChart}
            onChange={stateChangeHandler}
          />
        }
      />
      <Materials.FormControlLabel
        label="Bar Chart"
        control={
          <Materials.Checkbox
            id="barChart"
            checked={boxState.barChart}
            onChange={stateChangeHandler}
          />
        }
      />
      <Materials.FormControlLabel
        label="Chatter Chart"
        control={
          <Materials.Checkbox
            id="chatterChart"
            checked={boxState.chatterChart}
            onChange={stateChangeHandler}
          />
        }
      />
      <Materials.FormControlLabel
        label="Area Chart"
        control={
          <Materials.Checkbox
            id="areaChart"
            checked={boxState.areaChart}
            onChange={stateChangeHandler}
          />
        }
      />
    </Materials.Box>
  );
};

const mapStateToProps = (state) => {
  return {
    filterData: state.data.filterData,
  };
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps, null, {
  forwardRef: true,
})(CheckBoxContainer);
