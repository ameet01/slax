import React from 'react';
import { withRouter } from 'react-router-dom';
import GiphySearch from 'react-giphy-search';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {body: "", showGif: false};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showGif = this.showGif.bind(this);
    this.handleGifSelection = this.handleGifSelection.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let body = this.state.body;
    this.setState({body: ""});
    this.props.createMessage({body: body, channel_id: this.props.match.params.channelId, user_id: this.props.currentUser.id }).then(() => document.getElementById('message-list').lastChild.scrollIntoView(false));
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
            'top': '400px',
            'borderRadius': '8px',
            'padding': '7px 7px'
          },
          searchBar: {

          },
          gifList: {

          },
          gifListItem: {

          },
        }}
      />
    }


    return (
      <section className='message-form'>
        {giphy}
        <form className='message-form-actual' onSubmit={this.handleSubmit}>
          <div className='giphy-button' onClick={this.showGif}></div>
          <input autocomplete="off" id='message-form-input' ref={i => i && i.focus()} type='text' value={this.state.body} placeholder={placeholder} onChange={this.update('body')}></input>
        </form>
      </section>
    );
  }

}

export default withRouter(MessageForm);
