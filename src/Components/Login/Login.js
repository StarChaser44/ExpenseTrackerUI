import React, {useState}  from 'react';
import { withRouter } from 'react-router';
import app from '../../utils/Firebase';
import './Login.css';
const githubLogo = require('../../Images/github_logo.png')
const gmailLogo = require('../../Images/gmail_logo.png');

/**
 * Login system for the customer to access their account again
 */
const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const [errorMessage, setErrorMessage] = useState(false);
    
    const handleLogin = async (e) => {
        e.preventDefault();
        try{
            await app.auth().signInWithEmailAndPassword(email, password);
            console.log('successfully signed in!');
            await props.history.push('/Dashboard');
        } catch (e) {
            console.log(e);
        }
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
                    <form className="loginForm" onSubmit={handleLogin}>
                        <div className="credentials">
                            <p className="formTextElems">Email</p>
                            <input type="text" className="formInputElems" onChange = {(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="credentials">
                            <p className="formTextElems">Password</p>
                            <input type="password" className="formInputElems" onChange = {(e) => setPassword(e.target.value)}/>
                        </div>
                        <button type="submit" id="loginButton">login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Login);