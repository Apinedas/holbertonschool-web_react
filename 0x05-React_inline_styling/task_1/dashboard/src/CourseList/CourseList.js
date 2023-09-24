import React from "react";
import CourseListRow from "./CourseListRow";
import CourseShape from "./CourseShape";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
    CourseList: {
        marginTop: '2.5rem',
        fontSize: 'large',
        height: '25rem',
    },
    table: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '75%',
        border: '1px solid black',
    },
    thead: {
        backgroundColor: '#f1f1f1',
    },
    td: {
        border: '1px solid #ddd',
        padding: '8px',
        textAlign: 'center',
        verticalAlign: 'middle',
    },
});

export default class CourseList extends React.Component {

    static propTypes = {
        listCourses: PropTypes.arrayOf(CourseShape)
    }

    static defaultProps = {
        listCourses: []
    }
    render() {
        if (this.props.listCourses.length === 0) {
            return (
                <div className={css(styles.CourseList)}>
                    <table id="CourseList" className={css(styles.table)}>
                        <thead className={css(styles.thead)}>
                            <CourseListRow textFirstCell={"Available courses"} isHeader={true} />
                            <CourseListRow textFirstCell={"Course name"} textSecondCell={"Credit"} isHeader={true} />
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={2} className={css(styles.td)}>No course available yet</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        }
        return (
            <div className="CourseList">
                <table id="CourseList">
                    <thead>
                        <CourseListRow textFirstCell={"Available courses"} isHeader={true} />
                        <CourseListRow textFirstCell={"Course name"} textSecondCell={"Credit"} isHeader={true} />
                    </thead>
                    <tbody>
                        {this.props.listCourses.map(course => (
                            <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} isHeader={false} />
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
