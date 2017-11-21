import React from 'react';
import {Link} from 'react-router-dom';

const SplashPage = () => {

  return <div>

    <section className='splash-header'>
      <img src='https://cdn.worldvectorlogo.com/logos/slack-1.svg' width='30px'/>
      <h3 className='splash-header-logo'>slack</h3>
      <Link className='splash-header-login' to="/login">Log In</Link>
      <Link className='splash-header-signup' to="/signup">Sign Up</Link>
    </section>

    <section className='splash-mid'>
      <section className='splash-mid-picture'>

      </section>
      <section className='splash-mid-box'>
        <h1 className='splash-mid-title'>Where Work Happens</h1>
        <p className='splash-mid-paragraph'>When your team needs to kick off a project, hire a new employee, deploy some code, review a sales contract, finalize next year's budget, measure an A/B test, plan your next office opening, and more, Slack has you covered.</p>
      </section>

      <button className='demobutton'>GET STARTED</button>
    </section>



    <section className='splash-footer'>

    </section>
  </div>;
};

export default SplashPage;
