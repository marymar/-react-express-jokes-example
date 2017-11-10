import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Joke from './Joke';

describe('Joke', () => {
  it('should render Joke', () => {
    const div = document.createElement('div');

    ReactDOM.render(
        <Joke />,
      div
    );
  })

});

