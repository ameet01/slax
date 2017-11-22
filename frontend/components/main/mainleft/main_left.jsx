import React from 'react';
import ChannelListContainer from './channel_list/channel_list_container';
import HeaderContainer from './header/header_container';
import AboutMe from './aboutme/about_me';

class MainLeft extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className = 'mainleft'>
          <HeaderContainer />
          <ChannelListContainer />
          <AboutMe />
      </section>
    );
  }

}

export default MainLeft;
