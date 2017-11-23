import {connect} from 'react-redux';
import MessageListItem from './message_list_item';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {

};

const mapDispatchToProps = (dispatch) => ({

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageListItem));
