import React, { Component } from "react";
import { render } from "react-dom";

import { Grid, TextField, Button } from "@material-ui/core";
export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      error_1: false,
      error_2: false,
      error1: "",
      error2: "",
    };
    this.titleChange = this.titleChange.bind(this);
    this.descriptionChange = this.descriptionChange.bind(this);
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  titleChange(e) {
    this.setState({
      error_1: false,
      error1: "",
      title: e.target.value,
    });
  }
  descriptionChange(e) {
    this.setState({
      description: e.target.value,
      error2: "",
      error_2: false,
    });
  }

  buttonClicked() {
    if (this.state.title === "") {
      this.setState({
        error_1: true,
        error1: "Please Enter",
      });
    } else if (this.state.description === "") {
      this.setState({
        error_2: true,
        error2: "Please Enter",
      });
    } else {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: this.state.title,
          description: this.state.description,
        }),
      };
      fetch("/api/add", requestOptions).then((response) => {
        if (response.ok) {
          window.location.reload();
        }
      });
    }
  }

  render() {
    return (
      <Grid container spacing={1} align="center">
        <Grid item xs={12}>
          <TextField
            label="title"
            placeholder="Enter Title"
            variant="outlined"
            required={true}
            margin="dense"
            size="small"
            value={this.state.title}
            error={this.state.error_1}
            helperText={this.state.error1}
            onChange={this.titleChange}
            color="primary"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Description"
            placeholder="Enter Description"
            variant="outlined"
            required={true}
            multiline={true}
            rows={4}
            color="primary"
            rowsMax={8}
            value={this.state.description}
            error={this.state.error_2}
            helperText={this.state.error2}
            onChange={this.descriptionChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={this.buttonClicked}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    );
  }
}
