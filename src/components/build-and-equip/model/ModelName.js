import React from 'react';
import { Switch, Link, BrowserRouter as Router, Route } from 'react-router-dom';

export class ModelNameOption extends React.Component {
  render() {
    return (
      <div className="model-name">
        <div className="container">
          <div className="heading">
            <h2>Select a Vehicle for Your Build</h2>
          </div>
          <div className="model-section">
            {this.props.models}
          </div>
        </div>
      </div>
    );
  }
}

export class ModelName extends React.Component {
  render() {
    return (
      <section className={"model col-xs-6 " + this.props.cls}>
        <Link to={"/model/model/"+this.props.modelName}>{this.props.modelName}</Link>
      </section>
    );
  }
}
