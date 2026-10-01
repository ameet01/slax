import React from 'react';

// Minimal GIF picker backed by the Giphy search API.
// Requires window.GIPHY_API_KEY to be set (see application.html.erb);
// renders nothing without it.
class GifPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '', gifs: [], loading: false, error: null };
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    this.search('hello');
  }

  search(term) {
    const key = window.GIPHY_API_KEY;
    if (!key) return;
    this.setState({ loading: true, error: null });
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${encodeURIComponent(key)}&q=${encodeURIComponent(term || 'hello')}&limit=12&rating=g`)
      .then((res) => {
        if (!res.ok) throw new Error(`Giphy request failed (${res.status})`);
        return res.json();
      })
      .then((json) => this.setState({ gifs: json.data || [], loading: false }))
      .catch(() => this.setState({ loading: false, error: 'GIF search is unavailable right now.' }));
  }

  render() {
    if (!window.GIPHY_API_KEY) return null;
    const { gifs, loading, error } = this.state;
    return (
      <div className="gif-picker" style={{
        backgroundColor: '#2ea664', position: 'absolute', bottom: '65px',
        borderRadius: '8px', padding: '7px', zIndex: 400,
        border: '1px solid gray', boxShadow: '0 5px 10px rgba(0,0,0,.12)',
        width: '30%', height: '35%', maxWidth: '100%', overflowY: 'auto'
      }}>
        <form onSubmit={(e) => { e.preventDefault(); this.search(this.state.term); }} style={{ display: 'flex', marginBottom: '6px' }}>
          <input
            autoComplete="off"
            placeholder="Search GIFs"
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
            style={{ flex: 1, borderRadius: '5px', fontFamily: 'Lato', padding: '4px 8px', border: 'none' }}
          />
        </form>
        {loading && <div style={{ color: 'white', fontFamily: 'Lato' }}>Loading…</div>}
        {error && <div style={{ color: 'white', fontFamily: 'Lato' }}>{error}</div>}
        <div style={{ display: 'flex', flexWrap: 'wrap', borderRadius: '5px' }}>
          {gifs.map((g) => (
            <img
              key={g.id}
              src={g.images.fixed_height_small.url}
              alt={g.title}
              title="Click to send"
              onClick={() => this.props.onSelect(g.id)}
              style={{ width: '48%', margin: '1%', cursor: 'pointer', borderRadius: '5px' }}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default GifPicker;
