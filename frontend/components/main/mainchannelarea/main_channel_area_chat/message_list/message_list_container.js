import {connect} from 'react-redux';
import MessageList from './message_list';
import { fetchMessages } from '../../../../../actions/message_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageList));
