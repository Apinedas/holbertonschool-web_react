import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  AppBody: {
    margin: '2.5rem',
    fontSize: 'large',
    height: '25rem',
  }
})

export default function Login() {
    return (
        <>
          <div className={css(styles.AppBody)}>
            <p>Login to access the full dashboard</p>
            <label htmlFor='email'>Email: </label>
            <input type="text" name='email' id='email' style={{margin: "10px"}}></input>
            <label htmlFor="password">Password: </label>
            <input type='text' name='password' id='password' style={{margin: "10px"}}></input>
            <button>OK</button>
          </div>
        </>
    )
}
