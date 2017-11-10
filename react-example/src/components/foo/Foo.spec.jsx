import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Foo from './Foo';

describe('Foo', () => {
  it('should render Foo', () => {
    const div = document.createElement('div');

    ReactDOM.render(
        <Foo />,
      div
    );
  })

  it('should contain the text "foo is great"', () => {
    const foo = mount(
      <Foo name="foo is great" />
    );
    expect(foo.text()).toBe('foo is great');
  });
});

