import React from 'react';
import Dropdown from './dropdown';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
    this.showDropdown = this.showDropdown.bind(this);
  }

  showDropdown(e) {
    e.preventDefault();
    let bool;
    if(this.state.open === true) {
      bool = false;
    } else {
      bool = true;
    }
    this.setState({open: bool});
  }

  render() {
    let dropdown;

    if(this.state.open === true) {
      dropdown = <Dropdown logout={this.props.logout}/>;
    }

    return (
      <section>
        <div onClick={this.showDropdown} className='main-left-header'>
            <h1 className='main-left-header-title'>Workspace</h1>
            <div className='main-left-header-username-area'><span className='circle'></span><span className='main-left-header-username'>{this.props.currentUser.username}</span></div>
        </div>
        {dropdown}
      </section>
    );
  }

}

export default Header;
