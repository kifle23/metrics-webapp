import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header/Header';

describe('Header component', () => {
  test('renders without errors', () => {
    const component = renderer.create(
      <Router>
        <Header heading="test" previous="" />
      </Router>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders the heading element', () => {
    render(
      <Router>
        <Header heading="test" previous="" />
      </Router>,
    );
    const headingElement = screen.getByText('test');
    expect(headingElement).toBeInTheDocument();
  });
});
