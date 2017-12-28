import React from 'react';
import TrackList from '../TrackList/TrackList.js'; // go to the parent folder (../) of the current file, go to the TrackList folder etc
import './Playlist.css'; // import the Playlist.css file from the same directory (or folder), ./

class Playlist extends React.Component {
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={'New Playlist'}/>
        {/* <TrackList /> initially commented out since it doesn’t work without any props. */}
        <TrackList tracks={this.props.playlistTracks} /> {/* Pass the playlist tracks from the Playlist component to the TrackList component. */}
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

/* export the Playlist component to expose it to other parts of the Jammming app.
i.e. other components. */
export default Playlist;
