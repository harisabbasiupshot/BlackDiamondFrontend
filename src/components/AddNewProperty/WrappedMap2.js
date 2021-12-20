import React,{useState,useEffect} from 'react'
import { GoogleMap, useJsApiLoader, useLoadScript,Marker,InfoWindow } from '@react-google-maps/api';
const libraries=['places']
const mapContainerStyle={
    width:'80vw',
    height:'100vh'
}

const options={
    zoomControl:true
}
function WrappedMap2({lat,lng,id}) {
    
    const center ={
        lat: lat?lat:43.653225,
        lng: lng?lng:-79.383186
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
        /* setMarker({
            lat:event.latLng.lat(),
            lng:event.latLng.lng(),
            time:new Date()
        }) */

    }
    return (
        <div style={{marginRight:'5%'}}>
            <GoogleMap mapContainerStyle={mapContainerStyle} zoom={16} center={center} options={options}>
                {lat&&lng?<Marker key={id} position={{lat:lat,lng:lng}} />:null}
            </GoogleMap>
        </div>
    )
}

export default WrappedMap2
