@channels.each do |channel|
  json.set! channel.id do
    json.extract! channel, :id, :name, :description, :is_dm
    json.userCount channel.users.count
    json.users channel.users
    json.created_at channel.created_at.strftime("%A, %B %d")
  end
end


json.allChannels @allChannels do |channel|
  json.extract! channel, :id, :name, :description, :is_dm
  json.created_at channel.created_at.strftime("%A, %B %d")
  json.userCount channel.users.count
end
