import React from 'react';
import { render } from '@testing-library/react';
import Login from './Login';

describe('Login component', () => {
  it('renders without crashing', () => {
    render(<Login />);
  });

  it('renders 2 input tags and 2 label tags', () => {
    const { getAllByRole, getAllByLabelText } = render(<Login />);
    const inputElements = getAllByRole('textbox');
    const labelEmail = getAllByLabelText(/email/i);
    const labelPwd = getAllByLabelText(/email/i);

    expect(inputElements.length).toBe(2);
    expect(labelEmail.length).toBe(1);
    expect(labelPwd.length).toBe(1);
  });
});
