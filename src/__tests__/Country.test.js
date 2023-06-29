import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import Country from '../components/Country/Country';

describe('Country component', () => {
  test('renders correctly', () => {
    const component = renderer.create(
      <Provider store={store}>
        <Router>
          <Country name="test" number={5} vector={null} cities={[]} />
        </Router>
      </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
