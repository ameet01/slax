json.extract! message, :body, :id, :user_id, :channel_id
json.created_at message.created_at.localtime.strftime("%l:%M %p")
json.date message.created_at.localtime.strftime("%A, %B %d")
