import React from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';

class ChannelList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activeSelected: "", modalClosed: "", name: ""};
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
    this.props.createChannel({name: this.state.name});
    this.setState({modalClosed: ""});
  }

  update(property) {
    return (e) => this.setState({ [property]: e.target.value });
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
              <input type='text' placeholder="Name" value={this.state.name} onChange={this.update('name')}></input>
              <button>Create New Channel</button>
          </form>
        </div>
      </div>;
    }

    return (
      <section className='main-left-channel-list'>

        <div>
          <h1>Channels
            <div
              className='plus-sign-create'
              onClick={() => this.setState({modalClosed: 'open'})}>
              <span>
                <i class="fa fa-plus-circle" aria-hidden="true"></i>
              </span>
            </div>
          </h1>
          {modal}

          <ul>
            {this.props.channels.map((channel,idx) =>
              <Link to={`/channels/${channel.id}`} >
                <li
                  key={channel.id}
                  className={ classNames({
                    'selected' : activeSelected === `item${channel.id}`
                  }) }
                  onClick={ event => this.setState({ activeSelected : activeSelected === `item${channel.id}` ? '' : `item${channel.id}` })}
                  ># {channel.name}
                </li>
              </Link>)}
            </ul>
        </div>

          <div>
            <h1 className='direct-messages-title'>Direct Messages
              <div
                className='plus-sign-create'
                onClick={() => this.setState({modalClosed: 'open'})}>
                <span>
                  <i class="fa fa-plus-circle" aria-hidden="true"></i>
                </span>
              </div>
            </h1>
              <ul>
                {this.props.directmessages.map((dm,idx) =>
                  <Link to={`/channels/${dm.id}`} >
                    <li
                      key={dm.id}
                      className={ classNames({
                        'selected' : activeSelected === `item${dm.id}`
                      }) }
                      onClick={ event => this.setState({ activeSelected : activeSelected === `item${dm.id}` ? '' : `item${dm.id}` })}
                      ># {dm.name}
                    </li>
                  </Link>)}
                </ul>
          </div>
        </section>
      );
    }

  }

  export default ChannelList;
