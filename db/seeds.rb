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
  ['Joey Tribbiani', 'https://images.moviepilot.com/image/upload/c_fill,h_64,q_auto,w_64/oruat2ih9aqx2q67tt7b.jpg'],
  ['Daenerys Targaryen', 'https://avatarfiles.alphacoders.com/674/67419.png'],
  ['Phoebe Buffet', 'http://www.fanfr.com/look/img/phoebe.jpg'],
  ['Jon Snow', 'https://avatarfiles.alphacoders.com/105/105161.jpg'],
  ['The Night King', 'https://avatarfiles.alphacoders.com/921/92186.jpg'],
  ['Tyrion Lannister', 'https://avatarfiles.alphacoders.com/113/113425.jpg'],
  ['Jaime Lannister', 'https://avatarfiles.alphacoders.com/105/105137.jpg'],
  ['Ygritte', 'https://avatarfiles.alphacoders.com/105/105125.jpg'],
  ['Chandler Bing', 'https://pbs.twimg.com/profile_images/2991381736/e2160154f215a325b0fc73f866039311.jpeg'],
  ['Robb Stark', 'https://avatarfiles.alphacoders.com/997/99786.jpg'],
  ['Ramsay Bolton', 'https://avatarfiles.alphacoders.com/100/100717.jpg'],
  ['Ross Geller', 'http://www.glamourparis.com/uploads/images/thumbs/201622/2d/les_moments_les_plus_dr__les_de_ross_dans_friends_2035.jpeg_north_64x64_white.jpg'],
  ['Khal Drogo', 'https://avatarfiles.alphacoders.com/920/92041.jpg'],
  ['Petyr Baelish', 'https://avatarfiles.alphacoders.com/647/64789.jpg'],
  ['Rachel Green', 'http://78.media.tumblr.com/avatar_78d4c7926758_128.png'],
  ['Margaery Tyrell', 'https://avatarfiles.alphacoders.com/484/48473.jpg'],
  ['Joffrey Baratheon', 'https://avatarfiles.alphacoders.com/284/28430.jpg'],
  ['Ghost', 'https://avatarfiles.alphacoders.com/288/28817.png'],
  ['White Walker', 'https://avatarfiles.alphacoders.com/183/18368.jpg'],
  ['Brann Stark', 'http://pm1.narvii.com/6573/86d849fdc582c9992d61c1326ed1e40934b9bf21_128.jpg'],
  ['Monica Geller', 'http://www.fanfr.com/look/img/monica.jpg']
]



(1..15).each do |i|
  user1 = User.create(username: "demo#{i}", password: 'password', image_url: UiFaces.face);
  Subscription.create(user_id: user1.id, channel_id: channel1.id)
end

characters.each do |char|
  char = User.create(username: char[0], password: 'password', image_url: char[1])
  Subscription.create(user_id: char.id, channel_id: channel1.id)
end


channel2 = Channel.create(name: 'Sports')
channel3 = Channel.create(name: 'Vacations!')
channel4 = Channel.create(name: 'Harry Potter')
channel5 = Channel.create(name: 'Programming is fun')
channel6 = Channel.create(name: 'Coffee Addicts')
channel7 = Channel.create(name: 'Sports')
channel8 = Channel.create(name: 'Pokemon Fan Club')
channel9 = Channel.create(name: 'Foodies')


Subscription.create(user_id: 1, channel_id: 2)
Subscription.create(user_id: 1, channel_id: 4)
Subscription.create(user_id: 1, channel_id: 5)
Subscription.create(user_id: 1, channel_id: 9)

Subscription.create(user_id: 2, channel_id: 3)
Subscription.create(user_id: 2, channel_id: 4)
Subscription.create(user_id: 2, channel_id: 7)
Subscription.create(user_id: 2, channel_id: 8)

Subscription.create(user_id: 3, channel_id: 2)
Subscription.create(user_id: 3, channel_id: 9)
Subscription.create(user_id: 3, channel_id: 7)
Subscription.create(user_id: 3, channel_id: 6)

Subscription.create(user_id: 4, channel_id: 2)
Subscription.create(user_id: 4, channel_id: 4)
Subscription.create(user_id: 4, channel_id: 5)
Subscription.create(user_id: 4, channel_id: 3)

