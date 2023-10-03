import hbtn_logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  AppHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottom: '2.5px red solid',
  },
  AppHeaderH1: {
    color: 'red',
  },
})

export default function Header () {
    return (
        <div className={css(styles.AppHeader)}>
          <img src={hbtn_logo} alt="Hbtn logo" width="200px" height="200px"></img>
          <h1 className={css(styles.AppHeaderH1)}>School dashboard</h1>
        </div>
    )
}
