import React from 'react';
import { Switch, Link, BrowserRouter as Router, Route } from 'react-router-dom';

import data from '../../../data-file/data.json';

class Model extends React.Component {
  componentWillMount() {
    console.log(window.sessionStorage.getItem("model"));
    console.log(window.sessionStorage.getItem("year"));
    if(window.sessionStorage.getItem("model") != this.props.match.params.modelName) {
      window.sessionStorage.setItem("model", this.props.match.params.modelName);
    }
    if(this.props.match.params.year && window.sessionStorage.getItem("year") != this.props.match.params.year) {
      window.sessionStorage.setItem("year", this.props.match.params.year);
    }
    console.log(window.sessionStorage.getItem("model"));
    console.log(window.sessionStorage.getItem("year"));
  }
  render() {
    return (
      <div>
        <ModelBuild data={data.BYO.build_and_equip} />
      </div>
    );
  }
}

class ModelBuild extends React.Component {

  render() {
    let data, build, modelName, vehicleWithYear, model;
    if(this.props.data) {
      data = this.props.data;

      modelName = Object.keys(data.model).map((model, i) => {
        return (
         <ModelName key={i} url={this.props.url + "/model/"+model} modelName={model} cls={model == window.sessionStorage.getItem("model") ? "selected" : ""} />
        );
      });

      model = data.model[window.sessionStorage.getItem("model")];
    }
    return (
      <div>
        <ModelNameOption models={modelName} />
        <ModelYearOption year={model.year} buildYear={window.sessionStorage.getItem("year")} vehicle={model.model}/>
      </div>
    );
  }
}

class ModelNameOption extends React.Component {
  render() {
    return (
      <div className="model-name">
        <div className="container">
          <div className="model-section">
            {this.props.models}
          </div>
        </div>
      </div>
    );
  }
}

class ModelName extends React.Component {
  render() {
    return (
      <section className={"model " + this.props.cls}>
        <Link to={"/model/model/"+this.props.modelName}>{this.props.modelName}</Link>
      </section>
    );
  }
}

class ModelYearOption extends React.Component {
  render() {
    let modelYear = Object.keys(this.props.year).map((year, i) => {
      return (
       <ModelYear key={i} modelYear={year} cls={year == this.props.buildYear ? "selected" : ""} />
      );
    });

    let vehicles = Object.values(this.props.year[this.props.buildYear]).map((vehicle, i) => {
      return (
       <Vehicle key={i} name={this.props.vehicle[vehicle].name} title={this.props.vehicle[vehicle].title} price={this.props.vehicle[vehicle].price.year[this.props.buildYear]} />
      );
    });
    return (
      <div className="model-year">
        <div className="container">
          <div className="model-section">
            {modelYear}
          </div>
          <VehicleList vehicle={vehicles} />
        </div>
      </div>
    );
  }
}

class ModelYear extends React.Component {
  render() {
    return (
      <section className={"model " + this.props.cls}>
        {this.props.modelYear}
      </section>
    );
  }
}

class VehicleList extends React.Component {
  render() {
    return (
      <div className="vehicles">
        <div className="">
          {this.props.vehicle}
        </div>
      </div>
    );
  }
}

class Vehicle extends React.Component {
  render() {
    return (
      <div className="vehicle">
        <div>{this.props.title}</div>
        <div>{this.props.name}</div>
        <div>{this.props.price}</div>
      </div>
    );
  }
}

export default Model;
