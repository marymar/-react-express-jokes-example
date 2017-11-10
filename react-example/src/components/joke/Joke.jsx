import React from 'react';
import PropTypes from 'prop-types';

const Joke = ({ joke }) => {
  return (
    <div className="joke">{joke}</div>
  );
}

Joke.PropTypes = {
  joke: PropTypes.string.isRequired
}

export default Joke;
