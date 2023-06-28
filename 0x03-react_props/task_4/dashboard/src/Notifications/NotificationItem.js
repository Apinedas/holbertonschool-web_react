import React from "react";
import PropTypes from "prop-types";

class ClassNotificationItem extends React.Component {
    static propTypes = {
        html: PropTypes.exact({
            __html: PropTypes.string
        }),
        type: PropTypes.string.isRequired,
        value: PropTypes.string
    }

    static defaultProps = {
        type: "default"
    }
    render() {
        if (this.props.html) {
            return (
                <li data-notification-type={this.props.type} dangerouslySetInnerHTML={this.props.html}></li>
            );
        }
        return (
            <li data-notification-type={this.props.type}>{this.props.value}</li>
        )
    }
}

export default function NotificationItem({ type, html, value }) {
    <ClassNotificationItem html={{__html: html}} type={type} value={value} />
}
