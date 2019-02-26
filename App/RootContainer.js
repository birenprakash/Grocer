import React, { Component } from "react";
import { ViewPagerAndroid } from "react-native-gesture-handler";
import Router from "./Router/GrocerDrawer";

class RootContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Router />;
  }
}

export default RootContainer;
