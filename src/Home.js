import React, { Component } from 'react';
    
class InputForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      zip: "",
      radius: "",
      category: ""
    }

    this.updateInputChange = this.updateInputChange.bind(this);
    this.searchEvent = this.searchEvent.bind(this);
  }

  searchEvent(event) {
    console.log(this.state.zip);
    console.log(this.state.radius);
    console.log(this.state.category);
  }

  updateInputChange(input, event) {
    let value = event.target.value;

    this.setState({
      ...this.state,
      [input]: value
    });
  }

  render() {
    return (
      <form className="searchForm" onSubmit={this.searchEvent}>
        <label className="searchLabel">
          Search Events
        </label>
        <h3 className="inputLabel">Location: </h3>
        <input
          id="location"
          placeholder="Enter ZIP code"
          type="text"
          autoComplete="off"
          value={this.state.zip}
          onChange={e => this.updateInputChange("zip", e)}
        />
        <h3 className="inputLabel">Distance: </h3>
        <input
          id="radius"
          placeholder="Enter Radius in miles"
          type="text"
          autoComplete="off"
          value={this.state.radius}
          onChange={e => this.updateInputChange("radius", e)}
        />
        <h3 className="inputLabel">Activity: </h3>
        <input
          id="activity"
          placeholder="Pick Activity"
          type="text"
          autoComplete="off"
          value={this.state.category}
          onChange={e => this.updateInputChange("category", e)}
        />
        <button
          className='button'
				  type='submit'
				  disabled={!this.state.zip}>
        >
          Search
        </button>
      </form>
    );
  }
}

class Home extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">Social Butterfly</h1>
        <h3 className="tagline">Discover Local Events</h3>
        <InputForm id="searchParams"/>
      </div>
    );
  }
}

export default Home;