import React from "react";
import PropTypes from "prop-types";

export default class ClassNotificationItem extends React.Component {
    static propTypes = {
        html: PropTypes.exact({
            __html: PropTypes.string
        }),
        type: PropTypes.string.isRequired,
        value: PropTypes.string,
        markAsRead: PropTypes.func
    }

    static defaultProps = {
        type: "default",
        markAsRead: () => {}
    }
    render() {
        if (this.props.html) {
            return (
                <>
                    <li onClick={this.props.markAsRead} data-notification-type={this.props.type} dangerouslySetInnerHTML={this.props.html}></li>
                </>
            );
        }
        return (
            <>
                <li onClick={this.props.markAsRead} data-notification-type={this.props.type}>{this.props.value}</li>
            </>
        )
    }
}
