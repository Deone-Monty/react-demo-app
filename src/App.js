import React, { Component } from 'react';

import { Route, Switch } from "react-router-dom";

import './App.css';

import Welcome from './Components/Welcome/Welcome';
import Clock from './Components/Clock/Clock';
import Contact from "./Components/Contact/Contact";
import Navigation from "./Components/navigation/Navigation";
import Jeopardy from "./Components/jeopardy/Jeopardy";
import NoMatch404 from "./Components/NoMatch404/nomatch404";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route 
          exact 
          path="/"
          render={(props) => <Welcome {...props} name="Tony" />}
        />
      <Route path="/clock" component={Clock} />
      <Route path="/contact" component={Contact} />
      <Route path="/jeopardy" component={Jeopardy} />
      <Route path="/Welcome/:name" component={Welcome} />
      <Route path="/NoMatch404" component={NoMatch404}/>
      </Switch>
    </div>
  );
}

export default App;


