import React from 'react';


const ChannelModal = () => {
  return (
    <div className='channel-modal'>
      <div className='channel-modal-form'>
        <h1>Create a new channel!</h1>
        <div className='close-channel-modal'>X</div>
        <form>
          <br/>
            <input type='text' placeholder="Name"></input>
            <button>Create New Channel</button>
        </form>
      </div>
    </div>
  );
};

export default ChannelModal;
