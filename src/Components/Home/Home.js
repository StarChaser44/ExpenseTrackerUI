import React from 'react';
import './HomeStyle.css'
/** 
 * Landing page for all users who start the application 
*/
const Home = () => {
    return (
        <div className="homeContainer">
            <h1 className="heading"> Budget Calculator </h1>
            <div className="banner">
                <p className="bannerText">It's your money, own it!</p>
            </div>
            <div className="signupBanner">
                <p className="signupBannerText">SIGN UP!</p>
            </div>
            <div className="loginBanner">
                <p className="loginBannerText">LOGIN</p>
            </div>
        </div>
    )
}

export default Home;