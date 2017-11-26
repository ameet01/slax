import React from 'react';
import { withRouter } from 'react-router-dom';

class MessageListDivider extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className='message-list-divider'>{this.props.message}</li>
    );
  }

}

export default withRouter(MessageListDivider);
