import React from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MainNavigation from "./MainNavigation"
import Home from '../pages/Home';
import About from "../pages/About";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Route path="/" component={MainNavigation} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
};

export default AppRouter;

