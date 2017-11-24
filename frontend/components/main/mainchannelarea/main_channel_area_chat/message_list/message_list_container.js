import {connect} from 'react-redux';
import MessageList from './message_list';
import { fetchMessages } from '../../../../../actions/message_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  let messages = [];
  let obj = Object.values(state.entities.messages);

  for(var i = 0; i < obj.length; i++) {
    if(obj[i].channel_id === parseInt(ownProps.match.params.channelId)) {
      messages.push(obj[i]);
    }
  }

  return {
    messages
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchMessages: () => dispatch(fetchMessages())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageList));
