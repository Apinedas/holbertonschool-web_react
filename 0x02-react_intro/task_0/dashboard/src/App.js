import hbtn_logo from './holberton-logo.jpg';
import './App.css';

function App() {
  return (
    <>
      <div className='App-header'>
        <img src={hbtn_logo} alt="Hbtn logo" width="200px" height="200px"></img>
        <h1>School dashboard</h1>
      </div>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
      </div>
      <div className='App-footer'>
        <p>Copyright 2020 - Holberton School</p>
      </div>
    </>
  );
}

export default App;
