import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import PurchaseModal from '../containers/PurcasheModal';
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
              <Link to="/img">Img 1</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/img" component={PurchaseModal} />
      </div>
    </Router>
  );
}

export default App;