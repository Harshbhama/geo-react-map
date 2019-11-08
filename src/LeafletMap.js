import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Polyline } from 'react-leaflet';
import styles from './App.css'
import L from "leaflet";
import "leaflet-polylinedecorator";
class Map extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            marker: [
                { lat: 28.7041, lng: 77.1025 }, // Delhi
                { lat: 28.7306, lng: 77.7759 }, // Hapur
                { lat: 28.4595, lng: 77.0266 }, //Gurugram
                { lat: 28.4089, lng: 77.3178 }, // faridabad
                { lat: 28.4215, lng: 78.0195 }, // Bulandsher
              ],
              demo_marker: [
                [
                  [  28.7041,77.1025],
                  [  28.7306, 77.7759 ]
                ],
                [
                  [  28.7041,77.1025],
                  [  28.4595, 77.0266 ]
                ]
            
              ]
        }
    }
  render() {
    return (
      <LeafletMap
    
        center={[28.7041, 77.1025]}
        zoom={4}
        maxZoom={10}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        {/* <Marker position={[28.7041, 77.1025]}>
          <Popup>
            Popup for any custom information.
          </Popup>
        </Marker> */}

        {this.state.marker.map(marker => (
          <Marker
     
            position={{ lat: marker.lat, lng: marker.lng }}
          />
        ))}
  
          <Polyline positions={this.state.demo_marker} color={'red'} 
          
          arrow={{
            offset: "100%",
            repeat: 0,
            symbol: L.Symbol.arrowHead({
              pixelSize: 15,
              polygon: false,
              pathOptions: { stroke: true }
            })
          }}
          />
      </LeafletMap>
    );
  }
}

export default Map