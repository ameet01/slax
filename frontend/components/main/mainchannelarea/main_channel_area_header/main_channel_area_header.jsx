import React from 'react';
import { withRouter } from 'react-router-dom';

class MainChannelAreaHeader extends React.Component {
  constructor(props) {
    super(props);
    this.toggleSideBar = this.toggleSideBar.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.match.params.channelId !== nextProps.match.params.channelId) {
      this.props.fetchChannel(nextProps.match.params.channelId);
    }
  }

  toggleSideBar(e) {
    let channelInfo = document.getElementById('channel-info');
    if(channelInfo.style.width === '20%') {
      channelInfo.style.width = '0%';
    } else {
      channelInfo.style.width = '20%';
    }
  }

  render() {
    let headerTitle, userCount;

    if(!this.props.channel) {
      return null;
    }

    if(this.props.channel.is_dm === false) {
      headerTitle = <div className='main-header-channel'>#{this.props.channel.name} </div>;
      userCount = <div onClick={this.toggleSideBar} className='main-header-usercount'><i className="fa fa-user-o" aria-hidden="true"></i><span>{this.props.channel.userCount}</span></div>;
    } else {
      headerTitle = <div className='main-header-channel'>{this.props.channel.users.filter(user => this.props.currentUser.username !== user.username).map(user => user.username).join(', ')} </div>;
      if(this.props.channel.userCount > 2) {
        userCount = <div onClick={this.toggleSideBar} className='main-header-usercount'><i className="fa fa-user-o" aria-hidden="true"></i><span>{this.props.channel.userCount}</span></div>;
      } else if(this.props.channel.userCount === 2) {
        userCount = <div onClick={this.toggleSideBar} className='main-header-usercount'><span>Private Chat</span></div>;
      } else {
        userCount = undefined;
      }
    }

    return (
      <section className='main-header'>
        <div className='header-and-user-count-box'>
          {headerTitle}
          {userCount}
        </div>
      </section>
    );
  }
}

export default withRouter(MainChannelAreaHeader);
