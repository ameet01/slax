import {Redirect, Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import React from 'react';
import { fetchChannels } from '../actions/channel_actions';
import { defaultChannelId } from './default_channel';

// Logged-in users who land on /login or /signup are sent to their
// default channel (General when it exists) instead of a hardcoded id.
class LandingRedirect extends React.Component {
  componentDidMount() {
    this.props.fetchChannels().then((action) => {
      const id = defaultChannelId(action.channels);
      if (id) this.props.history.push(`/channels/${id}`);
    });
  }

  render() {
    return null;
  }
}

const LandingRedirectContainer = withRouter(connect(null, (dispatch) => ({
  fetchChannels: () => dispatch(fetchChannels())
}))(LandingRedirect));

const Auth = ({component: Component, path, loggedIn}) => (
  <Route exact path={path} render={(props) => (
      !loggedIn ? (
        <Component {...props} />
      ) : (
        <LandingRedirectContainer />
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
