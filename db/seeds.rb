# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'




channel1 = Channel.create(name: 'General')

(1..15).each do |i|
  user1 = User.create(username: "demo#{i}", password: 'password', image_url: UiFaces.face);
  Subscription.create(user_id: user1.id, channel_id: channel1.id)
end



(0..20).each do |j|
  user2 = User.create(username: Faker::GameOfThrones.character, password: 'password', image_url: UiFaces.face)
  Subscription.create(user_id: user2.id, channel_id: channel1.id)
end
