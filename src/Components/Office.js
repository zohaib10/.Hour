import React, { Component } from "react";
import {
  Grid,
  Button,
  Slide,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  TextField
} from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";

import ReactVirtualizedTable from "./ReactVirtualizedTable";

const theme = createMuiTheme({
  // For Underline Color After Click
  palette: {
    primary: { main: "#FFB4D9" }
  },
  // For Underline Hover Color
  overrides: {
    MuiInput: {
      underline: {
        "&:hover:not($disabled):not($error):not($focused):before": {
          borderBottom: "1px solid rgba(0, 0, 0, 0.42)"
        }
      }
    }
  }
});

const data = [
  ["Zohaib Ahmad", "510-292-1457", "Yes", 13.67, "No", "12/10/2012"],
  ["Sarmad Farooq", 237, 9.0, 37, 4.3],
  ["Awais Raza", 262, 16.0, 24, 6.0],
  ["Hisham Riaz", 305, 3.7, 67, 4.3],
  ["Waleed Khalid", 356, 16.0, 49, 3.9],
  ["Uzair Farooq", 262, 16.0, 24, 6.0],
  ["Ahmed Almahbashi", 305, 3.7, 67, 4.3],
  ["Tim Song", 356, 16.0, 49, 3.9],
  ["Mahesh Rajput", 356, 16.0, 49, 3.9]
];

const colName = ["id", "name", "phone", "active", "hours", "paid", "start"];

const styles = {
  button: {
    margin: 10,
    marginRight: 60,
    borderRadius: 20,
    backgroundColor: "red",
    width: 200
  },
  table: {
    minWidth: 700,
    width: "90%",
    margin: 10,
    height: 400,
    overflow: "hidden",
    overflowY: "auto"
  },
  appBar: {
    position: "relative",
    backgroundColor: "black"
  },
  flex: {
    flex: 1
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    width: "50%"
  },
  textField: {
    marginLeft: 25,
    marginRight: 25,
    width: "90%"
  }
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Office extends Component {
  state = {
    open: false,
    firstname: "",
    lastname: "",
    phonenumber: "",
    email: "",
    password: ""
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  updateChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="center"
      >
        <ReactVirtualizedTable data={data} colName={colName} req="office" />
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="flex-end"
        >
          <Button
            style={styles.button}
            variant="contained"
            color="secondary"
            onClick={this.handleClickOpen}
          >
            <AddIcon />
            New Employee
          </Button>
          <Dialog
            fullScreen
            open={this.state.open}
            onClose={this.handleClose}
            TransitionComponent={Transition}
          >
            <AppBar style={styles.appBar}>
              <Toolbar>
                <IconButton
                  color="inherit"
                  onClick={this.handleClose}
                  aria-label="Close"
                >
                  <CloseIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" style={styles.flex}>
                  Add New Employee
                </Typography>
              </Toolbar>
            </AppBar>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <form
                style={styles.container}
                noValidate
                autoComplete="off"
                onSubmit={this.handleSubmit}
              >
                <Grid
                  container
                  direction="row"
                  justify="space-evenly"
                  alignItems="center"
                >
                  <MuiThemeProvider theme={theme}>
                    <TextField
                      id="firstname"
                      label="First Name"
                      style={styles.textField}
                      type="text"
                      margin="normal"
                      onChange={this.updateChange}
                      required
                    />
                    <TextField
                      id="lastname"
                      label="Last Name"
                      style={styles.textField}
                      type="text"
                      margin="normal"
                      onChange={this.updateChange}
                      required
                    />
                    <TextField
                      id="email"
                      label="Email"
                      style={styles.textField}
                      type="email"
                      margin="normal"
                      onChange={this.updateChange}
                      required
                    />
                    <TextField
                      id="password"
                      label="Password"
                      style={styles.textField}
                      type="password"
                      margin="normal"
                      onChange={this.updateChange}
                      required
                    />

                    <TextField
                      id="phonenumber"
                      label="Phone Number"
                      style={styles.textField}
                      type="phone"
                      margin="normal"
                      onChange={this.updateChange}
                      required
                    />
                  </MuiThemeProvider>
                  <Button
                    style={styles.button}
                    type="submit"
                    variant="contained"
                    color="secondary"
                  >
                    Save Employee
                  </Button>
                </Grid>
              </form>
            </Grid>
          </Dialog>
        </Grid>
      </Grid>
    );
  }
}

export default Office;
