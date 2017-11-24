import {connect} from 'react-redux';
import MainChannelAreaHeader from './main_channel_area_header';
import {withRouter} from 'react-router-dom';
import { fetchChannel } from '../../../../actions/channel_actions';

const mapStateToProps = (state, ownProps) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
  fetchChannel: (channelId) => dispatch(fetchChannel(channelId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainChannelAreaHeader));
