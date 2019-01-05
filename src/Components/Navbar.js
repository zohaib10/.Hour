import React, { Component } from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Home } from "@material-ui/icons/";

const styles = {
  root: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: "black",
    color: "white"
  },

  grow: {
    flexGrow: 1,
    color: "red"
  }
};

class Navbar extends Component {
  render() {
    return (
      <div style={styles.root}>
        <AppBar style={styles.appBar} position="static" color="default">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
              <Home />
            </IconButton>
            <Typography variant="h6" color="inherit" style={styles.grow}>
              Business Name
            </Typography>
            <IconButton color="inherit" aria-label="Menu">
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Navbar;

//Use Link to link the home button to Landing Page - if not logged in
//create a dropdown for user if logged in
