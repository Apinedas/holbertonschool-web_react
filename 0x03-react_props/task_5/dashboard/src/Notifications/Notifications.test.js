import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Notifications from './Notifications'

test("Notifications renders right, and contains expected items with displayDrawer.", () => {
    const { container } = render(<Notifications displayDrawer={true} />);
    const list = container.getElementsByTagName("li");
    const expectedElement = screen.getByText("Here is the list of notifications");
    expect(list.length).toBe(3);
    expect(expectedElement).toBeInTheDocument();
})

test("Notifications renders right, and contains expected items without displayDrawer.", () => {
    const { container } = render(<Notifications />);
    const list = container.getElementsByTagName("li");
    const expectedElement = container.querySelector("ul");
    expect(list.length).toBe(0);
    expect(expectedElement).toBeNull();
})
