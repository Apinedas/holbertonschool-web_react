import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import Notifications from './Notifications.js';

ReactDOM.render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>,
  document.getElementById('root-notifications')
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


