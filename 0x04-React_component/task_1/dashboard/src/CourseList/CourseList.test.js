import React from 'react';
import { render } from '@testing-library/react';
import CourseList from './CourseList';
import '@testing-library/jest-dom';

describe('CourseList', () => {
  it('renders CourseList component without crashing', () => {
    render(<CourseList />);
  });

  it('renders 5 different rows', () => {
    const { getAllByRole } = render(<CourseList />);
    const rows = getAllByRole('row');
    expect(rows.length).toBe(3);
  });

  it('renders correctly when listCourses is empty', () => {
    const { getByText } = render(<CourseList listCourses={[]} />);
    const noCourseElement = getByText('No course available yet');
    expect(noCourseElement).toBeInTheDocument();
  });

  it('renders correctly when listCourses is provided', () => {
    const coursesArray = [
      {
        id: 1,
        name: 'ES6',
        credit: 60
      },
      {
        id: 2,
        name: 'Webpack',
        credit: 20
      },
      {
        id: 3,
        name: 'React',
        credit: 40
      }
    ];
    const { getByText } = render(<CourseList listCourses={coursesArray} />);
    const courseElements = coursesArray.map((course) =>
      getByText(course.name)
    );
    courseElements.forEach((element) => {
      expect(element).toBeInTheDocument();
    });
  });
});
