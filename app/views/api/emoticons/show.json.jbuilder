json.extract! @emoticon, :id, :user_id, :icon



json.message do
  json.extract! @emoticon.message, :id, :channel_id, :user_id, :body
end
