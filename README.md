![Header](https://i.imgur.com/w9bqPgp.png)

### Check out the live [Application](http://slax.us)!

# Slax

![Main Page](https://i.imgur.com/AqIcIkU.jpg)

# Notable Features

### Live Chat

Slax utilizes websockets via [Pusher](http://pusher.com/) to establish live chat. When a user submits a new message, our client notifies the server to send a message to others who are already viewing the channel. We do this by:
* When our messageList component mounts, we subscribe an open connection to Pusher.
    * ![pusher-frontend](https://i.imgur.com/aQnw6HT.png)
* When a user submits a message, our rails controller will trigger that open connection and send a json message object to the client. Pusher will then update the front end.
    * ![pusher-backend](https://i.imgur.com/3fwytud.png)

![Live Chat](https://github.com/ameet01/slax/blob/master/docs/Live%20Chat%20-%20Production%20Readme.gif)

### Instant Image Updates

### Giphys?

### Emoticons

### Direct Messages(Single and Group)

## Future Plans
