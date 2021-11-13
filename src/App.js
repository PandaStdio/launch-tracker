import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import ConfirmRegister from './components/ConfirmRegister';
import PrivateRoute from './components/PrivateRoute';

import './App.css';
import './tailwind.generated.css';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <Router>
          <Switch>
            <PrivateRoute path="/admin">
            </PrivateRoute>
            <Route component={Home} path="/home" />
            <Route component={ConfirmRegister} path="/confirm-register" />
            <Route component={Login} path="/log-in" />
            <Route component={Register} path="/register" />
            <Route path='/' render={() => (
              <Redirect to="home" />
            )}/>
          </Switch>
        </Router>
      </header>
      
    </div>
  )
}

export default App
