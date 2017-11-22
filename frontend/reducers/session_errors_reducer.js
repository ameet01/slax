import
{RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER, REMOVE_ERRORS}
from '../actions/session_actions';
import merge from 'lodash/merge';

export default (state = [], action) => {
  Object.freeze(state);
  var newState;
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    case REMOVE_ERRORS:
      return [];
    default:
      return state;
  }
};
