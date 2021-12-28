import React from 'react'

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
									<h4>My Account</h4>
									<div class="submit-section">
										<div class="form-row">
										
											<div class="form-group col-md-6">
												<label>Name</label><br/>
												<span id="sellerprofilelocation">{sellerprofile.name}</span>
											</div>
											
											<div class="form-group col-md-6">
												<label>Email</label><br/>
												<span id="sellerprofilelocation">{sellerprofile.email}</span>
											</div>
											
											
											
											<div class="form-group col-md-6">
												<label>Phone</label><br/>
												<span id="sellerprofilelocation">{sellerprofile.phone}</span>
											</div>
											
											
											
											
											
										</div>
									</div>
								</div>
								
								{/* <div class="form-submit">	
									<h4>Social Accounts</h4>
									<div class="submit-section">
										<div class="form-row">
										
											<div class="form-group col-md-6">
												<label>Facebook</label>
												<input type="text" class="form-control" value="https://facebook.com/"/>
											</div>
											
											<div class="form-group col-md-6">
												<label>Twitter</label>
												<input type="email" class="form-control" value="https://twitter.com/"/>
											</div>
											
											<div class="form-group col-md-6">
												<label>Google Plus</label>
												<input type="text" class="form-control" value="https://googleplus.com/"/>
											</div>
											
											<div class="form-group col-md-6">
												<label>LinkedIn</label>
												<input type="text" class="form-control" value="https://linkedin.com/"/>
											</div>
											
											<div class="form-group col-lg-12 col-md-12">
												<button class="btn btn-theme" type="submit">Save Changes</button>
											</div>
											
										</div>
									</div>
								</div> */}
								
							</div>
						</div>
    )
}

export default SellerProfileInfo
