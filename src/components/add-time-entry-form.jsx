import React, { useState } from 'react';

import firebase from '../firebase';

const AddTimeEntryForm = () => {
	const [title, setTitle] = useState('');
	const [time, setTime] = useState('');

	function onSubmit(e) {
		e.preventDefault();
		// this prevents the page from automatically refreshing.
		// the below firebase functions update and add the inputs into the firestore DB
		firebase
			.firestore()
			.collection('times')
			.add({
				title,
				time_seconds: parseInt(time),
			})
			.then(() => {
				// this resets the form
				setTitle('');
				setTime('');
			});
	}

	return (
		<form onSubmit={onSubmit}>
			<h4>Add Time Entry</h4>
			<div>
				<label>Title</label>
				<input
					type='text'
					value={title}
					onChange={(e) => setTitle(e.currentTarget.value)} // caches this value into the useState variable title
				/>
			</div>
			<div>
				<label>Time</label>
				<input
					type='number'
					value={time}
					onChange={(e) => setTime(e.currentTarget.value)} // caches this value into the useState variable time
				/>
			</div>
			<button>Add Time Entry</button>
		</form>
	);
};

export default AddTimeEntryForm;
