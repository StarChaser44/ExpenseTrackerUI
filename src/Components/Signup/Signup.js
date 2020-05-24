import React, { useState } from 'react';
import { withRouter } from 'react-router';
import './SignupStyle.css'
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
    const [errorMessage, setErrorMessage] = useState(false);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(password !== confirmPassword){
            setErrorMessage(true);
        } else {
            setErrorMessage(false)
            try{
                await app.auth().createUserWithEmailAndPassword(email, password);
                await props.history.push("/Dashboard");
            }catch(e){
                console.log(e)
            }
        }
    }
    return (
        <div className="container">
            <h1 className="header"> CREATE AN ACCOUNT </h1>
            <p className="smallText">Or sign in with these accounts</p>
            <div>
                <div id="github">
                    <img src={githubLogo} alt="github logo" />
                </div>
                <div id="gmail">
                    <img src={gmailLogo} alt="gmail logo" />
                </div>
            </div>
            <form className="formContainer" onSubmit={handleSubmit}>
                <p className="formTextElems">Username</p>
                <input className="formInputElems" type="text" required="required" onChange = {(e) => setUsername(e.target.value)}/>

                <p className="formTextElems" >Email</p>
                <input className="formInputElems" type="email" required="required" onChange = {(e) => setEmail(e.target.value)}/>
            
                <p className="formTextElems">Password</p>
                <input className="formInputElems" type="password" required="required" onChange = {(e) => setPassword(e.target.value)}/>

                <p className="formTextElems">Confirm Password</p>
                <input className="formInputElems" type="password" required="required" onChange = {(e) => setConfirmPassword(e.target.value)}/>

                <button id="submitButton" type="submit"> <p className="submitButtonText">SIGN UP!</p> </button>
            </form>
            {
                errorMessage ? <p id="errorMessage">Passwords do not match!</p> :
                null
            }
        </div>
    )
}

export default withRouter(Signup);