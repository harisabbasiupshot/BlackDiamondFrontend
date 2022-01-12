import React,{useState,useEffect, useContext} from 'react'
import '../SellerProfile/SellerProfile.css'
import axios from 'axios'
import { UserContext } from '../UserContext'
function BuyerBids({id,buyerprofile}) {
    const [bids, setBids] = useState(null);
    const valuecontext = useContext(UserContext);
    
    const OnCancel = (id) => {
        console.log("We will calcel bid of id: ",id)
    }
    const getBuyerBids=(id)=>{
        axios.get('http://127.0.0.1:8000/api/get-buyer-bids?id='+id)
            .then(response => {
                console.log("Bids Of Buyer..", response.data.buyer_bids)
                setBids(response.data.buyer_bids)
                //setBids(response.data.prperty.bids)
            })
            .catch(function (error) {
                console.log(error);
                console.log("Aey te error hai bro")
            })
    
    }
    useEffect(() => {
        getBuyerBids(id)
    
    }, [])

    return (<div id="propertypagebidsdiv">


    <div class="dashboard-wraper">

        <div class="form-submit">
            <h4 id="myaccountseller">Property Bids</h4>

        </div>
        <table class="property-table-wrap responsive-table bkmark">

            <tbody>
                <tr>
                    <th><i class="fa fa-file-text"></i> {bids?bids.length==0?"No":bids.length:null} Bids</th>
                    <th></th>
                </tr>
                {bids&&bids.map(bid => (
                    <tr>
                    <td class="property-container">
                        <div class="title">
                            <h4 id="bidtitleh4"><a id="bidtitlea">{bid.title}</a></h4>
                            <span id="bidofferdiscription">{bid.offer_description} </span>
                            <span class="table-property-price">Starts from: ${bid.start_price}</span>
                            <h5 id="byuserh4"><a id="byusera">By {buyerprofile?buyerprofile.name:null}</a></h5>
                        </div>
                    </td>
                    {valuecontext.loggeduser ? valuecontext.loggeduser.id==buyerprofile.id?<td class="action">
                        <a class="delete" onClick={() => OnCancel(bid.id)} style={{ cursor: 'pointer' }}><i class="ti-close" ></i> Cancel</a>
                        
                    </td>:null:null}
                </tr>

                ))}
                

               

                
                {/* {bids.map(bid => (
                    <PropertyBidSingle bid={bid} />
                                   
                                


                ))} */}

            </tbody>
        </table>



    </div>
</div>
    )
}

export default BuyerBids
