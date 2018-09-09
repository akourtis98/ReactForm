import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import UsersTable from "./UsersTable";
import SignUpFrom from "./SignUpFrom";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={SignUpFrom} />
      <Route path="/users" component={UsersTable} />
    </Switch>
  </main>
);

export default Main;
