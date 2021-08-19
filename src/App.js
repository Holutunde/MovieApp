import React from "react";
import Home from "./Home";
import MovieDetail from "./components/MovieDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path="/movies/:id" component={MovieDetail} />
      </Switch>
    </Router>
  );
};

export default App;

