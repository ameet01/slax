import { connect } from 'react-redux';
import ChannelList from './channel_list';
import { fetchChannels, createChannel } from '../../../../actions/channel_actions';
import { fetchMessages } from '../../../../actions/message_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  let allChannels = Object.values(state.entities.channels);
  let channels = [];
  let dms = [];

  for(var i = 0; i < allChannels.length; i++) {
    if(allChannels[i].is_dm === true) {
      dms.push(allChannels[i]);
    } else {
      channels.push(allChannels[i]);
    }
  }

  return {
    channels: channels,
    directmessages: dms
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchChannels: () => dispatch(fetchChannels()),
  fetchMessages: (channelId) => dispatch(fetchMessages(channelId)),
  createChannel: (channel) => dispatch(createChannel(channel))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelList));
