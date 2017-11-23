import React from 'react';
import MainChannelAreaHeaderContainer from './main_channel_area_header/main_channel_area_header_container';
import MainChannelAreaChatContainer from './main_channel_area_chat/main_channel_area_chat_container';

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

export default MainChannelArea;
