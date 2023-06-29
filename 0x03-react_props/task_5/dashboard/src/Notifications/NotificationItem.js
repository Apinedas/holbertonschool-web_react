import React from "react";
import PropTypes from "prop-types";

export default class ClassNotificationItem extends React.Component {
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
                <>
                    <li data-notification-type={this.props.type} dangerouslySetInnerHTML={this.props.html}></li>
                </>
            );
        }
        return (
            <>
                <li data-notification-type={this.props.type}>{this.props.value}</li>
            </>
        )
    }
}
