import React from 'react';


class ChannelModal extends React.Component {
  constructor(props) {
    super(props);
    this.close = this.close.bind(this);
    this.state = {modalClosed: this.props.modalClosed};
  }

  close(e) {
    e.currentTarget.parentElement.parentElement.className = 'hidden';
  }

  render() {
    return (
      <div className='channel-modal'>
        <div className='channel-modal-form'>
          <h1>Create a new channel!</h1>
          <div onClick={this.close} className='close-channel-modal'>X</div>
          <form>
            <br/>
              <input type='text' placeholder="Name"></input>
              <button>Create New Channel</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ChannelModal;
