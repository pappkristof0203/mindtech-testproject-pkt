import React from "react";
import { connect } from "react-redux";

import styles from "./BottomBar.module.css";

const BottomBar = (props) => {
  return (
    <footer className={styles.BottomBar}>
      <section className={styles.LeftSide}>
        <div className={styles.Copyright}>2021 TestProject Kft.</div>
      </section>
      <section className={styles.RightSide}>
        <div className={styles.Contact}>
          <h1>Contact</h1>
          <div>TestProject Kft.</div>
          <div>Papp Kristóf Tamás</div>
          <div>4611, Jéke, Ady Endre utca 23.</div>
          <div>+36 20 416 5551</div>
        </div>
      </section>
    </footer>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps, null, {
  forwardRef: true,
})(BottomBar);
