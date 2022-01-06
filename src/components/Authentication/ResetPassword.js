import React, {useState,useEffect, useMemo} from 'react'
import { withRouter, useHistory } from 'react-router-dom'; 
import axios from 'axios'
function ResetPassword(props) {
    const [pass, setPass] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState(null);
    const [verificationcode, setVerificationcode] = useState(null);
    const [message, setMessage] = useState(null);
    let history = useHistory();
    const [redirectToReferrer, setRedirectToReferrer] = useState("false")
    const handleChange= async ()=>{
        
        
        const URL = "http://127.0.0.1:8000/api/reset-password?email="+email+"&verification_code="+verificationcode+"&password="+pass;
        var data2 ={
            email: email,
            verificationcode: verificationcode,
            password:pass
            
        }
        console.log("my data in front bs",data2)
        const options = {
            method: 'post',
            url: URL,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
            data: data2,

            validateStatus: (status) => {
                return true; // I'm always returning true, you may want to do it depending on the status received
              
          }}
        
        axios(options).then(response => {
          console.log("Response is ",response)
          if(response.data.success==1){
              setMessage(response.data.message)
          }
          
        })
        
        
        .catch(error => {
            
            console.log("Error is: ",error.response)
        });
        
        
        
        
        
        
    
        
        
        
        
    }
    
    useEffect(() => {
        // Update the document title using the browser API
        
        
        //console.log("Reset Password: ", token)
        const data = JSON.parse(localStorage.getItem('reset'))
        console.log(JSON.parse(localStorage.getItem('reset')))
        setEmail(JSON.parse(localStorage.getItem('reset')))
        
      },[]);
    
    return (
        
             
            
       /*  <div style={{width:'80%', marginLeft:'10%'}}>
        <div class="modal-body">
            <h4 class="modal-header-title">Log In</h4>
            <div class="login-form">
                <form>

                    <div class="form-group">
                        <label>Email</label>
                        <div class="input-with-icon">
                            <input type="text"  class="form-control" placeholder="Email" />
                            <i class="ti-user"></i>
                        </div>
                    </div>

                    <div class="form-group">
                        <label>Password</label>
                        <div class="input-with-icon">
                            <input type="password" onChange={(e)=>{setPass(e.target.value)}} class="form-control" placeholder="*******" />
                            <i class="ti-unlock"></i>
                        </div>
                    </div>

                    <div class="form-group">
                        <button type="submit" onClick={e => {e.preventDefault();handleChange()}} id="newloginbutton" >Login</button>
                    </div>

                </form>
                {message? <div class="alert alert-success" role="alert">{message}</div> : null}
            </div>
            
            <div class="text-center">
                <p class="mt-5"><a href="/forgetpassword" class="link">Forgot password?</a></p>
            </div>
        </div>
    </div> */
            <div style={{width:'80%', marginLeft:'10%'}}>
            <div class="modal-body">
                <h4 class="modal-header-title">Reset Password</h4>
                <div class="login-form">
                    <form>

                        <div class="form-group">
                            <label id="loginsignlabels">Verification Code</label>
                            <div class="input-with-icon">
                                <input type="text" onChange={(e)=>{setVerificationcode(e.target.value)}} class="form-control" placeholder="Enter Verification Code" />
                                <i class="ti-user"></i>
                            </div>
                        </div>
                        <div class="form-group">
                            <label id="loginsignlabels">New Password</label>
                            <div class="input-with-icon">
                                <input type="password" onChange={(e)=>{setPass(e.target.value)}} class="form-control" placeholder="*******" />
                                <i class="ti-unlock"></i>
                            </div>
                        </div>


                        <div class="form-group">
                            <button type="submit" onClick={e => {e.preventDefault();handleChange()}} id="newloginbutton" >Submit</button>
                        </div>

                    </form>
                    {message? <div class="alert alert-success" role="alert">{message}</div> : null}
                </div>
                
                <div class="text-center">
                    <p class="mt-5"><a href="/forgetpassword" class="link">Forgot password?</a></p>
                </div>
            </div>
        </div>
            
            
            
            
        
        
    )
    
}
 
export default withRouter(ResetPassword)
