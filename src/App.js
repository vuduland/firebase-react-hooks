import React from 'react';
import './App.css';

import firebase from './firebase';

firebase.firestore().collection('times').add({
	title: "Rubik's Cube",
	time_seconds: 45,
});
function App() {
	return (
		<div className='App'>
			<h1>Just Clock It</h1>
		</div>
	);
}

export default App;
