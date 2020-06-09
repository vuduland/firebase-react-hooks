import React, { useState, useEffect } from 'react';

import firebase from '../firebase';

function useTimes() {
	const [times, setTimes] = useState([]);

	useEffect(() => {
		firebase
			.firestore()
			.collection('times')
			.onSnapshot((snapshot) => {
				debugger;
				return snapshot; // inspect page --> Sources --> open times-list from left side 3 dots --> type in snapshot, snapshot.docs[0].id, or snapshot.docs[0].data() to get information about what is in the database
			});
	}, []);
	return times;
}

const TimesList = () => {
	const times = useTimes();

	return (
		<div>
			<h2>Times List</h2>
			<div>
				<label>Sort By:</label>{' '}
				<select>
					<option>Time (fastest first)</option>
					<option>Time (slowest first)</option>
					<option disabled>---</option>
					<option>Title (a-z)</option>
					<option>Title (z-a)</option>
				</select>
			</div>
			<ol>
				<li>
					<div className='time-entry'>
						My Amazing Entry Title
						<code className='time'> 18 seconds</code>
					</div>
				</li>
				<li>
					<div className='time-entry'>
						My Amazing Entry Title
						<code className='time'> 18 seconds</code>
					</div>
				</li>
				<li>
					<div className='time-entry'>
						My Amazing Entry Title
						<code className='time'> 18 seconds</code>
					</div>
				</li>
				<li>
					<div className='time-entry'>
						My Amazing Entry Title
						<code className='time'> 18 seconds</code>
					</div>
				</li>
			</ol>
		</div>
	);
};

export default TimesList;
