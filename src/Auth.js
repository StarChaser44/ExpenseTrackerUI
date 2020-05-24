import React, { useState, useEffect } from 'react';
import FireBaseApp from './utils/Firebase';

export const AuthContext = React.createContext();
/*
 * This function will create global state that has the information of the user
 * This information can be used across the entire app with by way of context api
*/
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    useEffect(() => {
        FireBaseApp.firebase.auth().onAuthStateChanged(setCurrentUser)
    }, []);
    
    return (
        <AuthContext.Provider
            value={{
                currentUser
            }}
            >
            {children}
        </AuthContext.Provider>
    );
};