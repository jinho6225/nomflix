import React from "react";
import {   HashRouter as Router, Link } from "react-router-dom";
export default () => (
  <header>
    <Router>    
        <ul>
            <li>
                <Link to="/">Movies</Link>
            </li>
            <li>
                <Link to="/tv">TV</Link>
            </li>
            <li>
                <Link to="/search">Search</Link>
            </li>
        </ul>
    </Router>

  </header>
);
