import React, { Component } from 'react';
import Categories from './data/categories';
import axios from 'axios';

let key = '18127e6f127c14484e37b5f5b266679';

class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zip: this.props.match.params.zip,
      radius: this.props.match.params.radius,
      category: this.props.match.params.category,  
      eventList: []
    }

    this._saveQuery = this._saveQuery.bind(this);
  }

  _saveQuery = response => {
    const newState = {
      ...this.state,
      eventList: response.results
    };
    this.setState(newState);

    console.log(this.state);
  };

  componentWillMount() {
    // create url
    let url = "https://api.meetup.com/find/groups?";

    if (this.state.zip != "0") {
      url += "zip=" + this.state.zip + "&radius=" + this.state.radius;
    }
    else {
      url += "radius=" + this.state.radius
    }

    if (this.state.category != "0") {
      url += "&category=" + this.state.category;
    }
    const urlWithKey = url + "&key=" + key;
    // make axious request
    axios.get(urlWithKey).then(this._saveQuery);
  }

  render() {
    return (
      <div className="App">
        <h1>Results</h1>
      </div>
    );
  }
}

export default Results;