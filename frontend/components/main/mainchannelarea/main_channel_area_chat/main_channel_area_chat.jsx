import React from 'react';
import { withRouter } from 'react-router-dom';
import MessageList from './message_list/message_list';
import MessageForm from './message_form/message_form';

class MainChannelAreaChat extends React.Component {
  constructor(props) {
    super(props);
    this.joinChannel = this.joinChannel.bind(this);
  }

  componentDidMount() {
    this.props.fetchChannel(this.props.match.params.channelId);
  }

  joinChannel(e) {
    e.preventDefault();
    this.props.history.push(`/channels/${this.props.match.params.channelId}`);
    this.props.createSubscription({user_id: this.props.currentUser.id, channel_id: this.props.match.params.channelId});
  }

  render() {
    let bottomArea;

    if(this.props.channel === {}) {
      return null;
    }

    if(this.props.match.path.includes('preview')) {
      bottomArea = <div className='preview'>
        <h1>You are viewing <span>#{this.props.channel.name}</span></h1>
        <h2>Created on {this.props.channel.created_at}</h2>
        <button onClick={this.joinChannel} className='preview-join-channel-button'>Join Channel</button>
      </div>;
    } else {
      bottomArea = <MessageForm channel={this.props.channel} createMessage={this.props.createMessage} currentUser={this.props.currentUser} />;
    }
    return (
      <section className='main-area'>
        <MessageList channel={this.props.channel} receiveMessage={this.props.receiveMessage} fetchMessages={this.props.fetchMessages} messages={this.props.messages} users={this.props.users}/>
        {bottomArea}
      </section>
    );
  }

}

export default withRouter(MainChannelAreaChat);
