import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../Auth';

const PrivateRoute = ({component: RouteComponent, ...rest}) => {
    const currentUser = useContext(AuthContext);
    console.log(currentUser.currentUser);
    return (
        <Route
            {...rest}
            render={routeProps =>
                currentUser.currentUser !== null ? (
                    <RouteComponent {...routeProps} />
                ) 
                :
                (
                    <Redirect to="/login" />
                )
            }
        />
    );
};

export default PrivateRoute;