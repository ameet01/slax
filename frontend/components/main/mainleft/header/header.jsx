import React from 'react';
import Dropdown from './dropdown';
import capitalize from 'lodash/capitalize';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import ClickOutside from 'react-click-outside';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
    this.showDropdown = this.showDropdown.bind(this);
    this.clickOutside = this.clickOutside.bind(this);
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

  clickOutside(e) {
    e.preventDefault();
    if(this.state.open === true) {
      this.setState({open: false});
    }
  }

  render() {
    let dropdown;

    if(this.state.open === true) {
      dropdown = <Dropdown currentUser={this.props.currentUser} logout={this.props.logout}/>;
    }

    return (
      <section>
        <ClickOutside onClickOutside={this.clickOutside} onClick={this.showDropdown} className='main-left-header'>
          <h1 className='main-left-header-title'>Workspace <span>&or;</span></h1>
          <div className='main-left-header-username-area'><span className='circle'></span><span className='main-left-header-username'>{capitalize(this.props.currentUser.username)}</span></div>
        </ClickOutside>
        <CSSTransitionGroup transitionName="example">
          {dropdown}
        </CSSTransitionGroup>
      </section>
    );
  }

}

export default Header;
