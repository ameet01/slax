import React from 'react';

const Dropdown = ({logout, currentUser}) => {
  return (
    <div className='dropdown'>
      <ul>
        <li className='dropdown-username'>Username: {currentUser.username}</li>
        <li className='dropdown-signout'><span onClick={logout}>Sign Out</span></li>
      </ul>
    </div>
  );
};

export default Dropdown;
