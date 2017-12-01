# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

User.destroy_all
Channel.destroy_all
Subscription.destroy_all
Message.destroy_all


channel1 = Channel.create(name: 'General')

characters = [
  ['Arya Stark', 'https://avatarfiles.alphacoders.com/835/83508.jpg'],
  ['Daenerys Targaryen', 'https://avatarfiles.alphacoders.com/674/67419.png'],
  ['John Snow', 'https://avatarfiles.alphacoders.com/105/105161.jpg'],
  ['The Night King', 'https://avatarfiles.alphacoders.com/921/92186.jpg'],
  ['Tyrion Lannister', 'https://avatarfiles.alphacoders.com/113/113425.jpg'],
  ['Jaime Lannister', 'https://avatarfiles.alphacoders.com/105/105137.jpg'],
  ['Ygritte', 'https://avatarfiles.alphacoders.com/105/105125.jpg'],
  ['Robb Stark', 'https://avatarfiles.alphacoders.com/997/99786.jpg'],
  ['Ramsay Bolton', 'hhttps://avatarfiles.alphacoders.com/100/100717.jpg'],
  ['Khal Drogo', 'https://avatarfiles.alphacoders.com/920/92041.jpg'],
  ['Petyr Baelish', 'https://avatarfiles.alphacoders.com/647/64789.jpg'],
  ['Margaery Tyrell', 'https://avatarfiles.alphacoders.com/484/48473.jpg'],
  ['Joffrey Baratheon', 'https://avatarfiles.alphacoders.com/284/28430.jpg'],
  ['Ghost', 'https://avatarfiles.alphacoders.com/288/28817.png'],
  ['White Walker', 'https://avatarfiles.alphacoders.com/183/18368.jpg'],
  ['Brann Stark', 'http://pm1.narvii.com/6573/86d849fdc582c9992d61c1326ed1e40934b9bf21_128.jpg'],
  ['Ross Geller', 'http://www.glamourparis.com/uploads/images/thumbs/201622/2d/les_moments_les_plus_dr__les_de_ross_dans_friends_2035.jpeg_north_64x64_white.jpg'],
  ['Monica Geller', 'http://www.fanfr.com/look/img/monica.jpg'],
  ['Chandler Bing', 'https://pbs.twimg.com/profile_images/2991381736/e2160154f215a325b0fc73f866039311.jpeg'],
  ['Joey Tribbiani', 'https://images.moviepilot.com/image/upload/c_fill,h_64,q_auto,w_64/oruat2ih9aqx2q67tt7b.jpg'],
  ['Phoebe Buffet', 'http://www.fanfr.com/look/img/phoebe.jpg'],
  ['Rachel Green', 'http://78.media.tumblr.com/avatar_78d4c7926758_128.png']
]

(1..15).each do |i|
  user1 = User.create(username: "demo#{i}", password: 'password', image_url: UiFaces.face);
  Subscription.create(user_id: user1.id, channel_id: channel1.id)
end



characters.each do |char|
  char = User.create(username: char[0], password: 'password', image_url: char[1])
  Subscription.create(user_id: char.id, channel_id: channel1.id)
end
