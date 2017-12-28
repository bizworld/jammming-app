import React from 'react';
import './Track.css'; // from the same folder, ./, import the Track.css file



class Track extends React.Component {

  /* A renderAction() method that displays a - anchor tag if the isRemoval
  property is true, and a + anchor tag if the isRemoval property is false. Set
  the class name (i.e. className) to Track-action. */
  renderAction() { // using ternary operator
    return this.props.isRemoval ? <a className="Track-action" onClick={this.removeTrack}>-</a> :
                                  <a className="Track-action" onClick={this.addTrack}>+</a>;
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{/* track name will go here */}</h3>
          <p>{/* track artist will go here */} | {/* track album will go here */}</p>
        </div>
        <a className="Track-action">{/* + or - will go here */}</a>
      </div>
    );
  }
}

/* export the Track compoment to expose it or make it available to other parts
(i.e. components) of the Jammming app. */
export default Track;
