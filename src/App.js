import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './Components/Home/Home';
import Signup from './Components/Signup/Signup'
import Dashboard from './Components/Dashboard/Dashboard'
function App() {
  return (
    <div>
      <Router>
        <Route exact path = "/" component={Home} />
        <Route exact path = "/signup" component={Signup} />
        <Route exact path = "/Dashboard" component={Dashboard} />
      </Router>
    </div>
  );
}

export default App;
