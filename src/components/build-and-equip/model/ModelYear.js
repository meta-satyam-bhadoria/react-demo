import React from 'react';
import { Switch, Link, BrowserRouter as Router, Route } from 'react-router-dom';

import {BodyType, BodyTypes} from './BodyType.js';

export class ModelYearOption extends React.Component {
  render() {
    let modelYear = Object.keys(this.props.year).map((year, i) => {
      return (
       <ModelYear action={this.props.action}key={i} modelYear={year} cls={year == this.props.buildYear ? "selected" : ""} />
      );
    });

    let bodyType;
    if(this.props.year[this.props.buildYear] != undefined) {
      bodyType = Object.values(this.props.year[this.props.buildYear]).map((vehicle, i) => {
        // console.log(this.props.vehicle);
        return (
         <BodyType action={this.props.action} key={i} bodytype={this.props.vehicle} bodytypeName={vehicle} />
        );
      });
    }
    return (
      <div className="model-year">
        <div className="container">
          <div className="model-section">
            {modelYear}
          </div>
          <BodyTypes bodyType={bodyType} />
        </div>
      </div>
    );
  }
}

class ModelYear extends React.Component {
  render() {
    return (
      <section className={"model col-xs-6 " + this.props.cls}>
        <Link to={"/model/model/"+window.sessionStorage.getItem("model")+"/year/"+this.props.modelYear}>{this.props.modelYear}</Link>
      </section>
    );
  }
}
