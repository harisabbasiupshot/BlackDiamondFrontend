import React, { useContext, useEffect, useState } from 'react'


import { ArrowRight, PersonFill, ArrowUpRightSquareFill, UnlockFill, BoxArrowInRight, Search, } from 'react-bootstrap-icons';
import './fullcss.css'
import { useParams, withRouter, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
function NavbarTest({ loggeduser, islogged, logout }) {

    const [activenavbar, setActivenavbar] = useState("Home");
    const [isOpen2, setIsOpen2] = useState(false);
    let params = useParams();
    let history = useHistory();


    useEffect(() => {
        console.log("params", params)
        console.log("params true wale", window.location.pathname)
        if (window.location.pathname == "/") {
            setActivenavbar("Home")
        } else if (window.location.pathname == "/sign-in") {
            setActivenavbar("Signin")
        } else if (window.location.pathname == "/sign-up") {
            setActivenavbar("Sign Up")
        } else {
            setActivenavbar("noone")
        }
        console.log(process.env.REACT_APP_GOOGLE_API_KEY)
    }, [])

    return (
        <div class="header header-light head-shadow header-fixed">
            <div class="container">
                <nav id="navigation" class="navigation navigation-landscape">
                    <div class="nav-header">
                        <a class="nav-brand" href="/">
                            <img src="assets/img/logo.png" class="logo" alt="" />
                        </a>
                        <div class="nav-toggle"></div>
                    </div>
                    <div class="nav-menus-wrapper" style={{ transitionProperty: 'none' }}>
                        <ul class="nav-menu">

                            {/* <li class={activenavbar == "Home" ? "active" : null}><a href="/">Home
                                <FontAwesomeIcon style={{ paddingLeft: '3px' }} icon={faChevronDown} size="xs" />
                            </a>
                                <ul class="nav-dropdown nav-submenu">
                                    <li><a class="active" href="index.html">Home Layout 1</a></li>
                                    <li><a href="home-2.html">Home Layout 2</a></li>
                                    <li><a href="home-3.html">Home Layout 3</a></li>
                                    <li><a href="home-4.html">Home Layout 4</a></li>
                                    <li><a href="home-5.html">Home Layout 5</a></li>
                                    <li><a href="home-6.html">Home Layout 6</a></li>
                                    <li><a href="home-7.html">Home Layout 7</a></li>
                                    <li><a href="home-8.html">Home Layout 8</a></li>
                                    <li><a href="map.html">Map Home Layout</a></li>
                                </ul>
                            </li> */}


                            <li class={activenavbar == "Home" ? "active" : null} id="navmanage">
                                <div class="dropdown">
                                    <a href="/" id="loggeduser">
                                        {"Home"}<FontAwesomeIcon style={{ paddingLeft: '3px' }} icon={faChevronDown} size="xs" /></a>
                                    <div class="dropdown-content">
                                        <a href=""  >Home Layout 1</a>
                                        <a href=""  >Home Layout 2</a>
                                    </div>
                                </div>
                            </li>
                            <li class={activenavbar == "Listings" ? "active" : null} id="navmanage">
                                <div class="dropdown">
                                    <a  id="loggeduser">
                                        {"Listings"}<FontAwesomeIcon style={{ paddingLeft: '3px' }} icon={faChevronDown} size="xs" /></a>
                                    <div class="dropdown-content">
                                        <a href=""  >List Layout</a>
                                        <a href=""  >Grid Layout</a>
                                    </div>
                                </div>
                            </li>

                            <li class={activenavbar == "Features" ? "active" : null} id="navmanage">
                                <div class="dropdown">
                                    <a  id="loggeduser">
                                        {"Features"}<FontAwesomeIcon style={{ paddingLeft: '3px' }} icon={faChevronDown} size="xs" /></a>
                                    <div class="dropdown-content">
                                        <a href=""  >My Account</a>
                                        <a href=""  >Agents</a>
                                        <a href=""  >Submit Property</a>
                                    </div>
                                </div>
                            </li>
                            <li class={activenavbar == "Features" ? "active" : null} id="navmanage">
                                <div class="dropdown">
                                    <a  id="loggeduser">
                                        {"Pages"}<FontAwesomeIcon style={{ paddingLeft: '3px' }} icon={faChevronDown} size="xs" /></a>
                                    <div class="dropdown-content">
                                        <a href=""  >Blogs Page</a>
                                        <a href=""  >Blog Detail</a>
                                        <a href=""  >Shortcodes</a>
                                        <a href=""  >Pricing</a>
                                        <a href=""  >Error Page</a>
                                    </div>
                                </div>
                            </li>

                            

                            {!islogged ? <li href="/sign-up" class={activenavbar == "Sign Up" ? "active" : null}><a href="/sign-up"  >Sign Up</a></li> : null}

                        </ul>

                        <ul class="nav-menu nav-menu-social align-to-right">

                            {!islogged ? <li class={activenavbar == "Signin" ? "active" : null}>
                                <a href="/sign-in" >
                                    <i class="fas fa-user-circle mr-1"></i>Signin</a>
                            </li> : null}
                            {loggeduser ? <div class="dropdown">
                                <a href={loggeduser.role == 2 ? "/sellerprofile/" + loggeduser.id : "/buyerprofile/" + loggeduser.id} id="loggeduser">
                                    <i class="fas fa-user-circle mr-1" ></i>{loggeduser ? loggeduser.name : "Logged User"}</a>
                                <div class="dropdown-content">
                                    <a href="" onClick={logout} >Logout</a>
                                </div>
                            </div> : null}
                            <li class="add-listing theme-bg" href="/addnewproperty" style={{ marginLeft: '5px' }} id="navaddbutton">
                                <a href="/addnewproperty">Add Property</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default withRouter(NavbarTest)