import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Details from '../pages/Details';

function Routes() {
  return (
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/home" exact component={Home} />
      <Route path="/details/:id" exact component={Details} />
    </Router>
  );
};

export default Routes;