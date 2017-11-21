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
      header = 'Log In To Slack';
      link = <Link to='/signup'>Sign Up</Link>;
      } else {
        header = 'Create an Account';
        link = <Link to='/login'>Log In</Link>;
        }

        return (
          <div className='session'>
            <section className='session-header'>
              <Link to="/">
                <div><img className='session-header-thumb' src='https://cdn.worldvectorlogo.com/logos/slack-1.svg' width='30px'/>
                <h3 className='session-header-logo'>slack</h3></div>
              </Link>

              <Link className='session-header-login' to="/login">Log In</Link>
              <Link className='session-header-signup' to="/signup">Sign Up</Link>
            </section>

            <section className='session-mid'>
              <section className='session-mid-form-box'>
                <section className='session-mid-form'>
                  <h2 className='session-mid-form-header'>{header}</h2>
                  <h6>Enter your username and password</h6>
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
                </section>
              </section>

            </section>

            <section className='session-footer'>
              <ul>
                <li><a href='https://github.com/ameet01'><i class="fa fa-github"></i>GitHub</a></li>
                <li><a href='https://www.linkedin.com/in/ameetvadhia'><i class="fa fa-linkedin"></i>LinkedIn</a></li>
                <li><a href='https://www.ameet.io'><i class="fa fa-user-circle" aria-hidden="true"></i>Personal Website</a></li>
              </ul>
            </section>

          </div>
        );
      }
    }

    export default SessionForm;
