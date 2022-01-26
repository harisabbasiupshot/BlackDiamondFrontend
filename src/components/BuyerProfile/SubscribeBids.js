import React, { useState, useEffect, useContext } from 'react'
import StripeCheckout from 'react-stripe-checkout';
import './SubscriptionBidsUI.css'
import axios from 'axios'
import { UserContext } from '../UserContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function SubscribeBids() {
    const valuecontext = useContext(UserContext);
    const [showpaybutton, setShowPayButton] = useState(false)
    const [selectedbidprice, setSelectedbidprice] = useState(0)
    const [subscription_id, setSubscription_id] = useState(0)
    const [allplans, setAllPlans] = useState(false)

    const handleToken = (token, subscription_id) => {
        console.log(token)
        console.log("Loggeduserid: ", valuecontext.loggeduser.id, " subscription_id: ", subscription_id)
        const data2 = {
            user_id: valuecontext.loggeduser.id,
            subscription_id: subscription_id,
            token: token.id
        }
        toast('Congrats! Bids Subscribed', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        /* axios.post('http://'+process.env.REACT_APP_PRODUCTION+'/api/subscribe-customer-to-plan', {
            params: {
                user_id: valuecontext.loggeduser.id,
                subscription_id: subscription_id,
                token: token.id,

            }
        })
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log('Error is ', error);
            }); */
        const URL = "http://"+process.env.REACT_APP_PRODUCTION+"/api/subscribe-customer-to-plan";

        console.log("my data in front bs", data2)
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
            

        })


            .catch(error => {

                console.log("Error is: ", error.response)
            });


    }
    useEffect(() => {


        axios.get('http://'+process.env.REACT_APP_PRODUCTION+'/api/get-all-plans')
            .then(response => {
                console.log("Plans", response.data)
                setAllPlans(response.data.plans)
            })
            .catch(function (error) {
                console.log(error);
                console.log("Aey te error hai bro")
            })
            



    }, []);
    return (
        <div>
            <section class="bg-light banner-settings" >
            <div class="mainsubscriptiondiv">
                <h1 class="maindivpurchase">Purchase</h1>
                <p class="sharpesticons">Get the sharpest icons ever!</p>
                <div class="gutter16">
                    <div class="ugutterlayout">
                        <div class="u-layout-row">
                            {allplans && allplans.map(plan => (<div class="planbox">
                                <div class="planboxchild">
                                    <h5 class="starterhr">{plan.name}</h5>
                                    <h2 class="freehr">${plan.price}</h2>
                                    <p class="permonthhr">per {plan.cycle}</p>
                                    <p class="userspara">{plan.bids} Bids
                                    </p>
                                    <div >
                                        <StripeCheckout
                                            token={token => handleToken(token, plan.subscription_id)}
                                            currency="USD"
                                            amount={plan.price * 100}
                                            stripeKey="pk_test_Cscz62NIF4i9aVuGNms1ozms00FDcZbaB1"
                                        ><a class="subscribebuttonbox" target="_blank" >Purchase</a></StripeCheckout>
                                    </div>
                                </div>
                            </div>))}
                            <ToastContainer
                                position="top-right"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                            />
                            {/* Same as */}
                            <ToastContainer />



                        </div>
                    </div>
                </div>
            </div>
            </section>
        </div>
    )
}

export default SubscribeBids
