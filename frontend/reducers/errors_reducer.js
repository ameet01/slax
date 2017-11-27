import {combineReducers} from 'redux';

import sessionErrorsReducer from './session_errors_reducer';
import channelsErrorsReducer from './channels_errors_reducer';

export default combineReducers({
  session: sessionErrorsReducer,
  channels: channelsErrorsReducer
});
