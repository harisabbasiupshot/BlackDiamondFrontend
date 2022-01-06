import React, { useState, useEffect } from 'react'
import { useParams, withRouter, useHistory } from "react-router-dom";
import '../fullcss.css'
import axios from 'axios'
import BuyerBids from './BuyerBids';

function BuyerProfile() {
	let params = useParams();
	const [buyerprofile, setBuyerprofile] = useState("")
	const getProfile=(id)=>{
		axios.get('http://127.0.0.1:8000/api/get-user?id='+id)
            .then(response => {
                console.log("Buyer Info", response.data)
				setBuyerprofile(response.data.user)
            })
            .catch(function (error) {
                console.log(error);
                console.log("Aey te error hai bro")
            })

	}
	useEffect(() => {
		console.log("Buyer info id: ", params.id)
		getProfile(params.id)

	}, [])

	return (
			<div class="row">
				<div class="col-lg-12 col-md-12">
					<div class="agency agency-list shadow-0 mt-2 mb-2">

						<a href="agency-page.html" id="sellerprofileimgdiv">
							<img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" id="sellerprofileimg" alt="" />
						</a>

						<div class="agency-content">
							<div class="agency-name">
								<div style={{ display: 'flex' }}>
									<h4><a id="sellerprofilename">{buyerprofile.name}</a></h4>
									<span id="statusbuttonPP2">Buyer</span>

								</div>
								{/* <span id="sellerprofilelocation"><i class="lni-map-marker"></i>3599 Huntz Lane</span> */}
							</div>


							<ul class="agency-detail-info">
								<li><i class="lni-map-marker"></i>3599 Huntz Lane</li>
								<li><i class="lni-phone-handset"></i>{buyerprofile.phone}</li>
								<li><i class="lni-envelope"></i><a href="#">{buyerprofile.email}</a></li>
							</ul>


							<div class="clearfix"></div>
						</div>
						<div id="bidsremaining">
							<div id="dashboard-stat-content"><h4 id="dashboard-stat-iconh4">10</h4> <span id="dashboard-stat-iconspan">Bids Remaining</span></div>
							<div id="dashboard-stat-icon"><i class="ti-location-pin"></i></div>
						</div>

					</div>

				</div>
				<BuyerBids />


			</div>


	)
}

export default BuyerProfile
