import * as SubscriptionAPIUtil from '../util/subscription_api_util';

export const RECEIVE_SUBSCRIPTION = 'RECEIVE_SUBSCRIPTION';

// const receiveSubscription = subscription => ({
//   type: RECEIVE_SUBSCRIPTION,
//   subscription
// });

export const createSubscription = (subscription) => (
  SubscriptionAPIUtil.createSubscription(subscription)
);
