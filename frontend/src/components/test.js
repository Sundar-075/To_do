import React, { Component } from "react";
import { render } from "react-dom";
// import Home from "./Home";

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: [],
      isloaded: false,
    };
  }

  render() {
    if (!this.state.isloaded) {
      return <div>Loading....</div>;
    } else {
      return <div></div>;
    }
  }
}

// Grid container spacing={2} align="center">
//           {Object.values(this.state.val).map((i) => {
//             <Grid item xs={12}>
//               <Card>
//                 <CardHeader title={i["title"]} />
//                 <CardContent>
//                   <Typography variant="h6">Description</Typography>
//                 </CardContent>
//               </Card>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={() => {
//                   console.log(this.state.val);
//                   Object.values(this.state.val).map((i) => {
//                     console.log(i["title"]);
//                   });
//                 }}
//               ></Button>
//             </Grid>;
//           })}
//         </Grid>
