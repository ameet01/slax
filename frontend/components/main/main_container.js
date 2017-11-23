import {connect} from 'react-redux';
import Main from './main';
import {logout} from '../../actions/session_actions';
import {fetchChannel} from '../../actions/channel_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchChannel: (id) => dispatch(fetchChannel(id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
