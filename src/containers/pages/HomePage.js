import React, { useEffect, useReducer, useCallback, useState } from "react";
import { connect } from "react-redux";
import * as Materials from "@mui/material";

import styles from "./HomePages.module.css";
import * as dataActions from "../../store/actions/data";
import ChartElements from "../../components/UI/ChartElements/ChartElements";
import CheckBoxContainer from "../../components/UI/CheckBoxContainer/CheckBoxContainer";

const FORM_BOX_UPDATE = "FORM_BOX_UPDATE";
const FORM_BOX_CLEAR = "FORM_BOX_CLEAR";

const initialState = {
  infected: null,
  deceased: null,
  recovered: null,
  quarantined: null,
  tested: null,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case FORM_BOX_UPDATE: {
      return {
        ...state,
        [action.id]: action.values,
      };
    }
    case FORM_BOX_CLEAR: {
      return initialState;
    }
    default:
      return state;
  }
};

const HomePage = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [fromState, dispatchFormState] = useReducer(formReducer, {
    infected: null,
    deceased: null,
    recovered: null,
    quarantined: null,
    tested: null,
  });

  const onCheckBoxChangeHandler = useCallback(
    (boxIdentifier, boxValues) => {
      dispatchFormState({
        type: FORM_BOX_UPDATE,
        id: boxIdentifier,
        values: boxValues,
      });
    },
    [dispatchFormState]
  );

  useEffect(() => {
    async function fetchDataFunction() {
      if (props.data.length === 0) {
        setIsLoading(true);
        await props.fetchData();
        setIsLoading(false);
        setIsLoaded(true);
      }
    }
    fetchDataFunction();
  }, [props]);

  const applyFilterHandler = () => {
    const tempArray = [];

    for (const dataType in fromState) {
      for (const chartType in fromState[dataType]) {
        const tempObject = {
          dataType,
          chartType,
        };

        if (fromState[dataType][chartType]) {
          tempArray.push(tempObject);
        }
      }
    }

    props.uploadFilterData(tempArray);
  };

  const onCheckBoxClearHandler = () => {
    props.clearFilterData();
    props.dispatchFormState({
      type: FORM_BOX_CLEAR,
    });
  };

  return (
    <div className={styles.HomePage}>
      {isLoading ? (
        <div className={styles.ProgressContainer}>
          <h1>Getting data from database...</h1>
          <Materials.CircularProgress />
        </div>
      ) : (
        <div>
          <h1 style={{ textDecoration: "underline" }}>Filters</h1>
          <div className={styles.CheckBoxSection}>
            <div className={styles.CardContainer}>
              <div>Infected</div>
              <CheckBoxContainer
                id="infected"
                onCheckBoxChange={onCheckBoxChangeHandler}
              />
            </div>
            <div className={styles.CardContainer}>
              <div>Deceased</div>
              <CheckBoxContainer
                id="deceased"
                onCheckBoxChange={onCheckBoxChangeHandler}
              />
            </div>
            <div className={styles.CardContainer}>
              <div>Recovered</div>
              <CheckBoxContainer
                id="recovered"
                onCheckBoxChange={onCheckBoxChangeHandler}
              />
            </div>
            <div className={styles.CardContainer}>
              <div>Quarantined</div>
              <CheckBoxContainer
                id="quarantined"
                onCheckBoxChange={onCheckBoxChangeHandler}
              />
            </div>
            <div className={styles.CardContainer}>
              <div>Tested</div>
              <CheckBoxContainer
                id="tested"
                onCheckBoxChange={onCheckBoxChangeHandler}
              />
            </div>
          </div>
          <div className={styles.ButtonContainer}>
            <Materials.Button variant="contained" onClick={applyFilterHandler}>
              Apply
            </Materials.Button>
            {props.filterData.length !== 0 && (
              <Materials.Button
                variant="contained"
                onClick={onCheckBoxClearHandler}
              >
                Clear
              </Materials.Button>
            )}
          </div>
          <div className={styles.Line}></div>
          {isLoaded &&
            props.data.length !== 0 &&
            props.filterData.length !== 0 && (
              <h1 style={{ textDecoration: "underline" }}>Charts</h1>
            )}
          <div className={styles.ChartSection}>
            {isLoaded &&
              props.data.length !== 0 &&
              props.filterData.length !== 0 &&
              props.filterData.map((item, key) => {
                return (
                  <ChartElements
                    key={key}
                    id={item.chartType}
                    dataType={item.dataType}
                    data={props.data}
                  />
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data.data,
    filterData: state.data.filterData,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(dataActions.fetchData()),
  uploadFilterData: (filterData) =>
    dispatch(dataActions.uploadFilterData(filterData)),
  clearFilterData: () => dispatch(dataActions.clearFilterData()),
});

export default connect(mapStateToProps, mapDispatchToProps, null, {
  forwardRef: true,
})(HomePage);
