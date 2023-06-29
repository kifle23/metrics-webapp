import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import Heading from '../components/Heading/Heading';

describe('Heading component', () => {
  test('renders correctly', () => {
    const component = renderer.create(
      <Provider store={store}>
        <Router>
          <Heading title="weather" />
        </Router>
      </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
