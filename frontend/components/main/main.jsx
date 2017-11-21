import React from 'react';

const Main = ({logout, currentUser}) => {
  var button;
  if(currentUser) {
    button = <button onClick={() => logout()}>Log Out</button>;
  }

  return <div>
      <h1>Hi!</h1>
      {button}
  </div>;
};

export default Main;
