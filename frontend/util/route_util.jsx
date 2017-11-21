import {Redirect, Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import React from 'react';

const Auth = ({component: Component, path, loggedIn}) => (
  <Route exact path={path} render={(props) => (
      !loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to='/' />
      )
    )} />
);

const Protected = ({component: Component, path, loggedIn}) => (
  <Route exact path={path} render={(props) => (
      loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to='/login' />
      )
    )} />
);

const mapStateToProps = state => (
  {loggedIn: Boolean(state.session.currentUser)}
);

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
