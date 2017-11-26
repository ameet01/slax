json.extract! message, :body, :id, :user_id, :channel_id
json.created_at message.created_at.in_time_zone('Pacific Time (US & Canada)').strftime("%l:%M %p")
json.date message.created_at.in_time_zone('Pacific Time (US & Canada)').strftime("%A, %B %d")
