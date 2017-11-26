import React from 'react';
import { withRouter } from 'react-router-dom';

class MessageListDivider extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className='message-list-divider'><span>{this.props.message}</span></li>
    );
  }

}

export default withRouter(MessageListDivider);
