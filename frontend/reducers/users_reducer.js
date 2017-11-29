import
{RECEIVE_ALL_USERS, RECEIVE_USER}
from '../actions/user_actions';
import
{RECEIVE_ALL_MESSAGES}
from '../actions/message_actions';
import merge from 'lodash/merge';

export default (state = [], action) => {
  Object.freeze(state);
  var newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return action.users;
    case RECEIVE_ALL_MESSAGES:
      return action.payload.users;
    case RECEIVE_USER:
      newState[action.user.id] = action.user;
      return newState;
    default:
      return state;
  }
};
