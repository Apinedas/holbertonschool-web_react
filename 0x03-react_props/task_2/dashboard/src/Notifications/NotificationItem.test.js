import '@testing-library/jest-dom';
import React from "react";
import { render } from "@testing-library/react";
import NotificationItem from "./NotificationItem";

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
    expect(listItemElement.getAttribute("data-notification-type")).toBe(type);
  });

  test("renders correct HTML when html prop is passed", () => {
    const { getByText } = render(<NotificationItem html={"<b>test</b>"} />);
    const listItemElement = getByText("test");
    expect(listItemElement).toBeInTheDocument();
    expect(listItemElement.nodeName).toBe('B');
  });
});
