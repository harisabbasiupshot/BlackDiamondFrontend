import React,{useState,useEffect} from 'react'
import './SellerProfile.css'
function SellerBids() {
    const OnAccept = (id) => {
		console.log("We will accept bid of id: ",id)
	}
    const OnReject = (id) => {
		console.log("We will reject bid of id: ",id)
	}
    return (
        <div class="col-lg-9 col-md-8">
		
					
							<div class="dashboard-wraper">
							
								<div class="form-submit">	
									<h4 id="myaccountseller">Seller Bids</h4>
									
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
													<span class="table-property-price">Starts From $900s</span>
                                                    <h5 id="byuserh4"><a id="byusera">By Hassam Khan</a></h5>
												</div>
											</td>
											<td class="action">
												<a class="delete" onClick={() => OnReject(1)} style={{cursor:'pointer'}}><i class="ti-close" ></i> Delete</a>
                                                <a  class="delete" onClick={() => OnAccept(1)} style={{cursor:'pointer'}}><i class="ti-check-box" ></i> Accept</a>
											</td>
										</tr>

										<tr>
											<td class="property-container">
												<div class="title">
													<h4 id="bidtitleh4"><a id="bidtitlea">Oak Tree Villas</a></h4>
													<span id="bidofferdiscription">71 Lower River Dr. Bronx, NY</span>
													<span class="table-property-price">Starts From $535,000</span>
                                                    <h5 id="byuserh4"><a id="byusera">By Hassam Khan</a></h5>
												</div>
											</td>
											<td class="action">
												<a  class="delete" onClick={() => OnReject(2)} style={{cursor:'pointer'}}><i class="ti-close" ></i> Delete</a>
                                                <a  class="delete" onClick={() => OnAccept(2)} style={{cursor:'pointer'}}><i class="ti-check-box" ></i> Accept</a>
											</td>
										</tr>

										<tr>
											<td class="property-container">
												<div class="title">
													<h4 id="bidtitleh4"><a id="bidtitlea">Selway Villas</a></h4>
													<span id="bidofferdiscription">33 William St. Northbrook, IL </span>
													<span class="table-property-price">Starts From $420,000</span>
                                                    <h5 id="byuserh4"><a id="byusera">By Hassam Khan</a></h5>
												</div>
											</td>
											<td class="action">
												<a  class="delete" onClick={() => OnReject(3)} style={{cursor:'pointer'}}><i class="ti-close" ></i> Delete</a>
                                                <a  class="delete" onClick={() => OnAccept(3)} style={{cursor:'pointer'}}><i class="ti-check-box" ></i> Accept</a>
											</td>
										</tr>

										<tr>
											<td class="property-container">
												<div class="title">
													<h4 id="bidtitleh4"><a href="#" id="bidtitlea">Town Manchester</a></h4>
													<span id="bidofferdiscription"> 7843 Durham Avenue, MD  </span>
													<span class="table-property-price">Starts From $420,000</span>
                                                    <h5 id="byuserh4"><a id="byusera">By Hassam Khan</a></h5>
												</div>
											</td>
											<td class="action">
												<a  class="delete" onClick={() => OnReject(4)} style={{cursor:'pointer'}}><i class="ti-close" ></i> Delete</a>
                                                <a  class="delete" onClick={() => OnAccept(4)} style={{cursor:'pointer'}}><i class="ti-check-box" ></i> Accept</a>
											</td>
                                            
										</tr>

									</tbody>
								</table>
								
								
								
							</div>
						</div>
    )
}

export default SellerBids
