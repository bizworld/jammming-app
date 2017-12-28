import React from 'react';
import './TrackList.css'; // import the TrackList.css file from the same directory, ./
import Track from '../Track/Track'; // go to the parent folder, ../ (of the current file) to import the Track component from the Track.js file in the Track folder.




class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
          {/* You will add a map method that renders a set of Track components */}
          {/* For now, hard code 3 tracks that will later be replaced with Spotify tracks. */}
          {
            this.props.tracks.map(track => {
            return <Track track={track}
                          key={track.id}
                          onAdd={this.props.onAdd}
                          isRemoval={this.props.isRemoval}
                          onRemove={this.props.onRemove} />  // use `return` keyword?, use the .map() method to render each track in the tracks property.
            })
          }
      </div>
    );
  }
}

/* export the TrackList component to expose it or make it available to other
components in the Jammming app. */
export default TrackList;
