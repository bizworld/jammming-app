import React from 'react';
import './SearchBar.css'; // import the SearchBar.css file from the same directory, ./


class SearchBar extends React.Component {

  /* a method, search, that passes the state of the term to this.props.onSearch */
  search() {
    this.props.onSearch(); // state of the term to this?
  }

  render() {
    return (
      <div className="SearchBar"> {/* JSX elements start here */}
        <input placeholder="Enter A Song, Album, or Artist" />
        <a>SEARCH</a>
      </div>
    );
  }
}

/* The SearchBar component class is exported to expose it or make available to
other components of the Jammming app. */
export default SearchBar;
