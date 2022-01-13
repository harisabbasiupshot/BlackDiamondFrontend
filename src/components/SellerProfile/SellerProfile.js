import React, { useState, useEffect, useContext } from 'react'
import { useParams, withRouter, useHistory } from "react-router-dom";
import './SellerProfile.css'
import { UserContext } from '../UserContext'
import SellerProfileInfo from './SellerProfileInfo';
import SellerProperties from './SellerProperties';
import axios from 'axios'
import SellerBids from './SellerBids';
function SellerProfile() {
	let params = useParams();
	let history = useHistory();
	const valuecontext = useContext(UserContext);
	const [show, setShow] = useState("My Profile")
	const [sellerprofile, setSellerprofile] = useState([])
	const getProfile = (id) => {
		axios.get('http://127.0.0.1:8000/api/get-user?id=' + id)
			.then(response => {
				console.log("Seller Info", response.data)
				if(response.data.user){
					
				}else{
					history.push('/')
				}
				if(response.data.user.role!=2){
					history.push('/')
				}
				setSellerprofile(response.data.user)
			})
			.catch(function (error) {
				console.log(error);
				console.log("Aey te error hai bro")
			})

	}
	useEffect(() => {
		console.log("Seller info id: ", params.id)
		getProfile(params.id)

	}, [])
	const logout = () => {
		valuecontext.logout()
	}
	const setShowWich = (name) => {
		setShow(name)
	}
	return (
		<section>
			<div class="container-fluid marginmanaged">
				<div class="row">
					<div class="col-lg-3 col-md-4">
						<div class="dashboard-navbar">

							<div class="d-user-avater">
								<img src={sellerprofile.profile_image?"http://127.0.0.1:8000"+sellerprofile.profile_image:"https://cdn-icons-png.flaticon.com/512/149/149071.png"}class="img-fluid avater" alt="" />
								<h4 id="sellernme">{sellerprofile.name}</h4>
								<span id="statusbuttonSP">Seller</span><br />
								<span id="sellerlocationdetail">Canada USA</span><br />
								<span id="sellerlocationdetail"><i class="lni-phone-handset"></i>{sellerprofile.phone}</span><br />

							</div>

							<div class="d-navigation">
								<ul>
									<li onClick={() => setShow("My Profile")} id="dashboardoption" class={show == "My Profile" ? "active" : null}><a ><i class="ti-user"></i>My Profile</a></li>
									<li onClick={() => setShow("My Properties")} id="dashboardoption" class={show == "My Properties" ? "active" : null}><a ><i class="ti-layers"></i>My Properties</a></li>
									<li onClick={() => setShow("All Bids")} id="dashboardoption" class={show == "All Bids" ? "active" : null}><a ><i class="ti-pencil-alt"></i>All Bids</a></li>
									{valuecontext.loggeduser ? valuecontext.loggeduser.id == sellerprofile.id ? <li onClick={() => logout()} id="dashboardoption"><a ><i class="ti-power-off"></i>Log Out</a></li> : null : null}
								</ul>
							</div>

						</div>
					</div>
					{show == "My Profile" ? <SellerProfileInfo sellerprofile={sellerprofile} /> : null}
					{show == "My Properties" ? <SellerProperties sellerprofile={sellerprofile} /> : null}
					{show == "All Bids" ? null : null}

				</div>
			</div>
		</section>
	)
}

export default SellerProfile
