import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DashBoard from "./Dashboard";
import Login from "./Login";
import New from "./New";

export default function() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={DashBoard} />
        <Route path="/new" component={New} />
      </Switch>
    </BrowserRouter>
  );
}
