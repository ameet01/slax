import React from 'react';
import { withRouter } from 'react-router-dom';
import { Picker, Emoji } from 'emoji-mart';
import {linkEmoticonToMessage} from '../../../../../util/emoticon_api_util';

class MessageListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showEmoji: false};
    this.showEmoji = this.showEmoji.bind(this);
    this.addEmoji = this.addEmoji.bind(this);
    console.log(this.props.emoticons);
  }


  showEmoji(e) {
    if(this.state.showEmoji) {
      this.setState({showEmoji: false});
    } else {
      this.setState({showEmoji: true});
    }
  }

  addEmoji(e) {
    console.log(e);
    let obj = {user_id: this.props.currentUser.id, message_id: this.props.message.id, icon: JSON.stringify(e)};

    linkEmoticonToMessage(obj);
    // .then(resp => this.props.updateMessage(JSON.parse(resp.message)));
  }

  render() {
    if(!this.props.user) {
      return null;
    }
    let image, timeStamp, body, classname, emoji;

    if(this.props.user === 'no user') {
      image = undefined;
      timeStamp = undefined;
      classname = 'message-list-item-nested';
      if(this.props.message.body.includes('giphy')) {
        body = <div className='message-body-nested'><span className='message-content-header-nested-timestamp'>{this.props.message.created_at}</span><div className='nested-message-body'><iframe src={this.props.message.body} width="430" height="270" frameBorder="0" className="giphy-embed"></iframe></div></div>;
      } else {
        body = <div className='message-body-nested'><span className='message-content-header-nested-timestamp'>{this.props.message.created_at}</span><div className='nested-message-body'>{this.props.message.body}</div></div>;
      }
    } else {
      image = <img src ={this.props.user.image_url} className='user-message-picture'></img>;
      timeStamp = <span className='message-content-header-timestamp'>{this.props.message.created_at}</span>;
      classname = 'message-list-item';
      if(this.props.message.body.includes('giphy')) {
        body = body = <div className='message-body'><iframe src={this.props.message.body} width="480" height="320" frameBorder="0" class="giphy-embed"></iframe></div>;
      } else {
        body = <div className='message-body'>{this.props.message.body}</div>;
      }
    }
    let picker;
    if(this.state.showEmoji) {
      picker = <Picker onClick={this.addEmoji} sheetSize='32' set='emojione'/>;
    }

    return (
      <div>
        {picker}
        <section className={classname}>
          {image}
          <div className='message-content-header'>
            <div>
              <span className='message-content-header-user'>{this.props.user.username}</span> {timeStamp}
            </div>
            {body}
            <div className='emoji-container'>
              {this.props.emoticons.map(emoticon => <Emoji key={emoticon.id} emoji={JSON.parse(emoticon.icon)} />)}
            </div>
          </div>
          <button className='emoji-button' onClick={this.showEmoji}>Emojis</button>
        </section>
      </div>

    );
  }

}

export default withRouter(MessageListItem);
