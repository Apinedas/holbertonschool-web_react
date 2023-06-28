import React from 'react';
import { render } from '@testing-library/react';
import CourseList from './CourseList';

describe('CourseList', () => {
  it('renders CourseList component without crashing', () => {
    render(<CourseList />);
  });

  it('renders 5 different rows', () => {
    const { getAllByRole } = render(<CourseList />);
    const rows = getAllByRole('row');
    expect(rows.length).toBe(5);
  });
});
