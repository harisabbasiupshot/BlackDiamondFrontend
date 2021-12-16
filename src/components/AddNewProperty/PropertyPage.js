import React, { useEffect, useState } from 'react'
import './PropertyPage.css'
import { withRouter, useHistory } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function PropertyPage() {
    let history = useHistory();

    const editProperty = () => {
        history.push('/editproperty/123')
    }
    const deleteProperty = () => {
        history.push('/')
    }

    return (
        <div>
            <div id="mainpropertydiv">
                <div id="single-advance-caption">

                    <div id="property-name-info">
                        <div style={{ display: 'flex' }}>
                            <h4 id="property-name">Green Realty Smart Apartment</h4>
                            <span id="statusbuttonPP" >For Rental</span>
                            <span id="editbuttonPP" href="/editproperty/12" onClick={editProperty}>Edit</span>
                            <span id="deletebuttonPP" onClick={deleteProperty}>Delete</span>
                        </div>
                        <p id="property-desc">2 Bedrooms, Kitchen,and bathrooms included with balcony</p>
                    </div>

                    <div id="property-price-info">
                        <h4 id="property-price">$53264.00</h4>
                        <p id="property-sqa">70,00<sub>m2</sub> (5485$/m2)</p>
                    </div>



                </div>

            </div>
            <div id="block-wrap">

                <div id="block-header">
                    <h4 id="block-title">Property Info</h4>
                </div>

                <div id="block-body">
                    <ul id="dw-proprty-info">
                        <li id="propertyliitem"><strong id="propertyliitemstrong">Rental Property</strong>Yes</li>
                        <li id="propertyliitem"><strong id="propertyliitemstrong">OCorVC</strong>Occupied</li>
                        <li id="propertyliitem"><strong id="propertyliitemstrong">Area</strong>570 sq ft</li>
                        <li id="propertyliitem"><strong id="propertyliitemstrong">Type</strong>Apartment</li>
                        <li id="propertyliitem"><strong id="propertyliitemstrong">Price</strong>$53264</li>
                        <li id="propertyliitem"><strong id="propertyliitemstrong">City</strong>New York</li>
                        <li id="propertyliitem"><strong id="propertyliitemstrong">Address</strong>1600 Apartment</li>
                        <li id="propertyliitem"><strong id="propertyliitemstrong">State</strong>California</li>
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
                    <h4 id="block-title">Posted By</h4>
                </div>

                <div class="agent-title">
                    <div class="agent-photo"><img src="assets/img/user-6.jpg" alt="" /></div>
                    <div class="agent-details">
                        <h4><a href="#" id="propertyusername">Shivangi Preet</a></h4>
                        <span><i class="lni-phone-handset"></i>(91) 123 456 7895</span>
                    </div>
                    <div class="clearfix"></div>
                </div>

            </div>

        </div>
    )
}

export default PropertyPage
