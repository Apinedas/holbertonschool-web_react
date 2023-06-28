import { getLatestNotification } from "../utils/utils";
import React from "react";
import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem";
import close_icon from '../assets/close-icon.png'
import './Notifications.css'

class ClassNotifications extends React.Component {
    static propTypes = {
        displayDrawer: PropTypes.bool
    }

    static defaultProps = {
        displayDrawer: false
    }

    render() {
        if (this.props.displayDrawer) {
            return (
                <>
                    <div className="menuItem">
                        <p>Your notifications</p>
                    </div>
                    <div className="Notifications">
                        <button style={{position: "absolute", top: 5, right: 0, backgroundColor: "white", border: "none", cursor: "pointer"}} aria-label="Close" onClick={() => console.log("Close button has been clicked")}>
                            <img alt="Close icon" src={close_icon} width="20px" height="20px"></img>
                        </button>
                        <p>Here is the list of notifications</p>
                        <ul>
                            <NotificationItem type={"default"} value={"New course available"} />
                            <NotificationItem type={"urgent"} value={"New resume available"} />
                            <NotificationItem type={"urgent"} html={getLatestNotification()} />
                        </ul>
                    </div>
                </>
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

export default function Notifications({ displayDrawer }) {
    return (
        <ClassNotifications displayDrawer={displayDrawer} />
    )
}
