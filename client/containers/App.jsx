import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Purchase from '../containers/Purchase';
import Home from '../containers/Home';
import Header from '../containers/Header';
import Footer from '../components/Footer';
import NotFound from '../components/NotFound';


function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/purchase" component={Purchase} />
      <Route component={NotFound} />
      <Footer />
    </Router>
  );
}

export default App;