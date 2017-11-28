import React from 'react';
import MessageListItem from './message_list_item';
import { withRouter } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import MessageListDivider from './message_list_divider';
import { ClipLoader } from 'react-spinners';

class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentWillReceiveProps(newProps) {
    document.getElementById('message-list').lastChild.scrollIntoView(false);
    if (this.props.match.params.channelId !== newProps.match.params.channelId) {
      this.setState({ loading: true });
      this.props.fetchMessages(newProps.match.params.channelId).then(() => this.setState({loading: false}));

      pusher.unsubscribe(`channel-${this.props.match.params.channelId}`);

      var channel = pusher.subscribe(`channel-${newProps.match.params.channelId}`);

      channel.bind('create-message', (message) => {
        this.props.fetchMessages(this.props.match.params.channelId).then(() => document.getElementById('message-list').lastChild.scrollIntoView(false));
      });
    }
  }

  componentWillUnmount() {
    pusher.unsubscribe(`channel-${this.props.match.params.channelId}`);
  }

  componentDidMount() {
    this.props.fetchMessages(this.props.match.params.channelId).then(() => this.setState({loading: false})).then(() => document.getElementById('message-list').lastChild.scrollIntoView(false));
    var channel = pusher.subscribe(`channel-${this.props.match.params.channelId}`);

    channel.bind('create-message', (message) => {
      this.props.fetchMessages(this.props.match.params.channelId).then(() => document.getElementById('message-list').lastChild.scrollIntoView(false));
    });
  }

  render() {
    let {messages} = this.props;


    let spinner;

      spinner = <div className='sweet-loading'>
        <ClipLoader
          color={'#2d9ee0'}
          loading={this.state.loading}
          size={45}
        />
      </div>;


    let array = [];

    for(var i = 0; i < messages.length; i++) {
      if(i === 0) {
        if(new Date(messages[i].date.concat(' 2017')).toDateString() === new Date().toDateString()) {
          array.push('Today');
        } else {
          array.push(messages[i].date);
        }
      }
      array.push(messages[i]);
      if(i === messages.length-1) {
        continue;
      }
      if(messages[i].date !== messages[i+1].date) {
        if(new Date(messages[i+1].date.concat(' 2017')).toDateString() === new Date().toDateString()) {
          array.push('Today');
        } else {
          array.push(messages[i+1].date);
        }
      }
    }

    let header, purpose, paragraph, title;
    let users = Object.values(this.props.users);

    if(!this.state.loading) {
      if(this.props.channel.id === 1) {
        purpose = <p>Purpose: This is for workspace-wide communication and announcements.</p>;
      }
      if(this.props.channel.is_dm) {
        if(users.length > 4) {
          title = users.slice(0,3).filter(user => user.id !== this.props.currentUser.id).map(user => user.username).join(', ').concat(' and ').concat(`${users.length - 4}`).concat(' others');
          paragraph = <p className='message-list-header-paragraph'>This is the very beginning of your direct message history with {users.slice(0,3).filter(user => user.id !== this.props.currentUser.id).map(user => user.username).join(', ').concat(' and ').concat(`${users.length - 4}`).concat(' others.')}</p>
        } else {
          title = users.filter(user => user.id !== this.props.currentUser.id).map(user => user.username).join(', ');
          paragraph = <p className='message-list-header-paragraph'>This is the very beginning of your direct message history with {users.filter(user => user.id !== this.props.currentUser.id).map(user => user.username).join(', ')}</p>
        }
      } else {
        title = this.props.channel.name;
        paragraph = <p className='message-list-header-paragraph'>This channel was created on {this.props.channel.created_at}. This is the very beginning of the {this.props.channel.name} channel.</p>
      }
        header = <div className='message-list-header'>
        <h1 className='message-list-header-title'>#{title}</h1>
        {paragraph}
        {purpose}
    </div>;
    }

    let fullMessages = <ul>
      {spinner}
      <CSSTransitionGroup transitionName="example">
        {header}
      </CSSTransitionGroup>

      {array.map((message, idx) => {
        let obj;
        if(typeof message === 'object') {
          if(array[idx-1].user_id === array[idx].user_id) {
            obj = <MessageListItem message={message} user={'no user'} key={message.id}/>;
          } else {
            obj = <MessageListItem message={message} user={this.props.users[message.user_id]} key={message.id}/>;
          }
        } else if(typeof message === 'string') {
          obj = <MessageListDivider message={message} key={message.id} />;
        }
        return obj;
      })}
    </ul>;


    return (
        <section id='message-list' className='message-list'>
          {fullMessages}
        </section>
    );
  }

}

export default withRouter(MessageList);
