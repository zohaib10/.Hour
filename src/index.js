import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import Register from "./Components/Register";
import ContactUs from "./Components/ContactUs";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import Office from "./Components/Office";
import ViewEmployee from "./Components/ViewEmployee";
import Login from "./Components/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route path="/" component={Login} exact />
        <Route path="/register" component={Register} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/office" component={Office} />
        <Route path="/viewemployee" component={ViewEmployee} />
      </div>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
