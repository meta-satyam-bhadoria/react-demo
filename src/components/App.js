import React from 'react';
import {Navbar, Header, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import { Switch, Link, BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Home from './Home';
import BYOLinks from './BYOLinks';
import data from '../data-file/data.json';
import BuildEquip from './build-and-equip/build-and-equip.js';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/"><span className="logo"><span><img src="https://assets.mbvans.com/dist/images/common/logo-wider.png"/></span></span></Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavDropdown eventKey={2} title={<span>Vehicle</span>} className="nav-items" id="Vehicle">
                  <MenuItem eventKey={2.1} href="#hello">Action</MenuItem>
                  <MenuItem eventKey={2.2}>Another action</MenuItem>
                  <MenuItem eventKey={2.3}>Something else here</MenuItem>
                </NavDropdown>
                <NavDropdown eventKey={1} title={<span>BYO</span>} className="BYO-wrap nav-items" id="BYO">
                  <BYOLinks data={data.BYO} />
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route exact path="/" component={Home} />
          <Switch>
            <Route exact path="/BYO/build-and-equip" component={BuildEquip} />
          </Switch>
        </div>
      </Router>
    );
  }
}
//<Route path="/BYO/build-and-equip" render={ ()=> <Redirect to="/BYO/build-and-equip/model/model/sprinter/year/2018" /> }  />
export default App;
