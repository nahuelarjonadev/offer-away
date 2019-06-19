import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Purchase from '../containers/Purchase';
import Home from '../containers/Home'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/purchase">Purchase</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/purchase" component={Purchase} />
      </div>
    </Router>
  );
}

export default App;