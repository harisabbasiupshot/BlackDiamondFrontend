import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../UserContext'
function Footer() {
	const valuecontext = useContext(UserContext);
	useEffect(() => {
		console.log("it's just don't wanna print")
		console.log("valuecontext", valuecontext)



	}, []);
	return (
		<div>
			<footer class="dark-footer skin-dark-footer">
				<div>
					<div class="container">
						<div class="row">

							<div class="col-lg-3 col-md-4">
								<div class="footer-widget">
									<img src="assets/img/logo-light.png" class="img-footer" alt="" />
									<div class="footer-add">
										<p>Collins Street West, Victoria 8007, United States.</p>
										<p>+1 246-345-0695</p>
										<p>blackdiamond@example.com</p>
									</div>

								</div>
							</div>
							<div class="col-lg-2 col-md-4">
								<div class="footer-widget">
									<h4 class="widget-title">Property</h4>
									<ul class="footer-menu">
										<li><a href="/newproperties">New Properties</a></li>
										<li><a href="/addnewproperty">Add Property</a></li>
									</ul>
								</div>
							</div>

							<div class="col-lg-2 col-md-4">
								<div class="footer-widget">
									<h4 class="widget-title">The Highlights</h4>
									<ul class="footer-menu">
										<li><a href="/newproperties">Houses</a></li>
										<li><a href="/newproperties">Shop</a></li>
									</ul>
								</div>
							</div>

							<div class="col-lg-2 col-md-6">
								<div class="footer-widget">
									<h4 class="widget-title">My Account</h4>
									<ul class="footer-menu">
										{valuecontext.loggeduser ?
											<li><a href={valuecontext.loggeduser.role == 2 ? "/sellerprofile/" + valuecontext.loggeduser.id : "/buyerprofile/" + valuecontext.loggeduser.id}>My Profile</a>
											</li>
											: <li><a href={"/sign-in"}>Login</a>
											</li>}
										{valuecontext.loggeduser ? valuecontext.loggeduser.role == 2 ? <li>
											<a href={"/sellerprofile/" + valuecontext.loggeduser.id}>My Properties</a></li>
											: <li>
											<a href={"/buyerprofile/" + valuecontext.loggeduser.id}>My Bids</a></li>
											: <li><a href={"/signup"}>Sign Up</a>
											</li>}
											{valuecontext.loggeduser ? valuecontext.loggeduser.role == 2 ? <li>
											<a href={"/sellerprofile/" + valuecontext.loggeduser.id}>My Bids</a></li>
											: null
											: null}
											{valuecontext.loggeduser ? valuecontext.loggeduser.role == 3 ? <li>
											<a href={"/subscribebid"}>Subscribe To Bids</a></li>
											: null
											: null}
									</ul>
								</div>
							</div>



						</div>
					</div>
				</div>

				<div class="footer-bottom">
					<div class="container">
						<div class="row align-items-center">

							<div class="col-lg-6 col-md-6">
								<p class="mb-0">© 2022 Black-Diamond. </p>
							</div>

							<div class="col-lg-6 col-md-6 text-right">
								<ul class="footer-bottom-social">
									<li><a href="#"><i class="ti-facebook"></i></a></li>
									<li><a href="#"><i class="ti-twitter"></i></a></li>
									<li><a href="#"><i class="ti-instagram"></i></a></li>
									<li><a href="#"><i class="ti-linkedin"></i></a></li>
								</ul>
							</div>

						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default Footer
