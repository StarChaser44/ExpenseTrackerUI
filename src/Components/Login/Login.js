import React, {useState}  from 'react';
import { withRouter } from 'react-router';
import FireBaseApp from '../../utils/Firebase';
import './Login.css';
const githubLogo = require('../../Images/github_logo.png')
const gmailLogo = require('../../Images/gmail_logo.png');

/**
 * Login system for the customer to access their account again
 */
const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const [errorMessage, setErrorMessage] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false)
    
    const handleLogin = async (e) => {
        e.preventDefault();
        try{
            await FireBaseApp.firebase.auth().signInWithEmailAndPassword(email, password);
            console.log('successfully signed in!');
            await props.history.push('/Dashboard');
        } catch (e) {
            switch(e.code){
                case "auth/wrong-password":
                    setErrorMessage("Incorrect Password");
                    break;
                case "auth/user-not-found":
                    setErrorMessage("Email or Password is incorrect");
                    break;
                default:
                    console.log(e.code);
            }
            setShowErrorMessage(true);
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
                <p className="errorMessage">{
                            showErrorMessage ? errorMessage :
                            null
                        }
                </p>
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