import hbtn_logo from '../assets/holberton-logo.jpg';
import './Header.css'

export default function Header () {
    return (
        <div className='App-header'>
          <img src={hbtn_logo} alt="Hbtn logo" width="200px" height="200px"></img>
          <h1>School dashboard</h1>
        </div>
    )
}
