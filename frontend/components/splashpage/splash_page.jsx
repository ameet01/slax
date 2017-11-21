import React from 'react';

const SplashPage = ({logout, currentUser}) => {

  return <div>

    <section className='splash-header'>
      <img src='https://cdn.worldvectorlogo.com/logos/slack-1.svg' width='30px'/>
      <h3 className='splash-header-logo'>Slack</h3>
    </section>

    <section className='splash-mid'>
      <section className='splash-mid-picture'>

      </section>
      <section className='splash-mid-box'>
        <h1 className='splash-mid-title'>Where Work Happens</h1>
        <p className='splash-mid-paragraph'>When your team needs to kick off a project, hire a new employee, deploy some code, review a sales contract, finalize next year's budget, measure an A/B test, plan your next office opening, and more, Slic has you covered.</p>
      </section>
    </section>

    <section className='splash-footer'>

    </section>
  </div>;
};

export default SplashPage;
