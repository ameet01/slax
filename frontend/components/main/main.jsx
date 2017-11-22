import React from 'react';
import MainLeftContainer from './mainleft/main_left_container';
import MainChannelAreaContainer from './mainchannelarea/main_channel_area_container';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var button;
    if(this.props.currentUser) {
      button = <button onClick={() => this.props.logout()}>Log Out</button>;
    }

    return (
      <div>
          <h1>Hi {this.props.currentUser.username}!</h1>
          <MainLeftContainer />
          <MainChannelAreaContainer />
          {button}
      </div>
    );
  }

}

export default Main;
