import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Categories from './data/categories';

let createSearchUrl = (zip, radius, category) => {
    let urlString = "";
    // add zip, default is 0
    if (zip != ""){
      urlString += "/" + zip;
    }
    else  {
      urlString += "/0"
    }

    // add radius, default is 50
    if (radius != ""){
      urlString += "/" + radius;
    }
    else {
      urlString += "/50";
    }

    //add category, default is 0
    if (category != ""){
      urlString += "/" + category;
    }
    else {
      urlString += "/0";
    }
    return urlString;
  };

class InputForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      zip: "",
      radius: "",
      category: ""
    }

    this.updateInputChange = this.updateInputChange.bind(this);
  }

  updateInputChange(input, event) {
    let value = event.target.value;

    this.setState({
      ...this.state,
      [input]: value
    });
  }

  render() {
    let searchUrl = createSearchUrl(this.state.zip, this.state.radius, this.state.category);

    return (
      <form className="searchForm">
        <div className="inputForm">
        <div className='inputField'>
          <h3 className="inputLabel">Location: </h3>
          <input
            id="location"
            placeholder="Enter ZIP code"
            type="text"
            autoComplete="off"
            value={this.state.zip}
            onChange={e => this.updateInputChange("zip", e)}
          />
        </div>
        <div className='inputField'>
          <h3 className="inputLabel">Distance: </h3>
          <input
            id="radius"
            placeholder="Enter Radius in miles"
            type="text"
            autoComplete="off"
            value={this.state.radius}
            onChange={e => this.updateInputChange("radius", e)}
          />
        </div>
        <div className='inputField'>
          <h3 className="inputLabel">Activity: </h3>
          <input
            id="activity"
            placeholder="Pick Activity"
            type="text"
            autoComplete="off"
            value={this.state.category}
            onChange={e => this.updateInputChange("category", e)}
          />
        </div>
        </div>
      <Link
        className='button'
        to={'/results' + searchUrl}>
        Search
          </Link>
      </form >
    );
  }
}

class Home extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">Social Butterfly</h1>
        <h3 className="tagline">Discover Local Events</h3>
        <InputForm id="searchParams" />
      </div>
    );
  }
}

export default Home;