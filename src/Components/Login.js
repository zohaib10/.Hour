import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import {
  Grid,
  Typography,
  Paper,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Button,
  Fab,
  Dialog,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  DialogTitle
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import AddIcon from "@material-ui/icons/Add";

const styles = {
  margin1: {
    marginTop: 80
  },
  redText: {
    color: "red"
  },
  paper1: {
    width: 350,
    margin: 60
  },
  div: {
    width: "100%"
    //margin: 30
    //marginLeft: "15%"
  },
  textField: {
    width: "80%",
    margin: 10,
    marginLeft: 30
  },
  margin: {
    margin: 8
  },
  button: {
    margin: 20,
    borderRadius: 20,
    backgroundColor: "red"
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

class Login extends Component {
  state = {
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
    open: false
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Grid
          container
          spacing={24}
          direction="row-reverse"
          justify="space-between"
          alignItems="flex-start"
          style={styles.margin1}
        >
          <Grid item xs={12} sm={6}>
            <Paper elevation={1}>
              <div align="center">
                <FormControl style={styles.textField}>
                  <InputLabel htmlFor="input-with-icon-adornment">
                    Username
                  </InputLabel>
                  <Input
                    id="input-with-icon-adornment"
                    startAdornment={
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl style={styles.textField}>
                  <InputLabel htmlFor="input-with-icon-adornment">
                    Password
                  </InputLabel>
                  <Input
                    id="input-with-icon-adornment"
                    type={this.state.showPassword ? "text" : "password"}
                    value={this.state.password}
                    onChange={this.handleChange("password")}
                    startAdornment={
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    }
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="Toggle password visibility"
                          onClick={this.handleClickShowPassword}
                        >
                          {this.state.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>

                <FormControl style={styles.textField} align="center">
                  <Button
                    variant="contained"
                    color="primary"
                    style={styles.button}
                  >
                    Sign In
                  </Button>

                  <div>
                    <Button
                      onClick={this.handleClickOpen}
                      style={{ textTransform: "none" }}
                    >
                      Forgot Password
                    </Button>
                    <Dialog
                      open={this.state.open}
                      onClose={this.handleClose}
                      aria-labelledby="form-dialog-title"
                    >
                      <DialogTitle id="form-dialog-title">
                        Forgot Password
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText>
                          Please provide the email associated with your account
                          and we will send you an email conatining your
                          password.
                        </DialogContentText>
                        <TextField
                          autoFocus
                          margin="dense"
                          id="name"
                          label="Email Address"
                          type="email"
                          fullWidth
                        />
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                          Cancel
                        </Button>
                        <Button onClick={this.handleClose} color="primary">
                          Send
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </div>
                  <Typography variant="h7" style={styles.margin}>
                    Not a Member? Register.
                  </Typography>
                </FormControl>
                <Fab
                  size="small"
                  color="secondary"
                  aria-label="Add"
                  style={styles.margin}
                >
                  <AddIcon />
                </Fab>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div>
              <Typography style={styles.redText} variant="h2" gutterBottom>
                AEON.Hour
              </Typography>
              <Typography variant="body1" gutterBottom>
                body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quos blanditiis tenetur unde suscipit, quam beatae rerum
                inventore consectetur, neque doloribus, cupiditate numquam
                dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
              <Typography variant="body2" gutterBottom>
                body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quos blanditiis tenetur unde suscipit, quam beatae rerum
                inventore consectetur, neque doloribus, cupiditate numquam
                dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Login;
