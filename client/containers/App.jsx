import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Purchase from '../containers/Purchase';
import Home from '../containers/Home'

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/purchase" component={Purchase} />
    </Router>
  );
}

export default App;