import React, { useState } from 'react'
import '../fullcss.css'
import { useParams, withRouter, useHistory } from "react-router-dom";
function HomeBanner() {
    let history = useHistory();
    const openSignUp = () => {
        console.log("go signup")
        history.push('/');
        history.push('/newproperties');
    }
    return (
        <section class="bg-light">
            <div id="maindivvblockk">
                <div id="conciergeBlock-textWrapper">
                    <div id="backgroundoverlay">
                    <h2 id="concieretitleheader" data-tn="homepage-conciergeHeader">
                        Black-Diamond
                    </h2>
                    <p id="concieretitle2" data-tn="homepage-conciergeDescription">
                        Black-Diamond helps you sell your home faster and for more money by covering the cost of home improvement services — no upfront fees or interest charged.
                    </p>
                    </div>
                    <div style={{ marginTop: '1%' }}>
                    <div id="quick-search__tabs" data-v-58d3f14c=""><li data-test="quicksearch-tab-Buy-button" id="quicksearchbuttonsstyles" data-v-c6c769cc="" data-v-58d3f14c="">
                        Buy
                    </li><li data-test="quicksearch-tab-Rent-button" id="quicksearchbuttonsstyles" data-v-c6c769cc="" data-v-58d3f14c="">
                            Rent
                        </li><li data-test="quicksearch-tab-Sell-button" id="quicksearchbuttonsstyles" data-v-c6c769cc="" data-v-58d3f14c="">
                            Sell
                        </li><li data-test="quicksearch-tab-Agents-button" id="quicksearchbuttonsstyles" data-v-c6c769cc="" data-v-58d3f14c="">
                            Houses
                        </li><li data-test="quicksearch-tab-Offices-button" id="quicksearchbuttonsstyles" data-v-c6c769cc="" data-v-58d3f14c="">
                            Offices
                        </li> </div>
                        
                    </div>
                    <div style={{ marginTop: '1%' }}>
                        <button id="findnewhomebutton" onClick={openSignUp} ><i class="fas fa-check-double"></i> Get Started Now</button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default HomeBanner
