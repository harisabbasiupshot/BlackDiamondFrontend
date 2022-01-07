import React, { useEffect, useState } from 'react'
import axios from 'axios'

function PropertyBidSingle({bid}) {
    const [biduser, setBiduser] = useState(null);
    const OnAccept = (id) => {
        console.log("We will accept bid of id: ", id)
    }
    const OnReject = (id) => {
        console.log("We will reject bid of id: ", id)
    }
    useEffect(() => {
        console.log(bid)
        axios.get('http://127.0.0.1:8000/api/get-user?id='+bid.user_id)
            .then(response => {
                console.log("Bid User Info", response.data)
				setBiduser(response.data.user)
            })
            .catch(function (error) {
                console.log(error);
                console.log("Aey te error hai bro")
            })

    }, []);
    return (
        <tr>
            <td class="property-container">
                <div class="title">
                    <h4 id="bidtitleh4"><a href="#" id="bidtitlea">{bid.title}</a></h4>
                    <span id="bidofferdiscription"> {bid.offer_description} </span>
                    <span class="table-property-price">Starts from: ${bid.start_price}</span>
                    <h5 id="byuserh4"><a id="byusera">By {biduser?biduser.name:""}</a></h5>
                </div>
            </td>
            <td class="action">
                <a class="delete" onClick={() => OnReject(bid.id)} style={{ cursor: 'pointer' }}><i class="ti-close" ></i> Delete</a>
                <a class="delete" onClick={() => OnAccept(bid.id)} style={{ cursor: 'pointer' }}><i class="ti-check-box" ></i> Accept</a>
            </td>

        </tr>
    )
}

export default PropertyBidSingle
