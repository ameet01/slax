import React from 'react';
import MessageListItemContainer from './message_list_item_container';

class MessageList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMessages();
  }

  render() {
    return (
      <section className='message-list'>
        <ul>
          {this.props.messages.map((message) => <MessageListItemContainer message={message}/>)}
        </ul>
      </section>
    );
  }

}

export default MessageList;
