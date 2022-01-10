import React, { useState, useEffect, useContext } from 'react'
import StripeCheckout from 'react-stripe-checkout';
import './SubscriptionBidsUI.css'
import axios from 'axios'
import { UserContext } from '../UserContext'
function SubscribeBids() {
    const valuecontext = useContext(UserContext);
    const [showpaybutton, setShowPayButton] = useState(false)
    const [selectedbidprice, setSelectedbidprice] = useState(0)
    const [subscription_id, setSubscription_id] = useState(0)
    const [allplans, setAllPlans] = useState(false)

    const getpaidshow = (pricee, subscription_id) => {
        console.log(pricee, subscription_id)
        setSelectedbidprice(pricee)
        setShowPayButton(true)
        setSubscription_id(subscription_id)

    }
    const handleToken = (token, addresses) => {
        console.log(token)
        console.log("Loggeduserid: ", valuecontext.loggeduser.id, " subscription_id: ", subscription_id)
        const data2={
            user_id: valuecontext.loggeduser.id,
            subscription_id: subscription_id,
            token: token.id
        }
        /* axios.post('http://127.0.0.1:8000/api/subscribe-customer-to-plan', {
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
             const URL = "http://127.0.0.1:8000/api/subscribe-customer-to-plan";

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


        axios.get('http://127.0.0.1:8000/api/get-all-plans')
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
                                    <p class="userspara">{plan.bids} Bids<br />Feature 2 <br />Feature 3
                                    </p>
                                    <a class="subscribebuttonbox" target="_blank" onClick={() => getpaidshow(plan.price, plan.subscription_id)}>Purchase</a>
                                    {selectedbidprice == plan.price ? <StripeCheckout
                                        token={handleToken}
                                        currency="USD"
                                        amount={plan.price * 100}
                                        stripeKey="pk_test_Cscz62NIF4i9aVuGNms1ozms00FDcZbaB1"
                                    /> : null}
                                </div>
                            </div>))}



                        </div>
                    </div>
                </div>
            </div>
            {showpaybutton ? <StripeCheckout
                token={handleToken}
                currency="USD"
                amount={15 * 100}
                stripeKey="pk_test_51JI9qWSIjYjIFUxN2rpYq0WGO9rWFFevTXR0dd3vV7yxsYlEkHjNsTEVTJzBg5dgosoMQKi6WqpDkjSJ3MEYfBhr00eOqk5cn8"
            /> : null}
        </div>
    )
}

export default SubscribeBids
