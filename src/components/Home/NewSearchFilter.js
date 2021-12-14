import React,{useState} from 'react'
import '../fullcss.css'
function NewSearchFilter() {
    const [neighborhood, setNeighborhood] = useState("")
    const [minimum, setMinimum] = useState()
    const [maximum, setMaximum] = useState()
    const [bedrooms, setBedrooms] = useState()
    const [bathrooms, setBathrooms] = useState()
    const handleType=(e)=>{
        console.log(e.target.value)
    }
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
                            <input type="text" class="form-control" placeholder="Location" />
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
                            <select id="bedrooms" class="form-control">
                                <option value="">&nbsp;</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <i class="fas fa-bed"></i>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="input-with-icon">
                            <select id="bathrooms" class="form-control">
                                <option value="">&nbsp;</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <i class="fas fa-bath"></i>
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

                    <div class="form-group">
                        <div class="input-with-icon">
                            <select id="cities" class="form-control">
                                <option value="">&nbsp;</option>
                                <option value="1">Los Angeles, CA</option>
                                <option value="2">New York City, NY</option>
                                <option value="3">Chicago, IL</option>
                                <option value="4">Houston, TX</option>
                                <option value="5">Philadelphia, PA</option>
                                <option value="6">San Antonio, TX</option>
                                <option value="7">San Jose, CA</option>
                            </select>
                            <i class="ti-briefcase"></i>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="form-group">
                                <div class="input-with-icon">
                                    <input type="text" class="form-control"  placeholder="Minimum" />
                                    <i class="ti-money"></i>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="form-group">
                                <div class="input-with-icon">
                                    <input type="text" class="form-control" placeholder="Maximum" />
                                    <i class="ti-money"></i>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="ameneties-features">
                        <div class="form-group" id="module">
                            <a role="button" class="" data-toggle="collapse" href="#advance-search" aria-expanded="true" aria-controls="advance-search"></a>
                        </div>
                        <div class="collapse" id="advance-search" aria-expanded="false" role="banner">
                            <ul class="no-ul-list">
                                <li>
                                    <input id="a-1" class="checkbox-custom" name="a-1" type="checkbox" />
                                    <label for="a-1" class="checkbox-custom-label">Air Condition</label>
                                </li>
                                <li>
                                    <input id="a-2" class="checkbox-custom" name="a-2" type="checkbox" />
                                    <label for="a-2" class="checkbox-custom-label">Bedding</label>
                                </li>
                                <li>
                                    <input id="a-3" class="checkbox-custom" name="a-3" type="checkbox" />
                                    <label for="a-3" class="checkbox-custom-label">Heating</label>
                                </li>
                                <li>
                                    <input id="a-4" class="checkbox-custom" name="a-4" type="checkbox" />
                                    <label for="a-4" class="checkbox-custom-label">Internet</label>
                                </li>
                                <li>
                                    <input id="a-5" class="checkbox-custom" name="a-5" type="checkbox" />
                                    <label for="a-5" class="checkbox-custom-label">Microwave</label>
                                </li>
                                <li>
                                    <input id="a-6" class="checkbox-custom" name="a-6" type="checkbox" />
                                    <label for="a-6" class="checkbox-custom-label">Smoking Allow</label>
                                </li>
                                <li>
                                    <input id="a-7" class="checkbox-custom" name="a-7" type="checkbox" />
                                    <label for="a-7" class="checkbox-custom-label">Terrace</label>
                                </li>
                                <li>
                                    <input id="a-8" class="checkbox-custom" name="a-8" type="checkbox" />
                                    <label for="a-8" class="checkbox-custom-label">Balcony</label>
                                </li>
                                <li>
                                    <input id="a-9" class="checkbox-custom" name="a-9" type="checkbox" />
                                    <label for="a-9" class="checkbox-custom-label">Icon</label>
                                </li>
                            </ul>
                        </div>

                        <button id="findnewhomebutton">Find New Home</button>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default NewSearchFilter
