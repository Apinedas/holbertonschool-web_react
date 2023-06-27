import './Login.css'

export default function Login() {
    return (
        <>
          <div className='App-body'>
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
