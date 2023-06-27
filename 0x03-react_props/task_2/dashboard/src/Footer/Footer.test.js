import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import Footer from './Footer';

describe('Footer component', () => {
  it('renders without crashing', () => {
    render(<Footer />);
  });

  it('renders the text "Copyright"', () => {
    const { getByText } = render(<Footer />);
    const copyrightText = getByText(/copyright/i);

    expect(copyrightText).toBeInTheDocument();
  });
});
