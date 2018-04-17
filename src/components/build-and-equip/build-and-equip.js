import React from 'react';
import { Switch, Link, Redirect, HashRouter, BrowserRouter as Router, Route } from 'react-router-dom';

import Model from './model/Model.js';

class BuildEquip extends React.Component {
  componentWillMount() {
    let defaultPath = "/model/model/sprinter/year/2018";
    if(window.location.hash == "") {
      window.location.hash = defaultPath;
      window.sessionStorage.setItem("model", "sprinter");
      window.sessionStorage.setItem("year", "2018");
    }
  }
  render() {
    return (
      <HashRouter>
        <div className="container">
          <BuildProgress />
          <Switch>
            <Route path="/model/model/:modelName/year/:year" component={Model} />
            <Route path="/model/model/:modelName" component={Model} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}
// <Model url="/BYO/Build-and-equip/model" buildDetail={match.params} data={data.BYO.build_and_equip} />
class Demo extends React.Component {
  render() {
    return (
      <h1>Hello</h1>
    );
  }
}

class BuildProgress extends React.Component {
  render() {

    return (
      <div className="build-progress-bar block">
        <div className="progress-bar-block">
          <div className="build-detail">
            <div className="image">
              <img src="https://assets.mbvans.com/dist/images/sprinter/ShoppingTool_BYO.png" />
            </div>
            <div className="detail">
              <h5>sprinter</h5>
              <h6>cargo van</h6>
            </div>
          </div>
          <div className="build-progress">
          </div>
          <div className="build-name">
            1. Vehicle
          </div>
        </div>
        <div className="progress-bar-block">
          <div className="build-detail">
            <div className="image">
              <img src="https://assets.mbvans.com/dist/images/sprinter/ShoppingTool_BYO.png" />
            </div>
            <div className="detail">
              <h5>sprinter</h5>
              <h6>cargo van</h6>
            </div>
          </div>
          <div className="build-progress">
          </div>
          <div className="build-name">
            2. Color
          </div>
        </div>
        <div className="progress-bar-block">
          <div className="build-detail">
            <div className="image">
              <img src="https://assets.mbvans.com/dist/images/sprinter/ShoppingTool_BYO.png" />
            </div>
            <div className="detail">
              <h5>sprinter</h5>
              <h6>cargo van</h6>
            </div>
          </div>
          <div className="build-progress">
          </div>
          <div className="build-name">
            3. Packages
          </div>
        </div>
        <div className="progress-bar-block">
          <div className="build-detail">
            <div className="image">
              <img src="https://assets.mbvans.com/dist/images/sprinter/ShoppingTool_BYO.png" />
            </div>
            <div className="detail">
              <h5>sprinter</h5>
              <h6>cargo van</h6>
            </div>
          </div>
          <div className="build-progress">
          </div>
          <div className="build-name">
            4. Options/Accessories
          </div>
        </div>
        <div className="progress-bar-block">
          <div className="build-detail">
            <div className="image">
              <img src="https://assets.mbvans.com/dist/images/sprinter/ShoppingTool_BYO.png" />
            </div>
            <div className="detail">
              <h5>sprinter</h5>
              <h6>cargo van</h6>
            </div>
          </div>
          <div className="build-progress">
          </div>
          <div className="build-name">
            5. Summary
          </div>
        </div>
      </div>
    );
  }
}

export default BuildEquip;
