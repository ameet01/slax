export const createSubscription = subscription => (
  $.ajax({
    method: 'POST',
    url: 'api/subscriptions',
    data: {subscription}
  })
);
