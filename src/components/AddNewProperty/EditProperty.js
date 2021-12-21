import React, { useEffect, useState, useContext } from 'react'
import { useParams, withRouter, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import '../fullcss.css'
import { UserContext } from '../UserContext'
import EditWrappedMap from './EditWrappedMap'
import axios from 'axios'
function EditProperty() {
    let params = useParams();
    const valuecontext = useContext(UserContext);
    const [imagegallery, setImagegallery] = useState([])
    const [imagegallery2, setImagegallery2] = useState([])
    const [marker, setMarker] = useState(null)
    const [propertytitle, setPropertytitle] = useState("")
    const [status, setStatus] = useState("For Rent")
    const [propertytype, setPropertytype] = useState("Houses")
    const [propertytypes, setPropertytypes] = useState([])
    const [price, setPrice] = useState("")
    const [area, setArea] = useState("")
    const [OCorVC, setOCorVC] = useState("")
    const [rentalproperty, setRentalproperty] = useState("")
    const [description, setDescription] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [zipcode, setZipcode] = useState("")
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
                resolve(fileReader.result);
            }
            fileReader.onerror = (error) => {
                reject(error);
            }
        })
    }
    const onImgChange = async (event) => {

        console.log(event.target.files[0])
        setImagegallery([...imagegallery, event.target.files[0]])
        const base64 = await convertBase64(event.target.files[0])
        console.log(base64)

        setImagegallery2([...imagegallery2, base64])

    }

    const handleDelete = (name) => {
        console.log(name)
        var indexOfName = imagegallery.findIndex(i => i.name == name);
        console.log(indexOfName)
        const array1 = imagegallery2.splice(indexOfName, 1);
        console.log("updated array1", array1)
        setImagegallery(imagegallery.filter(item => item.name !== name))
    }
    const handleSubmit = async () => {
        console.log(valuecontext.islogged)
        console.log(imagegallery)
        var OCorVCid=0
        var rentalpropertyid=0
        var statusid=0
        if(OCorVC=="Occupied"){
            OCorVCid=1

        }else{
            OCorVCid=2
        }
        if(rentalproperty=="Yes"){
            rentalpropertyid=1

        }else{
            rentalpropertyid=2

        }
        if(status=="For Rent"){
            statusid=1

        }else{
            statusid=2
        }
        var data2 = {
            id:params.id,
            name: propertytitle,
            status: statusid,
            property_type_id: 1,
            price: price,
            area: area,
            property: OCorVCid,
            rental: rentalpropertyid,
            imagegallery: imagegallery,
            images: imagegallery2,
            detail_information: description,
            latitude:marker.lat,
            longitude:marker.lng,
            seller_id:valuecontext.loggeduser.id,
            address:address,
            city:city,
            state:state,
            zipcode:zipcode
            

        }
        console.log(data2)
        const URL = "http://127.0.0.1:8000/api/save-property";
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
              
          }}
        
        axios(options).then(response => {
          console.log(response.data)
          if(response.data.success==1){
            console.log(response.data)
            setSuccess("Property Ad Edited Successfuly")
            //history.push('/');
          }else{
              setError(response.data.error)
          }
        })
        
        
        .catch(error => {
            
            console.log("Error is: ",error.response)
        });
    }
    useEffect(() => {
        console.log(valuecontext.loggeduser)
        console.log(params.id)
        axios.get('http://127.0.0.1:8000/api/property_types')
            .then(response => {
                console.log("API types", response.data)
                setPropertytypes(response.data)
            })
            .catch(function (error) {
                console.log(error);
                console.log("Aey te error hai bro")
            })
        var defaultdata = []
        axios.get('http://127.0.0.1:8000/api/get-single-property?id=' + params.id)
            .then(response => {
                console.log("Property Info", response.data)
                console.log("Ids ", valuecontext.loggeduser.id,response.data.perperty.seller_id)
                if (valuecontext.loggeduser.id == parseInt(response.data.perperty.seller_id)) {
                    console.log("allow to edit page")
                } else {
                    console.log("redirect")
                }
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
            })
            .catch(function (error) {
                console.log(error);
                console.log("Aey te error hai bro")
            })

        
        


    }, []);
    return (
        <div>
            <div class="page-title">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12">

                            <h2 id="submitpropertytitle">Submit Property</h2>
                            <span id="ipn-subtitle">Just Submit Your Property</span>

                        </div>
                    </div>
                </div>
            </div>
            <section>

                <div class="container">
                    <div class="row">


                        <div class="col-lg-12 col-md-12">

                            <div class="submit-page">

                                <div class="form-submit">
                                    <h3>Basic Information</h3>
                                    <div class="submit-section">
                                        <div class="form-row">

                                            <div class="form-group col-md-12">
                                                <label>Property Title<a href="#" class="tip-topdata" data-tip="Property Title"><i class="ti-help"></i></a></label>
                                                <input type="text" onChange={(e) => { setPropertytitle(e.target.value) }} value={propertytitle} class="form-control" />
                                            </div>

                                            <div class="form-group col-md-6">
                                                <label>Status</label>
                                                <select id="status" onChange={e => setStatus(e.target.value)} value={status} class="form-control">
                                                    <option value="For Rent">For Rent</option>
                                                    <option value="For Sale">For Sale</option>
                                                </select>
                                            </div>

                                            <div class="form-group col-md-6">
                                                <label>Property Type</label>
                                                <select id="ptypes" onChange={e => setPropertytype(e.target.value)} value={propertytype} class="form-control">
                                                    {propertytypes.map(item => <option value={item.id}>{item.name}</option>)}
                                                </select>
                                            </div>

                                            <div class="form-group col-md-6">
                                                <label>Price</label>
                                                <input type="text" onChange={(e) => { setPrice(e.target.value) }} value={price} class="form-control" placeholder="USD" />
                                            </div>

                                            <div class="form-group col-md-6">
                                                <label>Area</label>
                                                <input onChange={(e) => { setArea(e.target.value) }} value={area} type="number" class="form-control" />
                                            </div>

                                            <div class="form-group col-md-6">
                                                <label>Property</label><br />
                                                <input style={{ marginLeft: '2%' }} checked={OCorVC=="Occupied"} onChange={(e) => { setOCorVC(e.target.value) }} type="radio" id="age1" name="age" value="Occupied" />
                                                <label style={{ marginLeft: '2%' }} for="age1">Occupied</label>
                                                <input style={{ marginLeft: '2%' }} checked={OCorVC=="Vacant"} onChange={(e) => { setOCorVC(e.target.value) }} type="radio" id="age2" name="age" value="Vacant"  />
                                                <label style={{ marginLeft: '2%' }} for="age2">Vacant</label>
                                            </div>

                                            <div class="form-group col-md-6">
                                                <label>Rental Property</label><br />
                                                <input style={{ marginLeft: '2%' }} checked={rentalproperty=="Yes"} onChange={(e) => { setRentalproperty(e.target.value) }} type="radio" id="RP1" name="Rental" value="Yes" />
                                                <label style={{ marginLeft: '2%' }} for="RP1" >Yes</label>
                                                <input style={{ marginLeft: '2%' }} checked={rentalproperty=="No"} onChange={(e) => { setRentalproperty(e.target.value) }} type="radio" id="RP2" name="Rental" value="No" />
                                                <label style={{ marginLeft: '2%' }} for="RP2">No</label>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div class="form-submit">
                                    <h3>Gallery</h3>
                                    <div class="submit-section">
                                        <div class="form-row">

                                            <div class="form-group col-md-12">
                                                <div className="form-group">
                                                    <input className="form-control form-control-lg mb-3" type="file" multiple name="imagesArray" onChange={onImgChange} />
                                                </div>
                                                {imagegallery && <div id="imgaddedlist">
                                                    {imagegallery.map(img => (<div>
                                                        <a>{img.name}</a>
                                                        <FontAwesomeIcon style={{ float: 'right', marginTop: '7px', cursor: 'pointer' }} onClick={() => handleDelete(img.name)} icon={faTrashAlt} color="red" size="xs" />
                                                    </div>))}

                                                </div>}
                                                {imagegallery2 && <div style={{ display: 'flex' }}>{imagegallery2.map(img => (<div>
                                                    <img src={img}></img>
                                                </div>))}
                                                </div>}

                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div class="form-submit">
                                    <h3>Location</h3>
                                    <div class="submit-section">
                                        <div class="form-row">

                                            <div class="form-group col-md-6">
                                                <label>Address</label>
                                                <input onChange={e => setAddress(e.target.value)} value={address} type="text" class="form-control" />
                                            </div>

                                            <div class="form-group col-md-6">
                                                <label>City</label>
                                                <input onChange={e => setCity(e.target.value)} value={city} type="text" class="form-control" />
                                            </div>

                                            <div class="form-group col-md-6">
                                                <label>State</label>
                                                <input onChange={e => setState(e.target.value)} value={state} type="text" class="form-control" />
                                            </div>

                                            <div class="form-group col-md-6">
                                                <label>Zip Code</label>
                                                <input onChange={e => setZipcode(e.target.value)} value={zipcode} type="text" class="form-control" />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="form-submit">
                                    <h3>Add Location</h3>
                                    <div class="submit-section">
                                        {marker?<EditWrappedMap lat={marker.lat} lng={marker.lng} id={params.id} marker={marker} setMarker={setMarker} />:null}
                                    </div>

                                </div>

                                <div class="form-submit">
                                    <h3>Detailed Information</h3>
                                    <div class="submit-section">
                                        <div class="form-row">

                                            <div class="form-group col-md-12">
                                                <label>Description</label>
                                                <textarea class="form-control h-120" value={description} onChange={(e) => { setDescription(e.target.value) }}></textarea>
                                            </div>









                                        </div>
                                    </div>
                                </div>



                                <div class="form-group col-lg-12 col-md-12">
                                    <button class="btn btn-theme" id="submitpropertybutton" onClick={e => { e.preventDefault(); handleSubmit() }} type="submit">Submit &amp; Preview</button>
                                </div>
                                {error? <div class="alert alert-danger" role="alert">{error}</div> : null}
                                {success? <div class="alert alert-success" role="alert">{success}</div> : null}

                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </div>
    )
}

export default withRouter(EditProperty)
