import React from 'react';
import {withRouter} from 'react-router-dom';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {body: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createMessage({body: this.state.body, channel_id: parseInt(this.props.match.params.channelId), user_id: parseInt(this.props.currentUser.id) });
  }

  update(property) {
    return (e) => this.setState({ [property]: e.target.value });
  }

  render() {
    return (
      <section className='message-form'>
        Message Form
        <form className='message-form-actual' onSubmit={this.handleSubmit}>
          <input type='text' placeholder='Type here...' onChange={this.update('body')}></input>

          <button></button>
        </form>
      </section>
    );
  }

}

export default withRouter(MessageForm);
