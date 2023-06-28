import './App.css';
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
        <Notifications />
        <Header />
        <CourseList />
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
