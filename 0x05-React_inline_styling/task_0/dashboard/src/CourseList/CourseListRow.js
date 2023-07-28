import React from 'react';
import PropTypes from 'prop-types';

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

        const headerStyle = {backgroundColor: '#deb5b545'}
        const cellStyle = {backgroundColor: '#deb5b545'}

        if (this.props.isHeader) {
            if (this.props.textSecondCell === null) {
                return (
                    <tr>
                        <th colSpan={2} style={{backgroundColor: '#deb5b545'}}>{this.props.textFirstCell}</th>
                    </tr>
                )
            }
            return (
                <tr>
                    <th style={headerStyle}>{this.props.textFirstCell}</th>
                    <th style={headerStyle}>{this.props.textSecondCell}</th>
                </tr>
            )
        }
        return (
            <tr>
                <td style={cellStyle}>{this.props.textFirstCell}</td>
                <td style={cellStyle}>{this.props.textSecondCell}</td>
            </tr>
        )
    }
}
