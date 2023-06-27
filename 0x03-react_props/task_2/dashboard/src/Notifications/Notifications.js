import React from "react";
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";
import close_icon from '../assets/close-icon.png'
import './Notifications.css'

export default function Notifications() {
    return (
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
    )
}
