import React, { useEffect, useState } from 'react'
import '../SellerProfile/SellerProfile.css'
import PropertyBidSingle from './PropertyBidSingle';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { useParams, withRouter, useHistory } from "react-router-dom";

function PropertyBids({ bids,setBids }) {
    const [acceptedbidid, setAcceptedbidid] = useState(7);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [bidmessage, setBidmessage] = useState(null);
    const [update, setUpdate] = useState(0);
    let params = useParams(); 
    const OnAccept = (id) => {
        console.log("We will accept bid of id: ", id)

    }
    const OnReject = (id) => {
        console.log("We will reject bid of id: ", id)
    }
    const handleClose2 = () => {
        setShow2(false)
        console.log("ok howa")
        axios.get(process.env.REACT_APP_PRODUCTION+'/api/get-bids', {
            params: {
                id: params.id
            }
        })
            .then(response => {
                console.log("Bids On Property", response.data)
                setBids(response.data.prperty.bids)
            })
            .catch(function (error) {
                console.log(error);
                console.log("Aey te error hai bro")
            })
    };
    const handleClose3 = () => {
        setShow3(false)
        console.log("ok howa")
        axios.get(process.env.REACT_APP_PRODUCTION+'/api/get-bids', {
            params: {
                id: params.id
            }
        })
            .then(response => {
                console.log("Bids On Property", response.data)
                setBids(response.data.prperty.bids)
            })
            .catch(function (error) {
                console.log(error);
                console.log("Aey te error hai bro")
            })
    };
    const getNewBids = () => {
        axios.get(process.env.REACT_APP_PRODUCTION+'/api/get-bids', {
            params: {
                id: params.id
            }
        })
            .then(response => {
                console.log("Bids On Property", response.data)
                setBids(response.data.prperty.bids)
            })
            .catch(function (error) {
                console.log(error);
                console.log("Aey te error hai bro")
            })
    };
    useEffect(() => {
        console.log(bids)

    }, [update]);
    return (
        <div id="propertypagebidsdiv">


            <div class="dashboard-wraper">
                <Modal show={show2} onHide={handleClose2} dialogClassName={"CSRModal"} animation={false}>

                    <Modal.Body style={{ alignItems: 'center' }}>
                        <div class="alert alert-success" role="alert">Bid Has Been Accepted Successfully</div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" style={{ backgroundColor: "#00ba74" }} onClick={handleClose2} >Ok</Button>
                        

                    </Modal.Footer>

                </Modal>
                <Modal show={show3} onHide={handleClose3} dialogClassName={"CSRModal"} animation={false}>

                    <Modal.Body style={{ alignItems: 'center' }}>
                        <div class="alert alert-success" role="alert">Bid Has Been Rejected Successfully</div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" style={{ backgroundColor: "#00ba74" }} onClick={handleClose3} >Ok</Button>
                        

                    </Modal.Footer>

                </Modal>

                <div class="form-submit">
                    <h4 id="myaccountseller">Property Bids</h4>

                </div>
                <table class="property-table-wrap responsive-table bkmark">

                    <tbody>
                        <tr>
                            <th><i class="fa fa-file-text"></i> {bids.length > 0 ? bids.length+" Bids" : "No Bids"}</th>
                            <th></th>
                        </tr>


                        {bids.map(bid => (
                            <PropertyBidSingle bid={bid} setAcceptedbidid={setAcceptedbidid} acceptedbidid={acceptedbidid} setShow2={setShow2} setShow3={setShow3} getNewBids={getNewBids} />
                            



                        ))}

                    </tbody>
                </table>



            </div>
        </div>
    )
}

export default PropertyBids
