import React from 'react';

class MainChannelAreaHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchChannel(this.props.match.params.channelId);
  }

  render() {
    return (
      <section className='main-header'>
        <h1>Header</h1>
      </section>
    );
  }
}

export default MainChannelAreaHeader;
