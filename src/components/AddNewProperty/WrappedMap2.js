import React, { useState, useEffect } from 'react'
import { GoogleMap, useJsApiLoader, useLoadScript, Marker, InfoWindow, Circle } from '@react-google-maps/api';
const libraries = ['places']
const mapContainerStyle = {
    width: '73vw',
    height: '100vh'
}

const options = {
    zoomControl: true
}
const options2 = {
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: 450,
    zIndex: 1
  }
function WrappedMap2({ lat, lng, id }) {

    const center = {
        lat: lat ? lat : 43.653225,
        lng: lng ? lng : -79.383186
    }

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
        libraries,
    });
    if (loadError) return "Error loading maps"
    if (!isLoaded) return "loading"
    const handleClick = (event) => {
        console.log(event.latLng.lat())
        console.log(event.latLng.lng())
        /* setMarker({
            lat:event.latLng.lat(),
            lng:event.latLng.lng(),
            time:new Date()
        }) */

    }
    return (
        <div style={{ marginRight: '5%' }}>
            <GoogleMap mapContainerStyle={mapContainerStyle} zoom={16} center={center} options={options}>
                {/* {lat&&lng?<Marker key={id} position={{lat:lat,lng:lng}} />:null} */}
                <Circle
                    // required
                    center={center}
                    // required
                    options={options2}
                />
            </GoogleMap>
        </div>
    )
}

export default WrappedMap2
