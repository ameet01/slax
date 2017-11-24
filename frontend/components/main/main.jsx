import React from 'react';
import MainLeftContainer from './mainleft/main_left_container';
import MainChannelAreaContainer from './mainchannelarea/main_channel_area_container';
import { withRouter } from 'react-router-dom';

class Main extends React.Component {
  constructor(props) {
    super(props);
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
