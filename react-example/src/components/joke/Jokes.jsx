import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { findAll } from '../../actions/joke.action';

import Joke from '../joke/Joke';

class ChuckNorrisList extends Component {
  componentDidMount() {
    this.props.findAll();
  }

  render() {
    let index = 0;
    const { jokes } = this.props;
    return (
      <ul>
        {
          jokes.map(joke => {
            return (
              <li key={`joke-item_${++index}`}>
                <Joke key={`joke_${++index}`} joke={joke.joke} />
              </li>
            )
          })
        }
      </ul>
    );
  }
}


ChuckNorrisList.propTypes = {
  jokes: PropTypes.array.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    jokes: state.jokes
  };
};

const mapDispatchToProps = {
  findAll: findAll
}

export default connect(mapStateToProps, mapDispatchToProps)(ChuckNorrisList);
