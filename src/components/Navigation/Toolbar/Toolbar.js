import React from "react";
import { connect } from "react-redux";

import styles from "./Toolbar.module.css";

const Toolbar = (props) => {
  return (
    <header className={styles.Toolbar}>
      <div className={styles.Items}>Test Project</div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps, null, {
  forwardRef: true,
})(Toolbar);
