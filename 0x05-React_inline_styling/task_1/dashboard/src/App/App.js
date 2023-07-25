import { StyleSheet, css } from 'aphrodite';
import { getLatestNotification } from "../utils/utils";
import PropTypes from 'prop-types';
import Header from '../Header/Header'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'
import Notifications from '../Notifications/Notifications'
import CourseList from '../CourseList/CourseList'
import BodySection from '../BodySection/BodySection'
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import React from 'react';

const appFont = StyleSheet.create({
  fontFamily: ['Times New Roman', 'Times', 'serif']
})

export default class App extends React.Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func
  }

  static defaultProps = {
    isLoggedIn: false,
    logOut: function () {}
  }

  componentDidMount = () => {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
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
        <div className={css(appFont.fontFamily)}>
          <Notifications />
          <Header />
          <BodySectionWithMarginBottom title={ 'Log in to continue' }>
            <Login />
          </BodySectionWithMarginBottom>
          <BodySection title={ 'News from the School' }>
            <p>Holberton Colombia News here!.</p>
          </BodySection>
          <Footer />
        </div>
      )
    }
    return (
      <div className={css(appFont.fontFamily)}>
        <Notifications displayDrawer={true} listNotifications={notificationsArray} />
        <Header />
        <BodySectionWithMarginBottom title={ 'Course List' }>
          <CourseList listCourses={ coursesArray } />
        </BodySectionWithMarginBottom>
        <BodySection title={ 'News from the School' }>
            <p>Holberton Colombia News here!.</p>
          </BodySection>
        <Footer />
      </div>
    )
  }
}
