import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";


const PlaceMap = ({ events, lat, lon} ) => (
  <Map center={[lat, lon]} zoom={14} style={{ height: "800px" }}>
    <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
    {events.map(event => (
      <Marker position={{lat:event.lat, lng:event.lon}} key={event.id}>
        <Popup>
          <span>
            {event.name}
            <br />
            {event.category.name}
          </span>
        </Popup>
      </Marker>
    ))}
  </Map>
);

export default PlaceMap;