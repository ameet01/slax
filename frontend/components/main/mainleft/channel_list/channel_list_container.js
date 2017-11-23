import {connect} from 'react-redux';
import ChannelList from './channel_list';
import {fetchChannels} from '../../../../actions/channel_actions';
import {fetchMessages} from '../../../../actions/message_actions';

const mapStateToProps = (state) => ({
  channels: Object.values(state.entities.channels)
});

const mapDispatchToProps = (dispatch) => ({
  fetchChannels: () => dispatch(fetchChannels()),
  fetchMessages: () => dispatch(fetchMessages())
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
