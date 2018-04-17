import React from 'react';
import { Switch, Link, BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Home from './Home';
import BYOLinks from './BYOLinks';
import data from '../data-file/data.json';
import BuildEquip from './build-and-equip/build-and-equip.js';

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
                    <BYOLinks data={data.BYO} />
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
      <Switch>
        <Route exact path="/BYO/build-and-equip" component={BuildEquip} />
      </Switch>
    </div>
  </Router>
);
//<Route path="/BYO/build-and-equip" render={ ()=> <Redirect to="/BYO/build-and-equip/model/model/sprinter/year/2018" /> }  />
export default App;
