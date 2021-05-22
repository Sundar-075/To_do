import React, { Component } from "react";
import { render } from "react-dom";
import {
  ButtonGroup,
  Button,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@material-ui/core";
export default class CardComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: [],
    };
    this.fetchtasks = this.fetchtasks.bind(this);
  }
  componentDidMount() {
    this.fetchtasks();
  }
  fetchtasks() {
    fetch("/api/get")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          val: data,
        });
      });
  }
  render() {
    var task = this.state.val;
    return (
      <Grid container spacing={3} alignItems="center">
        {Object.keys(task).map((key) => {
          return (
            <Grid item xs={3} key={key}>
              <Card>
                <CardHeader title={task[key]["title"]} />
                <CardContent>
                  <Typography variant="h5">
                    {task[key]["description"]}
                  </Typography>
                </CardContent>
                <ButtonGroup>
                  <Button variant="contained" color="primary">
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => {
                      fetch("/api/delete" + "?id=" + key).then((response) => {
                        if (response.ok) {
                          window.location.reload();
                        }
                      });
                    }}
                  >
                    Delete
                  </Button>
                </ButtonGroup>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    );
  }
}
{
  /* <p key={key}>{task[key]["title"]}</p>; */
}
