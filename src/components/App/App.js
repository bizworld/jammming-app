import React from 'react';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';
import Playlist from '../Playlist/Playlist.js';
import './App.css';
import Spotify from '../../util/Spotify.js'; // go to parent, grandparent, then util folder

Spotify.getAccessToken();

class App extends React.Component {
  constructor(props) {
    super(props);

    /* set a hard-coded initial value for this.state.searchResults i.e.
     set this.state to an object with a property, searchResults, set to an
     array of objects, each containing name, artist, and album properties. */
    this.state = {
      searchResults: [],
      /* Hard-coded values for playlistName and playlistTracks to state in
      App.js.*/
      playlistName: 'playlistName',
      playlistTracks: []
    };

    // Bind the current value of `this` to .addTrack().
    this.addTrack = this.addTrack.bind(this);

    // Bind the current value of `this` to .removeTrack().
    this.removeTrack = this.removeTrack.bind(this);

    // Bind `this` to .updatePlaylistName() (because it is used to set a state)
    this.updatePlaylistName = this.updatePlaylistName.bind(this);

    // Bind the current value of `this` to .savePlaylist()
    this.savePlaylist = this.savePlaylist.bind(this);

    // Bind `this` to .search() since we will use `this` in .search().
    this.search = this.search.bind(this);

  }

  savePlaylist() {
    /* Generates an array of uri values called trackURIs from the playlistTracks
    property. */
    const trackURIs = this.state.playlistTracks.map(track => track.uri);
    // reset the state of playlistName and searchResults
    Spotify.savePlaylist(this.state.playlistName, trackURIs).then(() => {
      this.setState({
        playlistName: 'New Playlist',
        playlistTracks: []
      });
    });
  }

  addTrack(event) {
    let tracks = this.state.playlistTracks;
    tracks.push(event);
    this.setState({
      playlistTracks: tracks
    });
  }

  removeTrack(event) {
    this.setState({
      playlistTracks: []
    })
  }

  updatePlaylistName(name) {
    this.setState({
      // Sets the state of the playlist name to the input argument
      playlistName: name
    });
  }

  // method to hook up to the Spotify API
  search(term) {
    Spotify.search(term).then(searchResults => {
      // Update the state of searchResults with the value resolved from Spotify.search()'s promise, line 70.
      this.setState({searchResults: searchResults});
    });
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          {/* Pass .search() to the SearchBar component as an onSearch attribute. */}
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            {/* Pass the state of the App component's searchResults to the SearchResults component. */}
            <SearchResults searchResults={this.state.searchResults}
                           onAdd={this.addTrack} /> {/* Pass .addTrack() to the SearchResults component as an onAdd attribute. */}
            {/* Pass the playlist name and tracks from the App component to the Playlist component. */}
            {/* Pass updatePlaylistName to the Playlist component as an attribute, onNameChange */}
            {/* Pass savePlaylist to the Playlist component as an attribute, onSave. */}
            <Playlist playlistName={this.state.playlistName}
                      playlistTracks={this.state.playlistTracks}
                      onNameChange={this.updatePlaylistName}
                      onSave={this.savePlaylist}
                      onRemove={this.removeTrack} /> {/* Pass .removeTrack() to the Playlist component as an onRemove attribute. */}
          </div>
        </div>
      </div>
    );
  }
}

// export the App component to make it available to other components of the app.
export default App;
