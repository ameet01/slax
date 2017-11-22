import React from 'react';
import MainLeftContainer from './mainleft/main_left_container';
import MainChannelAreaContainer from './mainchannelarea/main_channel_area_container';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <MainLeftContainer />
          <MainChannelAreaContainer />
      </div>
    );
  }

}

export default Main;
