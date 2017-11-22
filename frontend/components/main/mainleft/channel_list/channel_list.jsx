import React from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';

class ChannelList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activeSelected: ""};
  }

  componentDidMount() {
    this.props.fetchChannels();
  }

  render() {
    let { activeSelected } = this.state;
    return (
      <section className='main-left-channel-list'>

        <div>
          <h1>Channels</h1>
          <ul>
            {this.props.channels.map((channel,idx) =>
              <Link to={`/channels/${channel.id}`}>
                <li
                  key={idx}
                  className={ classNames({
                    'selected' : activeSelected === `item${idx}`
                  }) }
                  onClick={ event => this.setState({ activeSelected : activeSelected === `item${idx}` ? '' : `item${idx}` }) }
                  ># {channel.name}
                </li>
              </Link>)}
            </ul>
        </div>

          <div>
            <h1>Direct Messages</h1>
          </div>
        </section>
      );
    }

  }

  export default ChannelList;
