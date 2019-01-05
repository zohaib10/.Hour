import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from "@material-ui/core";

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: 25,
    marginRight: 25,
    width: 255
  },
  textField1: {
    marginLeft: 25,
    marginRight: 25,
    width: "100%",
    marginTop: 30
  },
  paper: {
    width: "70%",
    marginLeft: "15%"
  },
  button: {
    margin: 20,
    borderRadius: 20,
    backgroundColor: "red"
  },
  menu: {
    width: 200
  },
  heading: {
    textAlign: "center"
  },
  redText: {
    color: "red"
  },
  margins: {
    margin: 25
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

class ContactUs extends Component {
  state = {
    name: "",
    email: "",
    comments: "",
    open: false
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
      <div>
        <h1 style={styles.heading}>Contact Us Form</h1>
        <Grid
          container
          spacing={24}
          direction="row"
          justify="space-between"
          alignItems="flex-start"
        >
          <Grid item xs={12} sm={6}>
            <Paper>
              <form
                onSubmit={this.handleSubmit}
                style={styles.container}
                noValidate
                autoComplete="off"
              >
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                >
                  <MuiThemeProvider theme={theme}>
                    <TextField
                      id="name"
                      label="Name"
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
                      id="comments"
                      label="Comments"
                      style={styles.textField1}
                      type="text"
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
                    Send
                  </Button>
                </Grid>
              </form>
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
              <div>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={this.handleClickOpen}
                  style={styles.button}
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
                      Please provide the email associated with your account and
                      we will send you an email conatining your password.
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
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ContactUs;

///https://stackoverflow.com/questions/50415928/material-ui-next-textfield-underline-color
