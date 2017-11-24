import React from 'react';
import MainChannelAreaHeaderContainer from './main_channel_area_header/main_channel_area_header_container';
import MainChannelAreaChatContainer from './main_channel_area_chat/main_channel_area_chat_container';
import { withRouter } from 'react-router-dom';

class MainChannelArea extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='mainchannelarea'>
        <MainChannelAreaHeaderContainer />
        <MainChannelAreaChatContainer />
      </div>
    );
  }

}

export default withRouter(MainChannelArea);
