import React, { useState, useEffect,useContext } from 'react'
import { useParams, withRouter, useHistory } from "react-router-dom";
import './SellerProfile.css'
import { UserContext } from '../UserContext'
import SellerProfileInfo from './SellerProfileInfo';
function SellerProfile() {
	let params = useParams();
	const valuecontext = useContext(UserContext);
	const [show, setShow] = useState("My Profile")
	useEffect(() => {
		console.log("Seller info id: ", params.id)

	}, [])
	const logout=()=>{
		valuecontext.logout()
	}
	return (
		<div class="container-fluid">
			<div class="row">
			<div class="col-lg-3 col-md-4">
							<div class="dashboard-navbar">
								
								<div class="d-user-avater">
									<img src="assets/img/user-3.jpg" class="img-fluid avater" alt=""/>
									<h4 id="sellernme">Adam Harshvardhan</h4>
									<span id="sellerlocationdetail">Canada USA</span>
								</div>
								
								<div class="d-navigation">
									<ul>
										<li class="active"><a href="dashboard.html"><i class="ti-user"></i>My Profile</a></li>
										<li><a href="my-property.html"><i class="ti-layers"></i>My Properties</a></li>
										<li><a href="submit-property-dashboard.html"><i class="ti-pencil-alt"></i>All Bids</a></li>
										<li onClick={()=>logout()}><a href="#"><i class="ti-power-off"></i>Log Out</a></li>
									</ul>
								</div>
								
							</div>
						</div>
						{show=="My Profile"?<SellerProfileInfo/>:null}

			</div>
		</div>
	)
}

export default SellerProfile
