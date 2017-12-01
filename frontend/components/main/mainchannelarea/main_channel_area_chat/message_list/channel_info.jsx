import React from 'react';
import { withRouter } from 'react-router-dom';

class ChannelInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchChannel(this.props.match.params.channelId);
    let channelInfo = document.getElementById('channel-info');
    channelInfo.style.width = '30%';
  }

  render() {
    let purpose;
    if(this.props.channel.id === 1) {
      purpose = <p><span>Purpose</span>: This is for workspace-wide communication and announcements.</p>;
    } else {
      purpose = <p><span>Purpose</span>: Discussion among {this.props.channel.name}</p>;
    }

    return (
      <div id='channel-info'>
        <section className='channel-info-header'>
          <h1>Channel Details</h1>
          <p><span>Name</span>: {this.props.channel.name}</p>
          <p><span>Created On</span>: {this.props.channel.created_at}</p>
          {purpose}
        </section>

        <section className='channel-info-user-list'>
          <h1><i className="fa fa-user-o"></i>{Object.values(this.props.users).filter(user => !user.username.startsWith('demo') || user.username === this.props.currentUser.username).length} Members </h1>
          <ul>
            {Object.values(this.props.users).filter(user => !user.username.startsWith('demo') || user.username === this.props.currentUser.username).map(user => <li key={user.id} className='channel-info-user-li'><img className='channel-info-pics' src={`${user.image_url}`}></img><span>{this.props.currentUser.username === user.username ? user.username.concat(' (You)') : user.username} </span></li>)}
          </ul>
        </section>
      </div>
    );
  }

}

export default withRouter(ChannelInfo);
