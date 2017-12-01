![Header](https://i.imgur.com/w9bqPgp.png)

### Check out the live [Application](http://slax.us)!

# Slax

![Main Page](https://i.imgur.com/AqIcIkU.jpg)

# Technologies

* Ruby on Rails
* React
* Redux
* Websockets (Pusher)

The purpose of this project was to build a full stack application with the functionality and design of a currently existing website that meets predefined feature specifications. The core feature set built was Live Chat, User Authentication, Channels, Direct Messages, and Emoji Reactions.

# Notable Features

### Live Chat

Slax utilizes websockets via [Pusher](http://pusher.com/) to establish real-time chat. When a user submits a new message, our client notifies the server to send a message to others who are already viewing the channel.
<img src='https://github.com/ameet01/slax/blob/master/docs/livechat.gif' />
* When our MessageList component mounts, we subscribe an open connection to Pusher. We unsubscribe when it will unmount.

```
componentWillUnmount() {
    pusher.unsubscribe(`channel-${this.props.match.params.channelId}`);
  }

  componentDidMount() {
    this.props.fetchMessages(this.props.match.params.channelId).then(() => this.setState({loading: false})).then(() => document.getElementById('message-list').lastChild.scrollIntoView(false));
    var channel = pusher.subscribe(`channel-${this.props.match.params.channelId}`);

    channel.bind('create-message', (message) => {
      this.props.fetchMessages(this.props.match.params.channelId).then(() => document.getElementById('message-list').lastChild.scrollIntoView(false));
    });
  }
```
* When a user submits a message, our rails controller will trigger that open connection and send a json message to it. Pusher will then update the client instantly.

```
@message = Message.new(message_params)

  if @message.save
    Pusher.trigger(
      "channel-#{@message.channel_id}", 'create-message',
      {
        id: @message.id,
        body: @message.body,
        user_id: @message.user_id,
        channel_id: @message.channel_id,
        created_at: @message.created_at.localtime.strftime("%l:%M %p"),
        date: @message.created_at.localtime.strftime("%A, %B %d")
      }
)
```

### Instant Image Updates

Using react allowed me to incorporate real time updating based on user input. The onChange react method updates the user input in the state of our component, which is always checked to see if it is a valid image or not. If it isn't, "Loading..." will be displayed, if it is, the image is shown.

<img src='https://github.com/ameet01/slax/blob/master/docs/Live%20photo%20update.gif' width='270px'/>


### Giphys & Emoticons

Implemented external react tools such was react-giphy-search and emoji-mart to allow users to have some fun!

<img src='https://github.com/ameet01/slax/blob/master/docs/giphys.gif' />

### Direct Messages(Single and Group)

## Future Plans
