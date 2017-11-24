import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    var http = require("http");
    setInterval(function() {
      http.get("https://slack-fullstack.herokuapp.com/");
    }, 300000);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.simType = this.simType.bind(this);
  }

  componentWillUnmount(){
    this.props.clearErrors();
    this.clearTimer();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(Object.assign({}, this.state)).then(() => this.props.history.push('/channels/1'));
  }

  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  }

  clearTimer() {
    if (this.demoLogin) {
      clearTimeout(this.demoLogin);
      this.demoLogin = null;
    }
  }

  handleDemo(event) {
    event.preventDefault();
    this.simType('demo-user', 'username');
    this.simType('djskwpqiw', 'password');
    this.demoLogin = setTimeout(this.handleDemoLogin, 1800);
  }

  handleDemoLogin() {
    let number = Math.floor(Math.random() * (16 - 1) + 1);
    this.props.login({
        username: `demo${number}`,
        password: 'password'}).then(() => this.props.history.push('/channels/1'));
  }

  simType (input, field) {
    let chars = input.split('');
    let finChars = "";
    let i = 0;
    let typeAction = setInterval(() => {
      finChars+=chars[i++];
      this.setState({[field]: finChars});
      if (i === chars.length) {
        clearInterval(typeAction);
      }
    }, 100);
  }


  render() {
    var header, link, submitButton, enterDetails;
    if(this.props.formType === 'login') {
      header = 'Log In To Slax';
      link = <div className='form-redirect'>Need to register? <Link className='form-link' to='/signup'>Sign Up!</Link></div>;
        submitButton = 'Log In';
        enterDetails = <h6 className='session-mid-form-enter-details-para'>Enter your <span>username</span> and <span>password</span></h6>;
        } else {
          header = 'Create Account';
          link = <div className='form-redirect'>Already have an account? <Link className='form-link' to='/login'>Log In!</Link></div>;
            submitButton = 'Sign Up';
            enterDetails = <h6 className='session-mid-form-enter-details-para'>Create a <span>username</span> and <span>password</span></h6>;
            }

            return (
              <div className='session'>
                <section className='session-header'>
                  <Link className='logo-and-thumb'to="/">
                    <img className='session-header-thumb' src='https://cdn.worldvectorlogo.com/logos/slack-1.svg' width='30px'/>
                    <h3 className='session-header-logo'>slax</h3>
                  </Link>

                  <div className='loginsignup'>
                    <Link className='link' to="/login">Log In</Link>
                    <Link className='link' to="/signup">Sign Up</Link>
                  </div>
                </section>

                <section className='session-mid'>
                  <section className='session-mid-form-box'>
                    <ul className='session-errors'>{this.props.errors.map(error => <li><i class="fa fa-exclamation-triangle" aria-hidden="true"></i>   {error}</li>)}</ul>
                    <section className='session-mid-form'>
                      <h2 className='session-mid-form-header'>{header}</h2>
                      {enterDetails}

                      <form onSubmit={this.handleSubmit}>
                        <label>
                          <input
                            className='form-username-input'
                            type='text'
                            value={this.state.username}
                            onChange={this.update('username')}
                            autoComplete="new-username"
                            placeholder="Username"
                            />
                        </label>

                        <br />

                        <label>
                          <input
                            className='form-password-input'
                            type='password'
                            value={this.state.password}
                            onChange={this.update('password')}
                            autoComplete="new-password"
                            placeholder="Password"
                            />
                        </label>

                        <br />

                        <button className='form-submit-button' type='submit'>{submitButton}</button>
                        <div className='form-submit-button session-demo-button' onClick={this.handleDemo}>Guest Log In
                        </div>
                        {link}
                      </form>
                    </section>

                  </section>

                </section>

                <section className='session-footer'>
                  <ul>
                    <li><a href='https://github.com/ameet01' target="_blank"><i className="fa fa-github"></i>GitHub</a></li>
                    <li><a href='https://www.linkedin.com/in/ameetvadhia' target="_blank"><i className="fa fa-linkedin"></i>LinkedIn</a></li>
                    <li><a href='https://www.ameet.io' target="_blank"><i className="fa fa-user-circle" aria-hidden="true"></i>Personal Website</a></li>
                  </ul>
                </section>

              </div>
            );
          }
        }

        export default SessionForm;
