import { connect } from 'react-redux';
import ChannelList from './channel_list';
import { fetchChannels, createChannel, deleteChannel } from '../../../../actions/channel_actions';
import { fetchMessages } from '../../../../actions/message_actions';
import { fetchUsers } from '../../../../actions/user_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  let allChannels = Object.values(state.entities.channels);
  let channels = [];
  let dms = [];

  for(var i = 0; i < allChannels.length - 1; i++) {
    if(allChannels[i].is_dm === true) {
      dms.push(allChannels[i]);
    } else {
      channels.push(allChannels[i]);
    }
  }

  return {
    allChannels: state.entities.channels.allChannels,
    channels: channels,
    currentUser: state.session.currentUser,
    directmessages: dms,
    users: Object.values(state.entities.users)
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchChannels: () => dispatch(fetchChannels()),
  fetchMessages: (channelId) => dispatch(fetchMessages(channelId)),
  createChannel: (channel) => dispatch(createChannel(channel)),
  fetchUsers: () => dispatch(fetchUsers()),
  deleteChannel: (id) => dispatch(deleteChannel(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelList));
