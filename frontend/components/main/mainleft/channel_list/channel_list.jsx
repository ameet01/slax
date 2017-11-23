import React from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import { withRouter , Redirect } from 'react-router-dom';

class ChannelList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activeSelected: "", modalClosed: "", name: "", is_dm: false};
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchChannels();
  }

  closeModal(e) {
    this.setState({modalClosed: ""});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createChannel({name: this.state.name, is_dm: this.state.is_dm}).then(() => this.closeModal());
  }

  update(property) {
    return (e) => this.setState({ [property]: e.target.value });
  }

  render() {
    let { activeSelected } = this.state;
    let modal, modalTitle, modalButton;

    if(this.state.is_dm === true) {
      modalTitle = <h2 className='modal-title'>Create a DM</h2>;
      modalButton = <button className='modal-button'>Create New DM</button>;
    } else {
      modalTitle = <h2 className='modal-title'>Create a new channel!</h2>;
      modalButton = <button className='modal-button'>Create New Channel</button>;
    }

    if(this.state.modalClosed === "") {
      modal = undefined;
    } else if(this.state.modalClosed === 'open') {
      modal = <div className='channel-modal'>
        <div className='channel-modal-form'>
          {modalTitle}
          <div onClick={this.closeModal} className='close-channel-modal'>X</div>
          <form onSubmit={this.handleSubmit}>
            <br/>
              <input type='text' placeholder="Name" value={this.state.name} onChange={this.update('name')}></input>
              {modalButton}
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
              onClick={() => this.setState({modalClosed: 'open', is_dm: false})}>
              <span>
                <i className="fa fa-plus-circle" aria-hidden="true"></i>
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
                onClick={() => this.setState({modalClosed: 'open', is_dm: true})}>
                <span>
                  <i className="fa fa-plus-circle" aria-hidden="true"></i>
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

  export default withRouter(ChannelList);
