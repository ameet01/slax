import * as ChannelAPIUtil from '../util/channel_api_util';

export const RECEIVE_ALL_CHANNELS = 'RECEIVE_ALL_CHANNELS';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL';
export const UPDATE_CHANNEL = 'UPDATE_CHANNEL';
export const CREATE_CHANNEL = 'CREATE_CHANNEL';

const receiveAllChannels = channels => ({
  type: RECEIVE_ALL_CHANNELS,
  channels
});

const receiveChannel = channel => ({
  type: RECEIVE_CHANNEL,
  channel
});

const removeChannel = (channelId) => ({
  type: REMOVE_CHANNEL,
  channelId
});

export const fetchChannels = () => dispatch => (
  ChannelAPIUtil.fetchChannels()
    .then(channels => dispatch(receiveAllChannels(channels)))
);

export const fetchChannel = (channelId) => dispatch => (
  ChannelAPIUtil.fetchChannel(channelId)
    .then(channel => dispatch(receiveChannel(channel)))
);

export const deleteChannel = (channelId) => dispatch => (
  ChannelAPIUtil.deleteChannel(channelId)
    .then(channel => dispatch(removeChannel(channel.id)))
);

export const createChannel = (channel) => dispatch => (
  ChannelAPIUtil.createChannel(channel)
    .then(c => dispatch(receiveChannel(c)))
);

export const updateChannel = (channel) => dispatch => (
  ChannelAPIUtil.updateChannel(channel)
    .then(c => dispatch(receiveChannel(c)))
);
