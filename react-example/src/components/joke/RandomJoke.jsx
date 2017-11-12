import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { findJoke } from '../../actions/joke.action';
import './joke.css';

class RandomJoke extends Component{
  componentDidMount() {
    this.props.findJoke();
  }

  render() {
    const { joke } = this.props;
    return (
      <div className="joke">
        <span className="joke__text">{joke}</span>
      </div>
    );
  }
}

RandomJoke.PropTypes = {
  joke: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
  return {
    joke: state.jokesState.joke
  }
}

const mapDispatchToProps = {
    findJoke: findJoke
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomJoke);
