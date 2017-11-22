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

  componentWillUnmount(){
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(Object.assign({}, this.state)).then(() => this.props.history.push('/channels/1'));
  }

  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  }

  render() {
    var header, link;
    if(this.props.formType === 'login') {
      header = 'Log In To Slack';
      link = <div className='form-redirect'>Need to register? <Link className='form-link' to='/signup'>Sign Up!</Link></div>;
      } else {
        header = 'Create an Account';
        link = <div className='form-redirect'>Already have an account? <Link className='form-link' to='/login'>Log In!</Link></div>;
        }

        return (
          <div className='session'>
            <section className='session-header'>
              <Link className='logo-and-thumb'to="/">
                  <img className='session-header-thumb' src='https://cdn.worldvectorlogo.com/logos/slack-1.svg' width='30px'/>
                  <h3 className='session-header-logo'>slack</h3>
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
                  <h6 className='session-mid-form-enter-details-para'>Enter your <span>username</span> and <span>password</span></h6>

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

                    <button className='form-submit-button' type='submit'>Submit</button>
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
