import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './Components/Home/Home';
import Signup from './Components/Signup/Signup'
import Dashboard from './Components/Dashboard/Dashboard'
import Login from './Components/Login/Login'
import Setup from './Components/SetUp/setUp'
import { AuthProvider } from './Auth';
import PrivateRoute from './utils/PrivateRoute';
import './global.css'
function App() {
  return (
    <AuthProvider>
      <div>
        <Router>
          <Route exact path = "/" component={Home} />
          <Route exact path = "/signup" component={Signup} />
          <PrivateRoute exact path = "/Dashboard" component={Dashboard} />
          <Route exact path = "/login" component={Login} />
          <Route exact path = "/setup" component={Setup} />
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
