import React from 'react';
import {Link} from 'react-router-dom';

class SplashPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <section className='splash-header'>
          <Link className='logo-and-thumb'to="/">
            <img className='splash-header-thumb' src='https://cdn.worldvectorlogo.com/logos/slack-1.svg' width='30px'/>
            <h3 className='splash-header-logo'>slax</h3>
          </Link>

          <div className='loginsignup'>
            <Link className='link' to="/login">Log In</Link>
            <Link className='link' to="/signup">Sign Up</Link>
          </div>
        </section>

        <section className='splash-mid'>
          <img className='splash-mid-picture' src ='https://a.slack-edge.com/52353/marketing/img/home/home_illo@2x.png' />
          <section className='splash-mid-box'>
            <div className="dom-content-loaded">
              <section className="register">
                <div className="row">
                  <div className="container">
                    <div className="content">
                      <div className="heading-rotation-container">
                        <h2 className="rotator h1-like heading-1">Remember everything.</h2>
                        <h2 className="rotator h1-like heading-2">Get organized.</h2>
                        <h2 className="rotator h1-like heading-3">Succeed together.</h2>
                        <h1 className="rotator h1-like heading-4">Where Teams Connect</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <p className='splash-mid-paragraph'>
              Slax makes work simpler, pleasant, and more productive.
              Millions of people around the world use Slax to bring their teams together,
              make sense of their work, and drive their business forward.
            </p>
            <button
              className='demobutton'
              onClick={() => this.props.login({
                username: `demo${Math.floor(Math.random() * (16 - 1) + 1)}`,
                password: 'password'}).then(() => this.props.history.push('/channels/1'))
              }>GET STARTED
            </button>
          </section>

        </section>

        <section className='splash-footer'>
          <ul>
            <li><a href='https://github.com/ameet01' target="_blank"><i className="fa fa-github"></i>GitHub</a></li>
            <li><a href='https://www.linkedin.com/in/ameetvadhia' target="_blank"><i className="fa fa-linkedin"></i>LinkedIn</a></li>
            <li><a href='https://www.ameet.io' target="_blank"><i className="fa fa-user-circle" aria-hidden="true"></i>Personal Website</a></li>
          </ul>
        </section>

      </div>);
    }
  }

  export default SplashPage;
