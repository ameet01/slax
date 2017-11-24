import React from 'react';
import { withRouter } from 'react-router-dom';

class MainChannelAreaHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let headerTitle;

    if(!this.props.channel) {
      return null;
    }

    if(this.props.channel.is_dm === false) {
      headerTitle = <div className='main-header-channel'># {this.props.channel.name} </div>;
    } else {
      headerTitle = <div className='main-header-channel'># {this.props.channel.users.filter(user => this.props.currentUser.username !== user.username).map(user => user.username).join(', ')} </div>;
    }

    return (
      <section className='main-header'>
        {headerTitle}
      </section>
    );
  }
}

export default withRouter(MainChannelAreaHeader);
