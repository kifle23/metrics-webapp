import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import City from '../components/City/City';

describe('City component test', () => {
  it('Renders City', () => {
    const country = renderer
      .create(
        <Provider store={store}>
          <Router>
            <City title="test" lat="3" long="3" />
          </Router>
        </Provider>
      )
      .toJSON();
    expect(country).toMatchSnapshot();
  });
});
