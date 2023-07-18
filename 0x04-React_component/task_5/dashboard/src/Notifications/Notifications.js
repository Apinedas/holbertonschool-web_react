import React from "react";
import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";
import close_icon from '../assets/close-icon.png'
import './Notifications.css'

export default class Notifications extends React.Component {
    constructor(props) {
        super(props);
        this.markAsRead = this.markAsRead.bind(this);
    }

    static propTypes = {
        displayDrawer: PropTypes.bool,
        listNotifications: PropTypes.arrayOf(NotificationItemShape)
    }

    static defaultProps = {
        displayDrawer: false,
        listNotifications: []
    }

    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`);
    }

    render() {
        if (this.props.displayDrawer) {
            if (!this.props.listNotifications || this.props.listNotifications.length === 0) {
                return (
                    <div className="NotificationSection">
                        <div className="menuItem">
                            <p>Your notifications</p>
                        </div>
                        <div className="Notifications">
                            <button style={{ position: "absolute", top: 10, right: 0, backgroundColor: "white", border: "none", cursor: "pointer" }} aria-label="Close" onClick={() => console.log("Close button has been clicked")}>
                                <img alt="Close icon" src={close_icon} width="20px" height="20px"></img>
                            </button>
                            <p>No new notification for now</p>
                        </div>
                    </div>
                )
            }
            return (
                <div className="NotificationSection">
                    <div className="menuItem">
                        <p>Your notifications</p>
                    </div>
                    <div className="Notifications">
                        <button style={{ position: "absolute", top: 10, right: 0, backgroundColor: "white", border: "none", cursor: "pointer" }} aria-label="Close" onClick={() => console.log("Close button has been clicked")}>
                            <img alt="Close icon" src={close_icon} width="20px" height="20px"></img>
                        </button>
                        <p>Here is the list of notifications</p>
                        <ul>
                            {this.props.listNotifications.map(notification => (
                                <NotificationItem key={notification.id} type={notification.type} value={notification.value} html={notification.html} markAsRead={() => this.markAsRead(notification.id)} />
                            ))}
                        </ul>
                    </div>
                </div>
            )
        }
        return (
            <>
                <div className="menuItem">
                    <p>Your notifications</p>
                </div>
            </>
        )
    }
}
