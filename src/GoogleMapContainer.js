import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker, Polyline } from 'google-maps-react';
import Geocode from "react-geocode";
import markers from './MarkerData'
class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    var data = require('./AuditData.json');
    console.log(data.value.shipment);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      data: data,
      // markers: [
      //   { lat: 28.6139, lng: 77.2090 },
      //   { lat: 28.5355, lng: 77.3910 },
      //   { lat: 28.4595, lng: 77.0266 }
      // ],
      address: ''
    }
    Geocode.setApiKey("AIzaSyDa8IbCs7c-NM1Yw0eoXAqvxFJ27aQ6s58");

    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
    // Geocode To fetch address from Coordinates
    Geocode.fromLatLng(props.position.lat, props.position.lng).then(
      response => {
        const address = response.results[0].formatted_address;
        this.setState({
          address: address
        })
      },
      error => {
        console.error(error);
      }
    );
  }
  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }
  render() {
    const style = {
      width: '75vw',
      height: '80vh',
      'marginLeft': 'auto',
      'marginRight': 'auto'
    }
    const google = window.google;
    let bounds = new google.maps.LatLngBounds();
    console.log(bounds)
    return (
      <Map
        item
        xs={12}
        style={style}
        google={this.props.google}
        onClick={this.onMapClick}
        zoom={5}
        initialCenter={{ lat: 21.1458, lng: 79.0882 }}
      >
        {this.state.data.value.shipment.map(marker => (
          <Marker
            onClick={this.onMarkerClick}
            title={'Changing Colors Garage'}
            position={{ lat: marker.lat, lng: marker.lng }}
            name={'Changing Colors Garage'}
          />
        ))}

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          {this.state.address}
        </InfoWindow>
        <Polyline
          path={this.state.data.value.shipment}
          geodesic={true}
          options={{
            strokeColor: "blue",
            // strokeOpacity: 0.75,
            strokeWeight: 2.5,
            icons: [
              {
                icon: { path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW },
                offset: "0",
                repeat: "145px"
              }
            ]
          }}
        />
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDa8IbCs7c-NM1Yw0eoXAqvxFJ27aQ6s58'
})(GoogleMapsContainer)