import React, { useEffect, useState, useContext } from 'react'
import '../fullcss.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../UserContext'
import WrappedMap from './WrappedMap'
import { ImageGallery } from 'react-image-gallery'
function AddNewProperty() {
    const valuecontext = useContext(UserContext);
    const [imagegallery, setImagegallery] = useState([])
    const [imagegallery2, setImagegallery2] = useState([])
    const [propertytitle, setPropertytitle] = useState("")
    const [status, setStatus] = useState("For Rent")
    const [propertytype, setPropertytype] = useState("Houses")
    const [price, setPrice] = useState("")
    const [area, setArea] = useState("")
    const [OCorVC, setOCorVC] = useState("")
    const [rentalproperty, setRentalproperty] = useState("")
    const [description, setDescription] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [zipcode, setZipcode] = useState("")
    const [marker, setMarker] = useState(null)
    const [error, setError] = useState(null);
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
    const onImgChange = async(event) => {

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
        const array1=imagegallery2.splice(indexOfName, 1);
        console.log("updated array1",array1)
        setImagegallery(imagegallery.filter(item => item.name !== name))
    }
    const handleSubmit = async () => {
        console.log(valuecontext.islogged)
        console.log("imagegallery1: ",imagegallery)
        console.log("image gallery2: ",imagegallery2)
        if(marker==null){
            setError("Add Location please")
            return
        }else{
            setError(null)
        }
        var data2 = {
            propertytitle: propertytitle,
            status: status,
            propertytype: propertytype,
            price: price,
            area: area,
            OCorVC: OCorVC,
            rentalproperty: rentalproperty,
            imagegallery: imagegallery,
            imagegallery2: imagegallery2,
            description: description,
            latitude:marker.lat,
            longitude:marker.lng,
            seller_id:valuecontext.loggeduser.id,
            location: {
                address: address,
                city: city,
                state: state,
                zipcode: zipcode
            }

        }
        console.log(data2)
    }
    useEffect(() => {
        console.log(valuecontext.loggeduser)

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

                            {valuecontext.islogged ? null : <div class="alert alert-danger" role="alert">
                                <p>Please, Sign In before you submit a property. If you don't have an account you can create one by <a href="/sign-up">Clicking Here</a></p>
                            </div>}

                        </div>

                        <div class="col-lg-12 col-md-12">

                            <div class="submit-page">

                                <div class="form-submit">
                                    <h3>Basic Information</h3>
                                    <div class="submit-section">
                                        <div class="form-row">

                                            <div class="form-group col-md-12">
                                                <label>Property Title<a href="#" class="tip-topdata" data-tip="Property Title"><i class="ti-help"></i></a></label>
                                                <input type="text" onChange={(e) => { setPropertytitle(e.target.value) }} class="form-control" />
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
                                                    <option value="Houses">Houses</option>
                                                    <option value="Apartment">Apartment</option>
                                                    <option value="Villas">Villas</option>
                                                    <option value="Commercial">Commercial</option>
                                                    <option value="Offices">Offices</option>
                                                    <option value="Garage">Garage</option>
                                                </select>
                                            </div>

                                            <div class="form-group col-md-6">
                                                <label>Price</label>
                                                <input type="text" onChange={(e) => { setPrice(e.target.value) }} type="number" class="form-control" placeholder="USD" />
                                            </div>

                                            <div class="form-group col-md-6">
                                                <label>Area</label>
                                                <input onChange={(e) => { setArea(e.target.value) }} type="number" class="form-control" />
                                            </div>

                                            <div class="form-group col-md-6">
                                                <label>Property</label><br />
                                                <input style={{ marginLeft: '2%' }} onChange={(e) => { setOCorVC(e.target.value) }} type="radio" id="age1" name="age" value="Occupied" />
                                                <label style={{ marginLeft: '2%' }} for="age1">Occupied</label>
                                                <input style={{ marginLeft: '2%' }} onChange={(e) => { setOCorVC(e.target.value) }} type="radio" id="age2" name="age" value="Vacant" />
                                                <label style={{ marginLeft: '2%' }} for="age2">Vacant</label>
                                            </div>

                                            <div class="form-group col-md-6">
                                                <label>Rental Property</label><br />
                                                <input style={{ marginLeft: '2%' }} onChange={(e) => { setRentalproperty(e.target.value) }} type="radio" id="RP1" name="Rental" value="Yes" />
                                                <label style={{ marginLeft: '2%' }} for="RP1" >Yes</label>
                                                <input style={{ marginLeft: '2%' }} onChange={(e) => { setRentalproperty(e.target.value) }} type="radio" id="RP2" name="Rental" value="No" />
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
                                                {imagegallery2 && <div style={{display:'flex'}}>{imagegallery2.map(img => (<div >
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
                                                <input onChange={e => setAddress(e.target.value)} type="text" class="form-control" />
                                            </div>

                                            <div class="form-group col-md-6">
                                                <label>City</label>
                                                <input onChange={e => setCity(e.target.value)} type="text" class="form-control" />
                                            </div>

                                            <div class="form-group col-md-6">
                                                <label>State</label>
                                                <input onChange={e => setState(e.target.value)} type="text" class="form-control" />
                                            </div>

                                            <div class="form-group col-md-6">
                                                <label>Zip Code</label>
                                                <input onChange={e => setZipcode(e.target.value)} type="text" class="form-control" />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="form-submit">
                                    <h3>Add Location</h3>
                                    <div class="submit-section">
                                        <WrappedMap marker={marker} setMarker={setMarker}/>
                                    </div>

                                </div>


                                <div class="form-submit">
                                    <h3>Detailed Information</h3>
                                    <div class="submit-section">
                                        <div class="form-row">

                                            <div class="form-group col-md-12">
                                                <label>Description</label>
                                                <textarea class="form-control h-120" onChange={(e) => { setDescription(e.target.value) }}></textarea>
                                            </div>









                                        </div>
                                    </div>
                                </div>



                                <div class="form-group col-lg-12 col-md-12">
                                    <button class="btn btn-theme" id="submitpropertybutton" onClick={e => { e.preventDefault(); handleSubmit() }} type="submit">Submit &amp; Preview</button>
                                </div>
                                {error? <div class="alert alert-danger" role="alert">{error}</div> : null}

                            </div>
                        </div>
                        
                    </div>
                </div>

            </section>
        </div>
    )
}

export default AddNewProperty
