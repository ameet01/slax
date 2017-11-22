import React from 'react';
import configureStore from './store/store';
import ReactDOM from 'react-dom';
import Root from './components/root';
import {fetchChannels, fetchChannel} from './actions/channel_actions';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if(window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser }};
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchChannels = fetchChannels;
  window.fetchChannel = fetchChannel;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
