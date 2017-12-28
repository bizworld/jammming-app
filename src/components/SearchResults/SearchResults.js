import React from 'react'; // import the React variable from the react pkg
import './SearchResults.css'; // import the corresponding CSS code from the same folder, ./
import TrackList from '../TrackList/TrackList.js'; // OR '../TrackList/TrackList'


class SearchResults extends React.Component {

  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList tracks={this.props.searchResults} /> {/* Pass the search results from the SearchResults component to the TrackList component as a prop, tracks. */}
      </div>
    );
  }
}


export default SearchResults;
