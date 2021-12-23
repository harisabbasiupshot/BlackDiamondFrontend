import React,{useState, useEffect} from 'react'
import '../fullcss.css'
import axios from 'axios'
function NewSearchFilter({setAllproperties}) {
    const [neighborhood, setNeighborhood] = useState("")
    const [minimum, setMinimum] = useState()
    const [maximum, setMaximum] = useState()
    const [latitude, setLatitude] = useState()
    const [longitude, setLongitude] = useState()
    const handleType=(e)=>{
        console.log(e.target.value)
    }
    const getResults=()=>{
        axios.get('http://127.0.0.1:8000/api/search-property',{
            params: {
                latitude: latitude,
                longitude:longitude
              }
        })
            .then(response => {
                console.log("Searched Properties", response.data)
                setAllproperties(response.data.properties)
            })
            .catch(function (error) {
                console.log(error);
                console.log("Aey te error hai bro")
            })
    }
    const getUserLocation=(e)=>{
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
            
        });
    }
    useEffect(() => {
		axios.get('http://127.0.0.1:8000/api/search-property',{
            params: {
                latitude: 33.674005,
                longitude:73.010771
              }
        })
            .then(response => {
                console.log("Searched Properties", response.data)
            })
            .catch(function (error) {
                console.log(error);
                console.log("Aey te error hai bro")
            })

	}, [])
    return (
        <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="simple-sidebar sm-sidebar" id="filter_search" style={{ left: 0 }}>

                <div class="search-sidebar_header">
                    <h4 class="ssh_heading">Close Filter</h4>
                    <button onclick="closeFilterSearch()" class="w3-bar-item w3-button w3-large"><i class="ti-close"></i></button>
                </div>

                <div class="sidebar-widgets">

                    <h5 class="mb-3">Find New Property</h5>

                    <div class="form-group">
                        <div class="input-with-icon">
                            <input type="text" class="form-control" value={neighborhood} onChange={(e)=>{setNeighborhood(e.target.value)}} placeholder="Neighborhood" />
                            <i class="ti-search"></i>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="input-with-icon">
                            {/* <input type="text" class="form-control" placeholder="Location" /> */}
                            <button class="form-control" onClick={getUserLocation}>Add Location</button>
                            <i class="ti-location-pin"></i>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="form-group">
                                <div class="input-with-icon">
                                    <input type="text" class="form-control" value={minimum} onChange={(e)=>{console.log(e.target.value)}} placeholder="Minimum" />
                                    <i class="ti-money"></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="form-group">
                                <div class="input-with-icon">
                                    <input type="text" class="form-control" value={maximum} onChange={(e)=>{console.log(e.target.value)}} placeholder="Maximum" />
                                    <i class="ti-money"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    

                    

                    <div class="form-group">
                        <div class="input-with-icon">
                            <select id="ptypes" onChange={handleType} class="form-control">
                                <option value="">&nbsp;</option>
                                <option value="Any Type">Any Type</option>
                                <option value="For Rental">For Rental</option>
                                <option value="For Sale">For Sale</option>
                            </select>
                            <i class="ti-briefcase"></i>
                        </div>
                    </div>

                   

                    


                    <div class="ameneties-features">
                        
                        

                        <button id="findnewhomebutton" onClick={getResults}>Find New Home</button>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default NewSearchFilter
