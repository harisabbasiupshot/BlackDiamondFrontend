import React from 'react'
import './SellerProfile.css'
function SellerProfileInfo({sellerprofile}) {
    return (
        <div class="col-lg-9 col-md-8">
							
							
							
							{/* <div class="row">
					
								<div class="col-lg-4 col-md-6 col-sm-12">
									<div class="dashboard-stat widget-1">
										<div class="dashboard-stat-content"><h4>607</h4> <span>Listings Included</span></div>
										<div class="dashboard-stat-icon"><i class="ti-location-pin"></i></div>
									</div>	
								</div>
								
								<div class="col-lg-4 col-md-6 col-sm-12">
									<div class="dashboard-stat widget-2">
										<div class="dashboard-stat-content"><h4>102</h4> <span>Listings Remaining</span></div>
										<div class="dashboard-stat-icon"><i class="ti-pie-chart"></i></div>
									</div>	
								</div>
								
								<div class="col-lg-4 col-md-6 col-sm-12">
									<div class="dashboard-stat widget-3">
										<div class="dashboard-stat-content"><h4>70</h4> <span>Featured Included</span></div>
										<div class="dashboard-stat-icon"><i class="ti-user"></i></div>
									</div>	
								</div>
								
								<div class="col-lg-4 col-md-6 col-sm-12">
									<div class="dashboard-stat widget-4">
										<div class="dashboard-stat-content"><h4>30</h4> <span>Featured Remaining</span></div>
										<div class="dashboard-stat-icon"><i class="ti-location-pin"></i></div>
									</div>	
								</div>
								
								<div class="col-lg-4 col-md-6 col-sm-12">
									<div class="dashboard-stat widget-5">
										<div class="dashboard-stat-content"><h4>Unlimited</h4> <span>Images / per listing</span></div>
										<div class="dashboard-stat-icon"><i class="ti-pie-chart"></i></div>
									</div>	
								</div>
								
								<div class="col-lg-4 col-md-6 col-sm-12">
									<div class="dashboard-stat widget-6">
										<div class="dashboard-stat-content"><h4>2021-02-26</h4> <span>Ends On</span></div>
										<div class="dashboard-stat-icon"><i class="ti-user"></i></div>
									</div>	
								</div>

							</div> */}
							
							
					
							<div class="dashboard-wraper">
							
								<div class="form-submit">	
									<h4 id="myaccountseller">My Account</h4>
									<div class="submit-section">
										<div class="form-row">
										
											<div class="form-group col-md-6">
												<label id="normalwordsinsellerinfo">Name</label><br/>
												<span id="sellerprofilelocation">{sellerprofile.name}</span>
											</div>
											
											<div class="form-group col-md-6">
												<label id="normalwordsinsellerinfo">Email</label><br/>
												<span id="sellerprofilelocation">{sellerprofile.email}</span>
											</div>
											
											
											
											<div class="form-group col-md-6">
												<label id="normalwordsinsellerinfo">Phone</label><br/>
												<span id="sellerprofilelocation">{sellerprofile.phone}</span>
											</div>
											
											
											
											
											
										</div>
									</div>
								</div>
								
								
								
							</div>
						</div>
    )
}

export default SellerProfileInfo
