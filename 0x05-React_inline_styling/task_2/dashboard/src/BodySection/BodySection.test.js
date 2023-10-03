import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import BodySection from './BodySection';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
    console.log('beforeAllApp');
    StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test('renders h2 element with correct title and p element with correct children', () => {
  const title = 'test title';
  const children = 'test children node';

  const { getByRole, getByText } = render(
    <BodySection title={title}>
      <p>{children}</p>
    </BodySection>
  );

  const h2Element = getByRole('heading', { level: 2 });
  const pElement = getByText(children);

  expect(h2Element).toBeInTheDocument();
  expect(h2Element).toHaveTextContent(title);

  expect(pElement).toBeInTheDocument();
  expect(pElement).toHaveTextContent(children);
});
