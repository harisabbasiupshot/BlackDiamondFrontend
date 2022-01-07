import React, { useEffect, useState } from 'react'
import '../SellerProfile/SellerProfile.css'
import PropertyBidSingle from './PropertyBidSingle';
function PropertyBids({ bids }) {
    
    const OnAccept = (id) => {
        console.log("We will accept bid of id: ", id)

    }
    const OnReject = (id) => {
        console.log("We will reject bid of id: ", id)
    }
    useEffect(() => {
        console.log(bids)

    }, []);
    return (
        <div id="propertypagebidsdiv">


            <div class="dashboard-wraper">

                <div class="form-submit">
                    <h4 id="myaccountseller">Property Bids</h4>

                </div>
                <table class="property-table-wrap responsive-table bkmark">

                    <tbody>
                        <tr>
                            <th><i class="fa fa-file-text"></i> {bids.length>0?"Bids":"No Bids"}</th>
                            <th></th>
                        </tr>

                        
                        {bids.map(bid => (
                            <PropertyBidSingle bid={bid} />
                                            /* <tr>
											<td class="property-container">
												<div class="title">
													<h4 id="bidtitleh4"><a href="#" id="bidtitlea">{bid.title}</a></h4>
													<span id="bidofferdiscription"> {bid.offer_description} </span>
													<span class="table-property-price">$420,000</span>
                                                    <h5 id="byuserh4"><a id="byusera">By </a></h5>
												</div>
											</td>
											<td class="action">
												<a  class="delete" onClick={() => OnReject(4)} style={{cursor:'pointer'}}><i class="ti-close" ></i> Delete</a>
                                                <a  class="delete" onClick={() => OnAccept(4)} style={{cursor:'pointer'}}><i class="ti-check-box" ></i> Accept</a>
											</td>
                                            
										</tr> */
                                        


                        ))}

                    </tbody>
                </table>



            </div>
        </div>
    )
}

export default PropertyBids
