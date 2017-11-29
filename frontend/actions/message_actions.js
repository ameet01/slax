import * as MessageAPIUtil from '../util/message_api_util';
import linkEmoticonToMessage from '../util/emoticon_api_util';

export const RECEIVE_ALL_MESSAGES = 'RECEIVE_ALL_MESSAGES';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';
export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
export const CREATE_MESSAGE = 'CREATE_MESSAGE';

const receiveAllMessages = messages => ({
  type: RECEIVE_ALL_MESSAGES,
  payload: messages
});

export const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
});

const removeMessage = (messageId) => ({
  type: REMOVE_MESSAGE,
  messageId
});

export const fetchMessages = (channelId) => dispatch => (
  MessageAPIUtil.fetchMessages(channelId)
    .then(messages => dispatch(receiveAllMessages(messages)))
);

export const fetchMessage = (messageId) => dispatch => (
  MessageAPIUtil.fetchMessage(messageId)
    .then(message => dispatch(receiveMessage(message)))
);

export const deleteMessage = (messageId) => dispatch => (
  MessageAPIUtil.deleteMessage(messageId)
    .then(message => dispatch(removeMessage(message.id)))
);

export const createMessage = (message) => dispatch => (
  MessageAPIUtil.createMessage(message)
    .then(c => dispatch(receiveMessage(c)))
);

export const updateMessage = (message) => dispatch => (
  MessageAPIUtil.updateMessage(message)
    .then(c => dispatch(receiveMessage(c)))
);




export const updateMessageWithEmoticon = (emoticon) => dispatch => (
  linkEmoticonToMessage(emoticon).then(e => dispatch(receiveMessage(e)))
);
