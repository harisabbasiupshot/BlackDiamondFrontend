import React,{useState,useEffect} from 'react'
import { withRouter, useHistory } from 'react-router-dom'; 
import axios from 'axios'
import '../fullcss.css'
function NewLoginForm({setIslogged,setloggeduser}) {
    const [email, setEmail] = useState("Profile")
    const [isemailerror, setIsemailerror] = useState(false)
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null);
    const [ispassworderror, setIspassworderror] = useState(false)
    const [success, setSuccess] = useState(null);
    let history = useHistory();
    function validateEmail(email) 
    {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    const handleChange= async ()=>{
        //i will authenticate user
        console.log("Email: ",email,"Password: ",password)
        if(validateEmail(email)){
            setIsemailerror(false)

        }else{
            setError("Incorrect Email Format")
            setIsemailerror(true)
            if(password==""){
                setIspassworderror(true)

            }else{
                setIspassworderror(false)
            }
            return
        }
        if(password==""){
            setError("Empty Password")
            setIspassworderror(true)
            return

        }else{
            setIspassworderror(false)
            
        }
        
        const URL = "http://127.0.0.1:8000/api/login-user";
        var data2 ={
            email: email,
            password: password,
            
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
          if(response.data.success==1){
            setIslogged(true)
            console.log(response.data.data.user)
            setloggeduser(response.data.data.user)
            setSuccess("You are logged In")
            localStorage.setItem('data', JSON.stringify(response.data.data))
            history.push('/');

          }else{
              setError(response.data.error)
          }
        })
        
        
        .catch(error => {
            
            console.log("Error is: ",error.response)
        });
        
        
        
        
        
        
    
        
        
        
        
    }
    return (
        <div style={{width:'80%', marginLeft:'10%'}}>
            <div class="modal-body">
                <h4 class="modal-header-title">Log In</h4>
                <div class="login-form">
                    <form>

                        <div class="form-group">
                            <label>Email</label>
                            <div class="input-with-icon">
                                <input type="text" onChange={(e)=>{setEmail(e.target.value)}} style={{border:isemailerror?'1px solid red':null}} class="form-control" placeholder="Email" />
                                <i class="ti-user"></i>
                            </div>
                        </div>

                        <div class="form-group">
                            <label>Password</label>
                            <div class="input-with-icon">
                                <input type="password" onChange={(e)=>{setPassword(e.target.value)}} style={{border:ispassworderror?'1px solid red':null}} class="form-control" placeholder="*******" />
                                <i class="ti-unlock"></i>
                            </div>
                        </div>

                        <div class="form-group">
                            <button type="submit" onClick={e => {e.preventDefault();handleChange()}} id="newloginbutton" >Login</button>
                        </div>

                    </form>
                    {error? <div class="alert alert-danger" role="alert">{error}</div> : null}
                    {success? <div class="alert alert-success" role="alert">{success}</div> : null}
                </div>
                
                <div class="text-center">
                    <p class="mt-5"><a href="/forgetpassword" class="link">Forgot password?</a></p>
                </div>
            </div>
        </div>
    )
}

export default NewLoginForm
