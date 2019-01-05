import React, { Component } from "react";
import { TextField, Grid, Paper, Button, MenuItem } from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const paymentPeriod = [
  {
    value: "Weekly"
  },
  {
    value: "Bi-Weekly"
  },
  {
    value: "Monthly"
  }
];

const businessType = [
  {
    value: "Restaurant"
  },
  {
    value: "Hotel"
  },
  {
    value: "Other"
  }
];

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: 25,
    marginRight: 25,
    width: 200
  },
  textField1: {
    marginLeft: 25,
    marginRight: 25,
    width: 340,
    marginTop: 30
  },
  paper: {
    width: "70%",
    marginLeft: "15%"
  },
  button: {
    margin: 20,
    marginLeft: "6%",
    borderRadius: 20,
    backgroundColor: "red"
  },
  menu: {
    width: 200
  },
  heading: {
    textAlign: "center"
  }
};

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

class Register extends Component {
  state = {
    defaultpaymentperiod: "Bi-Weekly",
    businesstype: "Restaurant",
    firstname: "",
    lastname: "",
    businessname: "",
    businessemail: "",
    password: "",
    businessphone: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
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
      <div>
        <h1 style={styles.heading}>New Account Registration</h1>
        <Paper style={styles.paper} elevation={1}>
          <form
            onSubmit={this.handleSubmit}
            style={styles.container}
            noValidate
            autoComplete="off"
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
                  label="FirstName"
                  style={styles.textField}
                  type="text"
                  margin="normal"
                  onChange={this.updateChange}
                  required
                />
                <TextField
                  id="lastname"
                  label="LastName"
                  style={styles.textField}
                  type="text"
                  margin="normal"
                  onChange={this.updateChange}
                  required
                />
                <TextField
                  id="businessname"
                  label="Business Name"
                  style={styles.textField}
                  type="text"
                  margin="normal"
                  onChange={this.updateChange}
                  required
                />
                <TextField
                  id="businessemail"
                  label="Business Email"
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
                  id="businessphone"
                  label="Business Phone"
                  style={styles.textField}
                  type="phone"
                  margin="normal"
                  onChange={this.updateChange}
                  required
                />
                <TextField
                  id="businesstype"
                  select
                  style={styles.textField1}
                  value={this.state.businesstype}
                  onChange={this.handleChange("businesstype")}
                  SelectProps={{
                    MenuProps: {
                      style: styles.menu
                    }
                  }}
                  helperText="Choose your Business Type"
                  margin="normal"
                >
                  {businessType.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  id="defaultpaymentperiod"
                  select
                  style={styles.textField1}
                  value={this.state.defaultpaymentperiod}
                  onChange={this.handleChange("defaultpaymentperiod")}
                  SelectProps={{
                    MenuProps: {
                      style: styles.menu
                    }
                  }}
                  helperText="Choose your default payment period"
                  margin="normal"
                >
                  {paymentPeriod.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </TextField>
              </MuiThemeProvider>
            </Grid>

            <Button
              style={styles.button}
              type="submit"
              variant="contained"
              color="secondary"
            >
              Register
            </Button>
          </form>
        </Paper>
      </div>
    );
  }
}

export default Register;
