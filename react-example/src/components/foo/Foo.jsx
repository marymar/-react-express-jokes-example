import React from 'react';
import PropTypes from 'prop-types';

const Foo = ({name}) => {
  return (
    <div className="foo">{name}</div>
  );
}

Foo.PropTypes = {
  name: PropTypes.string.isRequired
}

export default Foo;
