import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { findJokes } from '../../actions/joke.action';
import './searchbar.css';

class Searchbar extends Component {

  render() {
    const { query, handleSearch } = this.props;

    return (
      <div className="searchbar">
        <input
          type="text"
          name="searchbar-field"
          value={query}
          placeholder="Search..."
          className="searchbar__field" />
        {query.trim() !== ''
          ? <button classNames="searchbar__button" onClick={handleSearch} />
          : null
        }
      </div>
    );
  }
}

Searchbar.PropTypes = {
  handleSearch: PropTypes.func.isRequired,
  query: PropTypes.string
};

const mapStateToProps = (state) => {
  return {
    query: state.searchState.query
  };
}

const mapDispatchToProps = {
  handleSearch: findJokes
}

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
