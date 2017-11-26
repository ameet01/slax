import React from 'react';
import MessageListItem from './message_list_item';
import { withRouter } from 'react-router-dom';
import {CSSTransitionGroup} from 'react-transition-group';
import MessageListDivider from './message_list_divider';

class MessageList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMessages(this.props.match.params.channelId).then(() => document.getElementById('message-list').lastChild.scrollIntoView(false));
  }

  render() {
    let {messages} = this.props;
    console.log(messages);
    let array = [];
    for(var i = 0; i < messages.length; i++) {
      if(i === 0) {
        array.push(messages[i].date);
      }
      array.push(messages[i]);
      if(i === messages.length-1) {
        continue;
      }
      if(messages[i].date !== messages[i+1].date) {
        array.push(messages[i+1].date);
      }
    }

    let fullMessages = <ul>
      {array.map((message, idx) => {
        let obj;
        if(typeof message === 'object') {
          obj = <MessageListItem message={message} user={this.props.users[message.user_id]} key={message.id}/>;
        } else if(typeof message === 'string') {
          obj = <MessageListDivider message={message} />;
        }
        return obj;
      })}
    </ul>;


    return (
        <section id='message-list' className='message-list'>
          {fullMessages}
        </section>
    );
  }

}

export default withRouter(MessageList);
