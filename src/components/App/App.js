import React from 'react';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';
import Playlist from '../Playlist/Playlist.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    /* set a hard-coded initial value for this.state.searchResults i.e.
     set this.state to an object with a property, searchResults, set to an
     array of objects, each containing name, artist, and album properties. */
    this.state = {
      searchResults: [],
      /* Add hard-coded values for playlistName and playlistTracks to state in
      App.js.*/
      playlistName: 'playlistName',
      playlistTracks: []
    };

    // Bind the current value of `this` to .addTrack().
    this.addTrack = this.addTrack.bind(this);

    // Bind the current value of `this` to .removeTrack().
    this.removeTrack = this.removeTrack.bind(this);

  }

  addTrack(event) {


    this.setState({
      playlistTracks: playlistTracks
    });
  }

  removeTrack(event) {


    this.setState({
      playlistTracks: playlistTracks
    })
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          {/* Add a SearchBar component */}
          <div className="App-playlist">
            {/* Pass the state of the App component's searchResults to the SearchResults component. */}
            <SearchResults searchResults={this.state.searchResults}
                           onAdd={this.addTrack} /> {/* Pass .addTrack() to the SearchResults component as an onAdd attribute. */}
            {/* Pass the playlist name and tracks from the App component to the Playlist component. */}
            <Playlist playlistName={this.state.playlistName}
                      playlistTracks={this.state.playlistTracks}
                      onRemove={this.removeTrack} /> {/* Pass .removeTrack() to the Playlist component as an onRemove attribute. */}
          </div>
        </div>
      </div>
    );
  }
}

// export the App component to make it available to other components of the app.
export default App;
