import React, { useState, useEffect, useContext } from 'react'
import '../SellerProfile/SellerProfile.css'
import axios from 'axios'
import { UserContext } from '../UserContext'
import { useParams, withRouter, useHistory } from "react-router-dom";

function BuyerBids({ id, buyerprofile }) {
    const [bids, setBids] = useState(null);
    const valuecontext = useContext(UserContext);
    let history = useHistory(); 
    

    const openProperty = (idd) => {
        history.push('/property/' + idd);
    }
    const getBuyerBids = (id) => {
        axios.get(process.env.REACT_APP_PRODUCTION+'/api/get-buyer-bids?id=' + id)
            .then(response => {
                console.log("Bids Of Buyer..", response.data.buyer_bids)
                setBids(response.data.buyer_bids)
                //setBids(response.data.prperty.bids)
            })
            .catch(function (error) {
                console.log(error);
                console.log("Aey te error hai bro")
            })

    }
    useEffect(() => {
        getBuyerBids(id)

    }, [])

    return (<div id="propertypagebidsdiv">


        <div class="dashboard-wraper">

            <div class="form-submit">
                <h4 id="myaccountseller">Property Bids</h4>

            </div>
            <table class="property-table-wrap responsive-table bkmark">

                <tbody>
                    <tr>
                        <th><i class="fa fa-file-text"></i> {bids ? bids.length == 0 ? "No" : bids.length : null} Bids</th>
                        <th></th>
                    </tr>
                    {bids && bids.map(bid => (
                        <tr>
                            <td class="property-container">
                                <div class="title">
                                    <h4 id="bidtitleh4"><a id="bidtitlea">{bid.title}</a></h4>
                                    <span id="bidofferdiscription">{bid.offer_description} </span>
                                    <span class="table-property-price">Starts from: ${bid.start_price}</span>
                                    <h5 id="byuserh4"><a id="byusera">By {buyerprofile ? buyerprofile.name : null}</a></h5>
                                </div>
                            </td>
                            <td class="action">
                                
                                {bid.status == 3? <span id="statusbuttonPP" style={{backgroundColor:'#8b0101'}} >Rejected</span>:null} 
                                {bid.status == 1? <span id="statusbuttonPP" >Accepted</span>:null} 
                                {bid.status == 2? <span id="statusbuttonPP" >Pending</span>:null} 
                                <span id="statusbuttonPP3" onClick={()=>openProperty(bid.property_id)} >Open Property Ad</span> 
                            </td>

                        </tr>

                    ))}





                    

                </tbody>
            </table>



        </div>
    </div>
    )
}

export default BuyerBids
