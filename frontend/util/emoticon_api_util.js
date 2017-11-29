export const linkEmoticonToMessage = emoticon => (
  $.ajax({
    method: 'POST',
    url: `/api/emoticons`,
    data: {emoticon}
  })
);