Subscription.create(user_id: 5, channel_id: 7)
Subscription.create(user_id: 5, channel_id: 2)
Subscription.create(user_id: 5, channel_id: 3)
Subscription.create(user_id: 5, channel_id: 9)

Subscription.create(user_id: 6, channel_id: 3)
Subscription.create(user_id: 6, channel_id: 4)
Subscription.create(user_id: 6, channel_id: 5)
Subscription.create(user_id: 6, channel_id: 8)

Subscription.create(user_id: 7, channel_id: 4)
Subscription.create(user_id: 7, channel_id: 5)
Subscription.create(user_id: 7, channel_id: 8)
Subscription.create(user_id: 7, channel_id: 4)

Subscription.create(user_id: 8, channel_id: 3)
Subscription.create(user_id: 8, channel_id: 4)
Subscription.create(user_id: 8, channel_id: 7)
Subscription.create(user_id: 8, channel_id: 8)

Subscription.create(user_id: 9, channel_id: 7)
Subscription.create(user_id: 9, channel_id: 4)
Subscription.create(user_id: 9, channel_id: 2)
Subscription.create(user_id: 9, channel_id: 9)

Subscription.create(user_id: 10, channel_id: 3)
Subscription.create(user_id: 10, channel_id: 2)
Subscription.create(user_id: 10, channel_id: 4)
Subscription.create(user_id: 10, channel_id: 7)

Subscription.create(user_id: 11, channel_id: 8)
Subscription.create(user_id: 11, channel_id: 2)
Subscription.create(user_id: 11, channel_id: 3)
Subscription.create(user_id: 11, channel_id: 9)

Subscription.create(user_id: 12, channel_id: 3)
Subscription.create(user_id: 12, channel_id: 2)
Subscription.create(user_id: 12, channel_id: 7)
Subscription.create(user_id: 12, channel_id: 4)

Subscription.create(user_id: 13, channel_id: 9)
Subscription.create(user_id: 13, channel_id: 8)
Subscription.create(user_id: 13, channel_id: 7)
Subscription.create(user_id: 13, channel_id: 6)

Subscription.create(user_id: 14, channel_id: 3)
Subscription.create(user_id: 14, channel_id: 4)
Subscription.create(user_id: 14, channel_id: 6)
Subscription.create(user_id: 14, channel_id: 8)

Subscription.create(user_id: 15, channel_id: 2)
Subscription.create(user_id: 15, channel_id: 8)
Subscription.create(user_id: 15, channel_id: 7)
Subscription.create(user_id: 15, channel_id: 4)

Subscription.create(user_id: 16, channel_id: 2)
Subscription.create(user_id: 16, channel_id: 8)
Subscription.create(user_id: 16, channel_id: 7)
Subscription.create(user_id: 16, channel_id: 4)

Subscription.create(user_id: 17, channel_id: 4)
Subscription.create(user_id: 17, channel_id: 3)
Subscription.create(user_id: 17, channel_id: 6)
Subscription.create(user_id: 17, channel_id: 5)

Subscription.create(user_id: 18, channel_id: 2)
Subscription.create(user_id: 18, channel_id: 3)
Subscription.create(user_id: 18, channel_id: 4)
Subscription.create(user_id: 18, channel_id: 5)

Subscription.create(user_id: 19, channel_id: 6)
Subscription.create(user_id: 19, channel_id: 7)
Subscription.create(user_id: 19, channel_id: 8)
Subscription.create(user_id: 19, channel_id: 5)

Subscription.create(user_id: 20, channel_id: 4)
Subscription.create(user_id: 20, channel_id: 6)
Subscription.create(user_id: 20, channel_id: 8)
Subscription.create(user_id: 20, channel_id: 2)

Subscription.create(user_id: 21, channel_id: 4)
Subscription.create(user_id: 21, channel_id: 3)
Subscription.create(user_id: 21, channel_id: 5)
Subscription.create(user_id: 21, channel_id: 2)

Subscription.create(user_id: 22, channel_id: 4)
Subscription.create(user_id: 22, channel_id: 5)
Subscription.create(user_id: 22, channel_id: 2)
Subscription.create(user_id: 22, channel_id: 6)

