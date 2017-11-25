import React from 'react';
import { withRouter } from 'react-router-dom';
import MessageList from './message_list/message_list';
import MessageForm from './message_form/message_form';

class MainChannelAreaChat extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className='main-area'>
        <MessageList channel={this.props.channel} fetchMessages={this.props.fetchMessages} messages={this.props.messages} users={this.props.users}/>
        <MessageForm channel={this.props.channel} createMessage={this.props.createMessage} currentUser={this.props.currentUser} />
      </section>
    );
  }

}

export default withRouter(MainChannelAreaChat);
