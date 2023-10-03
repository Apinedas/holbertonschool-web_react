import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
    console.log('beforeAllApp');
    StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('BodySectionWithMarginBottom', () => {
  test('rendering should render BodySection with correct props', () => {
    const title = 'Test Title';
    const children = 'Test Children';

    const { getByText } = render(
      <BodySectionWithMarginBottom title={title}>
        {children}
      </BodySectionWithMarginBottom>
    );

    const bodySection = getByText(title);

    expect(bodySection).toBeInTheDocument();
    expect(bodySection.textContent).toBe(title);

    const childNode = getByText(children);
    expect(childNode).toBeInTheDocument();
    expect(childNode.textContent).toBe(title + children);
  });
});
