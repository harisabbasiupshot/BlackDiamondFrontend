import React,{useEffect,useState} from 'react'

function NewAllProperties() {
	const [currentpage, setCurrentpage] = useState(1)
	const changepage=(pagenumber)=>{
		console.log("CHange page event called",pagenumber)
	}
    return (
            <div class="col-lg-8 col-md-8 col-sm-12">
							<div class="row">
							
								<div class="col-lg-12 col-md-12">
									<div class="filter-fl">
										<h4>Total Property Find is: <span class="theme-cl">207</span></h4>
										<div class="btn-group custom-drop">
											<button type="button" class="btn btn-order-by-filt light" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
												Short By<i class="ti-angle-down"></i>
											</button>
											<div class="dropdown-menu pull-right animated flipInX">
												<a href="#">Latest</a>
												<a href="#">Most View</a>
												<a href="#">Most Popular</a>
											</div> 
										</div>
									</div>
								</div>
								
							</div>
							
							<div class="row">
							
								<div class="col-lg-6 col-md-6">
									<div class="property-listing property-1">
											
										<div class="listing-img-wrapper">
											<a href="single-property-2.html">
												<img src="assets/img/p-1.jpg" class="img-fluid mx-auto" alt=""/>
											</a>
											<div class="listing-like-top">
												<i class="ti-heart"></i>
											</div>
											<div class="listing-rating">
												<i class="ti-star filled"></i>
												<i class="ti-star filled"></i>
												<i class="ti-star filled"></i>
												<i class="ti-star filled"></i>
												<i class="ti-star"></i>
											</div>
											<span class="property-type">For Sale</span>
										</div>
										
										<div class="listing-content">
										
											<div class="listing-detail-wrapper">
												<div id="listing-short-detail">
													<h4 id="listing-name"><a href="single-property-2.html" id="listing-namea">Resort Valley Ocs</a></h4>
													<span class="listing-location"><i class="ti-location-pin"></i>3848 Swick Hill, New Orleans</span>
												</div>
											</div>
										
											<div id="listingfeaturesinfoline">
												<ul id="ulflexing">
													<li id="libeds"><strong>Bed:</strong>2</li>
													<li id="libeds"><strong>Bath:</strong>1</li>
													<li id="libeds"><strong>Sqft:</strong>3,700</li>
												</ul>
											</div>
										
											<div class="listing-footer-wrapper">
												<div id="listingprizediv">
													<h4 id="listingprizedivtext">$632,580</h4>
												</div>
												<div id="listingdetailsbutton">
													<a href="single-property-2.html" id="listingdetailsbuttontext">More Info</a>
												</div>
											</div>
											
										</div>
										
									</div>
								</div>
								<div class="col-lg-6 col-md-6">
									<div class="property-listing property-1">
											
										<div class="listing-img-wrapper">
											<a href="single-property-2.html">
												<img src="assets/img/p-2.jpg" class="img-fluid mx-auto" alt=""/>
											</a>
											<div class="listing-like-top">
												<i class="ti-heart"></i>
											</div>
											<div class="listing-rating">
												<i class="ti-star filled"></i>
												<i class="ti-star filled"></i>
												<i class="ti-star filled"></i>
												<i class="ti-star filled"></i>
												<i class="ti-star"></i>
											</div>
											<span class="property-type">For Rent</span>
										</div>
										
										<div class="listing-content">
										
											<div class="listing-detail-wrapper">
												<div id="listing-short-detail">
													<h4 id="listing-name"><a href="single-property-2.html" id="listing-namea">New Clue Apartment</a></h4>
													<span class="listing-location"><i class="ti-location-pin"></i>127, Quice Market, New York</span>
												</div>
											</div>
										
											<div id="listingfeaturesinfoline">
												<ul id="ulflexing">
													<li id="libeds"><strong>Bed:</strong>2</li>
													<li id="libeds"><strong>Bath:</strong>2</li>
													<li id="libeds"><strong>Sqft:</strong>2,900</li>
												</ul>
											</div>
										
											<div class="listing-footer-wrapper">
												<div id="listingprizediv">
													<h4 id="listingprizedivtext">$3,570</h4>
												</div>
												<div id="listingdetailsbutton">
													<a href="single-property-2.html" id="listingdetailsbuttontext">More Info</a>
												</div>
											</div>
											
										</div>
										
									</div>
								</div>
								<div class="col-lg-6 col-md-6">
									<div class="property-listing property-1">
											
										<div class="listing-img-wrapper">
											<a href="single-property-2.html">
												<img src="assets/img/p-3.jpg" class="img-fluid mx-auto" alt=""/>
											</a>
											<div class="listing-like-top">
												<i class="ti-heart"></i>
											</div>
											<div class="listing-rating">
												<i class="ti-star filled"></i>
												<i class="ti-star filled"></i>
												<i class="ti-star filled"></i>
												<i class="ti-star filled"></i>
												<i class="ti-star"></i>
											</div>
											<span class="property-type">For Sale</span>
										</div>
										
										<div class="listing-content">
										
											<div class="listing-detail-wrapper">
												<div id="listing-short-detail">
													<h4 id="listing-name"><a href="single-property-2.html" id="listing-namea">Luxury Home in Manhattan</a></h4>
													<span class="listing-location"><i class="ti-location-pin"></i>588 Oakmound Road, Chicago</span>
												</div>
											</div>
										
											<div id="listingfeaturesinfoline">
												<ul id="ulflexing">
													<li id="libeds"><strong>Bed:</strong>3</li>
													<li id="libeds"><strong>Bath:</strong>2</li>
													<li id="libeds"><strong>Sqft:</strong>2,400</li>
												</ul>
											</div>
										
											<div class="listing-footer-wrapper">
												<div id="listingprizediv">
													<h4 id="listingprizedivtext">$182,880</h4>
												</div>
												<div id="listingdetailsbutton">
													<a href="single-property-2.html" id="listingdetailsbuttontext">More Info</a>
												</div>
											</div>
											
										</div>
										
									</div>
								</div>
								<div class="col-lg-6 col-md-6">
									<div class="property-listing property-1">
											
										<div class="listing-img-wrapper">
											<a href="single-property-2.html">
												<img src="assets/img/p-4.jpg" class="img-fluid mx-auto" alt=""/>
											</a>
											<div class="listing-like-top">
												<i class="ti-heart"></i>
											</div>
											<div class="listing-rating">
												<i class="ti-star filled"></i>
												<i class="ti-star filled"></i>
												<i class="ti-star filled"></i>
												<i class="ti-star filled"></i>
												<i class="ti-star"></i>
											</div>
											<span class="property-type">For Rent</span>
										</div>
										
										<div class="listing-content">
										
											<div class="listing-detail-wrapper">
												<div id="listing-short-detail">
													<h4 id="listing-name"><a href="single-property-2.html" id="listing-namea">Energy Certificate for EU</a></h4>
													<span class="listing-location"><i class="ti-location-pin"></i>425 Amethyst Drive, North Adams</span>
												</div>
											</div>
										
											<div id="listingfeaturesinfoline">
												<ul id="ulflexing">
													<li id="libeds"><strong>Bed:</strong>2</li>
													<li id="libeds"><strong>Bath:</strong>2</li>
													<li id="libeds"><strong>Sqft:</strong>2,400</li>
												</ul>
											</div>
										
											<div class="listing-footer-wrapper">
												<div id="listingprizediv">
													<h4 id="listingprizedivtext">$2,680</h4>
												</div>
												<div id="listingdetailsbutton">
													<a href="single-property-2.html" id="listingdetailsbuttontext">More Info</a>
												</div>
											</div>
											
										</div>
										
									</div>
								</div>
								<div class="col-lg-6 col-md-6">
									<div class="property-listing property-1">
											
										<div class="listing-img-wrapper">
											<a href="single-property-2.html">
												<img src="assets/img/p-5.jpg" class="img-fluid mx-auto" alt=""/>
											</a>
											<div class="listing-like-top">
												<i class="ti-heart"></i>
											</div>
											<div class="listing-rating">
												<i class="ti-star filled"></i>
												<i class="ti-star filled"></i>
												<i class="ti-star filled"></i>
												<i class="ti-star filled"></i>
												<i class="ti-star"></i>
											</div>
											<span class="property-type">For Rent</span>
										</div>
										
										<div class="listing-content">
										
											<div class="listing-detail-wrapper">
												<div id="listing-short-detail">
													<h4 id="listing-name"><a href="single-property-2.html" id="listing-namea">Office Space New York</a></h4>
													<span class="listing-location"><i class="ti-location-pin"></i>4192 Caynor Circle, Summit</span>
												</div>
											</div>
										
											<div id="listingfeaturesinfoline">
												<ul id="ulflexing">
													<li id="libeds"><strong>Bed:</strong>2</li>
													<li id="libeds"><strong>Bath:</strong>2</li>
													<li id="libeds"><strong>Sqft:</strong>2,700</li>
												</ul>
											</div>
										
											<div class="listing-footer-wrapper">
												<div id="listingprizediv">
													<h4 id="listingprizedivtext">$2,580</h4>
												</div>
												<div id="listingdetailsbutton">
													<a href="single-property-2.html" id="listingdetailsbuttontext">More Info</a>
												</div>
											</div>
											
										</div>
										
									</div>
								</div>
								<div class="col-lg-6 col-md-6">
									<div class="property-listing property-1">
											
										<div class="listing-img-wrapper">
											<a href="single-property-2.html">
												<img src="assets/img/p-6.jpg" class="img-fluid mx-auto" alt=""/>
											</a>
											<div class="listing-like-top">
												<i class="ti-heart"></i>
											</div>
											<div class="listing-rating">
												<i class="ti-star filled"></i>
												<i class="ti-star filled"></i>
												<i class="ti-star filled"></i>
												<i class="ti-star filled"></i>
												<i class="ti-star"></i>
											</div>
											<span class="property-type">For Sale</span>
										</div>
										
										<div class="listing-content">
										
											<div class="listing-detail-wrapper">
												<div id="listing-short-detail">
													<h4 id="listing-name"><a href="single-property-2.html" id="listing-namea">Apartment to rent in Queens</a></h4>
													<span class="listing-location"><i class="ti-location-pin"></i>818 Modoc Alley, Potlatch</span>
												</div>
											</div>
										
											<div id="listingfeaturesinfoline">
												<ul id="ulflexing">
													<li id="libeds"><strong>Bed:</strong>3</li>
													<li id="libeds"><strong>Bath:</strong>2</li>
													<li id="libeds"><strong>Sqft:</strong>2,800</li>
												</ul>
											</div>
										
											<div class="listing-footer-wrapper">
												<div id="listingprizediv">
													<h4 id="listingprizedivtext">$122,580</h4>
												</div>
												<div id="listingdetailsbutton">
													<a href="single-property-2.html" id="listingdetailsbuttontext">More Info</a>
												</div>
											</div>
											
										</div>
										
									</div>
								</div>			
								
							</div>
							
							<div class="row">
								<div class="col-lg-12 col-md-12 col-sm-12">
									<ul class="pagination p-center">
										<li id="previousitem">
										  <a id="previousitemlink" href="#" aria-label="Previous">
											<span class="ti-arrow-left"></span>
											<span class="sr-only">Previous</span>
										  </a>
										</li>
										<li class="page-item active" onClick={()=>changepage(1)}><a class="page-link" >1</a></li>
										<li class="page-item" onClick={()=>changepage(2)}><a class="page-link" >2</a></li>
										<li class="page-item" onClick={()=>changepage(3)}><a class="page-link" >3</a></li>
										<li class="page-item"><a class="page-link" >...</a></li>
										<li class="page-item" onClick={()=>changepage(18)}><a class="page-link" >18</a></li>
										<li class="page-item">
										  <a class="page-link" href="#" aria-label="Next">
											<span class="ti-arrow-right"></span>
											<span class="sr-only">Next</span>
										  </a>
										</li>
									</ul>
								</div>
							</div>
					
						</div>
    )
}

export default NewAllProperties
