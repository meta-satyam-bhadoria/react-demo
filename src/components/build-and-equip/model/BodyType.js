import React from 'react';
import { Switch, Link, BrowserRouter as Router, Route } from 'react-router-dom';

export class BodyTypes extends React.Component {
  render() {
    return (
      <div className="body-types text-center">
        <div className="">
          {this.props.bodyType}
        </div>
      </div>
    );
  }
}

export class BodyType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.fetchBodyTypeEquip = this.fetchBodyTypeEquip.bind(this);
  }
  fetchBodyTypeEquip(e) {
    console.log("called private");
    var elements = document.querySelectorAll('.' + e.currentTarget.classList[0]);
    [].forEach.call(elements, function(element) {
      element.classList.remove("selected");
      element.classList.add("body-type-blur");
    });
    e.currentTarget.classList.add('selected');

    let url = "/model/model/" + window.sessionStorage.getItem("model") + e.currentTarget.dataset.url + "/year/" + window.sessionStorage.getItem("year");
    window.location.hash = url;

    let bodyTypeData = this.props.bodytype[e.currentTarget.dataset.name];
    let bodydata = {
      "model": e.currentTarget.dataset.name,
      "pic": bodyTypeData.pic,
      "price": bodyTypeData.price.year[window.sessionStorage.getItem("year")],
      "year": window.sessionStorage.getItem("year"),
      "title": bodyTypeData.title,
      "name": bodyTypeData.name
    };
    console.log(window.sessionStorage.getItem("bodyType"));
    window.sessionStorage.setItem("bodyType", JSON.stringify(bodydata));
  }
  render() {
    let bodytype;
    if(this.props.bodytype) {
      bodytype = this.props.bodytype[this.props.bodytypeName];
    }
    return (
      <div className="inline">
        <div className="body-type" onClick={this.fetchBodyTypeEquip} data-name={this.props.bodytypeName} data-model={window.sessionStorage.getItem("model")} data-url={"/bodyType/" + this.props.bodytypeName}>
          <div className="image"><img src={bodytype.pic} alt={bodytype.name}/></div>
          <div className="title">{bodytype.title}</div>
          <div className="name">{bodytype.name}</div>
          <div className="price"><span>Starting at: </span>{bodytype.price.year[window.sessionStorage.getItem("year")]}*</div>
        </div>
      </div>
    );
  }
}
