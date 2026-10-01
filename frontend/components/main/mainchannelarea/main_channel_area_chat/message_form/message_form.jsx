import React from 'react';
import { withRouter } from 'react-router-dom';
import GifPicker from './gif_picker';
import { CSSTransitionGroup } from 'react-transition-group';
import ClickOutHandler from 'react-onclickout';

const scrollMessageListToBottom = () => {
  const list = document.getElementById('message-list');
  if (list && list.lastChild) list.lastChild.scrollIntoView(false);
};

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {body: "", showGif: false};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showGif = this.showGif.bind(this);
    this.handleGifSelection = this.handleGifSelection.bind(this);
    this.clickOut = this.clickOut.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let body = this.state.body;
    this.setState({body: ""});
    this.props.createMessage({body: body, channel_id: this.props.match.params.channelId, user_id: this.props.currentUser.id }).then(() => scrollMessageListToBottom());
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.match.params.channelId !== nextProps.match.params.channelId) {
      if(this.state.showGif === true) {
        this.setState({showGif: false});
      }
    }
  }

  update(property) {
    return (e) => this.setState({ [property]: e.target.value });
  }

  showGif(e) {
    if(this.state.showGif === false) {
      this.setState({showGif: true});
    } else {
      this.setState({showGif: false});
    }
  }

  handleGifSelection(id) {
    this.setState({body: `https://giphy.com/embed/${id}`});
    this.showGif();
  }

  clickOut(e) {
    if(this.state.showGif === true &&
      e.target.className !== 'giphy-button') {
      this.setState({showGif: false});
    }
  }

  render() {
    let placeholder;

    if(this.props.channel.is_dm) {
      if(this.props.channel.users.length === 2) {
        placeholder = `Message @${this.props.channel.users.filter(user => user.username !== this.props.currentUser.username)[0].username}`;
      } else {
        placeholder = `Message ${this.props.channel.users.filter(user => user.username !== this.props.currentUser.username).map(user => user.username).join(', ')}`;
      }
    } else if(this.props.channel.is_dm === false) {
      placeholder = `Message #${this.props.channel.name}`;
    } else {
      placeholder = '';
    }

    let giphy;

    if (this.state.showGif && window.GIPHY_API_KEY) {
      giphy = <GifPicker onSelect={(id) => this.handleGifSelection(id)} />;
    } else {
      giphy = undefined;
    }

    const gifButton = window.GIPHY_API_KEY
      ? <div className='giphy-button' onClick={this.showGif}>Gif</div>
      : null;

    return (
      <section className='message-form'>
        <ClickOutHandler onClickOut={this.clickOut}>
          <CSSTransitionGroup transitionName="example" transitionEnterTimeout={0} transitionLeaveTimeout={0}>
            {giphy}
          </CSSTransitionGroup>
        </ClickOutHandler>
        <form className='message-form-actual' onSubmit={this.handleSubmit}>
          {gifButton}
          <input autoComplete="off" id='message-form-input' ref={i => i && i.focus()} type='text' value={this.state.body} placeholder={placeholder} onChange={this.update('body')}></input>
        </form>
      </section>
    );
  }

}

export default withRouter(MessageForm);
