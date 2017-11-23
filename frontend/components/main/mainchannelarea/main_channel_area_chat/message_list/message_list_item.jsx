import React from 'react';

class MessageListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className='message-list-item'>
        <img src ='https://rlv.zcache.com/iron_man_assemble_square_sticker-r5962aceb77654e31b7642af0558ebbce_v9i40_8byvr_324.jpg' className='user-message-picture'></img>

        <div className='message-content-header'>
          <div>
            <span className='message-content-header-user'>{this.props.message.user.username}</span>: <span className='message-content-header-timestamp'>{this.props.message.created_at}</span>
          </div>
          <div className='message-body'>
            {this.props.message.body}
          </div>
        </div>
      </section>
    );
  }

}

export default MessageListItem;
