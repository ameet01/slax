import React from 'react';
import classNames from 'classnames';
import { withRouter, Redirect, NavLink } from 'react-router-dom';

class ChannelList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activeSelected: "", modalClosed: "", name: "", is_dm: false, userList: []};
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.keydownHandler = this.keydownHandler.bind(this);
    this.addUser = this.addUser.bind(this);
    this.removeChannel = this.removeChannel.bind(this);
  }

  componentDidMount() {
    this.props.fetchChannels();
    this.props.fetchUsers();
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
    this.setState({modalClosed: "", name: "", userList: [], is_dm: false});
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.state.is_dm && this.state.userList.length > 0) {
      this.props.createChannel({name: "dm_channel", is_dm: this.state.is_dm, userList: this.state.userList}).then(() => this.closeModal()).then(() => this.props.history.push(`/channels/${parseInt(this.props.directmessages[this.props.directmessages.length - 1].id)}`));
    } else {
      this.props.createChannel({name: this.state.name, is_dm: this.state.is_dm}).then(() => this.closeModal()).then(() => this.props.history.push(`/channels/${parseInt(this.props.channels[this.props.channels.length - 1].id)}`));
    }
  }

  update(property) {
    return (e) => this.setState({ [property]: e.target.value });
  }

  keydownHandler(e){
    if(e.keyCode===27) this.closeModal(e);
    if(e.keyCode===13 && this.state.is_dm) this.handleSubmit(e);
  }

  addUser(e) {
    e.preventDefault();
    let users = this.state.userList;
    users.push(e.target.value);
    this.setState({userList: users});
  }

  removeChannel(e) {
    console.log(e.currentTarget.value);
    this.props.deleteChannel(parseInt(e.currentTarget.value));
  }

  render() {
    let { activeSelected } = this.state;
    let modal, modalTitle, modalButton, input, userList, selectedUsers;

    let goButton;



    if(this.state.is_dm === true) {
      if(!(this.state.userList.length > 0)) {
        goButton = <button className='go-button gray' onClick={this.handleSubmit}>Go</button>;
      } else {
        goButton = <button className='go-button green' onClick={this.handleSubmit}>Go</button>;
      }
      modalTitle = <h2 className='modal-title'>Create Direct Message</h2>;
          userList = <ul className='dm-user-list'>
            {this.props.users.filter(user => !user.username.startsWith('demo')).filter(user => !this.state.userList.includes(user.id)).map(user => <li className='user-list-li' value={user.id} onClick={this.addUser}>{user.username}</li>)}
          </ul>;
          selectedUsers = <ul className='selected-users'>
            {this.state.userList.map(id => <li>{this.props.users.find(user => user.id === id).username}</li>)}
          </ul>;
        } else {
          if(!(this.state.name.length > 0)) {
            goButton = <button className='go-button gray' onClick={this.handleSubmit}>Go</button>;
          } else {
            goButton = <button className='go-button green' onClick={this.handleSubmit}>Go</button>;
          }
          input = <input ref={i => i && i.focus()} type='text' placeholder="Name" value={this.state.name} onChange={this.update('name')}></input>;
            modalTitle = <h2 className='modal-title'>Create a new channel!</h2>;
              modalButton = <button type='submit' className='modal-button'>Create New Channel</button>;
              }

              if(this.state.modalClosed === "") {
                modal = undefined;
              } else if(this.state.modalClosed === 'open') {
                modal = <div className='channel-modal'>
                  <div className='channel-modal-form'>
                    <div className='title-and-button-dm-form'>{modalTitle}{goButton}</div>
                    {selectedUsers}
                    <div onClick={this.closeModal} className='close-channel-modal'>X</div>
                    <form onSubmit={this.handleSubmit}>
                      <br/>
                      {input}
                      <div className='modal-div-list'>{userList}</div>
                      {modalButton}
                    </form>
                  </div>
                </div>;
              }

              return (
                <section className='main-left-channel-list'>

                  <div>
                    {modal}
                    <div className='channels-header-thing'>
                      <h1 onClick={() => this.setState({modalClosed: 'open', is_dm: false})}>Channels</h1>
                      <div
                        className='plus-sign-create'
                        onClick={() => this.setState({modalClosed: 'open', is_dm: false})}>
                        <span>
                          <i className="fa fa-plus-circle"></i>
                        </span>
                      </div>
                    </div>

                    <ul>
                      {this.props.channels.map((channel,idx) =>

                        <li className='channel-li' key={channel.id}>
                          <NavLink to={`/channels/${channel.id}`} className='channel-list-li' activeClassName="selected">
                            <span>#</span> {channel.name}
                          </NavLink>
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className='dm-channels'>
                    <div className='channels-header-thing'>
                      <h1 onClick={() => this.props.fetchUsers().then(() =>this.setState({modalClosed: 'open', is_dm: true}))} className='direct-messages-title'>Direct Messages</h1>
                      <div
                        className='plus-sign-create'
                        onClick={() => this.props.fetchUsers().then(() =>this.setState({modalClosed: 'open', is_dm: true}))}>
                        <span>
                          <i className="fa fa-plus-circle"></i>
                        </span>
                      </div>
                    </div>

                    <ul>
                      {this.props.directmessages.map((dm,idx) =>
                        <li className='direct-message-li'>
                          <NavLink to={`/channels/${dm.id}`} className='channel-list-li' activeClassName="selected" >
                            <span>#</span> {dm.users.filter((user) => this.props.currentUser.username !== user.username).map(user => user.username).join(', ')}
                          </NavLink>
                          <li className='dm-remove-li' onClick={this.removeChannel} value={dm.id}><i className="fa fa-times"></i></li>
                        </li>
                      )}
                    </ul>
                  </div>
                </section>
              );
            }
          }

          export default withRouter(ChannelList);
