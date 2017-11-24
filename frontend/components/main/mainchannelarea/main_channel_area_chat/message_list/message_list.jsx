import React from 'react';
import MessageListItemContainer from './message_list_item_container';
import { withRouter } from 'react-router-dom';

class MessageList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMessages().then(() => $('.message-list').scrollTop($('.message-list')[0].scrollHeight));
  }

  render() {
    return (
      <section className='message-list'>
        <ul>
          {this.props.messages.map((message) => <MessageListItemContainer message={message} key={message.id}/>)}
        </ul>
      </section>
    );
  }

}

export default withRouter(MessageList);
