import React, { Component } from 'react';
import logo from './logo.svg';
import GoogleMapReact from 'google-map-react';
import GoogleMapContainer from './GoogleMapContainer';
import GoogleMapContainer1 from './GoogleMapContainer1';
import ReactChart from './ReactChart'
import LeafletMap from './LeafletMap'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class App extends Component {
  static defaultProps = {
    center: {
      lat: 28.70,
      lng: 77.10
    },
    zoom: 11
  };
  render() {
    
    // return (
    //   <div>
    //     <h1>Geo location</h1>
    //     <div style={{ height: '100vh', width: '100%' }}>
    //       <GoogleMapReact
    //         bootstrapURLKeys={{ key: 'AIzaSyDa8IbCs7c-NM1Yw0eoXAqvxFJ27aQ6s58' }}
    //         defaultCenter={this.props.center}
    //         defaultZoom={this.props.zoom}
    //       >

    //         <AnyReactComponent
    //           lat={28.7041}
    //           lng={77.1025}
    //           text="My Marker"
    //         />
    //         <AnyReactComponent
    //           lat={40.7041}
    //           lng={80.1025}
    //           text="New Marker"
    //         />
    //       </GoogleMapReact>
    //     </div>
    //   </div>
    // );
    return (
      <LeafletMap />
    );
  }
}

export default App;