Subscription.create(user_id: 23, channel_id: 8)
Subscription.create(user_id: 23, channel_id: 5)
Subscription.create(user_id: 23, channel_id: 3)
Subscription.create(user_id: 23, channel_id: 2)

Subscription.create(user_id: 24, channel_id: 4)
Subscription.create(user_id: 24, channel_id: 3)
Subscription.create(user_id: 24, channel_id: 2)
Subscription.create(user_id: 24, channel_id: 6)

Subscription.create(user_id: 25, channel_id: 5)
Subscription.create(user_id: 25, channel_id: 4)
Subscription.create(user_id: 25, channel_id: 2)
Subscription.create(user_id: 25, channel_id: 7)

Subscription.create(user_id: 26, channel_id: 7)
Subscription.create(user_id: 26, channel_id: 8)
Subscription.create(user_id: 26, channel_id: 2)
Subscription.create(user_id: 26, channel_id: 3)

Subscription.create(user_id: 27, channel_id: 4)
Subscription.create(user_id: 27, channel_id: 3)
Subscription.create(user_id: 27, channel_id: 2)
Subscription.create(user_id: 27, channel_id: 6)

Subscription.create(user_id: 28, channel_id: 5)
Subscription.create(user_id: 28, channel_id: 4)
Subscription.create(user_id: 28, channel_id: 3)
Subscription.create(user_id: 28, channel_id: 2)

Subscription.create(user_id: 29, channel_id: 2)
Subscription.create(user_id: 29, channel_id: 6)
Subscription.create(user_id: 29, channel_id: 7)
Subscription.create(user_id: 29, channel_id: 8)

Subscription.create(user_id: 30, channel_id: 7)
Subscription.create(user_id: 30, channel_id: 6)
Subscription.create(user_id: 30, channel_id: 5)
Subscription.create(user_id: 30, channel_id: 8)

Subscription.create(user_id: 31, channel_id: 6)
Subscription.create(user_id: 31, channel_id: 5)
Subscription.create(user_id: 31, channel_id: 7)
Subscription.create(user_id: 31, channel_id: 4)

Subscription.create(user_id: 32, channel_id: 8)
Subscription.create(user_id: 32, channel_id: 2)
Subscription.create(user_id: 32, channel_id: 7)
Subscription.create(user_id: 32, channel_id: 3)

Subscription.create(user_id: 33, channel_id: 4)
Subscription.create(user_id: 33, channel_id: 3)
Subscription.create(user_id: 33, channel_id: 2)
Subscription.create(user_id: 33, channel_id: 2)

Subscription.create(user_id: 34, channel_id: 5)
Subscription.create(user_id: 34, channel_id: 4)
Subscription.create(user_id: 34, channel_id: 3)
Subscription.create(user_id: 34, channel_id: 2)

Subscription.create(user_id: 35, channel_id: 3)
Subscription.create(user_id: 35, channel_id: 6)
Subscription.create(user_id: 35, channel_id: 5)
Subscription.create(user_id: 35, channel_id: 7)

Subscription.create(user_id: 36, channel_id: 8)
Subscription.create(user_id: 36, channel_id: 7)
Subscription.create(user_id: 36, channel_id: 2)
Subscription.create(user_id: 36, channel_id: 4)

Subscription.create(user_id: 37, channel_id: 2)
Subscription.create(user_id: 37, channel_id: 3)
Subscription.create(user_id: 37, channel_id: 4)
Subscription.create(user_id: 37, channel_id: 7)

#channel1
Message.create(body: 'Hi everyone!', user_id: 36, channel_id: 1)
Message.create(body: 'https://giphy.com/embed/IThjAlJnD9WNO', user_id: 36, channel_id: 1)
Message.create(body: 'Oh hey, how\'s it going everyone?', user_id: 16, channel_id: 1)
Message.create(body: 'WOOF WOOF!', user_id: 34, channel_id: 1)
Message.create(body: 'Calm down ghost.', user_id: 20, channel_id: 1)
Message.create(body: 'You know nothing Jon Snow', user_id: 24, channel_id: 1)
#
#channel2

#channel3

#channel4

#channel5

#channel6

#channel7

#channel8




