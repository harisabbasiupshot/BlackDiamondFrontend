import React, { useState, useEffect } from 'react'
import '../fullcss.css'
import axios from 'axios'
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range); 

function NewSearchFilter({ setAllproperties }) {
    const [searchParam, setSearchParam] = useState("")
    const [minimum, setMinimum] = useState(0)
    const [maximum, setMaximum] = useState(50000)
    const [latitude, setLatitude] = useState(null)
    const [longitude, setLongitude] = useState(null)
    const [PRvalue, setPRvalue] = useState(3)
    const [propert_type_id, setPropert_type_id] = useState(null)
    const [propertytypes, setPropertytypes] = useState([])
    const handleType = (e) => {
        console.log(e.target.value)
        setPropert_type_id(e.target.value)
    }
    const handleMinimumandMaximum = (value) => {
        console.log(value)
        setMinimum(value[0])
        setMaximum(value[1])
    }
    const getResults = () => {
        console.log("Maximum: ", maximum, " Minimum: ", minimum)
        axios.get('http://127.0.0.1:8000/api/search-property', {
            params: {
                latitude: latitude,
                longitude: longitude,
                searchParam: searchParam,
                propert_type_id: propert_type_id,
                start_price: minimum,
                end_price: maximum 
            }
        })
            .then(response => {
                console.log("Searched Properties", response.data)
                setAllproperties(response.data.properties.reverse())
            })
            .catch(function (error) {
                console.log(error);
                console.log("Aey te error hai bro")
            })
    }
    const getUserLocation = (e) => {
        if (latitude && longitude) {
            setLatitude(null)
            setLongitude(null)
            return
        }
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)

        });
    }
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/search-property', {
            params: {
                propert_type_id: 2
            }
        })
            .then(response => {
                console.log("Searched Properties", response.data)
            })
            .catch(function (error) {
                console.log(error);
                console.log("Aey te error hai bro")
            })
        axios.get('http://127.0.0.1:8000/api/property_types')
            .then(response => {
                console.log("API types", response.data)
                setPropertytypes(response.data)
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

                    <h5 class="mb-3" id="findnewpropertyh5">Find New Property</h5>

                    <div class="form-group">
                        <div class="input-with-icon">
                            <input type="text" class="form-control" value={searchParam} style={{ border: searchParam != "" ? '1px solid #00ba74' : null }} onChange={(e) => { setSearchParam(e.target.value) }} placeholder="Search By Title And Description" />
                            <i class="ti-search"></i>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="input-with-icon">
                            {/* <input type="text" class="form-control" placeholder="Location" /> */}
                            <button class="form-control" id="buttoncolor" style={{ border: latitude && longitude ? '1px solid #00ba74' : null, textAlign: "left" }} onClick={getUserLocation}>Get My Location</button>
                            <i class="ti-location-pin"></i>
                        </div>
                    </div>

                    
                    <div class="form-group" style={{ marginTop: '50px',  }}>
                        <div class="input-with-icon" style={{width:'90%',marginLeft:'20px'}}>
                            <Range
                                marks={{
                                    0: `$ 0`,
                                    100000: `$ 100000`
                                }}
                                min={0}
                                max={100000}
                                defaultValue={[0, 50000]}
                                tipFormatter={value => `$ ${value}`}
                                tipProps={{
                                    placement: "top",
                                    visible: true
                                }}
                                onAfterChange={value => handleMinimumandMaximum(value)}
                                handleStyle={[{ backgroundColor: '#00ba74' }, { backgroundColor: '#00ba74' }]}
                            />
                        </div>
                    </div>

                    <div class="form-group" style={{ marginTop: '50px' }}>
                        <div class="input-with-icon">
                            <select id="ptypes" onChange={handleType} style={{ border: propert_type_id ? '1px solid #00ba74' : null }} class="form-control">
                                <option value="">&nbsp;</option>
                                {propertytypes.map(item => (<option value={item.id}>{item.name}</option>))}
                            </select>
                            <i class="ti-briefcase"></i>
                        </div>
                    </div>







                    <div class="ameneties-features">



                        <button id="findnewhomebutton" onClick={getResults}>Find Properties</button>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default NewSearchFilter
