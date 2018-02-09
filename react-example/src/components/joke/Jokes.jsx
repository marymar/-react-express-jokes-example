import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findJokes } from '../../actions/joke.action';

import './jokes-list.css';

class ChuckNorrisList extends Component {
  componentDidMount() {
    this.props.findJokes();
  }

  render() {
    let index = 0;
    const { jokes } = this.props;
    return (
      <ul className="jokes-list">
        {
          jokes.map(joke => {
            return (
              <li className="jokes-list__item" key={`joke-item_${++index}`}>
                {joke.joke}
              </li>
            )
          })
        }
      </ul>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    jokes: state.jokesState.jokes
  };
};

const mapDispatchToProps = {
  findJokes: findJokes
}

export default connect(mapStateToProps, mapDispatchToProps)(ChuckNorrisList);
