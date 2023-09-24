import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import Header from './Header';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('Header component', () => {
  it('renders without crashing', () => {
    render(<Header />);
  });

  it('renders img and h1 tags', () => {
    const { getByRole } = render(<Header />);
    const image = getByRole('img');
    const heading = getByRole('heading', { level: 1 });

    expect(image).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
  });
});
