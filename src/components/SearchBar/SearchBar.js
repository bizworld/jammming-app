import React from 'react';
import './SearchBar.css'; // import the SearchBar.css file from the same directory, ./


class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    // initial state of search term
    this.state = { term: '' };

    // Bind the current value of `this` to .search()
    this.search = this.search.bind(this);

    // Bind the current value of `this` to this.handleTermChange.
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  /* a method, search, that passes the state of the term to this.props.onSearch */
  search() {
    this.props.onSearch(this.state.term); // state of the term to this? correct?
  }

  handleTermChange(event) {
    this.setState({
      term: event.target.value
    });
  }

  render() {
    return (
      <div className="SearchBar"> {/* JSX elements start here */}
        <input placeholder="Enter A Song, Album, or Artist"
               onChange={this.handleTermChange} />
        <a onClick={this.search}>SEARCH</a>
      </div>
    );
  }
}

/* The SearchBar component class is exported to expose it or make available to
other components of the Jammming app. */
export default SearchBar;
