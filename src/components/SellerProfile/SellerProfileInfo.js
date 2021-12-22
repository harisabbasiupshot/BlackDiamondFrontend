import React from 'react'

function SellerProfileInfo({sellerprofile}) {
    return (
        <div class="col-lg-9 col-md-8">
							
							<div class="row">
								<div class="col-lg-12 col-md-12 col-sm-12">
									<h4>Your Current Package: <span class="pc-title theme-cl">Gold Package</span></h4>
								</div>
							</div>
							
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
							
							<div class="row">
								<div class="col-lg-12 col-md-12 col-sm-12">
									<div class="card-header" id="Packages">
									  <h2 class="mb-0">
										<button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#extraPackages" aria-expanded="false" aria-controls="extraSer">
										  See Available Packages and Payment Methods
										</button>
									  </h2>
									</div>
									<div id="extraPackages" class="collapse" aria-labelledby="Packages" data-parent="#accordionExample">
										<div class="row">
											<div class="col-lg-4 col-md-4 c-l-sm-12">
												<div class="package-box">
													<span class="theme-cl">Gold Package</span>
													<h4 class="packages-features-title">USD 49 / 1 year</h4>
													<ul class="packages-lists-list">
														<li>Unlimited listings</li>
														<li>100 Featured</li>
														<li>Unlimited Images</li>
														<li>Help &amp; Support</li>
													</ul>
													<div class="buypackage">
														<div class="switchbtn paying">
															<input id="gold" class="switchbtn-checkbox" type="radio" value="2" checked="" name="package7"/>
															<label class="switchbtn-label" for="gold"></label>
														</div>
														<span>Switch to this package</span>
													</div>
												</div>
											</div>
											
											<div class="col-lg-4 col-md-4 c-l-sm-12">
												<div class="package-box">
													<span class="theme-cl">Premium Package</span>
													<h4 class="packages-features-title">USD 39 / 1 year</h4>
													<ul class="packages-lists-list">
														<li>20 listings</li>
														<li>5 Featured</li>
														<li>5 Images/ per list</li>
														<li>Help &amp; Support</li>
													</ul>
													<div class="buypackage">
														<div class="switchbtn paying">
															<input id="premium" class="switchbtn-checkbox" type="radio" value="2" name="package7"/>
															<label class="switchbtn-label" for="premium"></label>
														</div>
														<span>Switch to this package</span>
													</div>
												</div>
											</div>
											<div class="col-lg-4 col-md-4 c-l-sm-12">
												<div class="package-box">
													<span class="theme-cl">Standard Package</span>
													<h4 class="packages-features-title">USD 10 / 1 year</h4>
													<ul class="packages-lists-list">
														<li>10 listings</li>
														<li>2 Featured</li>
														<li>2 Images</li>
														<li>Help &amp; Support</li>
													</ul>
													<div class="buypackage">
														<div class="switchbtn paying">
															<input id="standard" class="switchbtn-checkbox" type="radio" value="2" name="package7"/>
															<label class="switchbtn-label" for="standard"></label>
														</div>
														<span>Switch to this package</span>
													</div>
												</div>
											</div>
										
										</div>
										
										<div class="row mt-5">
											<div class="col-lg-12 col-md-12">
												<h4>Payment Method</h4>
											</div>
											<div class="col-lg-12 col-md-12">
												<a href="#" class="pay-btn paypal">Pay with PayPal</a>
												<a href="#" class="pay-btn stripe">Pay with Stripe</a>
												<a href="#" class="pay-btn wire-trans">Wire Transfer</a>
											</div>
										</div>
										
									</div>
								</div>
							</div>
					
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
