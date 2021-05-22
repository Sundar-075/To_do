import React, { Component } from "react";
import { render } from "react-dom";
import Home from "./Home";

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Home />;
  }
}
const appDiv = document.getElementById("app"); // Index.html Id
render(<App />, appDiv); // rendering the above code