ch = Channel.create(name: 'dm_channel12948', is_dm: true)
Subscription.create(user_id: 1, channel_id: ch.id)
Subscription.create(user_id: 16, channel_id: ch.id)
Subscription.create(user_id: 17, channel_id: ch.id)
Subscription.create(user_id: 18, channel_id: ch.id)
Subscription.create(user_id: 19, channel_id: ch.id)
ch = Channel.create(name: 'dm_channel14321', is_dm: true)
Subscription.create(user_id: 1, channel_id: ch.id)
Subscription.create(user_id: 26, channel_id: ch.id)
Subscription.create(user_id: 31, channel_id: ch.id)
ch = Channel.create(name: 'dm_channel13423', is_dm: true)
Subscription.create(user_id: 1, channel_id: ch.id)
Subscription.create(user_id: 22, channel_id: ch.id)
Subscription.create(user_id: 25, channel_id: ch.id)
Subscription.create(user_id: 27, channel_id: ch.id)
ch = Channel.create(name: 'dm_channel12653', is_dm: true)
Subscription.create(user_id: 1, channel_id: ch.id)
Subscription.create(user_id: 37, channel_id: ch.id)
Subscription.create(user_id: 36, channel_id: ch.id)

ch = Channel.create(name: 'dm_channel12433', is_dm: true)
Subscription.create(user_id: 2, channel_id: ch.id)
Subscription.create(user_id: 37, channel_id: ch.id)
Subscription.create(user_id: 19, channel_id: ch.id)
ch = Channel.create(name: 'dm_channel12918', is_dm: true)
Subscription.create(user_id: 2, channel_id: ch.id)
Subscription.create(user_id: 15, channel_id: ch.id)
Subscription.create(user_id: 36, channel_id: ch.id)
Subscription.create(user_id: 31, channel_id: ch.id)
ch = Channel.create(name: 'dm_channel12948', is_dm: true)
Subscription.create(user_id: 2, channel_id: ch.id)
Subscription.create(user_id: 26, channel_id: ch.id)
Subscription.create(user_id: 16, channel_id: ch.id)
Subscription.create(user_id: 17, channel_id: ch.id)
Subscription.create(user_id: 27, channel_id: ch.id)
ch = Channel.create(name: 'dm_channel12432', is_dm: true)
Subscription.create(user_id: 2, channel_id: ch.id)
Subscription.create(user_id: 23, channel_id: ch.id)

ch = Channel.create(name: 'dm_channel17543', is_dm: true)
Subscription.create(user_id: 3, channel_id: ch.id)
Subscription.create(user_id: 22, channel_id: ch.id)
ch = Channel.create(name: 'dm_channel53213', is_dm: true)
Subscription.create(user_id: 3, channel_id: ch.id)
Subscription.create(user_id: 23, channel_id: ch.id)
Subscription.create(user_id: 24, channel_id: ch.id)
ch = Channel.create(name: 'dm_channel39201', is_dm: true)
Subscription.create(user_id: 3, channel_id: ch.id)
Subscription.create(user_id: 26, channel_id: ch.id)
Subscription.create(user_id: 25, channel_id: ch.id)
Subscription.create(user_id: 30, channel_id: ch.id)
Subscription.create(user_id: 27, channel_id: ch.id)
Subscription.create(user_id: 16, channel_id: ch.id)
Subscription.create(user_id: 17, channel_id: ch.id)
ch = Channel.create(name: 'dm_channel48399', is_dm: true)
Subscription.create(user_id: 3, channel_id: ch.id)
Subscription.create(user_id: 18, channel_id: ch.id)
Subscription.create(user_id: 19, channel_id: ch.id)
Subscription.create(user_id: 37, channel_id: ch.id)

ch = Channel.create(name: 'dm_channel43829', is_dm: true)
Subscription.create(user_id: 4, channel_id: ch.id)
Subscription.create(user_id: 36, channel_id: ch.id)
Subscription.create(user_id: 24, channel_id: ch.id)
Subscription.create(user_id: 17, channel_id: ch.id)
ch = Channel.create(name: 'dm_channel43809', is_dm: true)
Subscription.create(user_id: 4, channel_id: ch.id)
Subscription.create(user_id: 18, channel_id: ch.id)
Subscription.create(user_id: 25, channel_id: ch.id)
Subscription.create(user_id: 19, channel_id: ch.id)
Subscription.create(user_id: 20, channel_id: ch.id)
Subscription.create(user_id: 21, channel_id: ch.id)
ch = Channel.create(name: 'dm_channel47382', is_dm: true)
Subscription.create(user_id: 4, channel_id: ch.id)
Subscription.create(user_id: 22, channel_id: ch.id)
Subscription.create(user_id: 23, channel_id: ch.id)
ch = Channel.create(name: 'dm_channel47381', is_dm: true)
Subscription.create(user_id: 4, channel_id: ch.id)
Subscription.create(user_id: 16, channel_id: ch.id)

