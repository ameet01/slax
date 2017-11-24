import
{RECEIVE_ALL_USERS}
from '../actions/user_actions';
import merge from 'lodash/merge';

export default (state = [], action) => {
  Object.freeze(state);
  var newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return action.users; 
    default:
      return state;
  }
};
