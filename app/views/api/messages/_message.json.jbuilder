json.extract! message, :body, :id, :user_id, :channel_id
json.created_at message.created_at.strftime("%l:%M %p")