ch = Channel.create(name: 'dm_channel47908', is_dm: true)
Subscription.create(user_id: 5, channel_id: ch.id)
Subscription.create(user_id: 23, channel_id: ch.id)
Subscription.create(user_id: 34, channel_id: ch.id)
Subscription.create(user_id: 36, channel_id: ch.id)
ch = Channel.create(name: 'dm_channel48990', is_dm: true)
Subscription.create(user_id: 5, channel_id: ch.id)
Subscription.create(user_id: 16, channel_id: ch.id)
Subscription.create(user_id: 29, channel_id: ch.id)
Subscription.create(user_id: 30, channel_id: ch.id)
ch = Channel.create(name: 'dm_channel11283', is_dm: true)
Subscription.create(user_id: 5, channel_id: ch.id)
Subscription.create(user_id: 22, channel_id: ch.id)
Subscription.create(user_id: 28, channel_id: ch.id)
ch = Channel.create(name: 'dm_channel22738', is_dm: true)
Subscription.create(user_id: 5, channel_id: ch.id)
Subscription.create(user_id: 24, channel_id: ch.id)

ch = Channel.create(name: 'dm_channel38290', is_dm: true)
Subscription.create(user_id: 6, channel_id: ch.id)
Subscription.create(user_id: 16, channel_id: ch.id)
Subscription.create(user_id: 22, channel_id: ch.id)
Subscription.create(user_id: 36, channel_id: ch.id)
Subscription.create(user_id: 35, channel_id: ch.id)
Subscription.create(user_id: 17, channel_id: ch.id)
ch = Channel.create(name: 'dm_channel47380', is_dm: true)
Subscription.create(user_id: 6, channel_id: ch.id)
Subscription.create(user_id: 23, channel_id: ch.id)
Subscription.create(user_id: 27, channel_id: ch.id)
ch = Channel.create(name: 'dm_channel47789', is_dm: true)
Subscription.create(user_id: 26, channel_id: ch.id)
Subscription.create(user_id: 6, channel_id: ch.id)
ch = Channel.create(name: 'dm_channel77738', is_dm: true)
Subscription.create(user_id: 6, channel_id: ch.id)
Subscription.create(user_id: 25, channel_id: ch.id)
Subscription.create(user_id: 24, channel_id: ch.id)
Subscription.create(user_id: 30, channel_id: ch.id)

ch = Channel.create(name: 'dm_channel44489', is_dm: true)
Subscription.create(user_id: 7, channel_id: ch.id)
Subscription.create(user_id: 24, channel_id: ch.id)
Subscription.create(user_id: 23, channel_id: ch.id)
Subscription.create(user_id: 22, channel_id: ch.id)
Subscription.create(user_id: 29, channel_id: ch.id)
Subscription.create(user_id: 35, channel_id: ch.id)
ch = Channel.create(name: 'dm_channel33321', is_dm: true)
Subscription.create(user_id: 7, channel_id: ch.id)
Subscription.create(user_id: 18, channel_id: ch.id)
Subscription.create(user_id: 31, channel_id: ch.id)
ch = Channel.create(name: 'dm_channel37727', is_dm: true)
Subscription.create(user_id: 7, channel_id: ch.id)
Subscription.create(user_id: 16, channel_id: ch.id)
ch = Channel.create(name: 'dm_channel33322', is_dm: true)
Subscription.create(user_id: 7, channel_id: ch.id)
Subscription.create(user_id: 17, channel_id: ch.id)
Subscription.create(user_id: 18, channel_id: ch.id)
Subscription.create(user_id: 34, channel_id: ch.id)

