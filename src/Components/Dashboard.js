import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import {
  Button,
  Grid,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Slide,
  TextField
} from "@material-ui/core";

const styles = {
  button: {
    margin: 10,
    borderRadius: 20,
    backgroundColor: "dark-red",
    width: 200
  },
  table: {
    minWidth: 700,
    width: "90%",
    margin: 20,
    maxHeight: 350,
    overflow: "hidden",
    overflowY: "auto"
  },
  Header: {
    backgroundColor: "black",
    color: "white"
  },
  textField: {
    width: "100%"
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

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class Dashboard extends Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="center"
      >
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Button
            style={styles.button}
            type="submit"
            variant="outlined"
            color="secondary"
          >
            Clock In
          </Button>
          <Button
            style={styles.button}
            type="submit"
            variant="outlined"
            color="secondary"
          >
            Lunch Out
          </Button>
          <Button
            style={styles.button}
            type="submit"
            variant="outlined"
            color="secondary"
          >
            Lunch In
          </Button>
          <Button
            style={styles.button}
            type="submit"
            variant="outlined"
            color="secondary"
          >
            Clock Out
          </Button>
        </Grid>
        <Paper style={styles.table}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Employee Name</TableCell>
                <TableCell>Clock In</TableCell>
                <TableCell>Lunch Out</TableCell>
                <TableCell>Lunch In</TableCell>
                <TableCell>Clock Out</TableCell>
                <TableCell>On Clock</TableCell>
                <TableCell>Hours Worked</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  David Tran
                </TableCell>
                <TableCell>9:00 am</TableCell>
                <TableCell>12:00 pm</TableCell>
                <TableCell>1:00 pm</TableCell>
                <TableCell>5:00 pm</TableCell>
                <TableCell>No</TableCell>
                <TableCell>8:00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Awais Raza
                </TableCell>
                <TableCell>9:00 am</TableCell>
                <TableCell>12:00 pm</TableCell>
                <TableCell>1:00 pm</TableCell>
                <TableCell />
                <TableCell>Yes</TableCell>
                <TableCell>6:36</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Hisham Riaz
                </TableCell>
                <TableCell>10:45 am</TableCell>
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell>Yes</TableCell>
                <TableCell>3:12</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Sarmad Farooq
                </TableCell>
                <TableCell>1:13 pm</TableCell>
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell>Yes</TableCell>
                <TableCell>1:23</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Ahmad Alkurdy
                </TableCell>
                <TableCell>8:00 am</TableCell>
                <TableCell>12:00 pm</TableCell>
                <TableCell>1: 00 pm</TableCell>
                <TableCell>4:00 pm</TableCell>
                <TableCell>No</TableCell>
                <TableCell>8:00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  David Tran
                </TableCell>
                <TableCell>9:00 am</TableCell>
                <TableCell>12:00 pm</TableCell>
                <TableCell>1:00 pm</TableCell>
                <TableCell>5:00 pm</TableCell>
                <TableCell>No</TableCell>
                <TableCell>8:00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Awais Raza
                </TableCell>
                <TableCell>9:00 am</TableCell>
                <TableCell>12:00 pm</TableCell>
                <TableCell>1:00 pm</TableCell>
                <TableCell />
                <TableCell>Yes</TableCell>
                <TableCell>6:36</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Hisham Riaz
                </TableCell>
                <TableCell>10:45 am</TableCell>
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell>Yes</TableCell>
                <TableCell>3:12</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Sarmad Farooq
                </TableCell>
                <TableCell>1:13 pm</TableCell>
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell>Yes</TableCell>
                <TableCell>1:23</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Ahmad Alkurdy
                </TableCell>
                <TableCell>8:00 am</TableCell>
                <TableCell>12:00 pm</TableCell>
                <TableCell>1: 00 pm</TableCell>
                <TableCell>4:00 pm</TableCell>
                <TableCell>No</TableCell>
                <TableCell>8:00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <div>
            <Button
              variant="outlined"
              color="secondary"
              style={styles.button}
              onClick={this.handleClickOpen}
            >
              Office
            </Button>
            <Dialog
              open={this.state.open}
              TransitionComponent={Transition}
              keepMounted
              onClose={this.handleClose}
              aria-labelledby="alert-dialog-slide-title"
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle id="alert-dialog-slide-title">
                {"Enter Administrative Password"}
              </DialogTitle>
              <DialogContent>
                <MuiThemeProvider theme={theme}>
                  <TextField
                    id="password"
                    label="Password"
                    style={styles.textField}
                    type="password"
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
                  variant="outlined"
                >
                  Close
                </Button>
                <Button
                  onClick={this.handleClose}
                  style={styles.button}
                  color="secondary"
                  variant="outlined"
                >
                  Submit
                </Button>
              </DialogActions>
            </Dialog>
          </div>
          <Button
            style={styles.button}
            type="submit"
            variant="outlined"
            color="secondary"
          >
            Shop
          </Button>
          <Button
            style={styles.button}
            type="submit"
            variant="outlined"
            color="secondary"
          >
            .Batch
          </Button>
          <Button
            style={styles.button}
            type="submit"
            variant="outlined"
            color="secondary"
          >
            Settings
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default Dashboard;
