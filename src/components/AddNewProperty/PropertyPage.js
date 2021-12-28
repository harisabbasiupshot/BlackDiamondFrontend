import React, { useEffect, useState, useContext } from 'react'
import './PropertyPage.css'
import { useParams, withRouter, useHistory } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios'
import WrappedMap2 from './WrappedMap2';
import { UserContext } from '../UserContext'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
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
    const [bidtitle, setBidtitle] = useState("")
    const [biddescription, setBiddescription] = useState("")
    const [error, setError] = useState(null);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const editProperty = () => {
        history.push('/editproperty/' + params.id)
    }
    const deleteProperty = () => {
        const URL = "http://127.0.0.1:8000/api/delete-property";
        var data2 = {
            id: params.id
        }
        console.log("my data in front bs", data2)
        const options = {
            method: 'post',
            url: URL,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            data: data2,

            validateStatus: (status) => {
                return true; // I'm always returning true, you may want to do it depending on the status received

            }
        }

        axios(options).then(response => {
            console.log(response.data)
            if (response.data.success == 1) {
                history.push('/');

            } else {
                setError(response.data.error)
            }
        })


            .catch(error => {

                console.log("Error is: ", error.response)
            });

    }
    const getUserInfo = (id) => {
        axios.get('http://127.0.0.1:8000/api/get-user?id=' + id)
            .then(response => {
                console.log("Seller Info", response.data)
                setSellerinfo(response.data.user)


            })
            .catch(function (error) {
                console.log(error);
                console.log("Aey te error hai bro")
            })

    }
    const showbidProperty = () => {
        setShow(true)
    }
    useEffect(() => {
        console.log(params.id)
        var propertytypee


        var defaultdata
        axios.get('http://127.0.0.1:8000/api/get-single-property?id=' + params.id)
            .then(response => {
                console.log("Property Info", response.data)
                if (response.data.property.propert_type_id == 1) {
                    propertytypee = "house"
                }
                if (response.data.property.propert_type_id == 2) {
                    propertytypee = "shop"
                }
                defaultdata = {
                    userid: response.data.property.seller_id,
                    propertytitle: response.data.property.name,
                    status: response.data.property.status == 1 ? "For Rent" : "For Sale",
                    propertytype: propertytypee,
                    price: response.data.property.price,
                    area: response.data.property.area,
                    marker: {
                        lat: parseFloat(response.data.property.latitude),
                        lng: parseFloat(response.data.property.longitude)
                    },
                    OCorVC: response.data.property.property == 1 ? "Occupied" : "Vacant",
                    imagegallery: response.data.property.images,
                    rentalproperty: response.data.property.rental == 1 ? "Yes" : "No",
                    description: response.data.property.detail_information,
                    location: {
                        address: response.data.property.address,
                        city: response.data.property.city,
                        state: response.data.property.state,
                        zipcode: response.data.property.zipcode
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
                console.log("defaultdata", defaultdata)
                getUserInfo(defaultdata.userid)
            })
            .catch(function (error) {
                console.log(error);
                console.log("Aey te error hai bro")
            })



    }, []);

    return (
        <div>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ textAlign: 'center' }}>Bid Property</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ alignItems: 'center' }}>
                    <label>Bid Title<a href="#" class="tip-topdata" data-tip="Bid Title<"><i class="ti-help"></i></a></label>
                    <input type="text"  class="form-control" />
                    <label>Offer Description<a href="#" class="tip-topdata" data-tip="Offer Description"><i class="ti-help"></i></a></label>
                    <textarea type="text"  class="form-control" />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} >Close</Button>
                    <Button variant="primary" style={{backgroundColor:"#3ebd43"}}>Bid</Button>
                </Modal.Footer>
            </Modal>
            <div id="mainpropertydiv">
                <div id="single-advance-caption">

                    <div id="property-name-info" style={{marginLeft:'-9px'}}>
                        <div style={{ display: 'flex' }}>
                            <h4 id="property-name">{propertytitle}</h4>
                            <span id="statusbuttonPP" >{status}</span>
                            {valuecontext.loggeduser ? valuecontext.loggeduser.id == parseInt(sellerinfo.id) ? <span id="editbuttonPP" href={"/editproperty/" + params.id} onClick={editProperty}>Edit</span> : null : null}
                            {valuecontext.loggeduser ? valuecontext.loggeduser.id == parseInt(sellerinfo.id) ? <span id="deletebuttonPP" onClick={deleteProperty}>Delete</span> : null : null}
                            {valuecontext.loggeduser ? valuecontext.loggeduser.role == 3 ? <span id="showbidbuttonPP" onClick={showbidProperty}>BidProperty</span> : null : null}
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
                        <li id="propertyliitem"><strong id="propertyliitemstrong">Area</strong>{area} SQ. FT</li>
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
                {imagegallery && <div id="block-body">
                    <Carousel>
                        {imagegallery.map((img, index) => (<div>
                            <img src={"http://127.0.0.1:8000" + img.path} />
                            <p className="legend">Legend {index + 1}</p>
                        </div>))}


                    </Carousel>

                </div>}



            </div>
            <div id="block-wrap">

                <div id="block-header">
                    <h4 id="block-title">Map Location</h4>
                </div>
                <div id="block-body">
                    {marker ? <WrappedMap2 lat={marker.lat} lng={marker.lng} id={params.id} /> : null}

                </div>



            </div>
            <div id="block-wrap">

                <div id="block-header">
                    <h4 id="block-title">Posted By</h4>
                </div>

                <div class="agent-title">
                    <div class="agent-photo"><img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" /></div>
                    <div class="agent-details">
                        <h4><a href={"/sellerprofile/" + sellerinfo.id} id="propertyusername">{sellerinfo.name}</a></h4>
                        <span><i class="lni-phone-handset"></i>{sellerinfo.phone}</span>
                    </div>
                    <div class="clearfix"></div>
                </div>

            </div>

        </div>
    )
}

export default PropertyPage
