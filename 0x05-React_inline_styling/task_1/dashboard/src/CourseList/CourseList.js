import { StyleSheet, css } from "aphrodite";
import React from "react";
import CourseListRow from "./CourseListRow";
import CourseShape from "./CourseShape";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
    courseListClass: {
        marginTop: "2.5rem",
        fontSize: "large",
        height: "25rem"
    },
    courseListId: {
        marginLeft: "auto",
        marginRight: "auto",
        width: "75%",
        border: "1px solid black"
    },
    courseListIdThead: {
        background: "#f1f1f1"
    },
    courseListIdThTd: {
        border: "1px solid #ddd",
        padding: "8px"
    },
    courseListIdTd: {
        textAlign: "center",
        verticalAlign: "middle",
    }
})

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
                <div className={css(styles.courseListClass)}>
                    <table className={css(styles.courseListId)}>
                        <thead className={css(styles.courseListIdThead)}>
                            <CourseListRow textFirstCell={"Available courses"} isHeader={true} />
                            <CourseListRow textFirstCell={"Course name"} textSecondCell={"Credit"} isHeader={true} />
                        </thead>
                        <tbody>
                            <tr>
                                <td className={css(styles.courseListIdTd, styles.c)} colSpan={2}>No course available yet</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        }
        return (
            <div className={css(styles.courseListClass)}>
                <table className={css(styles.courseListId)}>
                    <thead>
                        <CourseListRow className={css(styles.courseListIdThTd)} textFirstCell={"Available courses"} isHeader={true} />
                        <CourseListRow className={css(styles.courseListIdThTd)} textFirstCell={"Course name"} textSecondCell={"Credit"} isHeader={true} />
                    </thead>
                    <tbody>
                        {this.props.listCourses.map(course => (
                            <CourseListRow className={css(styles.courseListIdTd)} key={course.id} textFirstCell={course.name} textSecondCell={course.credit} isHeader={false} />
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
