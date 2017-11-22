import
{RECEIVE_ALL_MESSAGES,
  RECEIVE_MESSAGE,
  REMOVE_MESSAGE,
  CREATE_MESSAGE,
  UPDATE_MESSAGE }
from '../actions/message_actions';
import merge from 'lodash/merge';

export default (state = [], action) => {
  Object.freeze(state);
  var newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_MESSAGES:
      return action.messages;
    case RECEIVE_MESSAGE:
      newState[action.message.id] = action.message;
      return newState;
    case REMOVE_MESSAGE:
      delete newState.messages[action.messageId];
      return newState;
    default:
      return state;
  }
};
