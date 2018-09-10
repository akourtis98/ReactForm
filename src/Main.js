import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import UsersTable from "./components/UsersTable";
import SignUpFrom from "./components/SignUpFrom";

import store from "./store";

const Main = () => (
  <main>
    <Provider store={store}>
      <Switch>
        <Route exact path="/users" component={UsersTable} />
        <Route path="/*" component={SignUpFrom} />
      </Switch>
    </Provider>
  </main>
);

export default Main;
