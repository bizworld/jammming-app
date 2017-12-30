import React from 'react';
import TrackList from '../TrackList/TrackList.js'; // go to the parent folder (../) of the current file, go to the TrackList folder etc
import './Playlist.css'; // import the Playlist.css file from the same directory (or folder), ./

class Playlist extends React.Component {
  constructor(props) {
    super(props);

    // Bind the current value of `this` to .onNameChange()
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  /* method accepts an event that is triggered by an onChange attribute
  in the Playlist component's <input> element. */
  handleNameChange(event) {
    // call .onNameChange() with the event target's value (from the <input> element)
    this.props.onNameChange(event.target.value);
  }

  render() {
    return (
      <div className="Playlist">
        <input defaultValue={'New Playlist'}/>
        {/* <TrackList /> initially commented out since it doesn’t work without any props. */}
        {/* Pass the playlist tracks from the Playlist component to the TrackList component as a prop, tracks. */}
        {/* pass `true` through the use of the isRemoval prop */}
        <TrackList tracks={this.props.playlistTracks}
        isRemoval={true}
        onChange={this.handleNameChange}
        onRemove={this.props.onRemove} /> {/* Pass onRemove from the Playlist component to the TrackList component. */}
        <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

/* export the Playlist component to expose it to other parts of the Jammming app.
i.e. other components. */
export default Playlist;
