import {connect} from 'react-redux';
import MessageList from './message_list';
import { fetchMessages } from '../../../../../actions/message_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => ({
  messages: Object.values(state.entities.messages)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchMessages: () => dispatch(fetchMessages())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageList));
