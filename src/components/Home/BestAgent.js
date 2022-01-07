import React,{useState,useEffect,useContext} from 'react'
import axios from 'axios'
function BestAgent() {
	const [ceomessage, setCeomessage] = useState("My Profile")
	useEffect(() => {
        
        axios.get('http://127.0.0.1:8000/api/ceo-message')
            .then(response => {
                console.log("CEO MESSAGE: ", response.data.message)
				setCeomessage(response.data.message)
            })
            .catch(function (error) {
                console.log(error);
                console.log("Aey te error hai bro")
            })



    }, []);
  return (
    <section class="image-cover" style={{background:"url(assets/img/tour-6.jpg) no-repeat"}} data-overlay="8">
				<div class="container">
					<div class="row justify-content-center">
						
						<div class="col-lg-8 col-md-8">
							
							<div class="smart-textimonials smart-light smart-center slick-initialized slick-slider" id="smart-textimonials">
								
								<div aria-live="polite" class="slick-list draggable"><div class="slick-track" role="listbox" style={{opacity: 1, width: "5390px", transform: "translate3d(-770px, 0px, 0px)"}}><div class="item slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" tabindex="-1" style={{width: "770px"}}>
									<div class="smart-tes-content">
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
									</div>
									
									<div class="smart-tes-author">
										<div class="st-author-box">
											<div class="st-author-thumb">
												<img src="assets/img/user-6.jpg" class="img-fluid" alt=""/>
											</div>
											<div class="st-author-info">
												<h4 class="st-author-title">Shilpa Srivastava</h4>
												<span class="st-author-subtitle">CEO Of Microwoft</span>
											</div>
										</div>
									</div>
								</div><div class="item slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="-1" role="option" aria-describedby="slick-slide00" style={{width: "770px"}}>
									<div class="smart-tes-content">
										<p>{ceomessage}</p>
									</div>
									
									<div class="smart-tes-author">
										<div class="st-author-box">
											<div class="st-author-thumb">
												<img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" class="img-fluid" alt=""/>
											</div>
											<div class="st-author-info">
												<h4 class="st-author-title">David Wallace</h4>
												<span class="st-author-subtitle">CEO</span>
											</div>
										</div>
									</div>
								</div></div></div>
								
								
								
							</div>
						</div>
						
					</div>
				</div>
			</section>
  )
}

export default BestAgent
