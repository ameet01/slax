import { connect } from 'react-redux';
import MessageForm from './message_form';
import { createMessage } from '../../../../../actions/message_actions';
import { fetchChannel } from '../../../../../actions/channel_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch) => ({
  
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageForm));
