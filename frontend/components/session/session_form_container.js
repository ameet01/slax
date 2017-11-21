import {connect} from 'react-redux';
import SessionForm from './session_form';
import {login, logout, signup} from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let formType = ownProps.location.pathname.slice(1);
  let processForm;

  if(formType === 'login') {
    processForm = login;
  } else {
    processForm = signup;
  }

  return {
    processForm: user => dispatch(processForm(user)),
    formType
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
