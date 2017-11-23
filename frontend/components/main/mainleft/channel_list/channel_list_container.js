import {connect} from 'react-redux';
import ChannelList from './channel_list';
import {fetchChannels, createChannel} from '../../../../actions/channel_actions';
import {fetchMessages} from '../../../../actions/message_actions';

const mapStateToProps = (state) => ({
  channels: Object.values(state.entities.channels)
});

const mapDispatchToProps = (dispatch) => ({
  fetchChannels: () => dispatch(fetchChannels()),
  fetchMessages: () => dispatch(fetchMessages()),
  createChannel: (channel) => dispatch(createChannel(channel))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
