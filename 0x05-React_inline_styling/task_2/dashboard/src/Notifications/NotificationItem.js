import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    blue: {
        color: 'blue',
    },
    red: {
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
        const className = css(
            this.props.type === 'default' ? styles.blue : styles.red
        );
        if (this.props.html) {
            return (
                <>
                    <li onClick={this.props.markAsRead} className={className} dangerouslySetInnerHTML={this.props.html}></li>
                </>
            );
        }
        return (
            <>
                <li onClick={this.props.markAsRead} className={className}>{this.props.value}</li>
            </>
        )
    }
}
