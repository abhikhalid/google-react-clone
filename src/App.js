import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Home from './Home';
import SearchPage from "./SearchPage";

function App() {

  return (
    //BEM
    <div className="app">

      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage/>

          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </Router>

    </div>
  );
}

export default App;
