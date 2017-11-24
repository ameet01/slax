import { connect } from 'react-redux';
import MessageForm from './message_form';
import { createMessage } from '../../../../../actions/message_actions';
import { fetchChannel } from '../../../../../actions/channel_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  channel: state.entities.channels[ownProps.match.params.channelId] || {}
});

const mapDispatchToProps = (dispatch) => ({
  createMessage: (message) => dispatch(createMessage(message)),
  fetchChannel: (channel) => dispatch(fetchChannel(channel))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageForm));
