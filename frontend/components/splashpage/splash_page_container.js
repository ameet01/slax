import {connect} from 'react-redux';
import SplashPage from './splash_page';
import {login, logout, signup} from '../../actions/session_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {

};

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: (user) => dispatch(login(user))
});

export default connect(null, mapDispatchToProps)(SplashPage);
