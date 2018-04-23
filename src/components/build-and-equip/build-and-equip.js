import React from 'react';
import { Switch, Link, Redirect, HashRouter, BrowserRouter as Router, Route } from 'react-router-dom';

import Model from './model/Model.js';

class BuildEquip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bodyType: window.sessionStorage.getItem("bodyType")
    }
    this.handle = this.handle.bind(this);
  }
  componentWillMount() {
    let defaultPath = "/model/model/sprinter/year/2018";
    if(window.location.hash == "") {
      window.location.hash = defaultPath;
      window.sessionStorage.setItem("model", "sprinter");
      window.sessionStorage.setItem("year", "2018");
    }
  }
  handle() {
    console.log("equip");
    if(window.sessionStorage.getItem("bodyType") != null) {
      this.setState({
        bodyType: window.sessionStorage.getItem("bodyType")
      });
    }

  }
  render() {
    return (
      <HashRouter>
        <div className="container">
          <BuildProgress check={this.state.bodyType}/>
          <Switch>
            <Route exact path="/model/model/:modelName/bodyType/:bodyType/year/:year" render={({match})=> <Model action={this.handle} match={match}/>}/>
            <Route exact path="/model/model/:modelName/year/:year" component={Model}/>
            <Route exact path="/model/model/:modelName/year" render={()=> <Redirect to="year/2018"/> } />
            <Route path="/model/model/:modelName" component={Model}/>
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

// <Model url="/BYO/Build-and-equip/model" buildDetail={match.params} data={data.BYO.build_and_equip} />

class BuildProgress extends React.Component {
  render() {
    let bodytype;
    let isSafe = false;
    console.log("called public");
    console.log((this.props.check));
    if(window.sessionStorage.getItem("bodyType") != null){
      console.log("hi");
      bodytype = JSON.parse(window.sessionStorage.getItem("bodyType"));
      isSafe = true;
    }
    return (
      <div className="build-progress-bar block">
        <div className="progress-bar-block">
          <div className="build-detail">
            <div className="image">
              <img src={bodytype.pic} />
            </div>
            <div className="detail">
              <h5>{bodytype.year + "  " + bodytype.title}</h5>
              <h6>{bodytype.name}</h6>
              <h5>{bodytype.price}</h5>
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
