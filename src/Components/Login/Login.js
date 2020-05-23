import React, { useState }  from 'react';
import './Login.css';

import { login } from '../../firebase';

const githubLogo = require('../../Images/github_logo.png')
const gmailLogo = require('../../Images/gmail_logo.png');



/**
 * Login system for the customer to access their account again
 */
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    //const [errorMessage, setErrorMessage] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        try{
            await login(email, password);
            console.log("You logged in successfully!");
        } catch(err){
            alert("No boy you thought!");
        }
        console.log(email);
        console.log(password);
    }

    return(
        <div>
            <div className="loginContainer">
                <h3>welcome back!</h3>
                <div className="assets">
                    <img src={githubLogo} alt="github logo"/>
                    <img src={gmailLogo} alt="gmail logo" />
                </div>
                <div className="loginStuff">
                    <form className="loginForm" onSubmit={handleSubmit}>
                        <div className="credentials">
                            <p className="formTextElems">Email</p>
                            <input className="formInputElems" value={email} onChange={e => setEmail(e.target.value)}/>
                        </div>
                        <div className="credentials">
                            <p className="formTextElems">Password</p>
                            <input type="password" className="formInputElems" value={password} onChange={e => setPassword(e.target.value)}/>
                        </div>
                        <button id="loginButton">login</button>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default Login;