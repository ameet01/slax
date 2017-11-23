import {connect} from 'react-redux';
import MainChannelAreaHeader from './main_channel_area_header';
import {withRouter} from 'react-router-dom';
import { fetchChannel } from '../../../../actions/channel_actions';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  fetchChannel: (id) => dispatch(fetchChannel(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainChannelAreaHeader));
