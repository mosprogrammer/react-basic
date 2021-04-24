import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import About from './screens/About'
import Home from './screens/Home'
import Users from './screens/Users'
import Login from './screens/Login'

export default function App() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about" children={About} />
        <Route path="/users">
          <Users />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}