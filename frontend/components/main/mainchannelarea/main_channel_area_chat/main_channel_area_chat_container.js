import {connect} from 'react-redux';
import MainChannelAreaChat from './main_channel_area_chat';
import { withRouter } from 'react-router';
import { createMessage } from '../../../../actions/message_actions';
import { fetchChannel } from '../../../../actions/channel_actions';
import { fetchMessages } from '../../../../actions/message_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    messages: Object.values(state.entities.messages),
    users: state.entities.users,
    currentUser: state.session.currentUser,
    channel: state.entities.channels[ownProps.match.params.channelId] || {}
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchMessages: (channelId) => dispatch(fetchMessages(channelId)),
  createMessage: (message) => dispatch(createMessage(message)),
  fetchChannel: (channel) => dispatch(fetchChannel(channel))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainChannelAreaChat));
