import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let button = <button onClick={() => this.props.logout()}>Log Out</button>;
    return (
      <section>
          <h1>Header!</h1>
          {button}
      </section>
    );
  }

}

export default Header;
