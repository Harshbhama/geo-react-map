import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker, Polyline } from 'google-maps-react';
import Geocode from "react-geocode";
import markers from './MarkerData'
class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    var data = require('./AuditData.json');
    //console.log(data.value.shipment);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      data: data,
      testData: [],
      // markers: [
      //   { lat: 28.7041, lng: 77.1025 }, // Delhi
      //   { lat: 28.7306, lng: 77.7759 }, // Hapur
      //   { lat: 28.4595, lng: 77.0266 }, //Gurugram
      //   { lat: 28.6692, lng: 77.4538 } // Ghaziabad
      //   { lat: 28.4089, lng: 77.3178 } // Faridabad
      // ],

      marker: [
        { lat: 28.7041, lng: 77.1025 }, // Delhi
        { lat: 28.7306, lng: 77.7759 }, // Hapur
        { lat: 28.4595, lng: 77.0266 }, //Gurugram
        { lat: 28.4089, lng: 77.3178 }, // faridabad
        { lat: 28.4215, lng: 78.0195 }, // Bulandsher
      ],
      // marker1: [
      //   { lat: 28.7041, lng: 77.1025 }, // Delhi
      //   { lat: 28.7306, lng: 77.7759 }, // Hapur
      // ],
      // marker2: [
      //   { lat: 28.7041, lng: 77.1025 }, // Delhi
      //   { lat: 28.4595, lng: 77.0266 }, //Gurugram
      // ],
      // demo_marker: [
      //   { name: 1 },
      //   { name: 2 }
      // ],
      demo_marker1: [],
      // demo1_marker: [
      //   marker1 = [
      //     { lat: 28.7041, lng: 77.1025 }, // Delhi
      //     { lat: 28.7306, lng: 77.7759 }, // Hapur
      //   ],
      //   marker2 = [
      //     { lat: 28.7041, lng: 77.1025 }, // Delhi
      //     { lat: 28.4595, lng: 77.0266 }, //Gurugram
      //   ],
        
      // ],

      // new_markers: [
      //   { lat: 28.6139, lng: 77.2090 }, //Delhi
      //   { lat: 28.7306, lng: 77.7759 }, // hapur
      //   { lat: 28.6139, lng: 77.2090 }, //Delhi
      //   { lat: 28.4595, lng: 77.0266 }, //Gurugram
      //   { lat: 28.7306, lng: 77.7759 }, // Hapur
      //   { lat: 28.7306, lng: 77.7759 }, // Gurugram
      //   { lat: 28.7306, lng: 77.7759 }, // Hapur
      //   { lat: 28.6692, lng: 77.4538 } //Ghaziabad
      //  { lat: 28.4089, lng: 77.3178 } // Faridabad
      // ],
      address: ''
    }

    let initData = {}
    let newData = []
    let i = 0;
    let company;
    Geocode.setApiKey("x");

    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }

  componentWillMount() {
    //this.getData()
    const abc = this
    let marker1 =  [
      { lat: 28.7041, lng: 77.1025 }, // Delhi
      { lat: 28.7306, lng: 77.7759 }, // Hapur
    ]
    let marker2 = [
      { lat: 28.7041, lng: 77.1025 }, // Delhi
      { lat: 28.4595, lng: 77.0266 }, //Gurugram
    ]
    let marker3 = [
      { lat: 28.7306, lng: 77.7759 }, // Hapur
      { lat: 28.4089, lng: 77.3178 }, // faridabad
    ]
    let marker4 = [
      { lat: 28.7306, lng: 77.7759 }, // Hapur
      { lat: 28.4215, lng: 78.0195 }, // Bulandsher
    ]
    let demo_marker1 = [marker1, marker2, marker3, marker4]
    console.log(demo_marker1)
    abc.setState({
      demo_marker1: demo_marker1
    })
  }

  getData() {
    // const abc = this
    // let initData = {}
    // let newData = []
    // let i = 0;
    // let company;
    // let k;
    // this.state.data.value.shipment.forEach(function (a, index) {
    //   let array = { ...initData }
    //   let p = {}
    //   debugger
    //   if (index + 2 < abc.state.data.value.shipment.length) {

    //     if (abc.state.data.value.shipment[index].seller_company_type_name === abc.state.data.value.shipment[index + 1].seller_company_type_name || abc.state.data.value.shipment[index].seller_company_type_name === abc.state.data.value.shipment[index + 2].seller_company_type_name) {
    //       array = { lat: abc.state.data.value.shipment[index - 1].lat, lng: abc.state.data.value.shipment[index - 1].lng }
    //       p = array
    //       newData[i++] = array
    //       company = abc.state.data.value.shipment[index].seller_company_type_name
    //     }


    //     if (abc.state.data.value.shipment[index].seller_company_type_name === company) {
    //       array = { lat: abc.state.data.value.shipment[index].lat, lng: abc.state.data.value.shipment[index].lng }
    //       newData[i++] = array
    //       newData[i++] = p
    //       index++
    //     }
    //   }
    //   array = { lat: abc.state.data.value.shipment[index].lat, lng: abc.state.data.value.shipment[index].lng }
    //   newData[i++] = array
    // })

    // console.log(newData)
    // abc.setState({
    //   testData: newData
    // })


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
    console.log(this.state.demo_marker1)
    return (
      <Map
        item
        xs={12}
        style={style}
        google={this.props.google}
        onClick={this.onMapClick}
        zoom={10}
        initialCenter={{ lat: 28.6139, lng: 77.2090 }}
      >
        {this.state.marker.map(marker => (
          <Marker
            onClick={this.onMarkerClick}
            title={'Changing Colors Garage'}
            position={{ lat: marker.lat, lng: marker.lng }}
            name={'Changing Colors Garage'}
          />
        ))}

        {/* {this.state.markers.map(marker => (
          <Marker
            onClick={this.onMarkerClick}
            title={'Changing Colors Garage'}
            position={{ lat: marker.lat, lng: marker.lng }}
            name={'Changing Colors Garage'}
          />
        ))} */}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          {this.state.address}
        </InfoWindow>
        {console.log(this.state.data.value.shipment)}

        {this.state.demo_marker1.map((marker, index) => (
          <Polyline
            path={marker}
            geodesic={true}
            options={{
              strokeColor: "blue",
              // strokeOpacity: 0.75,
              strokeWeight: 2.5,
              icons: [
                {
                  icon: { path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW },
                  offset: "0",
                  repeat: "130px"
                }
              ]
            }}
          />
        ))}

        {/* <Polyline
          path={this.state.marker2}
          geodesic={true}
          options={{
            strokeColor: "blue",
            // strokeOpacity: 0.75,
            strokeWeight: 2.5,
            icons: [
              {
                icon: { path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW },
                offset: "0",
                repeat: "130px"
              }
            ]
          }}
        /> */}

      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: 'x'
})(GoogleMapsContainer)