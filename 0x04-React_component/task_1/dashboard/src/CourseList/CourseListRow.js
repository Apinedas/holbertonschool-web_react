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
        if (this.props.isHeader) {
            if (this.props.textSecondCell === null) {
                return (
                    <tr>
                        <th colSpan={2}>{this.props.textFirstCell}</th>
                    </tr>
                )
            }
            return (
                <tr>
                    <th>{this.props.textFirstCell}</th>
                    <th>{this.props.textSecondCell}</th>
                </tr>
            )
        }
        return (
            <tr>
                <td>{this.props.textFirstCell}</td>
                <td>{this.props.textSecondCell}</td>
            </tr>
        )
    }
}
