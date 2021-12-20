import React,{useState,useEffect} from 'react'
import { GoogleMap, useJsApiLoader, useLoadScript,Marker,InfoWindow } from '@react-google-maps/api';
const libraries=['places']
const mapContainerStyle={
    width:'80vw',
    height:'100vh'
}
const center ={
    lat:43.653225,
    lng:-79.383186
}
const options={
    zoomControl:true
}
function WrappedMap({marker,setMarker}) {
    const location = {
        address: '1600 Amphitheatre Parkway, Mountain View, california.',
        lat: 37.42216,
        lng: -122.08427,
    }
    
    const {isLoaded,loadError}=useLoadScript({
        googleMapsApiKey:process.env.REACT_APP_GOOGLE_API_KEY,
        libraries,
    });
    if(loadError) return "Error loading maps"
    if(!isLoaded) return "loading"
    const handleClick=(event)=>{
        console.log(event.latLng.lat())
        console.log(event.latLng.lng())
        setMarker({
            lat:event.latLng.lat(),
            lng:event.latLng.lng(),
            time:new Date()
        })

    }
    return (
        <div style={{marginRight:'5%'}}>
            <GoogleMap mapContainerStyle={mapContainerStyle} zoom={8} center={center} options={options} onClick={handleClick}>
                {marker?<Marker key={marker.time.toISOString()} position={{lat:marker.lat,lng:marker.lng}} />:null}
            </GoogleMap>
        </div>
    )
}

export default WrappedMap
