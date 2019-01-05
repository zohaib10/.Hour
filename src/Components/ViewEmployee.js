import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import {
  Grid,
  Switch,
  FormGroup,
  FormControlLabel,
  Paper,
  TextField,
  Checkbox,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Slide
} from "@material-ui/core";
import { Assignment, Lock, AttachMoney } from "@material-ui/icons";

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

const styles = {
  paper: {
    width: "80%"
  },
  textField: {
    width: 280,
    margin: 10
  },
  textField1: {
    width: "80%",
    margin: 5
  },
  check: {
    margin: 10
  },
  button: {
    margin: 10,
    borderRadius: 20,
    backgroundColor: "red",
    width: 260
  },

  button1: {
    margin: 10,
    borderRadius: 20,
    width: 30,
    fontSize: 10
  },
  inner: {
    margin: 10
  },
  contain: {
    width: "90%"
  },
  dialog: {
    width: "40%",
    textAlign: "center"
  }
};

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class ViewEmployee extends Component {
  state = {
    checkedA: false,
    label: "Edit",
    disabled: true,
    active: true,
    firstName: "Zohaib",
    lastName: "Ahmad",
    phone: "510-292-1457",
    email: "zohaib.m.ahmad@gmail.com",
    password: "shito564",
    startDate: "12/10/2018",
    ppHours: "38",
    monthlyHours: "240",
    YTDHours: "1657",
    data: "",
    passwordType: "password"
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
    if (event.target.checked) {
      this.setState({ label: "Save" });
      this.setState({ disabled: false });
    } else {
      this.setState({ label: "Edit" });
      this.setState({ disabled: true });
    }
  };
  handleChange1 = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  handleUpdate = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleShowPassword = e => {
    if (e.currentTarget.textContent === "Show") {
      this.setState({ passwordType: "text" });
      e.currentTarget.textContent = "Hide";
    } else {
      this.setState({ passwordType: "password" });
      e.currentTarget.textContent = "Show";
    }
  };

  handlePasswordSubmit = e => {
    e.preventDefault();
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("called", nextProps, prevState);
    // return prevState;
    // return {
    //   data: nextProps.location.state.referrer
    // };
  }

  render() {
    return (
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-start"
          style={styles.inner}
        >
          <FormGroup row>
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.checkedA}
                  onChange={this.handleChange("checkedA")}
                  value="checkedA"
                  style={{ color: "red" }}
                />
              }
              label={this.state.label}
            />
          </FormGroup>
        </Grid>
        <Paper style={styles.paper}>
          <MuiThemeProvider theme={theme}>
            <TextField
              style={styles.textField}
              disabled={this.state.disabled}
              id="standard-disabled11"
              label="First Name"
              defaultValue={this.state.firstName}
              margin="normal"
            />
            <TextField
              disabled={this.state.disabled}
              style={styles.textField}
              id="lastName"
              label="Last Name"
              defaultValue={this.state.lastName}
              margin="normal"
            />
            <TextField
              disabled={this.state.disabled}
              style={styles.textField}
              id="phone"
              label="Phone Number"
              defaultValue={this.state.phone}
              margin="normal"
            />
            <TextField
              disabled={this.state.disabled}
              style={styles.textField}
              id="email"
              label="Email"
              defaultValue={this.state.email}
              margin="normal"
            />
            <TextField
              disabled
              style={styles.textField}
              id="password"
              label="Password"
              defaultValue={this.state.password}
              margin="normal"
              type="password"
            />
            <TextField
              disabled={this.state.disabled}
              style={styles.textField}
              id="startDate"
              label="Start Date"
              defaultValue={this.state.startDate}
              margin="normal"
            />
            <TextField
              disabled={this.state.disabled}
              style={styles.textField}
              id="ppHours"
              label="Pay Period Hours"
              defaultValue={this.state.ppHours}
              margin="normal"
            />
            <TextField
              disabled={this.state.disabled}
              style={styles.textField}
              id="monthlyHours"
              label="Monthly Hours"
              defaultValue={this.state.monthlyHours}
              margin="normal"
            />
            <TextField
              disabled={this.state.disabled}
              style={styles.textField}
              id="standard-disabled7"
              label="Year to date Hours"
              defaultValue={this.state.YTDHours}
              margin="normal"
            />
          </MuiThemeProvider>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  disabled={this.state.disabled}
                  checked={this.state.active}
                  onChange={this.handleChange1("active")}
                  style={styles.check}
                  value="active"
                />
              }
              label="Active"
            />
          </FormGroup>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            style={styles.contain}
          >
            <div>
              <Button
                variant="contained"
                color="secondary"
                style={styles.button}
                onClick={this.handleClickOpen}
              >
                <Lock />
                Change Password
              </Button>
              <Dialog
                open={this.state.open}
                maxWidth="xs"
                TransitionComponent={Transition}
                keepMounted
                onClose={this.handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
              >
                <form>
                  <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                  >
                    <DialogTitle id="alert-dialog-slide-title">
                      {"Change Password"}
                    </DialogTitle>
                    <Button
                      style={styles.button1}
                      variant="outlined"
                      onClick={this.handleShowPassword}
                    >
                      Show
                    </Button>
                  </Grid>
                  <DialogContent>
                    <MuiThemeProvider theme={theme}>
                      <TextField
                        id="password"
                        label="Current Password"
                        style={styles.textField1}
                        type={this.state.passwordType}
                        margin="normal"
                        onChange={this.updateChange}
                        required
                      />
                      <TextField
                        id="password"
                        label="Enter New Password"
                        style={styles.textField1}
                        type={this.state.passwordType}
                        margin="normal"
                        onChange={this.updateChange}
                        required
                      />
                      <TextField
                        id="password"
                        label="Confirm New Password"
                        style={styles.textField1}
                        type={this.state.passwordType}
                        margin="normal"
                        onChange={this.updateChange}
                        required
                      />
                    </MuiThemeProvider>
                  </DialogContent>

                  <DialogActions>
                    <Button
                      onClick={this.handleClose}
                      style={styles.button}
                      color="secondary"
                      variant="contained"
                    >
                      Close
                    </Button>
                    <Button
                      onClick={this.handlePasswordSubmit}
                      style={styles.button}
                      color="secondary"
                      variant="contained"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </DialogActions>
                </form>
              </Dialog>
            </div>

            <Button variant="contained" color="secondary" style={styles.button}>
              <AttachMoney />
              Pay
            </Button>
            <Button variant="contained" color="secondary" style={styles.button}>
              <Assignment />
              Pay Period report
            </Button>
          </Grid>
        </Paper>
      </Grid>
    );
  }
}

export default ViewEmployee;
