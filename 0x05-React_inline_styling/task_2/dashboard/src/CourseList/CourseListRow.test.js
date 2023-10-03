import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
    console.log('beforeAllApp');
    StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('CourseListRow', () => {
  it('renders one cell with colspan = 2 when textSecondCell does not exist', () => {
    const { getByRole } = render(<table><tbody><CourseListRow isHeader={true} textFirstCell="Header" /></tbody></table>);
    expect(getByRole('row')).toHaveTextContent('Header');
    expect(getByRole('columnheader')).toHaveAttribute('colspan', '2');
  });

  it('renders two cells when textSecondCell is present', () => {
    const { getByRole } = render(<table><tbody><CourseListRow isHeader={true} textFirstCell="Header" textSecondCell="Header 2" /></tbody></table>);
    expect(getByRole('row')).toHaveTextContent('Header');
    expect(getByRole('row')).toHaveTextContent('Header 2');
  });

  it('renders correctly two td elements within a tr element', () => {
    const { getByRole } = render(<table><tbody><CourseListRow isHeader={false} textFirstCell="Data 1" textSecondCell="Data 2" /></tbody></table>);
    expect(getByRole('row')).toHaveTextContent('Data 1');
    expect(getByRole('row')).toHaveTextContent('Data 2');
  });
});
