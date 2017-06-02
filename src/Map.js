import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";


let getDate = (millis, index) => {
  let eventTime = new Date(parseInt(millis));
  return eventTime.toString();
};

const PlaceMap = ({ events, lat, lon} ) => (
  <Map center={[lat, lon]} zoom={12} style={{ height: "500px", width: "600px", position: "fixed" }}>
    <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
    {events.map((event, index) => (
      <Marker position={{lat:event.lat, lng:event.lon}} key={event.id}>
        <Popup>
          <span>
            {event.next_event.name}
            <br />
            {event.category.name}
            <br />
            {getDate(event.next_event.time, index)}
          </span>
        </Popup>
      </Marker>
    ))}
  </Map>
);

export default PlaceMap;