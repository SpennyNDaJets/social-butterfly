import React, { Component } from 'react';
import Categories from './data/categories';
import axios from 'axios';
import Map from './Map';
//import gcal from 'google-calendar';

// access key for MeetUp
let key = '18127e6f127c14484e37b5f5b266679';

// create Google Calendar object for user
//var google_calendar = new gcal.GoogleCalendar(localStorage.userData);

let getDate = millis => {
  let eventTime = new Date(parseInt(millis));
  return eventTime.toString();
};

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
    this.addToCalendar = this.addToCalendar.bind(this);
  }

  _saveQuery = response => {
    // filter out events without time
    let newEventList = response.data.filter(event => {
      return (event.next_event != null)
    });

    const newState = {
      ...this.state,
      eventList: newEventList
    };

    this.setState(newState);
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

  addToCalendar(index) {
    console.log(localStorage.userData);
  }

  render() {

    return (
      <div className="App">
        <div className="App-body">

          <div className="list__container">
            {this.state.eventList.length == 0 &&
              <div className="place-list__header">There are no events</div>}
            {this.state.eventList.length != 0 &&
            <div className="place-list__header">Events</div>}
            <ul className="place-list">
              {this.state.eventList.map((event, index) => {
                return (
                  <li key={event.id} className="place-list__item">
                    <div>
                      <div className="place-list__info">
                        {event.key_photo != null &&
                          <img className="thumbImg"
                            src={event.key_photo.thumb_link}
                            alt={event.name + "Image"} />
                        }
                        <div>
                          <div className="place-list__item-name">
                            {event.next_event.name}
                          </div>
                          <div className="place-list__item-time">
                            {getDate(event.next_event.time)}
                          </div>
                          <div className="place-list__category">
                            Catagory: {event.category.name}
                          </div>
                        </div>
                      </div>
                      <button className='button'
                        onClick={(e) => this.addToCalendar(index)}>
                        Add to Google Calendar
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          {this.state.eventList.length != 0 &&
            <div style={{ flex: 1 }}>
              <Map events={this.state.eventList} lat={this.state.eventList[0].lat} lon={this.state.eventList[0].lon} />
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Results;