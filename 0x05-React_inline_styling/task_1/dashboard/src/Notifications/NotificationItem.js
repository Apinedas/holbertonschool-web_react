import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    default: {
        color: 'blue',
    },
    urgent: {
        color: 'red',
    },
})

export default class NotificationItem extends React.PureComponent {
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
                    <li onClick={this.props.markAsRead} className={css(styles[this.props.type])} dangerouslySetInnerHTML={this.props.html}></li>
                </>
            );
        }
        return (
            <>
                <li onClick={this.props.markAsRead} className={css(styles[this.props.type])}>{this.props.value}</li>
            </>
        )
    }
}
