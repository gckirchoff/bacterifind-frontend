import React from 'react';
import ReactDOM from 'react-dom';
import SearchButton from './../SearchButton';

import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import renderer from 'react-test-renderer';

afterEach(cleanup);
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders button correctly', () => {
  const { getByTestId } = render(<SearchButton finalCode={4000} />);
  expect(getByTestId('search-button')).toHaveTextContent('Search 4000');
});

it('renders button with alternative text', () => {
  const { getByTestId } = render(<SearchButton finalCode={54023} />);
  expect(getByTestId('search-button')).toHaveTextContent('Search 54023');
});

it('matches snapshot', () => {
  const tree = renderer.create(<SearchButton finalCode={40002} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('matches snapshot 2', () => {
  const tree = renderer.create(<SearchButton finalCode={40003} />).toJSON();
  expect(tree).toMatchSnapshot();
});
