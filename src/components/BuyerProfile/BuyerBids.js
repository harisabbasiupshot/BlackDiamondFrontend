import React,{useState,useEffect} from 'react'
import '../SellerProfile/SellerProfile.css'
const OnAccept = (id) => {
    console.log("We will accept bid of id: ",id)
}
const OnReject = (id) => {
    console.log("We will reject bid of id: ",id)
}
function BuyerBids() {
    return (<div id="propertypagebidsdiv">


    <div class="dashboard-wraper">

        <div class="form-submit">
            <h4 id="myaccountseller">Property Bids</h4>

        </div>
        <table class="property-table-wrap responsive-table bkmark">

            <tbody>
                <tr>
                    <th><i class="fa fa-file-text"></i> Bids</th>
                    <th></th>
                </tr>

                <tr>
                    <td class="property-container">
                        <div class="title">
                            <h4 id="bidtitleh4"><a id="bidtitlea">Serene Uptown</a></h4>
                            <span id="bidofferdiscription">6 Bishop Ave. Perkasie, PA </span>
                            <span class="table-property-price">Starts from: $900s</span>
                            <h5 id="byuserh4"><a id="byusera">By Hassam Khan</a></h5>
                        </div>
                    </td>
                    <td class="action">
                        <a class="delete" onClick={() => OnReject(1)} style={{ cursor: 'pointer' }}><i class="ti-close" ></i> Cancel</a>
                        
                    </td>
                </tr>

                <tr>
                    <td class="property-container">
                        <div class="title">
                            <h4 id="bidtitleh4"><a id="bidtitlea">Oak Tree Villas</a></h4>
                            <span id="bidofferdiscription">71 Lower River Dr. Bronx, NY</span>
                            <span class="table-property-price">Starts from: $535,000</span>
                            <h5 id="byuserh4"><a id="byusera">By Hassam Khan</a></h5>
                        </div>
                    </td>
                    <td class="action">
                        <a class="delete" onClick={() => OnReject(2)} style={{ cursor: 'pointer' }}><i class="ti-close" ></i> Cancel</a>
                        
                    </td>
                </tr>

                <tr>
                    <td class="property-container">
                        <div class="title">
                            <h4 id="bidtitleh4"><a id="bidtitlea">Selway Villas</a></h4>
                            <span id="bidofferdiscription">33 William St. Northbrook, IL </span>
                            <span class="table-property-price">Starts from: $420,000</span>
                            <h5 id="byuserh4"><a id="byusera">By Hassam Khan</a></h5>
                        </div>
                    </td>
                    <td class="action">
                        <a class="delete" onClick={() => OnReject(3)} style={{ cursor: 'pointer' }}><i class="ti-close" ></i> Cancel</a>
                        
                    </td>
                </tr>

                <tr>
                    <td class="property-container">
                        <div class="title">
                            <h4 id="bidtitleh4"><a href="#" id="bidtitlea">Town Manchester</a></h4>
                            <span id="bidofferdiscription"> 7843 Durham Avenue, MD  </span>
                            <span class="table-property-price">Starts from: $420,000</span>
                            <h5 id="byuserh4"><a id="byusera">By Hassam Khan</a></h5>
                        </div>
                    </td>
                    <td class="action">
                        <a class="delete" onClick={() => OnReject(4)} style={{ cursor: 'pointer' }}><i class="ti-close" ></i> Cancel</a>
                    </td>

                </tr>
                {/* {bids.map(bid => (
                    <PropertyBidSingle bid={bid} />
                                   
                                


                ))} */}

            </tbody>
        </table>



    </div>
</div>
    )
}

export default BuyerBids
