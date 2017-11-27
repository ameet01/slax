import React from 'react';
import { withRouter } from 'react-router-dom';

class MessageListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(!this.props.user) {
      return null;
    }
    let image, timeStamp, body;

    if(this.props.user === 'no user') {
      image = undefined;
      timeStamp = undefined;
      body = <div className='message-body-nested'>{this.props.message.body}</div>;
    } else {
      image = <img src ={this.props.user.image_url} className='user-message-picture'></img>;
      timeStamp = <span className='message-content-header-timestamp'>{this.props.message.created_at}</span>;
      body = <div className='message-body'>{this.props.message.body}</div>;
    }

    return (
      <section className='message-list-item'>
        {image}

        <div className='message-content-header'>
          <div>
            <span className='message-content-header-user'>{this.props.user.username}</span> {timeStamp}
          </div>
          {body}
        </div>
      </section>
    );
  }

}

export default withRouter(MessageListItem);
