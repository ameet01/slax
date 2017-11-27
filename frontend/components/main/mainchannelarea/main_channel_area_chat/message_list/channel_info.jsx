import React from 'react';
import { withRouter } from 'react-router-dom';

class ChannelInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='channel-info'>
        <section>
          {this.props.channel.name}
        </section>

        <section>
          <ul>
            {Object.values(this.props.users).map(user => <li>{user.username}</li>)}
          </ul>
        </section>
      </div>
    );
  }

}

export default withRouter(ChannelInfo);
