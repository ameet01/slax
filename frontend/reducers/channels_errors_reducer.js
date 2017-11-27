import
{RECEIVE_CHANNEL_ERRORS, REMOVE_ERRORS}
from '../actions/channel_actions';
import merge from 'lodash/merge';

export default (state = [], action) => {
  Object.freeze(state);
  var newState;
  switch (action.type) {
    case RECEIVE_CHANNEL_ERRORS:
      return action.errors;
    case REMOVE_ERRORS:
      return [];
    default:
      return state;
  }
};
