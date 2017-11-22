import React from 'react';

const Dropdown = ({logout}) => {
  let button = <button onClick={logout}>Log Out</button>;
  return (
    <div className='dropdown'>
      {button}
    </div>
  );
};

export default Dropdown;
