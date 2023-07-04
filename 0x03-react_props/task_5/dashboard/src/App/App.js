import './App.css';
import { getLatestNotification } from "../utils/utils";
import PropTypes from 'prop-types';
import Header from '../Header/Header'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'
import Notifications from '../Notifications/Notifications'
import CourseList from '../CourseList/CourseList'
import React from 'react';

class ClassApp extends React.Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool
  }

  static defaultProps = {
    isLoggedIn: false
  }

  render() {
    const coursesArray = [{
      id: 1,
      name: 'ES6',
      credit: 60
    }, {
      id: 2,
      name: 'Webpack',
      credit: 20
    }, {
      id: 3,
      name: 'React',
      credit: 40
    }];

    const notificationsArray = [{
      id: 1,
      type: 'default',
      value: 'New course available',
    },  {
      id: 2,
      type: 'urgent',
      value: 'New resume available'
    }, {
      id: 3,
      type: 'urgent',
      html: {__html: getLatestNotification()}
    }]

    if (!this.props.isLoggedIn) {
      return (
        <>
          <Notifications />
          <Header />
          <Login />
          <Footer />
        </>
      )
    }
    return (
      <>
        <Notifications displayDrawer={true} listNotifications={notificationsArray} />
        <Header />
        <CourseList listCourses={coursesArray} />
        <Footer />
      </>
    )
  }
}
export default function App({ isLoggedIn }) {
  return (
    <ClassApp isLoggedIn={isLoggedIn}/>
  );
}
