json.extract! @emoticon, :id, :user, :icon



json.message do
  json.extract! @emoticon.message, :id, :channel_id, :user_id, :body, :user, :emoticons
end
