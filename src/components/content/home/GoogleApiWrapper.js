import React, {Component} from 'react';
import './Home.less';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%'
};

export default GoogleApiWrapper({
    apiKey: 'YOUR_GOOGLE_API_KEY_GOES_HERE'
})(MapContainer);


export class MapContainer extends Component {

    render() {
        return (
            <div className="map-container">
                <Map
                    google={this.props.google}
                    zoom={14}
                    style={mapStyles}
                    initialCenter={{
                        lat: -1.2884,
                        lng: 36.8233
                    }}
                />
            </div>

        );}}

