import React, {Component} from 'react';
import { Switch, Link, BrowserRouter as Router, Route } from 'react-router-dom';
import {MenuItem} from 'react-bootstrap';

class BYOLinks extends React.Component{
  render() {
    let dataItems;
    if(this.props.data) {
      dataItems = Object.values(this.props.data).map((BYO, i) => {
        return (
          <BYOOptions key={i} num={i} heading={BYO.title} source={BYO.pic} link={BYO.link} />
        );
      });
    }
    return (
      <div className="container">
        {dataItems}
      </div>
    );
  }
}

class BYOOptions extends React.Component {
  render() {
    return (
      <MenuItem className="hellobuddy" href={"/BYO/"+this.props.link}>
        <h4>{this.props.heading}</h4>
        <figure>
          <img src={this.props.source} />
        </figure>
      </MenuItem>
    );
  }
}

export default BYOLinks;
