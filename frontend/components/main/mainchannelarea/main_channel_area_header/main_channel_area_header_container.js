import { connect } from 'react-redux';
import MainChannelAreaHeader from './main_channel_area_header';
import { withRouter } from 'react-router-dom';
import { fetchChannel } from '../../../../actions/channel_actions';
import { updateUser } from '../../../../actions/user_actions';

const mapStateToProps = (state, ownProps) => ({
  channel: state.entities.channels[ownProps.match.params.channelId],
  currentUser: state.session.currentUser,
  users: state.entities.users
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchChannel: (channelId) => dispatch(fetchChannel(channelId)),
  updateUser: (user) => dispatch(updateUser(user))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainChannelAreaHeader));
