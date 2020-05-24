import React, { useState } from 'react';
import { withRouter } from 'react-router';
import './SignupStyle.css'
import '../Login/Login.css'
import app from '../../utils/Firebase';
const githubLogo = require("../../Images/github_logo.png")
const gmailLogo = require('../../Images/gmail_logo.png')

/**
 * Signs up customer with our service via manual sign up, gmail, or github
*/
const Signup = (props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await app.auth().createUserWithEmailAndPassword(email, password);
            await props.history.push("/Dashboard");
        }catch(e){
            if(password !== confirmPassword){
                setErrorMessage("Passwords do not match!");
            }else{
                switch(e.code){
                    case "auth/email-already-in-use":
                        setErrorMessage("Account already exists");
                        break;
                    case "auth/weak-password":
                        setErrorMessage("Password should be at least 6 characters");
                        break;
                    default:
                        console.log(e.code);
                }
            }
            setShowErrorMessage(true);
            console.log(e)
        }
    }
    return (
        <div className="container">
           <div className="headerContainer">
                <h1 className="header"> CREATE AN ACCOUNT </h1>
                <p className="smallText">Or sign in with these accounts</p>
           </div>
            <div className="imgContainer">
                <div id="github">
                    <img src={githubLogo} alt="github logo" />
                </div>
                <div id="gmail">
                    <img src={gmailLogo} alt="gmail logo" />
                </div>
            </div>
            {
                showErrorMessage ? <p id="errorMessage">{errorMessage}</p> :
                null
            }
            <div className="loginStuff">
                <form className="loginForm" onSubmit={handleSubmit}>
                <div className="credentials">
                    <p>Username</p>
                    <input className="formInputElems" type="text" required="required" onChange = {(e) => setUsername(e.target.value)}/>
                </div>

                    <div className="credentials">
                    <p>Email</p>
                    <input className="formInputElems" type="email" required="required" onChange = {(e) => setEmail(e.target.value)}/>
                    </div>
                
                <div className="credentials">
                    <p>Password</p>
                    <input className="formInputElems" type="password" required="required" onChange = {(e) => setPassword(e.target.value)}/>
                </div>

                <div className="credentials">
                    <p>Confirm Password</p>
                    <input className="formInputElems" type="password" required="required" onChange = {(e) => setConfirmPassword(e.target.value)}/>
                </div>
                <button id="submitButton" type="submit">SIGN UP!</button>
                </form>
            </div>
        </div>
    )
}

export default withRouter(Signup);