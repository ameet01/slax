import React from 'react';
import { withRouter } from 'react-router-dom';
import GiphySearch from 'react-giphy-search';
import { CSSTransitionGroup } from 'react-transition-group';
import ClickOutHandler from 'react-onclickout';

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
    this.props.createMessage({body: body, channel_id: this.props.match.params.channelId, user_id: this.props.currentUser.id }).then(() => document.getElementById('message-list').lastChild.scrollIntoView(false));
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

    if(this.state.showGif) {
      giphy = <GiphySearch
        onGifSelection={(id) => this.handleGifSelection(id)}
        styles={{
          wrapper: {
            'backgroundColor': 'lightblue',
            'position': 'absolute',
            'bottom': '65px',
            'borderRadius': '8px',
            'padding': '7px 7px',
            'zIndex': '400',
            'border': '1px solid gray',
            'boxShadow': '0 5px 10px rgba(0,0,0,.12)',
            'width': '30%',
            'height': '35%',
            'maxWidth': '100%',
          },
          searchBar: {
            'borderRadius': '5px',
            'fontFamily': 'Lato'
          },
          gifList: {
            'borderRadius': '5px',
            'display': 'flex',
            'flexWrap': 'wrap',
            'paddingLeft': '7px'
          },
          gifListItem: {
          },
        }}
      />;
  } else {
    giphy = undefined;
  }


    return (
      <section className='message-form'>
        <ClickOutHandler onClickOut={this.clickOut}>
          <CSSTransitionGroup transitionName="example">
            {giphy}
          </CSSTransitionGroup>
        </ClickOutHandler>
        <form className='message-form-actual' onSubmit={this.handleSubmit}>
          <div className='giphy-button' onClick={this.showGif}>Gif</div>
          <input autocomplete="off" id='message-form-input' ref={i => i && i.focus()} type='text' value={this.state.body} placeholder={placeholder} onChange={this.update('body')}></input>
        </form>
      </section>
    );
  }

}

export default withRouter(MessageForm);
