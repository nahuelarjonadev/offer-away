import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Purchase from '../containers/Purchase';
import Home from '../containers/Home';
import Header from '../containers/Header';
import Footer from '../components/Footer';
import NotFound from '../components/NotFound';
import Business from '../containers/Business';


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/home' exact component={Home} />
        <Route path='/purchase' component={Purchase} />
        <Route path='/business' component={Business} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;