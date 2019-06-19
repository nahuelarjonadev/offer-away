import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Purchase from '../containers/Purchase';
import Home from '../containers/Home';
import Header from '../containers/Header';
import Footer from '../components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/purchase" component={Purchase} />
      <Footer />
    </Router>
  );
}

export default App;