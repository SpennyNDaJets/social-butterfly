import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categories from '../Assets/data/categories';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

let createSearchUrl = (zip, radius, category) => {
  let urlString = "";
  // add zip, default is 0
  if (zip != "") {
    urlString += "/" + zip;
  }
  else {
    urlString += "/0"
  }
  
  urlString += "/" + radius + "/" + category;

  return urlString;
};

class InputForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      zip: "",
      radius: "5",
      category: "0",
      searchUrl: ""
    }
  }

  updateInputChange = (input, event) => {
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
            <select
              name="radius"
              value={this.state.radius}
              onChange={e => this.updateInputChange("radius", e)}
            >
              <option value="5">5 miles</option>
              <option value="10">10 miles</option>
              <option value="25">25 miles</option>
              <option value="50">50 miles</option>
              <option value="100">100 miles</option>
              <option value="250">250 miles</option>
            </select>
          </div>
          <div className='inputField'>
            <h3 className="inputLabel">Activity: </h3>
            <select
              name="activities"
              value={this.state.category}
              onChange={e => this.updateInputChange('category', e)}
            >
              <option value="0">All Categories</option>
              {Categories.map( category => {
                return (
                  <option value={category.id}>{category.shortname}</option>
                );
              })}
            </select>
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