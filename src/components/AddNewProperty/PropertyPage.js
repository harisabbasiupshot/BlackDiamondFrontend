import React, { useEffect, useState,useContext } from 'react'
import './PropertyPage.css'
import {useParams,withRouter, useHistory} from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios'
import WrappedMap2 from './WrappedMap2';
import { UserContext } from '../UserContext'
function PropertyPage() {
    let history = useHistory();
    let params = useParams();
    const valuecontext = useContext(UserContext);
    const [imagegallery, setImagegallery] = useState([])
    const [imagegallery2, setImagegallery2] = useState([])
    const [marker, setMarker] = useState(null)
    const [propertytitle, setPropertytitle] = useState("")
    const [status, setStatus] = useState("For Rent")
    const [propertytype, setPropertytype] = useState("")
    const [price, setPrice] = useState("")
    const [area, setArea] = useState("")
    const [OCorVC, setOCorVC] = useState("")
    const [rentalproperty, setRentalproperty] = useState("")
    const [description, setDescription] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [zipcode, setZipcode] = useState("")
    const [sellerinfo, setSellerinfo] = useState("")

    const editProperty = () => {
        history.push('/editproperty/'+params.id)
    }
    const deleteProperty = () => {
        history.push('/')
    }
    const getUserInfo = (id) => {
        axios.get('http://127.0.0.1:8000/api/get-user?id=' +id)
            .then(response => {
                console.log("Seller Info", response.data)
                setSellerinfo(response.data.user)
                
                
            })
            .catch(function (error) {
                console.log(error);
                console.log("Aey te error hai bro")
            })
        
    }
    useEffect(() => {
        console.log(params.id)
        var defaultdata
        axios.get('http://127.0.0.1:8000/api/get-single-property?id=' + params.id)
            .then(response => {
                console.log("Property Info", response.data)
                
                defaultdata = {
                    userid: response.data.perperty.seller_id,
                    propertytitle: response.data.perperty.name,
                    status: response.data.perperty.status == 1 ? "For Rent" : "For Sale",
                    propertytype: "Houses",
                    price: response.data.perperty.price,
                    area: response.data.perperty.area,
                    marker: {
                        lat: parseFloat(response.data.perperty.latitude),
                        lng: parseFloat(response.data.perperty.longitude)
                    },
                    OCorVC: response.data.perperty.property == 1 ? "Occupied" : "Vacant",
                    imagegallery: response.data.perperty.images,
                    rentalproperty: response.data.perperty.rental == 1 ? "Yes" : "No",
                    description: response.data.perperty.detail_information,
                    location: {
                        address: response.data.perperty.address,
                        city: response.data.perperty.city,
                        state: response.data.perperty.state,
                        zipcode: response.data.perperty.zipcode
                    }
                }
                setPropertytitle(defaultdata.propertytitle)
                setStatus(defaultdata.status)
                setPropertytype(defaultdata.propertytype)
                setPrice(defaultdata.price)
                setArea(defaultdata.area)
                setOCorVC(defaultdata.OCorVC)
                setRentalproperty(defaultdata.rentalproperty)
                setDescription(defaultdata.description)
                setAddress(defaultdata.location.address)
                setCity(defaultdata.location.city)
                setState(defaultdata.location.state)
                setZipcode(defaultdata.location.zipcode)
                setImagegallery(defaultdata.imagegallery)
                setMarker(defaultdata.marker)
                console.log("defaultdata",defaultdata)
                getUserInfo(defaultdata.userid)
            })
            .catch(function (error) {
                console.log(error);
                console.log("Aey te error hai bro")
            })
        

        
      },[]);

    return (
        <div>
            <div id="mainpropertydiv">
                <div id="single-advance-caption">

                    <div id="property-name-info">
                        <div style={{ display: 'flex' }}>
                            <h4 id="property-name">{propertytitle}</h4>
                            <span id="statusbuttonPP" >{status}</span>
                            {valuecontext.loggeduser?valuecontext.loggeduser.id==parseInt(sellerinfo.id)?<span id="editbuttonPP" href={"/editproperty/"+params.id} onClick={editProperty}>Edit</span>:null:null}
                            {valuecontext.loggeduser?valuecontext.loggeduser.id==parseInt(sellerinfo.id)?<span id="deletebuttonPP" onClick={deleteProperty}>Delete</span>:null:null}
                        </div>
                        <p id="property-desc">{description}</p>
                    </div>

                    <div id="property-price-info">
                        <h4 id="property-price">${price}</h4>
                        <p id="property-sqa">{area}sqft</p>
                    </div>



                </div>

            </div>
            <div id="block-wrap">

                <div id="block-header">
                    <h4 id="block-title">Property Info</h4>
                </div>

                <div id="block-body">
                    <ul id="dw-proprty-info">
                        <li id="propertyliitem"><strong id="propertyliitemstrong">Rental Property</strong>{rentalproperty}</li>
                        <li id="propertyliitem"><strong id="propertyliitemstrong">OCorVC</strong>{OCorVC}</li>
                        <li id="propertyliitem"><strong id="propertyliitemstrong">Area</strong>{area}</li>
                        <li id="propertyliitem"><strong id="propertyliitemstrong">Type</strong>{propertytype}</li>
                        <li id="propertyliitem"><strong id="propertyliitemstrong">Price</strong>${price}</li>
                        <li id="propertyliitem"><strong id="propertyliitemstrong">City</strong>{city}</li>
                        <li id="propertyliitem"><strong id="propertyliitemstrong">Address</strong>{address}</li>
                        <li id="propertyliitem"><strong id="propertyliitemstrong">State</strong>{state}</li>
                    </ul>
                </div>

            </div>
            <div id="block-wrap">

                <div id="block-header">
                    <h4 id="block-title">Gallery</h4>
                </div>
                <div id="block-body">
                    <Carousel>
                        <div>
                            <img src="assets/img/p-1.jpg" />
                            <p className="legend">Legend 1</p>
                        </div>
                        <div>
                            <img src="assets/img/p-2.jpg" />
                            <p className="legend">Legend 2</p>
                        </div>
                        <div>
                            <img src="assets/img/p-3.jpg" />
                            <p className="legend">Legend 3</p>
                        </div>
                    </Carousel>

                </div>



            </div>
            <div id="block-wrap">

                <div id="block-header">
                    <h4 id="block-title">Map Location</h4>
                </div>
                <div id="block-body">
                    {marker?<WrappedMap2 lat={marker.lat} lng={marker.lng} id={params.id}/>:null}

                </div>



            </div>
            <div id="block-wrap">

                <div id="block-header">
                    <h4 id="block-title">Posted By</h4>
                </div>

                <div class="agent-title">
                    <div class="agent-photo"><img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" /></div>
                    <div class="agent-details">
                        <h4><a href={"/sellerprofile/"+sellerinfo.id} id="propertyusername">{sellerinfo.name}</a></h4>
                        <span><i class="lni-phone-handset"></i>{sellerinfo.phone}</span>
                    </div>
                    <div class="clearfix"></div>
                </div>

            </div>

        </div>
    )
}

export default PropertyPage
