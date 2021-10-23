import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { getCoinsMarket } from "./services/api";
import Home from "./pages/home/home";
import Details from "./pages/details/details";
import FourZeroFour from "./pages/fourZeroFour/fourZeroFour";
import Header from "./components/header/header";

function App() {


  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/details">
            <Details />
          </Route>
          <Route>
            <FourZeroFour />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
