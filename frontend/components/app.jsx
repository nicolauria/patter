import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import GetStarted from './get_started/get_started_1'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import MainAppContainer from './main_app/main_app_container';

const App = () => (
  <div>
    <header>
      <div className="header-container">
        <div>
          <Link to="/" className="header-link">
            <img className="patter-logo" src="https://cdn1.imggmi.com/uploads/2018/10/10/4f547f9d76abde9dfe2c2681c69f03e3-full.png"/>
            <h1>Patter</h1>
          </Link>
        </div>
        <div className="greeting-container">
          <GreetingContainer />
        </div>
      </div>
    </header>
    <div id="main-content">
      <Switch>
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <ProtectedRoute path="/" component={MainAppContainer} />
        <Route exact path="/" component={LogInFormContainer} />
      </Switch>
    </div>
  </div>
);


export default App;
