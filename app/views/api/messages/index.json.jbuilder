@messages.each do |message|
  json.set! message.id do
    json.extract! message, :id, :body, :user_id, :channel_id
    json.user message.user
    json.created_at message.created_at.strftime("%c")
  end
end
