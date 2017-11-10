import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { findJoke } from '../../actions/joke.action';

class RandomJoke extends Component{
  componentDidMount() {
    this.props.findJoke();
  }

  render() {
    const { joke } = this.props;
    console.log(this.props);
    return (
      <div>{joke}</div>
    );
  }
}

RandomJoke.PropTypes = {
  joke: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    joke: state.jokesState.joke
  }
}

const mapDispatchToProps = {
    findJoke: findJoke
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomJoke);
