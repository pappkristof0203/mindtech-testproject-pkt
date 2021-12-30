import React, { Component } from "react";

import styles from "./Layout.module.css";
import Aux from "../Aux/Aux";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import BottomBar from "../../components/Navigation/BottomBar/BottomBar";

class Layout extends Component {
  render() {
    return (
      <Aux>
        <Toolbar />
        <main className={styles.Content}>{this.props.children}</main>
        <BottomBar />
      </Aux>
    );
  }
}

export default Layout;
