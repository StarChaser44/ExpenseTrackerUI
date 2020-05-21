import React, {useState}  from 'react';
const githubLogo = require('../../Images/github_logo.png')
const gmailLogo = require('../../Images/gmail_logo.png');
import './Login.css';

/**
 * Login system for the customer to access their account again
 */
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState(''); 
    const [errorMessage, setErrorMessage] = useState(false);

    return(
        <div>
            <div className="loginContainer">
                <h3>welcome back!</h3>
                <div className="assets">
                    <img src={githubLogo} alt="github logo"/>
                    <img src={gmailLogo} alt="gmail logo" />
                </div>
                <div className="loginStuff">
                    <form className="loginForm">
                        <div className="credentials">
                            <p className="formTextElems">Username</p>
                            <input className="formInputElems"/>
                        </div>
                        <div className="credentials">
                            <p className="formTextElems">Password</p>
                            <input type="password" className="formInputElems"/>
                        </div>
                        <button id="loginButton">login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;