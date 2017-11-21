import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(Object.assign({}, this.state));
  }

  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  }

  render() {
    var header, link;
    if(this.props.formType === 'login') {
      header = 'Log In';
      link = <Link to='/signup'>Sign Up</Link>;
    } else {
      header = 'Sign Up';
      link = <Link to='/login'>Log In</Link>;
    }

    return (
      <div className='session'>
        <h3 className='session-header'>{header}</h3>
        {link}
        <ul>{this.props.errors.map(error => <li>{error}</li>)}</ul>

        <form onSubmit={this.handleSubmit}>
          <label>Username:
            <input
              type='text'
              value={this.state.username}
              onChange={this.update('username')}
            />
          </label>

          <br />

          <label>Password:
            <input
              type='password'
              value={this.state.password}
              onChange={this.update('password')}
            />
          </label>

          <br />

          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default SessionForm;
