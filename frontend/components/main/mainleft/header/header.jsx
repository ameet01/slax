import React from 'react';
import Dropdown from './dropdown';
import capitalize from 'lodash/capitalize';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import ClickOutHandler from 'react-onclickout';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
    this.showDropdown = this.showDropdown.bind(this);
    this.clickOut = this.clickOut.bind(this);
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

  clickOut(e) {
    console.log(e);
    if(this.state.open === true &&
      e.target.className !== 'main-left-header-username-area' &&
      e.target.className !== 'main-left-header-title' &&
      e.target.className !== 'main-left-header' &&
      e.target.className !== 'main-left-header-username' &&
      e.target.className !== 'circle') {
      this.setState({open: false});
    }
  }

  render() {
    let dropdown;

    if(this.state.open === true) {
      dropdown = <Dropdown currentUser={this.props.currentUser} logout={this.props.logout}/>;
    } else {
      dropdown = <div></div>;
    }


    return (
      <section>
        <div value='2' onClick={this.showDropdown} className='main-left-header'>
          <h1 className='main-left-header-title'>Workspace <span>&or;</span></h1>
          <div className='main-left-header-username-area'><span className='circle'></span><span className='main-left-header-username'>{capitalize(this.props.currentUser.username)}</span></div>
        </div>
          <ClickOutHandler onClickOut={this.clickOut}>
            {dropdown}
          </ClickOutHandler>
      </section>
    );
  }

}

export default Header;
