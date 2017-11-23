import React from 'react';

class MessageListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className='message-list-item'>
        <div className='message-content-header'>
          <span className='message-content-header-user'>{this.props.message.user.username}</span>: {this.props.message.created_at}
        </div>
        <div className='message-body'>
          {this.props.message.body}
        </div>
      </section>
    );
  }

}

export default MessageListItem;
