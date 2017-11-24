import {connect} from 'react-redux';
import MainChannelAreaChat from './main_channel_area_chat';
import { withRouter } from 'react-router';
import { createMessage } from '../../../../actions/message_actions';
import { fetchChannel } from '../../../../actions/channel_actions';
import { fetchMessages } from '../../../../actions/message_actions';

const mapStateToProps = (state, ownProps) => {
  let messages = [];
  let obj = Object.values(state.entities.messages);

  for(var i = 0; i < obj.length; i++) {
    if(obj[i].channel_id === parseInt(ownProps.match.params.channelId)) {
      messages.push(obj[i]);
    }
  }

  return {
    messages,
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
