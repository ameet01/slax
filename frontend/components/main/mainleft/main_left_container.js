import {connect} from 'react-redux';
import MainLeft from './main_left';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainLeft));
