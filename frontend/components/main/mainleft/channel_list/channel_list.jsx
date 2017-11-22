import React from 'react';
import {Link} from 'react-router-dom';

class ChannelList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchChannels();
  }

  render() {
    return (
      <section className='main-left-channel-list'>
          <h1>ChannelList!</h1>
          <ul>
            {this.props.channels.map((channel,idx) => <li key={idx}><Link to={`/channels/${channel.id}`}>{channel.name}</Link></li>)}
          </ul>
      </section>
    );
  }

}

export default ChannelList;
