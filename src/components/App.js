import React from 'react';
import { Switch, Link, BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Home from './Home';
import BYOOption from './navbar-BYO-option.js';
import data from './data.json';
import BuildEquip from './build-and-equip.js';

const App = () => (
  <Router>
    <div>
      <div className="header">
        <div className="container">
          <nav className="top-navbar">
            <ul className="block">
              <li className="nav-item logo">
                <Link to='/' className="link-wrap">
                  <span className="link">
                    <img className="img" src="https://assets.mbvans.com/dist/images/common/logo-wider.png"/>
                  </span>
                </Link>
              </li>
              <li className="nav-item BYO">
                <div className="link-wrap">
                  <span className="link">Dropdown</span>
                </div>
                <div className="nav-link-content">
                  <div className="container">
                    <BYOOption data={data.BYO} />
                  </div>
                </div>
              </li>
              <li className="nav-item BYO">
                <div className="link-wrap">
                  <span className="link">Dropdown</span>
                </div>
                <div className="nav-link-content">

                </div>
              </li>
              <li className="nav-item BYO">
                <div className="link-wrap">
                  <span className="link">Dropdown</span>
                </div>
                <div className="nav-link-content">

                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>


      <Route exact path="/" component={Home} />
      <Route exact path="/BYO/build-and-equip" component={BuildEquip}  />
    </div>
  </Router>
);

export default App;
