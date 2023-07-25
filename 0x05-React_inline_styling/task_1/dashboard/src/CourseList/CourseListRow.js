import React from 'react';
import PropTypes from 'prop-types';

const rowStyle = {backgroundColor: '#f5f5f5ab'}
const headerStyle = {backgroundColor: '#deb5b545'}

export default class CourseListRow extends React.Component {
    static propTypes = {
        isHeader: PropTypes.bool,
        textFirstCell: PropTypes.string.isRequired,
        textSecondCell: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ])
    }

    static defaultProps = {
        isHeader: false,
        textSecondCell: null
    }

    render() {
        if (this.props.isHeader) {
            if (this.props.textSecondCell === null) {
                return (
                    <tr style={headerStyle}>
                        <th colSpan={2}>{this.props.textFirstCell}</th>
                    </tr>
                )
            }
            return (
                <tr style={headerStyle}>
                    <th>{this.props.textFirstCell}</th>
                    <th>{this.props.textSecondCell}</th>
                </tr>
            )
        }
        return (
            <tr style={rowStyle}>
                <td>{this.props.textFirstCell}</td>
                <td>{this.props.textSecondCell}</td>
            </tr>
        )
    }
}
