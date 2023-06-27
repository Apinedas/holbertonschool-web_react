import React from "react";

export default function NotificationItem({ type, html, value }) {
    if (html) {
        return (
            <li data-notification-type={type} dangerouslySetInnerHTML={{__html: html}}></li>
        );
    }
    return (
        <li data-notification-type={type}>{value}</li>
    )
}
