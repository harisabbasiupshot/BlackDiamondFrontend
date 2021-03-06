import React, { useContext, useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";


import { BrowserRouter as Router, Switch, Route, Link, withRouter, useHistory, Redirect } from "react-router-dom";

import Settings from './Settings'
import { UserContext } from './UserContext'
import ForgetPassword from './Authentication/ForgetPassword';
import ResetPassword from './Authentication/ResetPassword';
import NewSignUpForm from './Authentication/NewSignUpForm';
import NewLoginForm from './Authentication/NewLoginForm'
import AddNewProperty from './AddNewProperty/AddNewProperty'
import Home from './Home/Home'
import Footer from './Footer/Footer'
import SellerProfile from './SellerProfile/SellerProfile';
import EditProperty from './AddNewProperty/EditProperty';
import PropertyPage from './AddNewProperty/PropertyPage';
import BuyerProfile from './BuyerProfile/BuyerProfile';
import Navbar from './Navbar';
import BestAgent from './Home/BestAgent';
import WannaSignUp from './Home/WannaSignUp';
import HomeBanner from './Home/HomeBanner';
import SubscribeBids from './BuyerProfile/SubscribeBids';
/* 
import Template from './Template';
import OurServices from './OurServices';
import LatestProperties from './LatestProperties';
import BestAgent from './BestAgent'; */
//export const UserContext = React.createContext()
const data = JSON.parse(localStorage.getItem('data'))
console.log("Local Storage: ", data)
function Routes(props) {
  const [loggeduser, setloggeduser] = useState(data ? data.user : null);
  const [isadmin, setIsadmin] = useState(false);
  const [favs, setFavs] = useState([]);
  const [cart, setCart] = useState(null);
  const [following, setFollowing] = useState([]);
  const [islogged, setIslogged] = useState(data ? true : false);
  const [type, setType] = useState(data ? data.user.role : null);
  let history = useHistory();
  const [test, setTest] = useState(null)
  const updatefavs = (upfavs) => {
    console.log("Updating favs: ", upfavs)
    const data = JSON.parse(localStorage.getItem('data'))
    console.log("Local Storage: ", data)
    data.favs = upfavs
    localStorage.setItem('data', JSON.stringify(data))
    setFavs(upfavs)
  }
  const updatefollowing = (following) => {
    console.log("Updating following: ", following)
    const data = JSON.parse(localStorage.getItem('data'))
    console.log("Local Storage: ", data)
    data.following = following
    localStorage.setItem('data', JSON.stringify(data))
    setFollowing(following)
  }
  const updatecart = (cart) => {
    console.log("Updating cart: ", cart)
    const data = JSON.parse(localStorage.getItem('data'))
    console.log("Local Storage: ", data)
    data.cart = cart
    localStorage.setItem('data', JSON.stringify(data))
    setCart(cart)
  }


  useEffect(() => {
    console.log("Env",process.env.REACT_APP_GOOGLE_API_KEY)
    console.log("Env 2",process.env.REACT_APP_PRODUCTION) 


  }, [test]);
  const logout = () => {
    setIslogged(false)
    setloggeduser(null)
    localStorage.clear();
    setTest(test + 1)
  }


  const value12 = {
    loggeduser: loggeduser,
    islogged: islogged,
    type: type,
    following: following,
    favs: favs,
    updatefavs: updatefavs,
    logout: logout,
    updatefollowing: updatefollowing,
    updatecart: updatecart,
    isadmin: isadmin,
    cart: cart
  }
  return (<Router>
    <div id="main-wrapper">
      <>
        
        <Navbar loggeduser={loggeduser} islogged={islogged} logout={logout} />
        

        <Switch>
          <UserContext.Provider value={value12}>
            <Route exact path="/" >
              <HomeBanner />
              <Home />
              <BestAgent />
              <WannaSignUp />

            </Route>


            <Route path="/sign-in">
              <NewLoginForm setIslogged={setIslogged} setloggeduser={setloggeduser} />
            </Route>
            <Route path="/newproperties">
              <Home />
            </Route>
            <Route path="/sign-up">
              {loggeduser ? <Redirect to="/" /> : <NewSignUpForm setIslogged={setIslogged} setloggeduser={setloggeduser} />}
            </Route>
            <Route path="/addnewproperty">
              {loggeduser ? loggeduser.role == 2 ? <AddNewProperty /> : <Redirect to="/" /> : <Redirect to="/" />}
            </Route>
            <Route path="/editproperty/:id" component={EditProperty} />
            <Route path="/property/:id" component={PropertyPage} />
            <Route path="/sellerprofile/:id" component={SellerProfile} />
            <Route path="/buyerprofile/:id" component={BuyerProfile} />
            <Route path="/forgetpassword" component={ForgetPassword} />
            <Route path="/reset" component={ResetPassword} />
            <Route path="/subscribebid" component={SubscribeBids} />
            <Route path="/settings" >
              <Settings />
            </Route>
            <Footer />

          </UserContext.Provider>
        </Switch>
        


      </>

    </div></Router>
  )
}

export default Routes
