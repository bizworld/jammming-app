import React from 'react';
import './Track.css'; // from the same folder, ./, import the Track.css file



class Track extends React.Component {
  constructor(props) {
    super(props);

    // Bind this.addTrack() to the current value of `this`.
    this.addTrack = this.addTrack.bind(this);
  }

  /* A renderAction() method that displays a - anchor tag if the isRemoval
  property is true, and a + anchor tag if the isRemoval property is false. Set
  the class name (i.e. className) to Track-action. */
  renderAction() {
    if (this.props.isRemoval) {
      return <a className="Track-action" onClick={this.removeTrack}>-</a>
    }
    return <a className="Track-action" onClick={this.addTrack}>+</a>;
  }

  // Use the .addTrack() method to add this.props.track to the playlist.
  addTrack() {
    this.props.onAdd(this.props.track);
  }

  removeTrack() {
    this.props.onRemove(this.props.track);
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{/* track name will go here */}</h3>
          <p>{/* track artist will go here */} | {/* track album will go here */}</p>
        </div>

        {this.renderAction()}
      </div>
    );
  }
}

/* export the Track compoment to expose it or make it available to other parts
(i.e. components) of the Jammming app. */
export default Track;
