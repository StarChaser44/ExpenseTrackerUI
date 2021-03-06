import React, {useState}  from 'react';
import { withRouter } from 'react-router';
import {app} from '../../Utils/Firebase';
import './Login.css';
const githubLogo = require('../../Images/github_logo.png')
const gmailLogo = require('../../Images/gmail_logo.png');

/**
 * Login system for the customer to access their account
 */
const Login = (props : any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const [errorMessage, setErrorMessage] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false)

    //Interface reperesenting the expected firebase error object
    interface FirebaseError {
        code: string,
        message: string,
        a: any
    }
    
    //Function to properly login a user and display error messages
    const handleLogin = async (e: any) => {
        e.preventDefault();
        app.auth().signInWithEmailAndPassword(email,password)
        .then((userInformation : any) => {
            console.log("User signed in");
            console.log(userInformation);
            props.history.push("/Dashboard")
        })
        .catch((error: FirebaseError) => {
            switch(error.code){
                case "auth/wrong-password":
                    setErrorMessage("Incorrect Password");
                    break;
                case "auth/user-not-found":
                    setErrorMessage("Cannot find user with that email");
                    break;
                case "auth/invalid-email":
                    setErrorMessage("That is not a valid email address");
                    break;
                default:
                    console.log(error.code);
            }
            setShowErrorMessage(true);
        });
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
                <p className="loginErrorMessage">{
                            showErrorMessage ? errorMessage :
                            null
                        }
                </p>
            </div>
        </div>
    )
}

export default withRouter(Login);