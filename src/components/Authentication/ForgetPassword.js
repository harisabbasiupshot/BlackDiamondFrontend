import React, {useState,useEffect, useMemo} from 'react'
import { withRouter, useHistory } from 'react-router-dom'; 
import axios from 'axios'
function ForgetPassword({}) {
    const [email, setEmail] = useState(null)
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);

    let history = useHistory();
    const [redirectToReferrer, setRedirectToReferrer] = useState("false")
    const handleChange= async ()=>{
        
        
        const URL = "http://127.0.0.1:8000/api/reset-password-code";
        var data2 ={
            email: email
            
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
          
            console.log(response.data)
            localStorage.setItem('reset', JSON.stringify(email))
            
            //setMessage(response.data)
            if(response.data.success==1){
                history.push('/reset')
            }
            

          
        })
        
        
        .catch(error => {
            
            console.log("Error is: ",error.response)
        });
        
        
        
        
        
        
    
        
        
        
        
    }
    
    useEffect(() => {
        // Update the document title using the browser API
        
        
        console.log("We know evertything now", email)
        
      },[]);
    
    return (
        
             
            
            <div style={{width:'80%', marginLeft:'10%'}}>
            <div class="modal-body">
                <h4 class="modal-header-title">Retrieve Password Using Email</h4>
                <div class="login-form">
                    <form>

                        <div class="form-group">
                            <label id="loginsignlabels">Email</label>
                            <div class="input-with-icon">
                                <input type="text" onChange={(e)=>{setEmail(e.target.value)}} class="form-control" placeholder="Email" />
                                <i class="ti-user"></i>
                            </div>
                        </div>


                        <div class="form-group">
                            <button type="submit" onClick={e => {e.preventDefault();handleChange()}} id="newloginbutton" >Submit</button>
                        </div>

                    </form>
                    {message? <div class="alert alert-success" role="alert">{message}</div> : null}
                </div>
                
                
            </div>
        </div>
            
            
        
        
    )
    
}
 
export default withRouter(ForgetPassword)
