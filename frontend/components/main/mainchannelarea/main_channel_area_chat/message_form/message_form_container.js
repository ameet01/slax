import {connect} from 'react-redux';
import MessageForm from './message_form';
import { createMessage } from '../../../../../actions/message_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  createMessage: (message) => dispatch(createMessage(message))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageForm));
