import React, { useContext, useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../Auth';

const PrivateRoute = ({component: RouteComponent, ...rest}) => {
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            console.log("Finished loading")
        }, 1000)
    })
    const currentUser = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    console.log(currentUser)
    return (
        <div>
            {loading ? 'loading....': currentUser.currentUser == null ? <Redirect to="/login" /> : <Route {...rest} render={routeProps => <RouteComponent {...routeProps} />} />}
        </div>
    );
};

export default PrivateRoute;