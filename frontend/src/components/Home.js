import React, { Component } from "react";
import CardComp from "./CardComp";
import Test from "./test";
import { Typography } from "@material-ui/core";

import Input from "./Input";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Typography variant="h2" align="center">
          To_do
        </Typography>
        <Input />
        <CardComp />
        {/* <Test /> */}
      </div>
    );
  }
}
