import React from 'react';
import Home from '../home';
import renderer from 'react-test-renderer';

test('It works', () => {
  const component = renderer.create(
    <Home />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})