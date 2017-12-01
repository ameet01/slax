![Header](https://i.imgur.com/w9bqPgp.png)

### Check out the live [Application](http://slax.us)!

# Slax

![Main Page](https://i.imgur.com/AqIcIkU.jpg)

# Technologies

* Ruby on rails
* React
* Redux
* Websockets (Pusher)

The purpose of this project was to build a full stack application with the functionality and design of a currently existing website that meets predefined feature specifications. The core feature set built was Live Chat, User Authentication, Channels, Direct Messages, and Emoji Reactions.

# Notable Features

### Live Chat

Slax utilizes websockets via [Pusher](http://pusher.com/) to establish real-time chat. When a user submits a new message, our client notifies the server to send a message to others who are already viewing the channel.
<img src='https://github.com/ameet01/slax/blob/master/docs/livechat.gif' />
* When our MessageList component mounts, we subscribe an open connection to Pusher. We unsubscribe when it will unmount.

  <img src='https://i.imgur.com/aQnw6HT.png' width='350px' />
* When a user submits a message, our rails controller will trigger that open connection and send a json message to it. Pusher will then update the client instantly.

  <img src='https://i.imgur.com/3fwytud.png' width='350px' />

### Instant Image Updates

Using react allowed me to incorporate real time updating based on user input. The onChange react method updates the user input in the state of our component, which is always checked to see if it is a valid image or not. If it isn't, "Loading..." will be displayed, if it is, the image is shown.

<img src='https://github.com/ameet01/slax/blob/master/docs/Live%20photo%20update.gif' width='290px'/>


### Giphys?

### Emoticons

### Direct Messages(Single and Group)

## Future Plans
