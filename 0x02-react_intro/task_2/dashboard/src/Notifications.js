import React from 'react';
import './Notifications.css';
import closeicon from './close-icon.png' 
import {getLatestNotification} from './utils.js'
export default function Notifications(){
    return(
        <div className='Notifications'>
            <button onClick={() => console.log('Close button has been clicked')}  aria-label="Close" style={{display: 'inline'}}><img height='16px' width="16px" alt='close' src={closeicon}></img></button>
            <p>Here is the list of notifications</p>
			<ul>
				<li data-priority="default">
					New course available
				</li>
				<li data-priority="urgent">
					New resume available
				</li>
				<li
					data-priority="urgent"
					dangerouslySetInnerHTML={{__html: getLatestNotification()}}
				>
				</li>
			</ul>
        </div>
    );
}