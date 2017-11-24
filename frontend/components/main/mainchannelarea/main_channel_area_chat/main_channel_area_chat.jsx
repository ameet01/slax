import React from 'react';
import MessageFormContainer from './message_form/message_form_container';
import MessageListContainer from './message_list/message_list_container';
import { withRouter } from 'react-router-dom';

class MainChannelAreaChat extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className='main-area'>
        <MessageListContainer channel={this.props.channel} fetchMessages={this.props.fetchMessages} messages={this.props.messages}/>
        <MessageFormContainer channel={this.props.channel} createMessage={this.props.createMessage} currentUser={this.props.currentUser} />
      </section>
    );
  }

}

export default withRouter(MainChannelAreaChat);
