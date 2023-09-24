import '@testing-library/jest-dom';
import React from "react";
import { render } from "@testing-library/react";
import NotificationItem from "./NotificationItem";
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
    console.log('beforeAllApp');
    StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("NotificationItem", () => {
  test("renders without crashing", () => {
    render(<NotificationItem />);
  });

  test("renders correct HTML when type and value props are passed", () => {
    const type = "default";
    const value = "test";
    const { getByText } = render(<NotificationItem type={type} value={value} />);
    const listItemElement = getByText(value);
    expect(listItemElement).toBeInTheDocument();
  });

  test("renders correct HTML when html prop is passed", () => {
    const { getByText } = render(<NotificationItem html={{__html: "<b>test</b>"}} />);
    const listItemElement = getByText("test");
    expect(listItemElement).toBeInTheDocument();
    expect(listItemElement.nodeName).toBe('B');
  });

  test("markAsRead prop is called when clicked", () => {
    const markAsRead = jest.fn();
    const { getByText } = render(<NotificationItem markAsRead={markAsRead} value={ "test" }/>);
    const listItemElement = getByText("test");
    listItemElement.click();
    expect(markAsRead).toHaveBeenCalled();
  })
});
