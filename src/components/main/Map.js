import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class Mapa extends Component {
	render() {
		return (
			<div>
				<Map google={this.props.google}
					initialCenter={{
						lat: -1.944880,
						lng: 30.062380
					}}
					zoom={15}
					style={{ height: '700px' }}
				>

					<Marker onClick={this.onMarkerClick}
						name={'Current location'} />

					<InfoWindow onClose={this.onInfoWindowClose}>
						{/* <div>
							<h1>{this.state.selectedPlace.name}</h1>
						</div> */}
					</InfoWindow>
				</Map>
			</div>
		)
	}
}

export default GoogleApiWrapper({
	apiKey: ("AIzaSyDTmoyCqt5NJNpOfi0hkWenkcZ6HVGOipg")
})(Mapa)        