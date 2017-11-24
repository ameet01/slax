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
        <MessageListContainer />
        <MessageFormContainer />
      </section>
    );
  }

}

export default withRouter(MainChannelAreaChat);
