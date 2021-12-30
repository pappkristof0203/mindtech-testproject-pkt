import React from "react";
import { connect } from "react-redux";

// import styles from "./ChartElements.module.css";
import LineChartElement from "./LineChartElement/LineChartElement";
import BarChartElement from "./BarChartElement/BarChartElement";
import AreaChartElement from "./AreaChartElement/AreaChartElement";
import ChatterChartElement from "./ChatterChartElement/ChatterChartElement";

const ChartElements = (props) => {
  switch (props.id) {
    case "lineChart": {
      return <LineChartElement propsData={props} />;
    }
    case "barChart": {
      return <BarChartElement propsData={props} />;
    }
    case "chatterChart": {
      return <ChatterChartElement propsData={props} />;
    }
    case "areaChart": {
      return <AreaChartElement propsData={props} />;
    }
    default:
      return <div></div>;
  }
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps, null, {
  forwardRef: true,
})(ChartElements);
