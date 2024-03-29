import React from "react";
import { getLatestNotification } from "./utils";
import './Notifications.css'
import close_icon from './close-icon.png'

export default function Notifications() {
    return (
        <div className="Notifications">
            <button style={{position: "absolute", top: 5, right: 0, backgroundColor: "white", border: "none", cursor: "pointer"}} aria-label="Close" onClick={() => console.log("Close button has been clicked")}>
                <img alt="Close icon" src={close_icon} width="20px" height="20px"></img>
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent" dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
            </ul>
        </div>
    )
}
