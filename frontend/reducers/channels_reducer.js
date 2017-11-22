import
{RECEIVE_ALL_CHANNELS,
  RECEIVE_CHANNEL,
  REMOVE_CHANNEL,
  CREATE_CHANNEL,
  UPDATE_CHANNEL }
from '../actions/channel_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
  Object.freeze(state);
  var newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_CHANNELS:
      return merge({}, state, action.channels);
    case RECEIVE_CHANNEL:
      newState[action.channel.id] = action.channel;
      return newState;
    case REMOVE_CHANNEL:
      delete newState.channels[action.channelId];
      return newState;
    default:
      return state;
  }
};