ch = Channel.create(name: 'dm_channel11119', is_dm: true)
Subscription.create(user_id: 8, channel_id: ch.id)
Subscription.create(user_id: 18, channel_id: ch.id)
Subscription.create(user_id: 17, channel_id: ch.id)
ch = Channel.create(name: 'dm_channel03920', is_dm: true)
Subscription.create(user_id: 8, channel_id: ch.id)
Subscription.create(user_id: 35, channel_id: ch.id)
Subscription.create(user_id: 18, channel_id: ch.id)
Subscription.create(user_id: 32, channel_id: ch.id)
Subscription.create(user_id: 33, channel_id: ch.id)
ch = Channel.create(name: 'dm_channel37277', is_dm: true)
Subscription.create(user_id: 8, channel_id: ch.id)
Subscription.create(user_id: 34, channel_id: ch.id)
ch = Channel.create(name: 'dm_channel23123', is_dm: true)
Subscription.create(user_id: 8, channel_id: ch.id)
Subscription.create(user_id: 16, channel_id: ch.id)
Subscription.create(user_id: 22, channel_id: ch.id)

ch = Channel.create(name: 'dm_channel43434', is_dm: true)
Subscription.create(user_id: 9, channel_id: ch.id)
Subscription.create(user_id: 28, channel_id: ch.id)
ch = Channel.create(name: 'dm_channel23231', is_dm: true)
Subscription.create(user_id: 9, channel_id: ch.id)
Subscription.create(user_id: 35, channel_id: ch.id)
Subscription.create(user_id: 27, channel_id: ch.id)
Subscription.create(user_id: 29, channel_id: ch.id)
Subscription.create(user_id: 17, channel_id: ch.id)
ch = Channel.create(name: 'dm_channel23232', is_dm: true)
Subscription.create(user_id: 9, channel_id: ch.id)
Subscription.create(user_id: 30, channel_id: ch.id)
ch = Channel.create(name: 'dm_channel23333', is_dm: true)
Subscription.create(user_id: 9, channel_id: ch.id)
Subscription.create(user_id: 31, channel_id: ch.id)
Subscription.create(user_id: 22, channel_id: ch.id)

ch = Channel.create(name: 'dm_channel34320', is_dm: true)
Subscription.create(user_id: 10, channel_id: ch.id)
Subscription.create(user_id: 21, channel_id: ch.id)
Subscription.create(user_id: 20, channel_id: ch.id)
ch = Channel.create(name: 'dm_channel78787', is_dm: true)
Subscription.create(user_id: 10, channel_id: ch.id)
Subscription.create(user_id: 26, channel_id: ch.id)
Subscription.create(user_id: 35, channel_id: ch.id)
ch = Channel.create(name: 'dm_channel89898', is_dm: true)
Subscription.create(user_id: 10, channel_id: ch.id)
Subscription.create(user_id: 25, channel_id: ch.id)
Subscription.create(user_id: 32, channel_id: ch.id)
Subscription.create(user_id: 24, channel_id: ch.id)
ch = Channel.create(name: 'dm_channel98920', is_dm: true)
Subscription.create(user_id: 10, channel_id: ch.id)
Subscription.create(user_id: 22, channel_id: ch.id)

ch = Channel.create(name: 'dm_channel11111', is_dm: true)
Subscription.create(user_id: 11, channel_id: ch.id)
Subscription.create(user_id: 35, channel_id: ch.id)
Subscription.create(user_id: 31, channel_id: ch.id)
Subscription.create(user_id: 22, channel_id: ch.id)
ch = Channel.create(name: 'dm_channel22222', is_dm: true)
Subscription.create(user_id: 11, channel_id: ch.id)
Subscription.create(user_id: 34, channel_id: ch.id)
Subscription.create(user_id: 37, channel_id: ch.id)
ch = Channel.create(name: 'dm_channel33333', is_dm: true)
Subscription.create(user_id: 11, channel_id: ch.id)
Subscription.create(user_id: 20, channel_id: ch.id)
Subscription.create(user_id: 17, channel_id: ch.id)
ch = Channel.create(name: 'dm_channel44444', is_dm: true)
Subscription.create(user_id: 11, channel_id: ch.id)
Subscription.create(user_id: 33, channel_id: ch.id)

