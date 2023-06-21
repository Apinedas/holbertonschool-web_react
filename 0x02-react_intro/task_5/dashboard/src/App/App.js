import hbtn_logo from '../assets/holberton-logo.jpg';
import { getFullYear, getFooterCopy } from '../utils/utils';
import './App.css';

export default function App() {
  return (
    <>
      <div className='App-header'>
        <img src={hbtn_logo} alt="Hbtn logo" width="200px" height="200px"></img>
        <h1>School dashboard</h1>
      </div>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <label htmlFor='email'>Email: </label>
        <input type="text" name='email' id='email' style={{margin: "10px"}}></input>
        <label htmlFor="password">Password: </label>
        <input type='text' name='password' id='password' style={{margin: "10px"}}></input>
        <button>OK</button>
      </div>
      <div className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </>
  );
}
