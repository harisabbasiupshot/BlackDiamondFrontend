import React, { useState, useEffect, useContext } from 'react'
import { useParams, withRouter, useHistory } from "react-router-dom";
import axios from 'axios'

function SellerProperties({ sellerprofile }) {
	const [currentpage, setCurrentpage] = useState(1)
	const [sellerproperties, setSellerproperties] = useState([])
	const changepage = (pagenumber) => {
		console.log("CHange page event called", pagenumber)
	}
	const getProperties = () => {
		axios.get('http://127.0.0.1:8000/api/seller-properties', {
			params: {
				seller_id: 5
			}
		})
			.then(response => {
				console.log("All Properties", response.data)
				setSellerproperties(response.data.perperties.reverse())
			})
			.catch(function (error) {
				console.log(error);
				console.log("Aey te error hai bro")
			})
	}

	useEffect(() => {
		console.log("Seller info id: ", sellerprofile.id)
		getProperties(sellerprofile.id)

	}, [])
	return (
		<div class="col-lg-8 col-md-8 col-sm-12">
			<div class="row">

				<div class="col-lg-12 col-md-12">
					<div class="filter-fl">
						<h4>Total Property Find is: <span class="theme-cl">{sellerproperties.length}</span></h4>
						<div class="btn-group custom-drop">
							<button type="button" class="btn btn-order-by-filt light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								Short By<i class="ti-angle-down"></i>
							</button>
							<div class="dropdown-menu pull-right animated flipInX">
								<a href="#">Latest</a>
								<a href="#">Most View</a>
								<a href="#">Most Popular</a>
							</div>
						</div>
					</div>
				</div>

			</div>

			<div class="row">
				{sellerproperties.map(property => (
					<div class="col-lg-6 col-md-6">
						<div class="property-listing property-1" >

							<div class="listing-img-wrapper">
								<a href={"/property/" + property.id}>
									<img src={"http://127.0.0.1:8000" + property.images[0].path} class="img-fluid mx-auto" style={{ minHeight: '250px' }} alt="" />
								</a>
								<div class="listing-like-top">
									<i class="ti-heart"></i>
								</div>

								<span class="property-type">{property.status == 2 ? "For Sale" : "For Rent"}</span>
							</div>

							<div class="listing-content">

								<div class="listing-detail-wrapper">
									<div id="listing-short-detail">
										<h4 id="listing-name"><a href={"/property/" + property.id} id="listing-namea">{property.name}</a></h4>
										<span class="listing-location"><i class="ti-location-pin"></i>{property.address},{property.city}</span>
									</div>
								</div>

								<div id="listingfeaturesinfoline">
									<ul id="ulflexing">
										<li id="libeds"><strong>{property.property == 1 ? "Occupied" : "Vacant"}</strong></li>
										<li id="libeds"><strong>Type:</strong>{property.propert_type_id == 1 ? "house" : "shop"}</li>
										<li id="libeds"><strong>Sqft:</strong>{property.area}</li>
									</ul>
								</div>

								<div class="listing-footer-wrapper">
									<div id="listingprizediv">
										<h4 id="listingprizedivtext">${property.price}</h4>
									</div>
									<div id="listingdetailsbutton">
										<a href={"/property/" + property.id} id="listingdetailsbuttontext">More Info</a>
									</div>
								</div>

							</div>

						</div>
					</div>
				))}






			</div>

			<div class="row" style={{ marginLeft: '30%' }}>
				<div class="col-lg-12 col-md-12 col-sm-12">
					<ul class="pagination p-center">
						<li id="previousitem">
							<a id="previousitemlink" href="#" aria-label="Previous">
								<span class="ti-arrow-left"></span>
								<span class="sr-only">Previous</span>
							</a>
						</li>
						<li id="activepaginationli" onClick={() => changepage(1)}><a id="activepagination" >1</a></li>
						<li id="normalpaginationli" onClick={() => changepage(2)}><a id="normalpagination" >2</a></li>
						<li id="normalpaginationli" onClick={() => changepage(3)}><a id="normalpagination" >3</a></li>
						<li id="normalpaginationli"><a id="normalpagination">...</a></li>
						<li id="normalpaginationli" onClick={() => changepage(18)}><a id="normalpagination" >18</a></li>
						<li class="page-item">
							<a class="page-link" href="#" aria-label="Next">
								<span class="ti-arrow-right"></span>
								<span class="sr-only">Next</span>
							</a>
						</li>
					</ul>
				</div>
			</div>

		</div>
	)
}

export default SellerProperties
