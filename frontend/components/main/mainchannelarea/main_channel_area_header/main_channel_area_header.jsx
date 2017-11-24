import React from 'react';
import { withRouter } from 'react-router-dom';

class MainChannelAreaHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let headerTitle;

    return (
      <section className='main-header'>
        <div className='main-header-channel'># {this.props.channel.name}</div>
      </section>
    );
  }
}

export default withRouter(MainChannelAreaHeader);
