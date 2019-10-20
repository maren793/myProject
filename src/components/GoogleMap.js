import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
//AIzaSyCulvdVFUFu5qwUJFAvR3KO2AlcNgqRJ6o

const mapStyles = {
    width: '60%',
    height: '40%',
    
  };

class MapContainer extends React.Component {
    render () {
        return ( 
            
                <Map
                    google={this.props.google}
                    zoom={16}
                    style={mapStyles}
                    initialCenter={{ lat: 60.360685, lng: 5.360705}}
                    >
                    <Marker position={{ lat: 60.36, lng: 5.36}} />
                </Map>
            
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCulvdVFUFu5qwUJFAvR3KO2AlcNgqRJ6o'
  })(MapContainer);