import React, { useState, useEffect } from 'react'
import { GoogleMap, useJsApiLoader, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';

function WrappedMap({ marker, setMarker, defaultlatitude, defaultlongitude,setDefaultlatitude,setDefaultlongitude }) {
    useEffect(() => {
        console.log("Map rendered")

    }, []);
    const libraries = ['places']
    const mapContainerStyle = {
        width: '80vw',
        height: '100vh'
    }

    const options = {
        zoomControl: true
    } 
    var center = {
        lat: defaultlatitude ? defaultlatitude : 43.653225,
        lng: defaultlongitude ? defaultlongitude : -79.383186
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
        setMarker({
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
            time: new Date()
        })
        center.lat = event.latLng.lat()
        center.lng = event.latLng.lng()
        setDefaultlatitude(event.latLng.lat())
        setDefaultlongitude(event.latLng.lng())

    }
    
    return (
        <div style={{ marginRight: '5%' }}>
            <GoogleMap mapContainerStyle={mapContainerStyle} zoom={8} center={center} options={options} onClick={handleClick}>
                {marker ? <Marker key={marker.time.toISOString()} position={{ lat: marker.lat, lng: marker.lng }} /> : null}
            </GoogleMap>
        </div>
    )
}

export default WrappedMap