ch = Channel.create(name: 'dm_channel54777', is_dm: true)
Subscription.create(user_id: 12, channel_id: ch.id)
Subscription.create(user_id: 35, channel_id: ch.id)
Subscription.create(user_id: 22, channel_id: ch.id)
Subscription.create(user_id: 33, channel_id: ch.id)
Subscription.create(user_id: 16, channel_id: ch.id)
ch = Channel.create(name: 'dm_channel77755', is_dm: true)
Subscription.create(user_id: 12, channel_id: ch.id)
Subscription.create(user_id: 21, channel_id: ch.id)
Subscription.create(user_id: 20, channel_id: ch.id)
ch = Channel.create(name: 'dm_channel53321', is_dm: true)
Subscription.create(user_id: 12, channel_id: ch.id)
Subscription.create(user_id: 16, channel_id: ch.id)
Subscription.create(user_id: 37, channel_id: ch.id)
ch = Channel.create(name: 'dm_channel75475', is_dm: true)
Subscription.create(user_id: 12, channel_id: ch.id)
Subscription.create(user_id: 17, channel_id: ch.id)

ch = Channel.create(name: 'dm_channel76727', is_dm: true)
Subscription.create(user_id: 13, channel_id: ch.id)
Subscription.create(user_id: 33, channel_id: ch.id)
ch = Channel.create(name: 'dm_channel11002', is_dm: true)
Subscription.create(user_id: 13, channel_id: ch.id)
Subscription.create(user_id: 20, channel_id: ch.id)
ch = Channel.create(name: 'dm_channel74665', is_dm: true)
Subscription.create(user_id: 19, channel_id: ch.id)
Subscription.create(user_id: 13, channel_id: ch.id)
Subscription.create(user_id: 18, channel_id: ch.id)
ch = Channel.create(name: 'dm_channel76876', is_dm: true)
Subscription.create(user_id: 32, channel_id: ch.id)
Subscription.create(user_id: 13, channel_id: ch.id)
Subscription.create(user_id: 16, channel_id: ch.id)
Subscription.create(user_id: 17, channel_id: ch.id)

ch = Channel.create(name: 'dm_channel00192', is_dm: true)
Subscription.create(user_id: 14, channel_id: ch.id)
Subscription.create(user_id: 32, channel_id: ch.id)
Subscription.create(user_id: 37, channel_id: ch.id)
Subscription.create(user_id: 30, channel_id: ch.id)
ch = Channel.create(name: 'dm_channel12348', is_dm: true)
Subscription.create(user_id: 28, channel_id: ch.id)
Subscription.create(user_id: 14, channel_id: ch.id)
Subscription.create(user_id: 32, channel_id: ch.id)
ch = Channel.create(name: 'dm_channel12809', is_dm: true)
Subscription.create(user_id: 14, channel_id: ch.id)
Subscription.create(user_id: 33, channel_id: ch.id)
Subscription.create(user_id: 20, channel_id: ch.id)
ch = Channel.create(name: 'dm_channel23019', is_dm: true)
Subscription.create(user_id: 14, channel_id: ch.id)
Subscription.create(user_id: 34, channel_id: ch.id)

ch = Channel.create(name: 'dm_channel32655', is_dm: true)
Subscription.create(user_id: 15, channel_id: ch.id)
Subscription.create(user_id: 29, channel_id: ch.id)
Subscription.create(user_id: 31, channel_id: ch.id)
Subscription.create(user_id: 21, channel_id: ch.id)
Subscription.create(user_id: 34, channel_id: ch.id)
Subscription.create(user_id: 28, channel_id: ch.id)
ch = Channel.create(name: 'dm_channel55427', is_dm: true)
Subscription.create(user_id: 15, channel_id: ch.id)
Subscription.create(user_id: 27, channel_id: ch.id)
Subscription.create(user_id: 33, channel_id: ch.id)
ch = Channel.create(name: 'dm_channel89091', is_dm: true)
Subscription.create(user_id: 15, channel_id: ch.id)
Subscription.create(user_id: 16, channel_id: ch.id)
Subscription.create(user_id: 32, channel_id: ch.id)
ch = Channel.create(name: 'dm_channel88593', is_dm: true)
Subscription.create(user_id: 15, channel_id: ch.id)
Subscription.create(user_id: 37, channel_id: ch.id)
Subscription.create(user_id: 20, channel_id: ch.id)
