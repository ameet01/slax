![Header](https://i.imgur.com/w9bqPgp.png)

### Check out the live [Application](http://slax.us)!

# Slax

![Main Page](https://i.imgur.com/AqIcIkU.jpg)

# Notable Features

### Live Chat

Slax utilizes websockets via [Pusher](http://pusher.com/) to establish live chat. When a user submits a new message, our client notifies the server to send a message to others who are already viewing the channel.
![Live Chat]<img src='https://github.com/ameet01/slax/blob/master/docs/Live%20Chat%20-%20Production%20Readme.gif' width='400px' />
* When our MessageList component mounts, we subscribe an open connection to Pusher. We unsubscribe when it will unmount.

  <img src='https://i.imgur.com/aQnw6HT.png' width='350px' />
* When a user submits a message, our rails controller will trigger that open connection and send a json message to the client. Pusher will then update the front end.

  <img src='https://i.imgur.com/3fwytud.png' width='350px' />



### Instant Image Updates

Using react allowed me to incorporate real time updating based on user input.

![Image Update](https://github.com/ameet01/slax/blob/master/docs/Live%20photo%20update.gif)

The onChange react method updates the user input in the state of our component, which is always checked to see if it is a valid image or not. If it is, "Loading..." will be displayed, if it is not, an image is shown.

### Giphys?

### Emoticons

### Direct Messages(Single and Group)

## Future Plans
