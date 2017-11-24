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
    this.setState({modalClosed: "", name: ""});
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.state.is_dm) {
      this.props.createChannel({name: "dm_channel", is_dm: this.state.is_dm, userList: this.state.userList}).then(() => this.closeModal());
    } else {
      this.props.createChannel({name: this.state.name, is_dm: this.state.is_dm}).then(() => this.closeModal());
    }
  }

  update(property) {
    return (e) => this.setState({ [property]: e.target.value });
  }

  keydownHandler(e){
    if(e.keyCode===27) this.closeModal();
  }

  addUser(e) {
    e.preventDefault();
    let users = this.state.userList;
    users.push(e.currentTarget.value);
    console.log(users);
    this.setState({userList: users});
  }

  render() {
    let { activeSelected } = this.state;
    let modal, modalTitle, modalButton, input, userList, selectedUsers;

    if(this.state.is_dm === true) {
      modalTitle = <h2 className='modal-title'>Create a DM</h2>;
        modalButton = <button className='modal-button'>Create New DM</button>;
            userList = <ul className='dm-user-list'>
              {this.props.users.map(user => <li value={user.id} onClick={this.addUser}>{user.username}</li>)}
            </ul>;
              selectedUsers = <ul>
                {this.state.userList.map(id => <li>{this.props.users[id].username}</li>)}
              </ul>;
        } else {
          input = <input type='text' placeholder="Name" value={this.state.name} onChange={this.update('name')}></input>;
          modalTitle = <h2 className='modal-title'>Create a new channel!</h2>;
            modalButton = <button className='modal-button'>Create New Channel</button>;
            }

            if(this.state.modalClosed === "") {
              modal = undefined;
            } else if(this.state.modalClosed === 'open') {
              modal = <div className='channel-modal'>
                <div className='channel-modal-form'>
                  {modalTitle}
                  {selectedUsers}
                  <div onClick={this.closeModal} className='close-channel-modal'>X</div>
                  <form onSubmit={this.handleSubmit}>
                    <br/>
                    {input}
                    {userList}
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
                        onClick={() => this.props.fetchUsers().then(() =>this.setState({modalClosed: 'open', is_dm: true}))}>
                        <span>
                          <i className="fa fa-plus-circle"></i>
                        </span>
                      </div>
                    </h1>

                    <ul>
                      {this.props.directmessages.map((dm,idx) =>

                          <li>
                            <NavLink to={`/channels/${dm.id}`} className='channel-list-li' activeClassName="selected" >
                              # {dm.users.filter((user) => this.props.currentUser.username !== user.username).map(user => user.username).join(', ')}
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
