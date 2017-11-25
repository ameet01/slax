import React from 'react';
import MessageListItem from './message_list_item';
import { withRouter } from 'react-router-dom';
import {CSSTransitionGroup} from 'react-transition-group';

class MessageList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMessages(this.props.match.params.channelId).then(() => document.getElementById('message-list').lastChild.scrollIntoView(false));
  }

  render() {
    return (
        <section id='message-list' className='message-list'>
          <ul>
            {this.props.messages.map((message) => <MessageListItem message={message} user={this.props.users[message.user_id]} key={message.id}/>)}
          </ul>
        </section>
    );
  }

}

export default withRouter(MessageList);
