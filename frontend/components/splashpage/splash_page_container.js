import {connect} from 'react-redux';
import SplashPage from './splash_page';
import {login, logout, signup} from '../../actions/session_actions';
import {fetchChannels} from '../../actions/channel_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {

};

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: (user) => dispatch(login(user)),
  signup: (user) => dispatch(signup(user)),
  fetchChannels: () => dispatch(fetchChannels())
});

export default connect(null, mapDispatchToProps)(SplashPage);
