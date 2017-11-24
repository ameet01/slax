import React from 'react';
import MessageListItem from './message_list_item';
import { withRouter } from 'react-router-dom';

class MessageList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMessages(this.props.match.params.channelId).then(() => $('.message-list').scrollTop($('.message-list')[0].scrollHeight));
  }

  render() {
    return (
      <section className='message-list'>
        <ul>
          {this.props.messages.map((message) => <MessageListItem message={message} user={this.props.users[message.user_id]} key={message.id}/>)}
        </ul>
      </section>
    );
  }

}

export default withRouter(MessageList);
