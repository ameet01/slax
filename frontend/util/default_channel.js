// Picks the channel a user should land on after signing in/up:
// the "General" channel when it exists, otherwise the first channel.
// `channels` is the normalized payload from GET /api/channels
// ({id: {...}, ..., allChannels: [...]}).
export const defaultChannelId = (channels) => {
  const list = Object.keys(channels || {})
    .filter((k) => k !== 'allChannels')
    .map((k) => channels[k])
    .filter(Boolean);
  const general = list.find((c) => /^general$/i.test(c.name || ''));
  const target = general || list[0];
  return target ? target.id : null;
};
