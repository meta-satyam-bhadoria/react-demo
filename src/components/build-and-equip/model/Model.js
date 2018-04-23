import React from 'react';
import { Switch, Link, BrowserRouter as Router, Route } from 'react-router-dom';

import fileData from '../../../data-file/data.json';
import {ModelName, ModelNameOption} from './ModelName.js';
import {ModelYearOption} from './ModelYear.js';

class Model extends React.Component {
  render() {
    let data = fileData.BYO.build_and_equip;
    window.sessionStorage.setItem("model", this.props.match.params.modelName);
    if(this.props.match.params.year) {
      window.sessionStorage.setItem("year", this.props.match.params.year);

    } else if(window.sessionStorage.getItem("year") == null && data.model[this.props.match.params.modelName] !== undefined) {
      let year = Object.keys(data.model[this.props.match.params.modelName].year).sort().pop();
      window.sessionStorage.setItem("year", year);
    }

    if(this.props.match.params.bodyType && window.sessionStorage.getItem("bodyType") == null) {
      window.sessionStorage.setItem("bodyType", JSON.stringify({"model": this.props.match.params.bodyType}));
    } else if(!this.props.match.params.bodyType) {
      window.sessionStorage.removeItem("bodyType");
    }
    // console.log("action log");
    // console.log(this.props.action);
    return (
      <div>
        <ModelBuild data={data} action={this.props.action}/>
      </div>
    );
  }
}

class ModelBuild extends React.Component {
  render() {
    let data, build, modelName, vehicleWithYear, modelYear = {}, modelVehicle = {};
    if(this.props.data) {
      data = this.props.data;
      let isModelAvailable = false;
      modelName = Object.keys(data.model).map((model, i) => {
        if(model == window.sessionStorage.getItem("model")) {
          isModelAvailable = true;
        }
        return (
         <ModelName action={this.props.action} key={i} url={this.props.url + "/model/"+model} modelName={model} cls={model == window.sessionStorage.getItem("model") ? "selected" : ""} />
        );
      });

      if(isModelAvailable) {
        // console.log(data.model[window.sessionStorage.getItem("model")]);
        modelYear = data.model[window.sessionStorage.getItem("model")].year;
        modelVehicle = data.model[window.sessionStorage.getItem("model")].model;
      }
    }
    return (
        <div>
          <ModelNameOption models={modelName} />
          <ModelYearOption action={this.props.action} year={modelYear} buildYear={window.sessionStorage.getItem("year")?window.sessionStorage.getItem("year"):""} vehicle={modelVehicle}/>
        </div>
    );
  }
}

export default Model;
