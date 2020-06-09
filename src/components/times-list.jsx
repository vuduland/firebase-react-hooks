import React, { useState, useEffect } from 'react';

import firebase from '../firebase';

const SORT_OPTIONS = {
	TIME_ASC: { column: 'time_seconds', direction: 'asc' },
	TIME_DESC: { column: 'time_seconds', direction: 'desc' },
	TITLE_ASC: { column: 'title', direction: 'asc' },
	TITLE_DESC: { column: 'title', direction: 'desc' },
};

function useTimes() {
	const [times, setTimes] = useState([]);

	useEffect(() => {
		// todo: we need an unsubscribe callback()
		const unsubscribe = firebase;
		firebase
			.firestore()
			.collection('times')
			.onSnapshot((snapshot) => {
				const newTimes = snapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(), // spread operator merges doc.id with doc.data
				}));

				setTimes(newTimes);
			});

		return () => unsubscribe();
		// the above cuts the active firestore 'subscription', i.e. the connection to the firestore database, once the component is unmounted
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
				{times.map((time) => (
					<li key={time.id}>
						<div className='time-entry'>
							{time.title}
							<code className='time'>{time.time_seconds} seconds</code>
						</div>
					</li>
				))}
			</ol>
		</div>
	);
};

export default TimesList;
