import React, { useState } from 'react';
import './HomeStyle.css'
import {Redirect} from 'react-router-dom'
/** 
 * Landing page for all users who start the application 
*/
const Home = () => {
    const [redirectLogin, setRedirectLogin] = useState(false);
    const [redirectSignup, setRedirectSignup] = useState(false);

    if(redirectLogin) return <Redirect to="/login" />
    if(redirectSignup) return <Redirect to="/signup" />

    return (
        <div className="homeContainer">
            <h1 className="heading"> Budget Calculator </h1>
            <div className="banner">
                <p className="bannerText">It's your money, own it!</p>
            </div>
            <div className="signupBanner">
                <p className="signupBannerText" onClick={() => setRedirectSignup(true)}>SIGN UP!</p>
            </div>
            <div className="loginBanner">
                <p className="loginBannerText" onClick={() => setRedirectLogin(true)}>LOGIN</p>
            </div>
        </div>
    )
}

export default Home;