import React, { useState, useEffect, useContext } from 'react'
import { useParams, withRouter, useHistory } from "react-router-dom";
import { UserContext } from '../UserContext'
import '../fullcss.css'
import axios from 'axios'
import BuyerBids from './BuyerBids';

function BuyerProfile() {
	let params = useParams();
	let history = useHistory();
	const valuecontext = useContext(UserContext);
	const [buyerprofile, setBuyerprofile] = useState("")
	const [remainingbids, setRemainingbids] = useState("")
	
	const showSubBidPage=()=>{
		history.push('/subscribebid')

	}
	const getRemainingBids=(id)=>{
		const data2={
			user_id:id
		}
		const URL = "http://127.0.0.1:8000/api/get-remaining-bids";

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
            console.log("remaining bids",response.data.remaining_bids)
			
			if(response.data.remaining_bids==null){
				setRemainingbids(10)
			}else{
				setRemainingbids(response.data.remaining_bids.remaining_bids)
			}
            
        })


            .catch(error => {

                console.log("Error is: ", error.response)
            });

	}

	const getProfile=(id)=>{
		axios.get('http://127.0.0.1:8000/api/get-user?id='+id)
            .then(response => {
                console.log("Buyer Info", response.data)
				if(response.data.user){
					
				}else{
					history.push('/')
				}
				if(response.data.user.role!=3){
					history.push('/')
				}
				setBuyerprofile(response.data.user)
            })
            .catch(function (error) {
                console.log(error);
                console.log("Aey te error hai bro")
            })

	}
	const getBuyerBids=(id)=>{
		axios.get('http://127.0.0.1:8000/api/get-buyer-bids?id='+id)
            .then(response => {
                console.log("Bids Of Buyer", response.data.buyer_bids)
                //setBids(response.data.prperty.bids)
            })
            .catch(function (error) {
                console.log(error);
                console.log("Aey te error hai bro")
            })

	}
	useEffect(() => {
		console.log("Buyer info id: ", params.id)
		getProfile(params.id)
		getRemainingBids(params.id)
		getBuyerBids(params.id)

	}, [])

	return (
			<div class="row">
				<div class="col-lg-12 col-md-12">
					<div class="agency agency-list shadow-0 mt-2 mb-2">

						<a href="agency-page.html" id="sellerprofileimgdiv">
							<img src={buyerprofile.profile_image?"http://127.0.0.1:8000"+buyerprofile.profile_image:"https://cdn-icons-png.flaticon.com/512/149/149071.png"} id="sellerprofileimg"  alt="" />
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
							<div id="dashboard-stat-content"><h4 id="dashboard-stat-iconh4">{remainingbids?remainingbids:remainingbids}</h4> <span id="dashboard-stat-iconspan">Bids Remaining</span></div>
							<div id="dashboard-stat-icon"><i class="ti-location-pin"></i></div>
						</div>
						
					</div>
					{valuecontext.loggeduser ? valuecontext.loggeduser.id == parseInt(buyerprofile.id) ? <span id="subscribebidsbutton" onClick={showSubBidPage} > Subscribe To Bids</span> : null : null}
					<div class="positionpaydiv">
					
					</div>	
				</div>
				<BuyerBids id={params.id} buyerprofile={buyerprofile} />


			</div>


	)
}

export default BuyerProfile
