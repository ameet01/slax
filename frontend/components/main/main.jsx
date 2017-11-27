import React from 'react';
import MainLeftContainer from './mainleft/main_left_container';
import MainChannelAreaContainer from './mainchannelarea/main_channel_area_container';
import { withRouter } from 'react-router-dom';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var channel = pusher.subscribe('channel');
    channel.bind('update-channel', function(id) {
      this.props.fetchChannel(id);
    });
  }

  componentWillUnmount() {
    pusher.unsubscribe('channel');
  }

  render() {
    return (
      <div className='main'>
        <MainLeftContainer />
        <MainChannelAreaContainer />
      </div>
    );
  }

}

export default withRouter(Main);
