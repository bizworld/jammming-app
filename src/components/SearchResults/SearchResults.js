import React from 'react'; // import the React variable from the react pkg
import './SearchResults.css'; // import the corresponding CSS code from the same folder, ./
import TrackList from '../TrackList/TrackList.js'; // OR '../TrackList/TrackList'


class SearchResults extends React.Component {

  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        {/* Add a TrackList component */}
        <TrackList />
      </div>
    );
  }
}


export default SearchResults;
