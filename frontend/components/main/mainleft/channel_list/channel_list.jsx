import React from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';

class ChannelList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activeSelected: "", modalClosed: ""};
    this.close = this.close.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchChannels();
  }

  close(e) {
    this.setState({modalClosed: ""});
    e.currentTarget.parentElement.parentElement.className = 'hidden';
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createChannel({name: 'hi'});
  }

  render() {
    let { activeSelected } = this.state;
    let modal;

    if(this.state.modalClosed === "") {
      modal = undefined;
    } else if(this.state.modalClosed === 'open') {
      modal = <div className='channel-modal'>
        <div className='channel-modal-form'>
          <h1>Create a new channel!</h1>
          <div onClick={this.close} className='close-channel-modal'>X</div>
          <form onSubmit={this.handleSubmit}>
            <br/>
              <input type='text' placeholder="Name"></input>
              <button>Create New Channel</button>
          </form>
        </div>
      </div>;
    }

    return (
      <section className='main-left-channel-list'>

        <div>
          <h1>Channels<div className='plus-sign-create' onClick={() => this.setState({modalClosed: 'open'})}><span>+</span></div></h1>
          {modal}

          <ul>
            {this.props.channels.map((channel,idx) =>
              <Link to={`/channels/${channel.id}`} >
                <li
                  key={idx}
                  className={ classNames({
                    'selected' : activeSelected === `item${idx}`
                  }) }
                  onClick={ event => this.setState({ activeSelected : activeSelected === `item${idx}` ? '' : `item${idx}` })}
                  ># {channel.name}
                </li>
              </Link>)}
            </ul>
        </div>

          <div>
            <h1>Direct Messages</h1>
          </div>
        </section>
      );
    }

  }

  export default ChannelList;
