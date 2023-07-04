import { render, screen } from '@testing-library/react'
import { getLatestNotification } from "../utils/utils";
import '@testing-library/jest-dom'
import Notifications from './Notifications'

test("Notifications renders right, and contains expected items with displayDrawer.", () => {
    render(<Notifications displayDrawer={true} />);
    const expectedElement = screen.getByText("Your notifications");
    expect(expectedElement).toBeInTheDocument();
    const expectedP = screen.getByText("No new notification for now");
    expect(expectedP).toBeInTheDocument();
})

test("Notifications renders right, and contains expected items without displayDrawer.", () => {
    const { container } = render(<Notifications />);
    const list = container.getElementsByTagName("li");
    const expectedElement = container.querySelector("ul");
    expect(list.length).toBe(0);
    expect(expectedElement).toBeNull();
})

test("Notifications renders correctly with an empty listNotifications array.", () => {
    const { container, queryByText } = render(<Notifications displayDrawer={true} listNotifications={[]} />);
    const list = container.getElementsByTagName("li");
    const notExpectedElement = queryByText("Here is the list of notifications");
    const expectedElement = queryByText("No new notification for now");
    expect(list.length).toBe(0);
    expect(notExpectedElement).toBeNull();
    expect(expectedElement).toBeInTheDocument();
})

test("Notifications renders correctly with a non-empty listNotifications array.", () => {
    const notificationsArray = [{
        id: 1,
        type: 'default',
        value: 'New course available',
    }, {
        id: 2,
        type: 'urgent',
        value: 'New resume available'
    }, {
        id: 3,
        type: 'urgent',
        html: {__html: getLatestNotification()}
    }];
    const { container, queryByText } = render(<Notifications displayDrawer={true} listNotifications={notificationsArray} />);
    const list = container.getElementsByTagName("li");
    const expectedElement = queryByText("Here is the list of notifications");
    const notExpectedElement = queryByText("No new notification for now");
    expect(list.length).toBe(3);
    expect(expectedElement).toBeInTheDocument();
    expect(notExpectedElement).toBeNull();
})
