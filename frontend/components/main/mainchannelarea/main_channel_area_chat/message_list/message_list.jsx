import React from 'react';

class MessageList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchMessages();
  }

  render() {
    return (
      <section className='message-list'>
        Message List
        <ul>
          {this.props.messages.map((message) => <li>{message.body}</li>)}
        </ul>
      </section>
    );
  }

}

export default MessageList;
