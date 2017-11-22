@channels.each do |channel|
  json.set! channel.id do
    json.extract! channel, :id, :name, :description
    json.userCount channel.users.count
    json.users channel.users
  end
end
