import React, { Component } from "react";
import SearchLocation from "./SearchLocation";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%",
};

export class MapContainer extends Component {
  render() {
    const { currentLocationDetails } = this.props;
    console.log(currentLocationDetails);

    return (
      <div>
        <SearchLocation />
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: currentLocationDetails.latitude,
            lng: currentLocationDetails.longitude,
          }}
          center={{
            lat: currentLocationDetails.latitude,
            lng: currentLocationDetails.longitude,
          }}
        >
          <Marker onClick={this.onMarkerClick} name={"This is test name"} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "NONE",
})(MapContainer);
