import React from 'react';
import { Switch, Link, BrowserRouter as Router, Route } from 'react-router-dom';


class BuildEquip extends React.Component {
  render() {
    return (
      <div className="container">
        <BuildProgress />
        <Link to={`${match.url}/model/sprinter`}>click</Link>
        <Route path={`${match.url}/model/sprinter`} component={Demo} />
      </div>
    );
  }
}

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
      <div className="build-progress-bar">
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
