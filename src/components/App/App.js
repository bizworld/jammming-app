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
      searchResults: [
        {
          name: 'name',
          artist: 'artist',
          album: 'album'
        }
      ]
    };

  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          {/* Add a SearchBar component */}
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} /> {/* Pass the state of the App component's searchResults to the SearchResults component. */}
            {/* Add a Playlist component */}
          </div>
        </div>
      </div>
    );
  }
}
