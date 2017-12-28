import React from 'react';
import './Track.css'; // from the same folder, ./, import the Track.css file



class Track extends React.Component {

  /* A renderAction() method that displays a - anchor tag if the isRemoval
  property is true, and a + anchor tag if the isRemoval property is false. Set
  the class name to Track-action. */
  renderAction() { // not sure about this!
    //return isRemoval ? <a className="Track-action"> + </a> : <a className="Track-action"> - </a>;
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
