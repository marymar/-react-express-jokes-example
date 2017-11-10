import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { findAll } from '../../actions/foo.actions';

import Foo from './Foo';

class FooList extends Component {
  componentDidMount() {
    this.props.findAll();
  }

  render() {
    let index = 0;
    const { foos } = this.props;
    return (
      <ul>
        {
          foos.map(foo => {
            return (
              <li key={`foo-item_${++index}`}>
                <Foo key={`foo_${++index}`} name={foo.name} />
              </li>
            )
          })
        }
      </ul>
    );
  }
}


FooList.propTypes = {
  foos: PropTypes.array.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    foos: state.foos
  };
};

const mapDispatchToProps = {
  findAll: findAll
}

export default connect(mapStateToProps, mapDispatchToProps)(FooList);
