import React from 'react';
import classNames from 'classnames';
import { withRouter, Redirect, NavLink } from 'react-router-dom';


class ChannelList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activeSelected: "", modalClosed: "", name: "", is_dm: false};
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.keydownHandler = this.keydownHandler.bind(this);
  }

  componentDidMount() {
    this.props.fetchChannels();
    document.addEventListener('keydown', this.keydownHandler);
  }

  componentWillUnmount(){
    document.removeEventListener('keydown', this.keydownHandler);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.match.params.channelId !== this.props.match.params.channelId) {
      this.props.fetchMessages(nextProps.match.params.channelId);
    }
  }

  closeModal(e) {
    this.setState({modalClosed: "", name: ""});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createChannel({name: this.state.name, is_dm: this.state.is_dm}).then(() => this.closeModal());
  }

  update(property) {
    return (e) => this.setState({ [property]: e.target.value });
  }

  keydownHandler(e){
    if(e.keyCode===27) this.closeModal();
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
                  {modal}

                  <h1>Channels
                    <div
                      className='plus-sign-create'
                      onClick={() => this.setState({modalClosed: 'open', is_dm: false})}>
                      <span>
                        <i className="fa fa-plus-circle"></i>
                      </span>
                    </div>
                  </h1>

                  <ul>
                    {this.props.channels.map((channel,idx) =>

                        <li key={channel.id}>
                          <NavLink to={`/channels/${channel.id}`} className='channel-list-li' activeClassName="selected">
                             # {channel.name}
                          </NavLink>
                        </li>
                    )}
                    </ul>
                  </div>

                  <div>
                    <h1 className='direct-messages-title'>Direct Messages
                      <div
                        className='plus-sign-create'
                        onClick={() => this.setState({modalClosed: 'open', is_dm: true})}>
                        <span>
                          <i className="fa fa-plus-circle"></i>
                        </span>
                      </div>
                    </h1>

                    <ul>
                      {this.props.directmessages.map((dm,idx) =>

                          <li>
                            <NavLink to={`/channels/${dm.id}`} className='channel-list-li' activeClassName="selected" >
                              # {dm.name}
                            </NavLink>
                          </li>
                      )}
                      </ul>
                    </div>
                  </section>
                );
              }
}

export default withRouter(ChannelList);
