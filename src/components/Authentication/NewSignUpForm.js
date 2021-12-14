import React, { useEffect, useState } from 'react'
import '../fullcss.css'
import axios from 'axios'
import {  useHistory } from "react-router-dom";
function NewSignUpForm() {
	const [email, setEmail] = useState("")
	const [fullname, setFullname] = useState("")
	const [password, setPassword] = useState("")
	const [phone, setPhone] = useState("")
	const [role, setRole] = useState(2)
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);
	let history = useHistory();
	const handleSelectChange = (value) => {
		console.log(value)
		if(value=="Buyer"){
			console.log(3)
			setRole(3)
		}
		if(value=="Seller"){
			console.log(2)
			setRole(2)
		}
		
	}
	
	function validateEmail(email) 
    {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
	const handleChange = () => {
		console.log("EMail in signup form", email)
		const data = new FormData()
		data.set("email", email);
		data.set("password", password);
		data.set("name", fullname);
		data.set("role", role);
		data.set("phone", phone);
		if (fullname == "" || email == "" || phone == "" || password == "" || role == 0) {
			setError("One or more fields are empty")
			return
		} else { 
			if (validateEmail(email)) { 
				console.log(email + ": Email true")
				 const URL = "http://127.0.0.1:8000/api/register-user";
				axios.post(URL,data)
				.then((response) => {
					console.log("Response is ",response.data)
					if(response.data.success==1){
						setSuccess(response.data.message)
						history.push('/sellerprofile')
					}
					
				}).catch((error) => {
    
				}); 



			} else {
				console.log(email + ": Email false")
				setError("Wrong Email Format")
			}
			//i will authenticate user







		}
	}
	return (
		<div style={{ width: '80%', marginLeft: '10%' }} >
			<div class="modal-body">
				<h4 class="modal-header-title">Sign Up</h4>
				<div class="login-form">
					<form>

						<div class="row">

							<div class="col-lg-6 col-md-6">
								<div class="form-group">
									<div class="input-with-icon">
										<input type="text" class="form-control" onChange={(e) => { setFullname(e.target.value) }} placeholder="Full Name" />
										<i class="ti-user"></i>
									</div>
								</div>
							</div>

							<div class="col-lg-6 col-md-6">
								<div class="form-group">
									<div class="input-with-icon">
										<input type="email" onChange={(e) => { setEmail(e.target.value) }} class="form-control" placeholder="Email" />
										<i class="ti-email"></i>
									</div>
								</div>
							</div>

							

							<div class="col-lg-6 col-md-6">
								<div class="form-group">
									<div class="input-with-icon">
										<input type="password" onChange={(e) => { setPassword(e.target.value) }} class="form-control" placeholder="*******" />
										<i class="ti-unlock"></i>
									</div>
								</div>
							</div>

							<div class="col-lg-6 col-md-6">
								<div class="form-group">
									<div class="input-with-icon">
										<input  onChange={(e) => { setPhone(e.target.value) }} class="form-control" placeholder="123 546 5847" />
										<i class="lni-phone-handset"></i>
									</div>
								</div>
							</div>

							<div class="col-lg-6 col-md-6">
								<div class="form-group">
									<div class="input-with-icon">
										<select class="form-control" onChange={(e) => handleSelectChange(e.target.value)}>
											<option>Seller</option>
											<option>Buyer</option>
										</select>
										<i class="ti-briefcase"></i>
									</div>
								</div>
							</div>
							{/* <div class="col-lg-6 col-md-6" >
								<div className="form-group">
									<label style={{marginLeft:'80%'}} id="uploadprofilepic">Upload Profile Pic</label>
									<input style={{marginLeft:'80%'}} type="file" name="file" onChange={onIMGChangeHandler} />
								</div>
							</div> */}

						</div>

						<div class="form-group">
							<button type="submit" onClick={e => { e.preventDefault(); handleChange() }} class="btn btn-md full-width pop-login" id="newsignupbutton">Sign Up</button>
						</div>

					</form>
					{error ? <div class="alert alert-danger" role="alert"> {error}</div> : null}
					{success? <div class="alert alert-success" role="alert">{success}</div> : null}
				</div>
				
				<div class="text-center">
					<p class="mt-5"><i class="ti-user mr-1"></i>Already Have An Account? <a href="/sign-in" class="link">Go For LogIn</a></p>
				</div>
			</div>
		</div>
	)
}

export default NewSignUpForm
