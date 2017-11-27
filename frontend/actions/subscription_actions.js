import * as SubscriptionAPIUtil from '../util/subscription_api_util';
import {fetchChannels} from './channel_actions';

export const RECEIVE_SUBSCRIPTION = 'RECEIVE_SUBSCRIPTION';

// const receiveSubscription = subscription => ({
//   type: RECEIVE_SUBSCRIPTION,
//   subscription
// });

export const createSubscription = (subscription) => (
  SubscriptionAPIUtil.createSubscription(subscription)
    .then(() => fetchChannels())
);
