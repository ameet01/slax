json.messages do
  @messages.each do |message|
    json.set! message.id do
      json.extract! message, :id, :body, :user_id, :channel_id
      json.created_at message.created_at.in_time_zone('Pacific Time (US & Canada)').strftime("%l:%M %p")
      json.date message.created_at.in_time_zone('Pacific Time (US & Canada)').strftime("%A, %B %d")
    end
  end
end

json.users do
  @users.each do |user|
    json.set! user.id do
      json.extract! user, :id, :username, :image_url
    end
  end
end
