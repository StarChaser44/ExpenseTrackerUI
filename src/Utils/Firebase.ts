import * as firebase from "firebase/app";
import "firebase/auth";

export const app : any = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messageSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
});


//logging in using email and password, but can we use username?
export function loginFirebaseUser (email : string, password : string) {
    console.log("Signing in a user: ", email, password);
    return firebase.auth().signInWithEmailAndPassword(email,password);
}

//logging out 
export const logoutFirebaseUser = ()  => {
    return firebase.auth().signOut();
} 


export default app;