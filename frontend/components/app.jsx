import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import SessionFormContainer from './session/session_form_container';
import MainContainer from './main/main_container';
import SplashPageContainer from './splashpage/splash_page_container';

const App = () => {
  return (
    <div className='app-div'>
      <AuthRoute path='/' component={SplashPageContainer} />
      <AuthRoute path='/login' component={SessionFormContainer} />
      <AuthRoute path='/signup' component={SessionFormContainer} />
      <ProtectedRoute path='/channels/:channelId' component={MainContainer} />
    </div>
  );
};


export default App;
