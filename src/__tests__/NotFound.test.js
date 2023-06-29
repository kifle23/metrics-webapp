import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';

describe('NotFound page', () => {
  test('renders without errors', () => {
    const component = renderer.create(
      <Router>
        <NotFound />
      </Router>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders the "Page not found!" element', () => {
    render(
      <Router>
        <NotFound />
      </Router>
    );
    const notFoundElement = screen.getByText('Page not found!');
    expect(notFoundElement).toBeInTheDocument();
  });
});
