import React from "react";
import CourseListRow from "./CourseListRow";
import CourseShape from "./CourseShape";
import PropTypes from "prop-types";
import "./CourseList.css"

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
                <div className="CourseList">
                    <table id="CourseList">
                        <thead>
                            <CourseListRow textFirstCell={"Available courses"} isHeader={true} />
                            <CourseListRow textFirstCell={"Course name"} textSecondCell={"Credit"} isHeader={true} />
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={2}>No course available yet</td>
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
