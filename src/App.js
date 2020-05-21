import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Login from './components/Login/Login';
import Setup from './components/SetUp/Setup';

const App = () => {
    return(
        <div>
            <Router>
                <Route exact path = "/login" component={Login} />
                <Route exact path = "/setup" component={Setup} />
            </Router>
        </div>
    )
}

export default App;