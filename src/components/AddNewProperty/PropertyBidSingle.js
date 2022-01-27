import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { withRouter, useHistory } from 'react-router-dom'; 
import '../fullcss.css'
function PropertyBidSingle({ bid, setAcceptedbidid, acceptedbidid, setShow2, setShow3,getNewBids }) {
    const [biduser, setBiduser] = useState(null);
    let history = useHistory(); 
    const OnAccept = (id) => {
        console.log("We will accept bid of id: ", id)
        const data2 = {
            id: id,
            status: 1
        }
        const URL = process.env.REACT_APP_PRODUCTION+"/api/accept-reject-bid";
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

            }
        }

        axios(options).then(response => {
            console.log(response.data)
            setAcceptedbidid(id)
            setShow2(true)


        })


            .catch(error => {

                console.log("Error is: ", error.response)
            });
    }
    const onCalcel = (id) => {
        console.log("We will reject bid of id: ", id)
        const data2 = {
            id: id,
            status: 2
        }
        const URL = process.env.REACT_APP_PRODUCTION+"/api/accept-reject-bid";
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

            }
        }

        axios(options).then(response => {
            console.log(response.data)
            getNewBids()

        })


            .catch(error => {

                console.log("Error is: ", error.response)
            });
    }
    const OnReject = (id) => {
        console.log("We will reject bid of id: ", id)
        const data2 = {
            id: id,
            status: 3
        }
        const URL = process.env.REACT_APP_PRODUCTION+"/api/accept-reject-bid";
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

            }
        }

        axios(options).then(response => {
            console.log(response.data)
            setShow3(true)

        })


            .catch(error => {

                console.log("Error is: ", error.response)
            });
    }
    useEffect(() => {
        console.log(bid)
        axios.get(process.env.REACT_APP_PRODUCTION+'/api/get-user?id=' + bid.user_id)
            .then(response => {
                console.log("Bid User Info", response.data)
                setBiduser(response.data.user)
            })
            .catch(function (error) {
                console.log(error);
                console.log("Aey te error hai bro")
            })

    }, []);
    const openBuyerprofile = (id) => {
        console.log("CC",id)
        history.push('/buyerprofile/'+id);
    }
    if(biduser){
        return (
            <tr>
                <td class="property-container">
                    <div class="title">
                        <h4 id="bidtitleh4"><a href="#" id="bidtitlea">{bid.title}</a></h4>
                        <span id="bidofferdiscription"> {bid.offer_description} </span>
                        <span class="table-property-price">Starts from: ${bid.start_price}</span>
                        <h5 id="byuserh4"   ><a id="byusera" href={"/buyerprofile/"+biduser.id} style={{cursor:'pointer'}}>By {biduser ? biduser.name : ""}</a></h5>
                    </div>
                </td>
                <td class="action">
                    {bid.status == 3? <span id="statusbuttonPP" style={{backgroundColor:'#8b0101'}} >Rejected</span> : bid.status == 1?null:<a class="delete forhover" onClick={() => OnReject(bid.id)} style={{ cursor: 'pointer' }}><i class="ti-close" ></i> Reject</a>}
                    {bid.status == 1? <span id="statusbuttonPP" >Accepted</span> : bid.status == 3?null:<a class="delete" onClick={() => OnAccept(bid.id)} style={{ cursor: 'pointer' }}><i class="ti-check-box" ></i> Accept</a>}
                </td> 
    
    
    
    
    
            </tr>
    
        )

    }else{
        return (<div></div>)
    }
    
}

export default PropertyBidSingle
