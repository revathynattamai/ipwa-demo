import React from 'react';
import App from '../../../../../src/client/components/App/App';
import renderer from 'react-test-renderer';

test('App -> render', () => {
  const component = renderer.create(
    <App />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
